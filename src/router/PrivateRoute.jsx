import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuth();
	const location = useLocation();
	const from = location.pathname;
	if (loading) return null;
	if (!user)
		return (
			<Navigate
				to="/auth/login"
				state={{ from }}
			></Navigate>
		);
	return children;
};

export default PrivateRoute;
