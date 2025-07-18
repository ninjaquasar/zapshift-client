import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroImage1 from "../../assets/hero/hero-1.png";
import HeroImage2 from "../../assets/hero/hero-2.png";
import HeroImage3 from "../../assets/hero/hero-3.png";

const Hero = () => {
	return (
		<section
			id="hero"
			role="banner"
		>
			<Carousel
				autoPlay
				infiniteLoop
				showArrows={false}
				showStatus={false}
				showThumbs={false}
				useKeyboardArrows
			>
				<div className="hero-slide">
					<img
						src={HeroImage1}
						alt="Hero Image 1"
						className="hero-slide-image max-h-[80vh] object-cover object-center rounded-4xl"
					/>
				</div>
				<div className="hero-slide">
					<img
						src={HeroImage2}
						alt="Hero Image 2"
						className="hero-slide-image max-h-[80vh] object-cover object-center rounded-4xl"
					/>
				</div>
				<div className="hero-slide">
					<img
						src={HeroImage3}
						alt="Hero Image 3"
						className="hero-slide-image max-h-[80vh] object-cover object-center rounded-4xl"
					/>
				</div>
			</Carousel>
		</section>
	);
};

export default Hero;
