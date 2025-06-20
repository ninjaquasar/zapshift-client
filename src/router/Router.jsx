import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
	},
]);

export default router;
