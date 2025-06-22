import AmazonLogo from "../../assets/brands/amazon.png";
import CasioLogo from "../../assets/brands/casio.png";
import MoonstarLogo from "../../assets/brands/moonstar.png";
import RandstadLogo from "../../assets/brands/randstad.png";
import StartLogo from "../../assets/brands/start.png";
import StartPeopleLogo from "../../assets/brands/start-people.png";
import Marquee from "react-fast-marquee";

const TrustedBy = () => {
	const brandLogos = [
		AmazonLogo,
		CasioLogo,
		MoonstarLogo,
		RandstadLogo,
		StartLogo,
		StartPeopleLogo,
	];
	return (
		<section
			id="trusted-by"
			className="max-w-5/6 mx-auto space-y-10"
		>
			<h3 className="text-3xl font-extrabold text-center text-secondary">
				We've helped thousands of sales teams
			</h3>
			<Marquee
				pauseOnHover
				gradient
				gradientColor="var(--color-base-light)"
				className="max-w-6xl mx-auto"
			>
				{brandLogos.map((logo) => (
					<img
						key={logo}
						src={logo}
						alt="Brand Logo"
						className="mx-10"
					/>
				))}
			</Marquee>
		</section>
	);
};

export default TrustedBy;
