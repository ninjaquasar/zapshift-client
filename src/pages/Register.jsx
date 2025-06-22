import { Link } from "react-router";

const Register = () => {
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
					>
						<label className="input w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-neutral-600">Name</span>
							<input
								type="text"
								name="name"
								placeholder="Harry Potter"
								required
							/>
						</label>
						<label className="input w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-neutral-600">Email</span>
							<input
								type="email"
								name="email"
								placeholder="name@example.com"
								required
							/>
						</label>
						<label className="input w-full font-medium text-[1rem] rounded-lg">
							<span className="label text-neutral-600">Password</span>
							<input
								type="password"
								name="password"
								placeholder="••••••••••••"
								required
							/>
						</label>
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
