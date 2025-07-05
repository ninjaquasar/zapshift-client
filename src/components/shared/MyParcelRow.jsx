import { TbCreditCard, TbDots, TbEye, TbNotes, TbPackage, TbTrashX } from "react-icons/tb";
import { Link } from "react-router";

const MyParcelRow = ({ parcel }) => {
	const {
		_id,
		booked_at: bookedAt,
		parcel: { name: parcelName, type: parcelType },
		delivery: { status: deliveryStatus },
		payment: { status: paymentStatus },
		receiver: { name: receiverName },
	} = parcel;
	return (
		<tr key={_id}>
			{/* Parcel Id, Name */}
			<td className="px-3 py-2 truncate">{_id}</td>
			<td className="px-3 py-2 truncate">{parcelName}</td>
			{/* Parcel Type */}
			<td className="p-3 flex items-center gap-x-1">
				{parcelType === "Document" ? <TbNotes size={20} /> : <TbPackage size={20} />}{" "}
				{parcelType}
			</td>
			{/* Delivery status */}
			<td
				className={`px-3 py-2 ${
					deliveryStatus === "delivered"
						? "text-success"
						: deliveryStatus === "pending"
						? "text-error"
						: "text-warning"
				}`}
			>
				{deliveryStatus[0].toUpperCase()}
				{deliveryStatus.slice(1)}
			</td>
			{/* Payment status */}
			<td
				className={`px-3 py-2 ${
					paymentStatus === "paid" ? "text-success" : "text-error"
				}`}
			>
				{paymentStatus[0].toUpperCase()}
				{paymentStatus.slice(1)}
			</td>
			{/* Receiver name */}
			<td className="px-3 py-2">
				{receiverName[0].toUpperCase()}
				{receiverName.slice(1)}
			</td>
			{/* Booked date */}
			<td className="px-3 py-2">{new Date(bookedAt).toLocaleDateString()}</td>
			{/* Actions stacked in a dropdown */}
			<td className="px-3 py-2">
				<div className="dropdown dropdown-end">
					{/* Toggle button to open/close dropdown */}
					<button
						type="button"
						className="btn btn-ghost h-fit p-1"
					>
						<TbDots size={24} />
					</button>
					{/* Dropdown and list of actions in that */}
					<ul className="dropdown-content menu bg-neutral-100 rounded-lg w-48 p-2 shadow-sm">
						{/* View Details link */}
						<li>
							<Link
								to="/parcels/details/id"
								className="flex items-center gap-x-2 px-2 rounded-md"
							>
								<TbEye
									size={20}
									className="stroke-secondary"
								/>
								View Details
							</Link>
						</li>
						{/* Payment button */}
						<li>
							<button
								type="button"
								className="flex items-center gap-x-2 px-2 rounded-md"
							>
								<TbCreditCard
									size={20}
									className="stroke-secondary"
								/>
								Pay
							</button>
						</li>
						{/* Delete button */}
						<li>
							<button
								type="button"
								className="flex items-center gap-x-2 px-2 rounded-md"
							>
								<TbTrashX
									size={20}
									className="stroke-secondary"
								/>
								Delete
							</button>
						</li>
					</ul>
				</div>
			</td>
		</tr>
	);
};

export default MyParcelRow;
