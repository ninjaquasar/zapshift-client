import { Link } from "react-router";
import LogoImage from "../../assets/logo.png";

const Logo = () => {
	return (
		<Link
			to="/"
			className="cursor-[url(cursor.png),_auto]"
		>
			<div className="relative group">
				<img
					src={LogoImage}
					alt="Logo Image"
					className="grayscale group-hover:grayscale-0 transition-[filter] duration-100"
				/>
				<h4 className="text-2xl font-extrabold absolute top-4 left-6">ZapShift</h4>
			</div>
		</Link>
	);
};

export default Logo;
