import { NavLink } from "react-router";

const HorizontalLinks = () => {
	return (
		<ul className="flex items-center gap-x-1 font-medium">
			<li>
				<NavLink
					to="/#services"
					className="px-5 py-3 rounded-full hover:bg-primary/35 active:bg-primary/50 cursor-[url(cursor.png),_auto]"
				>
					Services
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/about"
					className="px-5 py-3 rounded-full hover:bg-primary/35 active:bg-primary/50 cursor-[url(cursor.png),_auto]"
				>
					About Us
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/pricing"
					className="px-5 py-3 rounded-full hover:bg-primary/35 active:bg-primary/50 cursor-[url(cursor.png),_auto]"
				>
					Pricing
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/rider-registration"
					className="px-5 py-3 rounded-full hover:bg-primary/35 active:bg-primary/50 cursor-[url(cursor.png),_auto]"
				>
					Be a Rider
				</NavLink>
			</li>
		</ul>
	);
};

export default HorizontalLinks;
