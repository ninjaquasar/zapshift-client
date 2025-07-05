import { Outlet } from "react-router";
import NavBar from "../components/root_layout/NavBar";
import Footer from "../components/root_layout/Footer";
import { Toaster } from "sonner";

const RootLayout = () => {
	return (
		<main className="px-12 py-8">
			{/* Toast container from Sonner */}
			<Toaster
				position="top-left"
				expand
				richColors
			/>
			{/* Navbar */}
			<NavBar />
			{/* Main page content */}
			<Outlet />
			{/* Footer */}
			<Footer />
		</main>
	);
};

export default RootLayout;
