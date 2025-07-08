import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Coverage from "../pages/Coverage";
import SendParcel from "../pages/SendParcel";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/dashboard/MyParcels";
import Dashboard from "../pages/dashboard/Dashboard";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/coverage",
				Component: Coverage,
				loader: () => fetch("/warehouses.json"),
			},
			{
				path: "/parcel/send",
				element: (
					<PrivateRoute>
						<SendParcel />
					</PrivateRoute>
				),
				loader: () => fetch("/warehouses.json"),
			},
		],
	},
	{
		path: "/",
		Component: AuthLayout,
		children: [
			{
				path: "/auth/login",
				Component: Login,
			},
			{
				path: "/auth/register",
				Component: Register,
			},
		],
	},
	{
		path: "/",
		element: (
			<PrivateRoute>
				<DashboardLayout />
			</PrivateRoute>
		),
		children: [
			{
				path: "/dashboard",
				Component: Dashboard,
			},
			{
				path: "/dashboard/my-parcels",
				Component: MyParcels,
			},
		],
	},
]);

export default router;
