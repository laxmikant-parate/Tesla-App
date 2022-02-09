import { Alert } from "react-native";

import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBB4qTWJGeF04r92JTXiPJWhQ6r7UMJWT8",
  authDomain: "tesla-app-340514.firebaseapp.com",
  projectId: "tesla-app-340514",
  storageBucket: "tesla-app-340514.appspot.com",
  messagingSenderId: "516867081073",
  appId: "1:516867081073:web:b0781fe810ea529591acd0",
  measurementId: "G-MGFBS4X78R",
};

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
