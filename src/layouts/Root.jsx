import { Outlet } from "react-router";
import NavBar from "./NavBar";

const Root = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

export default Root;
