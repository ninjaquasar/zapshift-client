import { Outlet } from "react-router";
import Sidebar from "../components/dashboard_layout/Sidebar";

const DashboardLayout = () => {
	return (
		<main className="drawer drawer-open">
			{/* Drawer Toggle Checkbox (invisible) */}
			<input
				id="dashboard-sidebar"
				type="checkbox"
				className="drawer-toggle"
			/>
			{/* Main page */}
			<div className="drawer-content p-10">
				<Outlet />
			</div>
			{/* Sidebar */}
			<Sidebar />
		</main>
	);
};

export default DashboardLayout;
