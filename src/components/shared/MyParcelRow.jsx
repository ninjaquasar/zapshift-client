import { TbCreditCard, TbDots, TbEye, TbNotes, TbPackage, TbTrashX } from "react-icons/tb";
import { Link } from "react-router";
import { toast } from "sonner";
import Swal from "sweetalert2";
import apiClient from "../../services/apiClient";
import { useQueryClient } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const MyParcelRow = ({ parcel }) => {
	// Destructure necessary info
	const {
		_id,
		tracking_id,
		booked_at: bookedAt,
		parcel: { name: parcelName, type: parcelType },
		delivery: { status: deliveryStatus },
		payment: { status: paymentStatus },
		receiver: { name: receiverName },
	} = parcel;
	// Use TanStack Query Client hook
	const { invalidateQueries: refetch } = useQueryClient();
	// Import current user from our custom auth hook
	const { user } = useAuth();
	// Handle delete operation
	const handleDelete = () => {
		// Fire confirmation popup
		Swal.fire({
			icon: "warning",
			iconColor: "var(--color-warning)",
			title: "Confirm Deletion",
			text: "The parcel will be deleted permanantly.",
			showCancelButton: true,
			confirmButtonText: "Yes, Delete",
			cancelButtonText: "No, Cancel",
			confirmButtonColor: "var(--color-success)",
			cancelButtonColor: "var(--color-error)",
		}).then((result) => {
			// Work to do if user confirms deletion
			if (result.isConfirmed) {
				// Delete parcel from database
				apiClient
					.delete(`/parcels/${_id}`)
					.then((res) => {
						// Check if deleted successfully
						if (res.status === 204) {
							// Show success message if deleted successfully
							toast.success("The parcel is deleted.");
							// Remove the deleted parcel from UI instantly (Need to fix it)
							refetch({
								queryKey: ["my-parcels", user?.email],
							});
						} else
							toast.error(
								"We couldn't delete the parcel completely. Please try once more.",
							);
					})
					.catch((error) => {
						// Throw API-related or Fetch-related error
						console.log(`${error?.response?.statusText}: ${error?.message}`);
						toast.error(
							"We couldn't delete the parcel. Please try again in a bit.",
						);
					});
			}
		});
	};
	return (
		<tr key={tracking_id}>
			{/* Parcel Id, Name */}
			<td className="px-3 py-2 truncate font-semibold">{tracking_id.toUpperCase()}</td>
			<td className="px-3 py-2 truncate">{parcelName}</td>
			{/* Parcel Type */}
			<td className="p-3 flex items-center gap-x-1 capitalize">
				{parcelType === "document" ? <TbNotes size={20} /> : <TbPackage size={20} />}{" "}
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
								onClick={handleDelete}
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
