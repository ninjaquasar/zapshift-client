import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Services from "../components/home/Services";
import TrustedBy from "../components/home/TrustedBy";
import Benefits from "../components/home/Benefits";
import BecomeMerchant from "../components/home/BecomeMerchant";

const Home = () => {
	return (
		<main className="pt-16 pb-24 space-y-24">
			<Hero />
			<HowItWorks />
			<Services />
			<TrustedBy />
			<div className="max-w-5/6 mx-auto border border-dashed border-secondary/60"></div>
			<Benefits />
			<div className="max-w-5/6 mx-auto border border-dashed border-secondary/60"></div>
			<BecomeMerchant />
		</main>
	);
};

export default Home;
