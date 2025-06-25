import AuthImage from "../assets/illustrations/auth-image.png";
import { Outlet } from "react-router";
import AuthLogo from "../components/shared/AuthLogo";
import { Toaster } from "sonner";

const AuthLayout = () => {
	return (
		<>
			<Toaster
				position="top-right"
				expand
				richColors
				className="text-lg"
			/>
			<main className="grid grid-cols-2">
				<div className="flex gap-4 px-12 py-8">
					<AuthLogo />
					<div className="h-full flex items-center">
						<Outlet />
					</div>
				</div>
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
