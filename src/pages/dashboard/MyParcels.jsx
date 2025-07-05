import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import apiClient from "../../services/apiClient";
import { TbCreditCard, TbDots, TbEye, TbNotes, TbPackage, TbTrashX } from "react-icons/tb";
import { Link } from "react-router";

const MyParcels = () => {
	const { user } = useAuth();
	const { data: parcels } = useQuery({
		queryKey: ["my-parcels", user?.email],
		queryFn: async () => {
			const response = await apiClient.get(`/parcels?booked_by=${user?.email}`);
			return response.data;
		},
	});
	return (
		<div id="my-parcels-page">
			<h2 className="text-4xl font-extrabold text-secondary">My Parcels</h2>
			<div className="mt-6 mb-8 border border-neutral-300"></div>
			<h5 className="mt-4 text-xl font-bold text-secondary">
				You have total {parcels?.length} parcels
			</h5>
			<table className="mt-8 border border-neutral-200 w-full text-left shadow-sm shadow-secondary/20">
				<thead className="text-lg bg-[#e6e6e9] text-neutral-700">
					<tr>
						<th className="p-3">ID</th>
						<th className="p-3">Parcel Name</th>
						<th className="p-3">Parcel Type</th>
						<th className="p-3">Delivery Status</th>
						<th className="p-3">Payment Status</th>
						<th className="p-3">Receiver</th>
						<th className="p-3">Booked At</th>
						<th className="p-3">Actions</th>
					</tr>
				</thead>
				<tbody className="bg-[#f1f3f4] font-medium">
					{parcels?.map((parcel) => (
						<tr key={parcel._id}>
							<td className="px-3 py-2">{parcel._id}</td>
							<td className="px-3 py-2">{parcel.parcel.name}</td>
							<td className="p-3 flex items-center gap-x-1">
								{parcel.parcel.type === "Document" ? (
									<TbNotes size={20} />
								) : (
									<TbPackage size={20} />
								)}{" "}
								{parcel.parcel.type}
							</td>
							<td
								className={`px-3 py-2 ${
									parcel.delivery.status === "delivered"
										? "text-success"
										: parcel.delivery.status === "pending"
										? "text-error"
										: "text-warning"
								}`}
							>
								{parcel.delivery.status[0].toUpperCase()}
								{parcel.delivery.status.slice(1)}
							</td>
							<td
								className={`px-3 py-2 ${
									parcel.payment.status === "paid"
										? "text-success"
										: "text-error"
								}`}
							>
								{parcel.payment.status[0].toUpperCase()}
								{parcel.payment.status.slice(1)}
							</td>
							<td className="px-3 py-2">
								{parcel.receiver.name[0].toUpperCase()}
								{parcel.receiver.name.slice(1)}
							</td>
							<td className="px-3 py-2">
								{new Date(parcel.booked_at).toLocaleDateString()}
							</td>
							<td className="px-3 py-2">
								<div className="dropdown dropdown-end">
									<button
										type="button"
										className="btn btn-ghost h-fit p-1"
									>
										<TbDots size={24} />
									</button>
									<ul className="dropdown-content menu bg-neutral-100 rounded-lg w-48 p-2 shadow-sm">
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
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MyParcels;
