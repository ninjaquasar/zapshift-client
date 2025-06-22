import { Link } from "react-router";
import LogoImage from "../../assets/logo.png";

const AuthLogo = () => {
	return (
		<Link to="/">
			<div className="flex items-end group">
				<img
					src={LogoImage}
					alt="Logo Image"
					className="mb-1 contrast-90"
				/>
				<h4 className="text-2xl font-extrabold -ml-3">ZapShift</h4>
			</div>
		</Link>
	);
};

export default AuthLogo;
