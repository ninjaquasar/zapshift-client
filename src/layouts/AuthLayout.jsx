import AuthImage from "../assets/illustrations/auth-image.png";
import { Outlet } from "react-router";
import AuthLogo from "../components/shared/AuthLogo";
import { Toaster } from "sonner";

const AuthLayout = () => {
	return (
		<>
			{/* Toast container from Sonner */}
			<Toaster
				position="top-right"
				expand
				richColors
				className="text-lg"
			/>
			{/* The page in a 2-column layout */}
			<main className="grid grid-cols-2">
				{/* Logo and page in the left */}
				<div className="flex gap-4 px-12 py-8">
					{/* Logo */}
					<AuthLogo />
					{/* Page content */}
					<div className="h-full flex items-center">
						<Outlet />
					</div>
				</div>
				{/* Image with a background color in the right */}
				<div className="min-h-screen h-full bg-primary/20 grid place-items-center">
					<img
						src={AuthImage}
						alt="Authentication Image"
					/>
				</div>
			</main>
		</>
	);
};

export default AuthLayout;
