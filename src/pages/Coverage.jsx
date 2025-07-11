import { TbSearch } from "react-icons/tb";
import BangladeshMap from "../components/coverage/BangladeshMap";
import { useLoaderData } from "react-router";
import Divider from "../components/shared/Divider";

const Coverage = () => {
	// Fetch warehouses/districts data
	const districts = useLoaderData();
	return (
		<div
			id="coverage"
			className="pt-16 pb-24"
		>
			<div className="px-24 py-20 bg-light rounded-4xl space-y-12">
				{/* Page heading */}
				<h1 className="text-5xl font-extrabold text-secondary">
					We are available in {districts.length} districts
				</h1>
				{/* Search box */}
				<div
					id="coverage-search"
					className="max-w-140 flex"
				>
					{/* Search input field */}
					<div className="grow col-span-5 px-4 bg-base-light rounded-l-full flex items-center gap-x-2">
						<TbSearch size={24} />
						<input
							type="search"
							name="search"
							className="w-8/9 h-full text-lg placeholder:text-[1rem] focus:outline-none"
							placeholder="Search here"
						/>
					</div>
					{/* Search button */}
					<button
						type="button"
						className="btn btn-primary btn-xl text-dark rounded-full text-xl font-bold -ml-6"
					>
						Search
					</button>
				</div>
				{/* A horizontal divider line */}
				<Divider />
				<h3 className="text-3xl font-extrabold text-secondary">
					We deliver almost all over Bangladesh
				</h3>
				{/* The coverage map, Ctrl+Click on 'BangladeshMap' to see the full component */}
				<div className="w-full h-112 rounded-xl">
					<BangladeshMap markingLocations={districts} />
				</div>
			</div>
		</div>
	);
};

export default Coverage;
