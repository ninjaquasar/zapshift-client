import { useForm } from "react-hook-form";
import Divider from "../shared/Divider";

const SendParcelForm = () => {
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const parcelType = watch("parcel_type");
	const handleConfirmBooking = (data) => {
		data.payment_status = "unpaid";
		data.delivery_status = "pending";
		data.created_at = new Date().toISOString();
		if (data.parcel_weight) data.parcel_weight = parseFloat(data.parcel_weight);
		parcelType === "Document" && delete data.parcel_weight;
		console.log(data);
	};
	return (
		<form
			id="send-parcel-form"
			className="space-y-8"
			onSubmit={handleSubmit(handleConfirmBooking)}
		>
			<div className="space-y-2">
				<div className="flex items-center gap-x-12">
					<div className="flex items-center gap-x-2">
						<input
							type="radio"
							value="Document"
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
							value="Not Document"
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
			<div className="grid grid-cols-2 gap-8">
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
					{errors?.parcel_name && (
						<p className="text-error font-medium">{errors.parcel_name.message}</p>
					)}
				</div>
				{parcelType === "Not Document" && (
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
						{errors?.parcel_weight && (
							<p className="text-error font-medium">
								{errors.parcel_weight.message}
							</p>
						)}
					</div>
				)}
			</div>
			<Divider />
			<div className="grid grid-cols-2 gap-8">
				<div className="space-y-8">
					<h5 className="text-xl font-extrabold text-secondary">Sender Details</h5>
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
							</select>
						</label>
						{errors?.sender_region && (
							<p className="text-error font-medium">
								{errors.sender_region.message}
							</p>
						)}
					</div>
					<div className="space-y-1">
						<label>
							<span className="font-medium">Pickup Instructions</span>
							<textarea
								rows={3}
								className="textarea mt-1 w-full resize-none font-medium text-[1rem] rounded-lg"
								placeholder="Pickup Instructions"
								{...register("pickup_instructions", {
									required: "Pickup Instructions are required",
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
				<div className="space-y-8">
					<h5 className="text-xl font-extrabold text-secondary">Receiver Details</h5>
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
					<div className="space-y-1">
						<label className="select w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-dark">Reciever Region</span>
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
							</select>
						</label>
						{errors?.receiver_region && (
							<p className="text-error font-medium">
								{errors.receiver_region.message}
							</p>
						)}
					</div>
					<div className="space-y-1">
						<label>
							<span className="font-medium">Delivery Instructions</span>
							<textarea
								rows={3}
								className="textarea mt-1 w-full resize-none font-medium text-[1rem] rounded-lg"
								placeholder="Delivery Instructions"
								{...register("delivery_instructions", {
									required: "Delivery Instructions are required",
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
