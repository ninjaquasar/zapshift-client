import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { useEffect, useState } from "react";

const useAuth = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const registerUserWithEmailAndPassword = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const loginUserWithEmailAndPassword = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const loginUserWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider);
	};
	const updateUserProfile = (displayName, photoURL) => {
		const updatedProfile = { displayName, photoURL };
		return updateProfile(auth, updatedProfile);
	};
	const logoutUser = () => {
		return signOut(auth);
	};
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			unSubscribe();
		};
	}, []);
	return {
		user,
		loading,
		registerUserWithEmailAndPassword,
		loginUserWithEmailAndPassword,
		loginUserWithGoogle,
		updateUserProfile,
		logoutUser,
	};
};

export default useAuth;
