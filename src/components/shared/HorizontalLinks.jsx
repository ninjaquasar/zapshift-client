import { NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";

const HorizontalLinks = () => {
	const { user } = useAuth();
	return (
		<ul className="horizontal-links flex items-center gap-x-1 font-medium">
			{user && (
				<li>
					<NavLink
						to="/parcel/send"
						className="px-5 py-3 rounded-full hover:bg-primary/35 active:bg-primary/50"
					>
						Send Parcel
					</NavLink>
				</li>
			)}
			<li>
				<NavLink
					to="/coverage"
					className="px-5 py-3 rounded-full hover:bg-primary/35 active:bg-primary/50"
				>
					Coverage
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/about"
					className="px-5 py-3 rounded-full hover:bg-primary/35 active:bg-primary/50"
				>
					About Us
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/pricing"
					className="px-5 py-3 rounded-full hover:bg-primary/35 active:bg-primary/50"
				>
					Pricing
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/rider-registration"
					className="px-5 py-3 rounded-full hover:bg-primary/35 active:bg-primary/50"
				>
					Be a Rider
				</NavLink>
			</li>
		</ul>
	);
};

export default HorizontalLinks;
