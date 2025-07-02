import {
	TbBike,
	TbCreditCard,
	TbPackage,
	TbPackages,
	TbUserSquareRounded,
} from "react-icons/tb";
import Logo from "../shared/Logo";
import { NavLink } from "react-router";

const Sidebar = () => {
	return (
		<div className="drawer-side bg-[#e0e3e6]">
			<label
				htmlFor="dashboard-sidebar"
				className="drawer-overlay"
			></label>
			<div className="w-80 p-8">
				{/* Logo */}
				<Logo />
				{/* Vertical Menu */}
				<ul className="mt-8 text-xl font-medium space-y-1">
					<li>
						<NavLink
							to="/dashboard/profile"
							className="flex items-center gap-x-3 px-3 py-2 rounded-lg border-l border-l-transparent hover:border-l-secondary hover:bg-gradient-to-l hover:from-[#d9dcdf] hover:to-transparent transition-all duration-100"
						>
							<TbUserSquareRounded
								size={24}
								className="text-secondary"
							/>
							Profile
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/dashboard/my-parcels"
							className="flex items-center gap-x-3 px-3 py-2 rounded-lg border-l border-l-transparent hover:border-l-secondary hover:bg-gradient-to-l hover:from-[#d9dcdf] hover:to-transparent transition-all duration-100"
						>
							<TbPackages
								size={24}
								className="text-secondary"
							/>
							My Parcels
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/dashboard/track-parcel"
							className="flex items-center gap-x-3 px-3 py-2 rounded-lg border-l border-l-transparent hover:border-l-secondary hover:bg-gradient-to-l hover:from-[#d9dcdf] hover:to-transparent transition-all duration-100"
						>
							<TbPackage
								size={24}
								className="text-secondary"
							/>
							Track Parcel
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/dashboard/payment-history"
							className="flex items-center gap-x-3 px-3 py-2 rounded-lg border-l border-l-transparent hover:border-l-secondary hover:bg-gradient-to-l hover:from-[#d9dcdf] hover:to-transparent transition-all duration-100"
						>
							<TbCreditCard
								size={24}
								className="text-secondary"
							/>
							Payment History
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/dashboard/riders"
							className="flex items-center gap-x-3 px-3 py-2 rounded-lg border-l border-l-transparent hover:border-l-secondary hover:bg-gradient-to-l hover:from-[#d9dcdf] hover:to-transparent transition-all duration-100"
						>
							<TbBike
								size={24}
								className="text-secondary"
							/>
							Riders
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
