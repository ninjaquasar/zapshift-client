import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
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
					onSubmit={handleSubmit(onSubmit)}
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
			</div>
		</div>
	);
};

export default Login;
