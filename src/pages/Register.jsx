import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import { toast } from "sonner";

const Register = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const { registerUserWithEmailAndPassword } = useAuthContext();
	const navigate = useNavigate();
	const onRegister = (data) => {
		const { displayName, email, password } = data;
		registerUserWithEmailAndPassword(email, password)
			.then((authCredentials) => {
				reset();
				toast.success("Account created");
				setTimeout(() => {
					navigate("/");
				}, 4000);
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};
	return (
		<div>
			<div
				id="register"
				className="w-sm space-y-5"
			>
				<div
					id="register-header"
					className="space-y-1"
				>
					<h2 className="text-4xl font-extrabold">Create an Account</h2>
					<p className="font-medium">Register with ZapShift</p>
				</div>
				<div
					id="register-body"
					className="space-y-3"
				>
					<form
						id="register-form"
						className="space-y-3"
						onSubmit={handleSubmit(onRegister)}
					>
						<label className="input w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-neutral-600">Full Name</span>
							<input
								type="text"
								name="name"
								placeholder="Itachi Uchiha"
								{...register("displayName", {
									required: "Full Name is required",
								})}
							/>
						</label>
						{errors.name && (
							<p className="text-error font-medium">{errors.name.message}</p>
						)}
						<label className="input w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-neutral-600">Email</span>
							<input
								type="email"
								name="email"
								placeholder="name@example.com"
								{...register("email", {
									required: "Email address is required",
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
								{...register("password", {
									required: "Password is required",
									minLength: {
										value: 6,
										message: "Password must include at least 6 characters",
									},
									pattern: {
										value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$/,
										message:
											"Password must include one lowercase and uppercase letter, and one digit",
									},
								})}
							/>
						</label>
						{errors.password && (
							<p className="text-error font-medium">{errors.password.message}</p>
						)}
						<button
							type="submit"
							className="btn btn-lg btn-primary btn-block text-dark rounded-lg"
						>
							Register
						</button>
					</form>
					<p className="text-neutral-600">
						Already have an account?{" "}
						<Link
							to="/auth/login"
							className="link link-hover font-medium text-lime-600"
						>
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
