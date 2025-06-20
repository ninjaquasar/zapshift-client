import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{
				index: true,
				Component: Home,
			},
		],
	},
]);

export default router;
