import { Link, useNavigate } from "react-router";
import HorizontalLinks from "../shared/HorizontalLinks";
import Logo from "../shared/Logo";
import "./NavBar.css";
import useAuth from "../../hooks/useAuth";
import { toast } from "sonner";
import { IoLogoGithub } from "react-icons/io5";

const NavBar = () => {
	const { user, logoutUser } = useAuth();
	const navigate = useNavigate();
	const handleLogout = () => {
		logoutUser()
			.then((authCredentials) => {
				toast.success("Logged out from account");
				setTimeout(() => {
					navigate("/auth/login");
				}, 2500);
			})
			.catch((error) => {
				console.log(`${error?.message} [${error?.code}]`);
				toast.error("Couldn't logout from account. Please try once more?");
			});
	};
	return (
		<header>
			<nav
				id="navbar"
				className="bg-light px-8 py-5 rounded-2xl flex items-center justify-between shadow-md shadow-neutral-200"
			>
				<Logo />
				<HorizontalLinks />
				<div className="nav-buttons flex items-center gap-x-3 text-lg font-semibold">
					{user ? (
						<button
							type="button"
							className="btn btn-lg btn-outline  text-neutral-800 rounded-lg"
							onClick={handleLogout}
						>
							Logout
						</button>
					) : (
						<Link to="/auth/login">
							<button
								type="button"
								className="btn btn-lg btn-outline text-neutral-800 rounded-lg"
							>
								Sign In
							</button>
						</Link>
					)}
					<Link to="/">
						<button
							type="button"
							className="btn btn-lg btn-primary text-neutral-800 rounded-lg"
						>
							Be a Rider
						</button>
					</Link>
					{user ? (
						<div className="dropdown dropdown-end">
							<button
								type="button"
								className="cursor-pointer"
							>
								{user?.photoURL ? (
									<div className="avatar size-11 rounded-full">
										<img
											src={user.photoURL}
											alt="User Picture"
											className="rounded-full"
											referrerPolicy="no-referrer"
										/>
									</div>
								) : (
									<div className="avatar avatar-placeholder">
										<div className="bg-neutral-200 size-11 ring ring-primary rounded-full">
											<span className="text-2xl">U</span>
										</div>
									</div>
								)}
							</button>
							<ul className="dropdown-content menu bg-neutral-100 rounded-xl w-48 mt-2 p-2 shadow-md">
								<li>
									<h5 className="text-[1rem] font-bold text-secondary line-clamp-1 leading-7">
										{user.displayName}
									</h5>
								</li>
								<li>
									<Link to="/dashboard/profile">Profile</Link>
								</li>
								<li>
									<Link to="/dashboard">Dashboard</Link>
								</li>
							</ul>
						</div>
					) : null}
					<a
						href="https://github.com/ninjaquasar/zapshift-client"
						target="_blank"
					>
						<button
							type="button"
							className="btn px-1 btn-neutral rounded-lg"
							title="Our GitHub Repository"
						>
							<IoLogoGithub size={28} />
						</button>
					</a>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
