import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Services from "../components/home/Services";
import TrustedBy from "../components/home/TrustedBy";

const Home = () => {
	return (
		<main className="py-16 space-y-24">
			<Hero />
			<HowItWorks />
			<Services />
			<TrustedBy />
		</main>
	);
};

export default Home;
