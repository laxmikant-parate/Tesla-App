import { Alert } from "react-native";

import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseConfig from "./apiKey";

const Registration = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(getAuth(), email, password);
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
};

const SignIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(getAuth(), email, password);
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
};

const Logout = async () => {
  try {
    await signOut();
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
};

export { firebaseConfig, Registration, SignIn, Logout };
