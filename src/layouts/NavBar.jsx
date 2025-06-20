import { Link } from "react-router";
import HorizontalLinks from "../components/shared/HorizontalLinks";
import Logo from "../components/shared/Logo";

const NavBar = () => {
	return (
		<header>
			<nav className="bg-light px-8 py-5 rounded-2xl flex items-center justify-between shadow-md shadow-neutral-200">
				<Logo />
				<HorizontalLinks />
				<div className="flex items-center gap-x-3 text-lg font-semibold text-neutral-800">
					<Link to="/auth/signin">
						<button
							type="button"
							className="px-6 py-3 border border-neutral-300 rounded-xl hover:bg-neutral-100 cursor-[url(cursor.png),_auto]"
						>
							Sign In
						</button>
					</Link>
					<Link to="/auth/signin">
						<button
							type="button"
							className="px-6 py-3 bg-primary hover:bg-primary/85 rounded-xl cursor-[url(cursor.png),_auto]"
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
