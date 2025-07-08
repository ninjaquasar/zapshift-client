import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "sonner";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/shared/SocialLogin";

const Login = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const { loginUserWithEmailAndPassword } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from || "/";
	const handleLogin = (data) => {
		const { email, password } = data;
		loginUserWithEmailAndPassword(email, password)
			.then((authCredentials) => {
				reset();
				toast.success("Logged in to your account");
				setTimeout(() => {
					navigate(from);
				}, 3000);
			})
			.catch((error) => {
				console.log(`${error.message} [${error.code}]`);
				console.error("Firebase Auth Error:", error);
				toast.error("Failed to login. Please try again.");
			});
	};
	return (
		<div
			id="login"
			className="w-sm space-y-5"
		>
			<div
				id="login-header"
				className="space-y-1"
			>
				<h2 className="text-4xl font-extrabold">Welcome Back</h2>
				<p className="font-medium">Login with ZapShift</p>
			</div>
			<div
				id="login-body"
				className="space-y-3"
			>
				<form
					id="login-form"
					className="space-y-3"
					onSubmit={handleSubmit(handleLogin)}
				>
					<label className="input w-full font-medium text-[1rem] rounded-lg">
						<span className="label text-neutral-600">Email</span>
						<input
							type="email"
							name="email"
							placeholder="name@example.com"
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: "Invalid email address",
								},
							})}
						/>
					</label>
					{errors.email && (
						<p className="text-error font-medium">{errors.email.message}</p>
					)}
					<label className="input w-full font-medium text-[1rem] rounded-lg">
						<span className="label text-neutral-600">Password</span>
						<input
							type="password"
							name="password"
							placeholder="••••••••••••"
							{...register("password", { required: "Password is required" })}
						/>
					</label>
					{errors.password && (
						<p className="text-error font-medium">{errors.password.message}</p>
					)}
					<button
						type="submit"
						className="btn btn-lg btn-primary btn-block text-dark rounded-lg"
					>
						Login
					</button>
				</form>
				<p className="text-neutral-600">
					Don't have any account?{" "}
					<Link
						to="/auth/register"
						className="link link-hover font-medium text-lime-600"
					>
						Register
					</Link>
				</p>
				<SocialLogin />
			</div>
		</div>
	);
};

export default Login;
