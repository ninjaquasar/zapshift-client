import ServiceCard from "../cards/ServiceCard";

const Services = () => {
	const services = [
		{
			title: "Express & Standard Delivery",
			description:
				"We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours.",
		},
		{
			title: "Nationwide Delivery",
			description:
				"We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
		},
		{
			title: "Fulfillment Solution",
			description:
				"We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
		},
		{
			title: "Cash on Home Delivery",
			description:
				"100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
		},
		{
			title: "Corporate Service",
			description:
				"Customized corporate services which includes warehouse and inventory management support.",
		},
		{
			title: "Parcel Return",
			description:
				"Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
		},
	];
	return (
		<section
			id="services"
			className="py-24 bg-secondary rounded-4xl text-center space-y-8"
		>
			<div className="space-y-4">
				<h2 className="text-4xl font-extrabold text-light">Our Services</h2>
				<p className="font-medium text-neutral-300 max-w-4xl mx-auto">
					Enjoy fast, reliable parcel delivery with real-time tracking and zero
					hassle. From personal packages to business shipments — we deliver on time,
					every time.
				</p>
			</div>
			<div
				id="services-grid"
				className="max-w-5/6 mx-auto grid grid-cols-3 gap-6"
			>
				{services.map((service) => (
					<ServiceCard
						key={service.title}
						service={service}
					/>
				))}
			</div>
		</section>
	);
};

export default Services;
