import { Link } from "react-router";

const DashboardPageCard = ({ pageData }) => {
	const { icon: Icon, title, description, route } = pageData;
	return (
		<div className="p-5 bg-light hover:bg-lime-100 border border-transparent hover:border-primary shadow rounded-2xl transition-colors space-y-4">
			<div className="flex items-center gap-x-3">
				<Icon
					size={40}
					className="text-secondary"
				/>
				<h3 className="text-3xl font-bold">{title}</h3>
			</div>
			<p className="text-lg font-medium text-neutral-700">{description}</p>
			<Link to={`/dashboard/${route}`}>
				<button
					type="button"
					className="btn btn-primary rounded-md text-dark text-lg"
				>
					Go to Page
				</button>
			</Link>
		</div>
	);
};

export default DashboardPageCard;
