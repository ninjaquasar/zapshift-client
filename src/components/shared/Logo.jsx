import { Link } from "react-router";
import LogoImage from "../../assets/logo.png";

const Logo = () => {
	return (
		<Link
			to="/"
			className="cursor-[url(cursor.png),_auto]"
		>
			<div className="flex items-end group">
				<img
					src={LogoImage}
					alt="Logo Image"
					className="mb-1 grayscale group-hover:grayscale-0 transition-[filter] duration-100"
				/>
				<h4 className="text-2xl font-extrabold -ml-3">ZapShift</h4>
			</div>
		</Link>
	);
};

export default Logo;
