import { TbBuildingStore, TbCashRegister, TbTruck, TbTruckDelivery } from "react-icons/tb";
import HowItWorksStepCard from "../shared/HowItWorksStepCard";

const HowItWorks = () => {
	const steps = [
		{
			icon: TbTruck,
			title: "Booking Pick & Drop",
			description:
				"Book parcel pickup from your home or shop, and we'll drop it anywhere on time.",
		},
		{
			icon: TbCashRegister,
			title: "Cash On Delivery",
			description:
				"Let customers pay after delivery. Safe, simple, and great for small businesses.",
		},
		{
			icon: TbTruckDelivery,
			title: "Delivery Hub",
			description:
				"We use smart hubs to send parcels faster, smoother, and with better tracking.",
		},
		{
			icon: TbBuildingStore,
			title: "Booking SME & Corporate",
			description:
				"Special booking for SMEs and companies – built for speed and large parcel needs.",
		},
	];
	return (
		<section
			id="how-it-works"
			className="max-w-5/6 mx-auto space-y-8"
		>
			<h3 className="text-3xl font-extrabold text-secondary">How It Works</h3>
			<div className="grid grid-cols-4 gap-6">
				{steps.map((step) => (
					<HowItWorksStepCard
						key={step.title}
						data={step}
					/>
				))}
			</div>
		</section>
	);
};

export default HowItWorks;
