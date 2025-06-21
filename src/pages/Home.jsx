import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Services from "../components/home/Services";

const Home = () => {
	return (
		<main className="py-16 space-y-16">
			<Hero />
			<HowItWorks />
			<Services />
		</main>
	);
};

export default Home;
