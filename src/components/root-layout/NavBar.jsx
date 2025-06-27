import { Link } from "react-router";
import HorizontalLinks from "../shared/HorizontalLinks";
import Logo from "../shared/Logo";
import "./NavBar.css";

const NavBar = () => {
	return (
		<header>
			<nav
				id="navbar"
				className="bg-light px-8 py-5 rounded-2xl flex items-center justify-between shadow-md shadow-neutral-200"
			>
				<Logo />
				<HorizontalLinks />
				<div className="nav-buttons flex items-center gap-x-3 text-lg font-semibold">
					<Link to="/auth/login">
						<button
							type="button"
							className="btn btn-lg btn-outline  text-neutral-800 rounded-lg"
						>
							Sign In
						</button>
					</Link>
					<Link to="/">
						<button
							type="button"
							className="btn btn-lg btn-primary  text-neutral-800 rounded-lg"
						>
							Be a Rider
						</button>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
