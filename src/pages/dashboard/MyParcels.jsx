import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import apiClient from "../../services/apiClient";
import MyParcelRow from "../../components/shared/MyParcelRow";

const MyParcels = () => {
	// Import current user from our custom auth hook
	const { user } = useAuth();
	// Fetch parcels data with TanStack Query and Axios
	const { data: parcels } = useQuery({
		queryKey: ["my-parcels", user?.email],
		queryFn: async () => {
			const response = await apiClient.get(`/parcels?booked_by=${user?.email}`);
			return response.data;
		},
	});
	return (
		<div id="my-parcels-page">
			{/* Page heading */}
			<h2 className="text-4xl font-extrabold text-secondary">My Parcels</h2>
			{/* A horizontal divider line */}
			<div className="mt-6 mb-8 border border-neutral-300"></div>
			{/* Show the count of parcels */}
			<h5 className="mt-4 text-xl font-bold text-secondary">
				You have total {parcels?.length} parcels
			</h5>
			{/* User's parcels in a table layout */}
			<table className="mt-8 border border-neutral-200 w-full text-left shadow-sm shadow-secondary/20">
				{/* Table header */}
				<thead className="text-lg bg-[#e6e6e9] text-neutral-700">
					<tr>
						<th className="p-3 text-secondary">ID</th>
						<th className="p-3">Parcel Name</th>
						<th className="p-3">Parcel Type</th>
						<th className="p-3">Delivery Status</th>
						<th className="p-3">Payment Status</th>
						<th className="p-3">Receiver</th>
						<th className="p-3">Booked At</th>
						<th className="p-3">Actions</th>
					</tr>
				</thead>
				{/* Table body */}
				<tbody className="bg-[#f1f3f4] font-medium">
					{/* Loop through parcels and display them in each row */}
					{parcels?.map((parcel) => (
						<MyParcelRow
							key={parcel._id}
							parcel={parcel}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MyParcels;
