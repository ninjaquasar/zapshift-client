import { useForm } from "react-hook-form";
import Divider from "../shared/Divider";
import calculateTotalDeliveryCost from "../../utils/calculateTotalDeliveryCost";
import { useLoaderData, useNavigate } from "react-router";
import apiClient from "../../services/apiClient";
import { toast } from "sonner";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const SendParcelForm = () => {
	// Import necessary functions and states from react-hook-form
	const {
		register,
		watch,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();
	// Fetch warehouses data
	const warehouses = useLoaderData() || [];
	// Watch some form input field's value (works as onChange or useRef)
	const parcelType = watch("parcel_type");
	const senderRegion = watch("sender_region");
	const receiverRegion = watch("receiver_region");
	// Set regions for select field in form
	const regions = [...new Set(warehouses.map((warehouse) => warehouse.region))];
	// Set & dynamically change sender's & receiver's warehouses/districts based on selected region
	const senderDistricts = senderRegion
		? warehouses
				.filter((warehouse) => warehouse.region === senderRegion)
				.map((warehouse) => warehouse.district)
		: [];
	const receiverDistricts = receiverRegion
		? warehouses
				.filter((warehouse) => warehouse.region === receiverRegion)
				.map((warehouse) => warehouse.district)
		: [];
	// Get currently logged-in user data
	const { user } = useAuth();
	// Use `Navigate` hook to navigate to a specific route
	const navigate = useNavigate();
	// Handle function for sending parcel or confirm booking
	const handleConfirmBooking = (data) => {
		// Destructure data to clean it
		const {
			parcel_name,
			parcel_type,
			parcel_weight,
			pickup_instructions,
			delivery_instructions,
			sender_address,
			sender_contact,
			sender_name,
			sender_region,
			sender_warehouse,
			receiver_address,
			receiver_contact,
			receiver_name,
			receiver_region,
			receiver_warehouse,
		} = data;
		// Calculate total delivery cost
		const deliveryCost = calculateTotalDeliveryCost(
			data.parcel_type,
			data.parcel_weight,
			data.sender_warehouse,
			data.receiver_warehouse,
		);
		// Generate parcel tracking-id
		const shortUUID = crypto.randomUUID().split("-")[0];
		const trackingId = `zp-${shortUUID}`;
		// Clean data and add extra necessary data
		const cleanedData = {
			tracking_id: trackingId,
			booked_at: new Date().toISOString(),
			booked_by: user.email,
			delivery: {
				cost: deliveryCost,
				status: "pending",
			},
			instructions: {
				pickup: pickup_instructions,
				delivery: delivery_instructions,
			},
			parcel: {
				name: parcel_name,
				type: parcel_type,
				...(parcel_type === "not document" && { weight: parseFloat(parcel_weight) }),
			},
			payment: {
				total_amount: deliveryCost,
				status: "unpaid",
			},
			sender: {
				name: sender_name,
				region: sender_region,
				warehouse: sender_warehouse,
				address: sender_address,
				contact: sender_contact,
			},
			receiver: {
				name: receiver_name,
				region: receiver_region,
				warehouse: receiver_warehouse,
				address: receiver_address,
				contact: receiver_contact,
			},
		};
		// Confirm before sending data to server/database
		Swal.fire({
			icon: "question",
			iconColor: "var(--color-primary)",
			title: "Confirm Booking",
			html: `
				<p><strong>Delivery Cost:</strong> ৳${cleanedData.delivery.cost}</p>
				<a href="/policies/payment" target="_blank" class="text-lime-700 hover:underline hover:underline-offset-2">See how delivery costs are calculated</a>
			`,
			showCancelButton: true,
			confirmButtonColor: "var(--color-success)",
			cancelButtonColor: "var(--color-error)",
			confirmButtonText: "Confirm Booking",
			cancelButtonText: "Go Back to Editing",
		}).then((result) => {
			// Send parcel data to server/database if confirmed
			if (result.isConfirmed) {
				apiClient
					.post("/parcels", cleanedData)
					.then((response) => {
						if (response.data?.insertedId) {
							toast.success("Your parcel is booked.");
							reset();
							navigate("/dashboard/my-parcels");
						} else
							toast.error(
								"We couldn't complete the booking. Please try one more time.",
							);
					})
					.catch((error) => {
						console.log(`${error.response?.statusText}: ${error.message}`);
						toast.error(
							"We couldn't process the booking. Please try again a bit later.",
						);
					});
			}
		});
	};
	return (
		// Send Parcel Form
		<form
			id="send-parcel-form"
			className="space-y-8"
			onSubmit={handleSubmit(handleConfirmBooking)}
		>
			{/* Document Type */}
			<div className="space-y-2">
				<div className="flex items-center gap-x-12">
					<div className="flex items-center gap-x-2">
						<input
							type="radio"
							value="document"
							className="radio radio-success"
							{...register("parcel_type", {
								required: "Parcel Type is required",
							})}
						/>
						<span className="font-semibold text-secondary cursor-default">
							Document
						</span>
					</div>
					<div className="flex items-center gap-x-2">
						<input
							type="radio"
							value="not document"
							className="radio radio-success"
							{...register("parcel_type", {
								required: "Parcel Type is required",
							})}
						/>
						<span className="font-semibold text-secondary cursor-default">
							Not Document
						</span>
					</div>
				</div>
				{errors?.parcel_type && (
					<p className="text-error font-medium">{errors.parcel_type.message}</p>
				)}
			</div>
			{/* Parcel Information */}
			<div className="grid grid-cols-2 gap-8">
				{/* Parcel Name */}
				<div className="space-y-1">
					<label className="input w-full font-medium text-[1rem] rounded-lg">
						<span className="label text-dark">Parcel Name</span>
						<input
							type="text"
							placeholder="Parcel Name"
							{...register("parcel_name", {
								required: "Parcel Name is required",
							})}
						/>
					</label>
					{/* Field-Error */}
					{errors?.parcel_name && (
						<p className="text-error font-medium">{errors.parcel_name.message}</p>
					)}
				</div>
				{/* Parcel Weight (show/hide based on parcel type) */}
				{parcelType === "not document" && (
					<div className="space-y-1">
						<label className="input w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-dark">Parcel Weight</span>
							<input
								type="number"
								step={0.5}
								placeholder="Parcel Weight (KG)"
								{...register("parcel_weight", {
									required: "Parcel Weight is required",
									min: {
										value: 0.5,
										message: "Minimum weight is 0.5 KG",
									},
									max: {
										value: 20,
										message: "Maximum weight is 20 KG",
									},
								})}
							/>
						</label>
						{/* Field-Error */}
						{errors?.parcel_weight && (
							<p className="text-error font-medium">
								{errors.parcel_weight.message}
							</p>
						)}
					</div>
				)}
			</div>
			{/* A horizontal divider line */}
			<Divider />
			{/* Sender & Receiver Details in 2-column layout */}
			<div className="grid grid-cols-2 gap-8">
				{/* Sender Information */}
				<div className="space-y-8">
					<h5 className="text-xl font-extrabold text-secondary">Sender Details</h5>
					{/* Sender Name, Warehouse, Address, Contact */}
					<div className="grid grid-cols-2 gap-8">
						<div className="space-y-1">
							<label className="input w-full font-medium text-[1rem] rounded-lg">
								<span className="label text-dark">Sender Name</span>
								<input
									type="text"
									placeholder="Sender Name"
									{...register("sender_name", {
										required: "Sender Name is required",
									})}
								/>
							</label>
							{errors?.sender_name && (
								<p className="text-error font-medium">
									{errors.sender_name.message}
								</p>
							)}
						</div>
						<div className="space-y-1">
							<label className="select w-full font-medium text-[1rem] rounded-lg">
								<span className="label text-dark">Sender Warehouse</span>
								<select
									defaultValue="None"
									{...register("sender_warehouse", {
										required: "Sender Warehouse is required",
									})}
								>
									<option
										value="None"
										disabled
									>
										Select Warehouse
									</option>
									{senderDistricts.map((district) => (
										<option
											key={district}
											value={district}
										>
											{district}
										</option>
									))}
								</select>
							</label>
							{errors?.sender_warehouse && (
								<p className="text-error font-medium">
									{errors.sender_warehouse.message}
								</p>
							)}
						</div>
						<div className="space-y-1">
							<label className="input w-full font-medium text-[1rem] rounded-lg">
								<span className="label text-dark">Sender Address</span>
								<input
									type="text"
									placeholder="Sender Address"
									{...register("sender_address", {
										required: "Sender Address is required",
									})}
								/>
							</label>
							{errors?.sender_address && (
								<p className="text-error font-medium">
									{errors.sender_address.message}
								</p>
							)}
						</div>
						<div className="space-y-1">
							<label className="input w-full font-medium text-[1rem] rounded-lg">
								<span className="label text-dark">Sender Contact</span>
								<input
									type="tel"
									placeholder="Sender Contact No."
									{...register("sender_contact", {
										required: "Sender Contact No. is required",
										pattern: {
											value: /^(01[3-9]\d{8})$/,
											message:
												"Invalid Bangladeshi Number (e.g: 01xxxxxxxxx)",
										},
									})}
								/>
							</label>
							{errors?.sender_contact && (
								<p className="text-error font-medium">
									{errors.sender_contact.message}
								</p>
							)}
						</div>
					</div>
					{/* Sender Region */}
					<div className="space-y-1">
						<label className="select w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-dark">Sender Region</span>
							<select
								defaultValue="None"
								{...register("sender_region", {
									required: "Sender Region is required",
								})}
							>
								<option
									value="None"
									disabled
								>
									Select Region
								</option>
								{regions.map((region) => (
									<option
										key={region}
										value={region}
									>
										{region}
									</option>
								))}
							</select>
						</label>
						{errors?.sender_region && (
							<p className="text-error font-medium">
								{errors.sender_region.message}
							</p>
						)}
					</div>
					{/* Parcel Pickup Instructions */}
					<div className="space-y-1">
						<label>
							<span className="font-medium">
								Pickup Instructions{" "}
								<span className="font-semibold">(Optional)</span>
							</span>
							<textarea
								rows={3}
								className="textarea mt-1 w-full resize-none font-medium text-[1rem] rounded-lg"
								placeholder="Pickup Instructions"
								{...register("pickup_instructions", {
									maxLength: {
										value: 250,
										message: "Maximum 250 characters allowed",
									},
								})}
							/>
						</label>
						{errors?.pickup_instructions && (
							<p className="text-error font-medium">
								{errors.pickup_instructions.message}
							</p>
						)}
					</div>
				</div>
				{/* Receiver Information */}
				<div className="space-y-8">
					<h5 className="text-xl font-extrabold text-secondary">Receiver Details</h5>
					{/* Receiver Name, Warehouse, Address, Contact */}
					<div className="grid grid-cols-2 gap-8">
						<div className="space-y-1">
							<label className="input w-full font-medium text-[1rem] rounded-lg">
								<span className="label text-dark">Receiver Name</span>
								<input
									type="text"
									placeholder="Receiver Name"
									{...register("receiver_name", {
										required: "Receiver Name is required",
									})}
								/>
							</label>
							{errors?.receiver_name && (
								<p className="text-error font-medium">
									{errors.receiver_name.message}
								</p>
							)}
						</div>
						<div className="space-y-1">
							<label className="select w-full font-medium text-[1rem] rounded-lg">
								<span className="label text-dark">Receiver Warehouse</span>
								<select
									defaultValue="None"
									{...register("receiver_warehouse", {
										required: "Receiver Warehouse is required",
									})}
								>
									<option
										value="None"
										disabled
									>
										Select Warehouse
									</option>
									{receiverDistricts.map((district) => (
										<option
											key={district}
											value={district}
										>
											{district}
										</option>
									))}
								</select>
							</label>
							{errors?.receiver_warehouse && (
								<p className="text-error font-medium">
									{errors.receiver_warehouse.message}
								</p>
							)}
						</div>
						<div className="space-y-1">
							<label className="input w-full font-medium text-[1rem] rounded-lg">
								<span className="label text-dark">Receiver Address</span>
								<input
									type="text"
									placeholder="Receiver Address"
									{...register("receiver_address", {
										required: "Receiver Address is required",
									})}
								/>
							</label>
							{errors?.receiver_address && (
								<p className="text-error font-medium">
									{errors.receiver_address.message}
								</p>
							)}
						</div>
						<div className="space-y-1">
							<label className="input w-full font-medium text-[1rem] rounded-lg">
								<span className="label text-dark">Receiver Contact</span>
								<input
									type="tel"
									placeholder="Receiver Contact No."
									{...register("receiver_contact", {
										required: "Receiver Contact No. is required",
										pattern: {
											value: /^(01[3-9]\d{8})$/,
											message:
												"Invalid Bangladeshi Number (e.g: 01xxxxxxxxx)",
										},
									})}
								/>
							</label>
							{errors?.receiver_contact && (
								<p className="text-error font-medium">
									{errors.receiver_contact.message}
								</p>
							)}
						</div>
					</div>
					{/* Receiver Region */}
					<div className="space-y-1">
						<label className="select w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-dark">Receiver Region</span>
							<select
								defaultValue="None"
								{...register("receiver_region", {
									required: "Receiver Region is required",
								})}
							>
								<option
									value="None"
									disabled
								>
									Select Region
								</option>
								{regions.map((region) => (
									<option
										key={region}
										value={region}
									>
										{region}
									</option>
								))}
							</select>
						</label>
						{errors?.receiver_region && (
							<p className="text-error font-medium">
								{errors.receiver_region.message}
							</p>
						)}
					</div>
					{/* Parcel Delivery Instructions */}
					<div className="space-y-1">
						<label>
							<span className="font-medium">
								Delivery Instructions{" "}
								<span className="font-semibold">(Optional)</span>
							</span>
							<textarea
								rows={3}
								className="textarea mt-1 w-full resize-none font-medium text-[1rem] rounded-lg"
								placeholder="Delivery Instructions"
								{...register("delivery_instructions", {
									maxLength: {
										value: 250,
										message: "Maximum 250 characters allowed",
									},
								})}
							/>
						</label>
						{errors?.delivery_instructions && (
							<p className="text-error font-medium">
								{errors.delivery_instructions.message}
							</p>
						)}
					</div>
				</div>
			</div>
			<button
				type="submit"
				className="btn btn-lg w-80 btn-primary text-neutral-800 rounded-lg"
			>
				Proceed to Confirm Booking
			</button>
		</form>
	);
};

export default SendParcelForm;
