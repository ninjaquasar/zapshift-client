import AuthContext from "../contexts/AuthContext";
import useAuth from "../hooks/useAuth";

const AuthProvider = ({ children }) => {
	const value = useAuth();
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
