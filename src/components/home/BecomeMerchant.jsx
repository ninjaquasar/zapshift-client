import BecomeMerchantImage from "../../assets/illustrations/location-merchant.png";

const BecomeMerchant = () => {
	return (
		<section
			id="become-merchant"
			className="p-20 max-w-5/6 mx-auto bg-[url('assets/become-merchant-bg.png')] bg-no-repeat bg-top-left bg-secondary rounded-4xl flex items-center"
		>
			<div className="space-y-8">
				<div className="text-light space-y-4">
					<h2 className="text-4xl font-extrabold">
						Merchant and Customer Satisfaction is Our First Priority
					</h2>
					<p className="text-neutral-300">
						We offer the lowest delivery charge with the highest value along with
						100% safety of your product. Pathao courier delivers your parcels in
						every corner of Bangladesh right on time.
					</p>
				</div>
				<div className="flex items-center gap-4">
					<button
						type="button"
						className="btn btn-primary btn-xl text-dark rounded-full text-xl"
					>
						Become a Merchant
					</button>
					<button
						type="button"
						className="btn btn-outline btn-primary btn-xl text-primary hover:text-dark rounded-full text-xl"
					>
						Earn with ZapShift Courier
					</button>
				</div>
			</div>
			<img
				src={BecomeMerchantImage}
				alt="Become Merchant Illustration Image"
			/>
		</section>
	);
};

export default BecomeMerchant;
