import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuth();
	if (loading) return null;
	if (!user) return <Navigate to="/auth/login"></Navigate>;
	return children;
};

export default PrivateRoute;
