import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Coverage from "../pages/Coverage";
import SendParcel from "../pages/SendParcel";

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
				loader: () => fetch("coverageDistricts.json"),
			},
			{
				path: "/parcel/send",
				Component: SendParcel,
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
]);

export default router;
