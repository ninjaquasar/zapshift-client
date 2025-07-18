import HorizontalLinks from "../shared/HorizontalLinks";
import Logo from "../shared/Logo";
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
	return (
		<footer
			id="footer"
			className="bg-dark text-light px-24 py-20 rounded-4xl flex flex-col items-center gap-y-8"
		>
			<div
				id="footer-head"
				className="flex flex-col items-center gap-y-4"
			>
				<Logo />
				<p className="max-w-3/4 text-center text-neutral-300">
					Enjoy fast, reliable parcel delivery with real-time tracking and zero
					hassle. From personal packages to business shipments — we deliver on time,
					every time.
				</p>
			</div>
			<div className="w-full border border-dashed border-secondary"></div>
			<HorizontalLinks />
			<div className="w-full border border-dashed border-secondary"></div>
			<div
				id="footer-socials"
				className="flex gap-x-6"
			>
				<a
					href="https://www.linkedin.com/in/riaurko"
					target="_blank"
				>
					<IoLogoLinkedin
						size={36}
						className="hover:fill-primary transition-colors duration-100"
					/>
				</a>
				<a
					href="https://github.com/ninjaquasar"
					target="_blank"
				>
					<IoLogoGithub
						size={36}
						className="hover:fill-primary transition-colors duration-100"
					/>
				</a>
				<a
					href="https://www.facebook.com/ninjaquasar"
					target="_blank"
				>
					<IoLogoFacebook
						size={36}
						className="hover:fill-primary transition-colors duration-100"
					/>
				</a>
				<a
					href="https://www.youtube.com/@ninjaquasar"
					target="_blank"
				>
					<IoLogoYoutube
						size={36}
						className="hover:fill-primary transition-colors duration-100"
					/>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
