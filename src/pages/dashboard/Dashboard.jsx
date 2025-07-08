import {
	TbBike,
	TbCreditCard,
	TbPackage,
	TbPackages,
	TbUserSquareRounded,
} from "react-icons/tb";
import DashboardPageCard from "../../components/shared/DashboardPageCard";

const Dashboard = () => {
	const pageData = [
		{
			icon: TbUserSquareRounded,
			title: "Profile",
			description: "View or edit your (user) profile",
			route: "profile",
		},
		{
			icon: TbPackages,
			title: "My Parcels",
			description: "View & manage the parcels you've booked",
			route: "my-parcels",
		},
		{
			icon: TbPackage,
			title: "Track Parcel",
			description: "Track your packages history and status",
			route: "track-parcel",
		},
		{
			icon: TbCreditCard,
			title: "Payment History",
			description: "View the list of payments you've done",
			route: "payment-history",
		},
		{
			icon: TbBike,
			title: "Riders",
			description: "View & manage riders of the platform",
			route: "riders",
		},
	];
	return (
		<div id="dashboard-base-page">
			{/* Page heading */}
			<h2 className="text-4xl font-extrabold text-secondary">Dashboard Pages</h2>
			{/* A horizontal divider line */}
			<div className="mt-6 mb-8 border border-neutral-300"></div>
			{/* Show the count of parcels */}
			<h5 className="mt-4 text-xl font-bold text-secondary">Total 5 pages</h5>
			{/* Dashboard pages in grid-layout */}
			<div className="mt-8 grid grid-cols-3 gap-4">
				{pageData.map((page) => (
					<DashboardPageCard
						key={pageData.title}
						pageData={page}
					/>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
