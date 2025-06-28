import Divider from "../shared/Divider";

const SendParcelForm = () => {
	const handleConfirmBooking = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const parcelData = Object.fromEntries(formData.entries());
		console.log(parcelData);
	};
	return (
		<form
			className="space-y-8"
			onSubmit={handleConfirmBooking}
		>
			<div className="flex items-center gap-x-12">
				<div className="flex items-center gap-x-2">
					<input
						type="radio"
						name="parcel_type"
						value="Document"
						className="radio radio-success"
					/>
					<span className="font-semibold text-secondary cursor-default">
						Document
					</span>
				</div>
				<div className="flex items-center gap-x-2">
					<input
						type="radio"
						name="parcel_type"
						value="Not Document"
						className="radio radio-success"
					/>
					<span className="font-semibold text-secondary cursor-default">
						Not Document
					</span>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-8">
				<label className="input w-full font-medium text-[1rem] rounded-lg">
					<span className="label text-dark">Parcel Name</span>
					<input
						type="text"
						name="parcel_name"
						placeholder="Parcel Name"
					/>
				</label>
				<label className="input w-full font-medium text-[1rem] rounded-lg">
					<span className="label text-dark">Parcel Weight</span>
					<input
						type="number"
						min={0.5}
						max={20}
						step={0.5}
						name="parcel_weight"
						placeholder="Parcel Weight (KG)"
					/>
				</label>
			</div>
			<Divider />
			<div className="grid grid-cols-2 gap-8">
				<div className="space-y-8">
					<h5 className="text-xl font-extrabold text-secondary">Sender Details</h5>
					<div className="grid grid-cols-2 gap-8">
						<label className="input w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-dark">Sender Name</span>
							<input
								type="text"
								name="sender_name"
								placeholder="Sender Name"
							/>
						</label>
						<label className="select w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-dark">Sender Warehouse</span>
							<select
								defaultValue="None"
								name="sender_warehouse"
							>
								<option
									value="None"
									disabled
								>
									Select Warehouse
								</option>
							</select>
						</label>
						<label className="input w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-dark">Sender Address</span>
							<input
								type="text"
								name="sender_address"
								placeholder="Sender Address"
							/>
						</label>
						<label className="input w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-dark">Sender Contact</span>
							<input
								type="tel"
								name="sender_contact"
								placeholder="Sender Contact No."
							/>
						</label>
					</div>
					<label className="select w-full font-medium text-[1rem] rounded-lg">
						<span className="label text-dark">Sender Region</span>
						<select
							defaultValue="None"
							name="sender_region"
						>
							<option
								value="None"
								disabled
							>
								Select Region
							</option>
						</select>
					</label>
					<label>
						<span className="font-medium">Pickup Instructions</span>
						<textarea
							name="pickup_instructions"
							rows={3}
							className="textarea mt-1 w-full resize-none font-medium text-[1rem] rounded-lg"
							placeholder="Pickup Instructions"
						/>
					</label>
				</div>
				<div className="space-y-8">
					<h5 className="text-xl font-extrabold text-secondary">Receiver Details</h5>
					<div className="grid grid-cols-2 gap-8">
						<label className="input w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-dark">Receiver Name</span>
							<input
								type="text"
								name="receiver_name"
								placeholder="Receiver Name"
							/>
						</label>
						<label className="select w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-dark">Receiver Warehouse</span>
							<select
								defaultValue="None"
								name="receiver_warehouse"
							>
								<option
									value="None"
									disabled
								>
									Select Warehouse
								</option>
							</select>
						</label>
						<label className="input w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-dark">Receiver Address</span>
							<input
								type="text"
								name="receiver_address"
								placeholder="Receiver Address"
							/>
						</label>
						<label className="input w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-dark">Receiver Contact</span>
							<input
								type="tel"
								name="receiver_contact"
								placeholder="Receiver Contact No."
							/>
						</label>
					</div>
					<label className="select w-full font-medium text-[1rem] rounded-lg">
						<span className="label text-dark">Reciever Region</span>
						<select
							defaultValue="None"
							name="receiver_region"
						>
							<option
								value="None"
								disabled
							>
								Select Region
							</option>
						</select>
					</label>
					<label>
						<span className="font-medium">Delivery Instructions</span>
						<textarea
							name="delivery_instructions"
							rows={3}
							className="textarea mt-1 w-full resize-none font-medium text-[1rem] rounded-lg"
							placeholder="Delivery Instructions"
						/>
					</label>
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
