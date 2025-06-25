import { Outlet } from "react-router";
import NavBar from "../components/root-layout/NavBar";
import Footer from "../components/root-layout/Footer";
import { Toaster } from "sonner";

const RootLayout = () => {
	return (
		<main className="px-12 py-8">
			<Toaster
				position="top-left"
				expand
				richColors
			/>
			<NavBar />
			<Outlet />
			<Footer />
		</main>
	);
};

export default RootLayout;
