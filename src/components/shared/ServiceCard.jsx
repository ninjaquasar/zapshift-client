import Icon from "../../assets/service-icon.png";

const ServiceCard = ({ service }) => {
	const { title, description } = service;
	return (
		<div className="card card-lg bg-light hover:bg-primary/90 transition-colors rounded-3xl">
			<div className="card-body items-center text-center space-y-3">
				<div className="p-6 rounded-full bg-gradient-to-b from-base-light to-base-light/0">
					<img
						src={Icon}
						alt="Service Icon"
					/>
				</div>
				<h4 className="card-title text-2xl text-secondary">{title}</h4>
				<p className="font-medium text-neutral-600">{description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
