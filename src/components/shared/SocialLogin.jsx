import { IoLogoGoogle } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const SocialLogin = () => {
	const { loginUserWithGoogle } = useAuth();
	const navigate = useNavigate();
	const handleGoogleLogin = () => {
		loginUserWithGoogle()
			.then((authCredentials) => {
				toast.success("Logged in to your account");
				setTimeout(() => {
					navigate("/");
				}, 4000);
			})
			.catch((error) => {
				console.log(`${error.message} [${error.code}]`);
				console.error("Firebase Auth Error:", error);
				toast.error("Failed to login. Please try again.");
			});
	};
	return (
		<>
			<div className="divider">OR</div>
			<button
				type="button"
				className="btn btn-block btn-lg bg-[#d9dcdf] rounded-lg flex items-center gap-x-3"
				onClick={handleGoogleLogin}
			>
				<IoLogoGoogle
					size={24}
					className="fill-primary stroke-12 stroke-secondary"
				/>
				Login with Google
			</button>
		</>
	);
};

export default SocialLogin;
