import Icon from "../../assets/service-icon.png";

const ServiceCard = ({ service }) => {
	const { title, description } = service;
	return (
		<div className="service-card p-8 bg-light hover:bg-primary/90 duration-200 rounded-3xl space-y-4 flex flex-col items-center text-center">
			<div className="p-6 rounded-full bg-gradient-to-b from-base-light to-base-light/0">
				<img
					src={Icon}
					alt="Service Icon"
				/>
			</div>
			<h4 className="text-2xl font-bold text-secondary">{title}</h4>
			<p className="font-medium text-neutral-600">{description}</p>
		</div>
	);
};

export default ServiceCard;
