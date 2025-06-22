import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Root = () => {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Root;
