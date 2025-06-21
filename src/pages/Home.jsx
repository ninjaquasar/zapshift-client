import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Services from "../components/home/Services";
import TrustedBy from "../components/home/TrustedBy";
import Benefits from "../components/home/Benefits";

const Home = () => {
	return (
		<main className="py-16 space-y-24">
			<Hero />
			<HowItWorks />
			<Services />
			<TrustedBy />
			<div className="max-w-5/6 mx-auto border border-dashed border-secondary/60"></div>
			<Benefits />
		</main>
	);
};

export default Home;
