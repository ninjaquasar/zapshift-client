import LiveParcelTrackingImage from "../../assets/illustrations/live-parcel-tracking.png";
import CallCenterSupportImage from "../../assets/illustrations/call-center-support.png";
import BenefitCard from "../shared/BenefitCard";

const Benefits = () => {
	const benefits = [
		{
			image: LiveParcelTrackingImage,
			title: "Live Parcel Tracking",
			description:
				"Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
		},
		{
			image: CallCenterSupportImage,
			title: "100% Safe Delivery",
			description:
				"We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
		},
		{
			image: CallCenterSupportImage,
			title: "24/7 Call Center Support",
			description:
				"Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns — anytime you need us.",
		},
	];
	return (
		<section
			id="benefits"
			className="max-w-5/6 mx-auto space-y-6"
		>
			{benefits.map((benefit) => (
				<BenefitCard
					key={benefit.title}
					benefit={benefit}
				/>
			))}
		</section>
	);
};

export default Benefits;
