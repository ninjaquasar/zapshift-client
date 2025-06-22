import AuthImage from "../assets/illustrations/auth-image.png";
import { Outlet } from "react-router";
import AuthLogo from "../components/shared/AuthLogo";

const AuthLayout = () => {
	return (
		<main className="grid grid-cols-5">
			<div className="col-span-3 px-12 py-8">
				<AuthLogo />
				<Outlet />
			</div>
			<div className="col-span-2 min-h-screen h-full bg-primary/20 grid place-items-center">
				<img
					src={AuthImage}
					alt="Authentication Image"
				/>
			</div>
		</main>
	);
};

export default AuthLayout;
