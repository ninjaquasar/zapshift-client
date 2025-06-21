const BenefitCard = ({ benefit }) => {
	const { image: illustration, title, description } = benefit;
	return (
		<div className="p-8 bg-light rounded-3xl flex items-center gap-12">
			<img
				src={illustration}
				alt="Illustration Image"
				className="size-48"
			/>
			<div className="h-40 border border-dashed border-secondary/60"></div>
			<div className="space-y-4">
				<h4 className="text-2xl font-bold text-secondary">{title}</h4>
				<p className="font-medium text-neutral-600">{description}</p>
			</div>
		</div>
	);
};

export default BenefitCard;
