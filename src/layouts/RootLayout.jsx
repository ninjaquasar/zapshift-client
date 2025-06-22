import { Outlet } from "react-router";
import NavBar from "../components/root-layout/NavBar";
import Footer from "../components/root-layout/Footer";

const RootLayout = () => {
	return (
		<main className="px-12 py-8">
			<NavBar />
			<Outlet />
			<Footer />
		</main>
	);
};

export default RootLayout;
