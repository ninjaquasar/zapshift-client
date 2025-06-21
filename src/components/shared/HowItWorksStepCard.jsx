const HowItWorksStepCard = ({ data: step }) => {
	const { icon: Icon, title, description } = step;
	return (
		<div className="how-it-works-card p-8 bg-light hover:bg-primary/70 hover:shadow hover:shadow-lime-700/50 duration-200 rounded-3xl space-y-5">
			<Icon
				size={56}
				strokeWidth={1}
				className="stroke-secondary"
			/>
			<h5 className="text-xl font-bold text-secondary">{title}</h5>
			<p className="font-medium text-neutral-600">{description}</p>
		</div>
	);
};

export default HowItWorksStepCard;
