const HowItWorksStepCard = ({ data: step }) => {
	const { icon: Icon, title, description } = step;
	return (
		<div className="card card-lg bg-light hover:shadow-lg hover:shadow-neutral-300 transition-shadow duration-200 rounded-3xl">
			<div className="card-body space-y-2">
				<Icon
					size={56}
					strokeWidth={1}
					className="stroke-secondary"
				/>
				<h5 className="card-title text-xl text-secondary">{title}</h5>
				<p className="font-medium text-neutral-600">{description}</p>
			</div>
		</div>
	);
};

export default HowItWorksStepCard;
