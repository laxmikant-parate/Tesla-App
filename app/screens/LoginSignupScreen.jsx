import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";

import Colors from "../colors/Colors";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import { logo } from "../api/homeScreenData";
import Dots from "../components/Dots";
import { SignIn, Registration } from "../../auth/firebase";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const dotArr = [
  { size: 8, top: 111, left: 20, bgColor: "pink" },
  { size: 8, top: 222, left: 121, bgColor: "cyan" },
  { size: 6, top: 180, left: 240, bgColor: "tomato" },
  { size: 6, top: 364, left: 60, bgColor: "violet" },
  { size: 7, top: 77, left: 280, bgColor: "darkgrey" },
  { size: 4, top: 333, left: 240, bgColor: "lightgreen" },
];

const LoginSignupScreen = () => {
  const navigation = useNavigation();

  const [task, setTask] = useState(1);
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (key, value) => {
    setValue((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: logo }}
        style={[styles.teslaName]}
        resizeMode="contain"
      />
      <Fontisto
        name="tesla"
        color={Colors.black}
        size={24}
        style={[styles.teslaLogo, { right: 25 }]}
      />
      <Image
        source={require("../../assets/welcome.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.subContainer}>
        <View style={styles.changerContainer}>
          <TouchableOpacity
            style={[styles.changerItem, task === 1 ? styles.one : styles.two]}
            onPress={() => {
              setTask(1);
            }}
          >
            <Text
              style={[
                styles.changerTitle,
                task === 1 ? styles.oneText : styles.twoText,
              ]}
            >
              login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.changerItem, task === 2 ? styles.one : styles.two]}
            onPress={() => {
              setTask(2);
            }}
          >
            <Text
              style={[
                styles.changerTitle,
                task === 2 ? styles.oneText : styles.twoText,
              ]}
            >
              register
            </Text>
          </TouchableOpacity>
        </View>
        <AppInput
          placeholder={"Email"}
          onChangeText={(item) => handleInputChange("email", item)}
          icon={
            <MaterialIcons
              name="attach-email"
              size={24}
              color={Colors.buttonPrimary}
            />
          }
        />
        <AppInput
          placeholder={"Password"}
          secureTextEntry={true}
          onChangeText={(item) => handleInputChange("password", item)}
          icon={
            <MaterialIcons
              name="security"
              size={24}
              color={Colors.buttonPrimary}
            />
          }
        />
        <AppButton
          bgColor={Colors.buttonPrimary}
          color={Colors.white}
          title={task === 1 ? "login" : "register"}
          style={{ marginTop: 20 }}
          onPress={() => {
            const { email, password } = value;
            try {
              task === 1
                ? SignIn(email, password)
                : Registration(email, password);
              if (password.length >= 6) {
                if (getAuth().currentUser) {
                  navigation.replace("PaymentScreen");
                }
              }
            } catch (error) {
              Alert.alert(error.message);
            }
          }}
        />
      </View>
      {dotArr.map(({ bgColor, left, size, top }) => (
        <Dots
          size={size}
          left={left}
          top={top}
          bgColor={bgColor}
          key={bgColor}
        />
      ))}
    </View>
  );
};

export default LoginSignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "30%",
    alignItems: "center",
    backgroundColor: Colors.white,
    justifyContent: "flex-end",
  },
  subContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 40,
    paddingTop: 10,
  },
  teslaName: {
    position: "absolute",
    width: 100,
    height: 20,
    top: 55,
    left: 25,
  },
  teslaLogo: {
    position: "absolute",
    top: 53,
    right: 25,
  },
  image: {
    height: "20%",
  },
  changerTitle: {
    letterSpacing: 0.5,
    textTransform: "uppercase",
    fontSize: 13,
    fontWeight: "bold",
  },
  changerItem: {
    paddingVertical: 10,
    width: "50%",
    alignItems: "center",
  },
  changerContainer: {
    width: "70%",
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    marginBottom: 20,
  },
  one: {
    backgroundColor: "#8B82FD",
  },
  two: {
    backgroundColor: Colors.buttonSecondary,
  },
  oneText: {
    color: Colors.white,
  },
  twoText: {
    color: Colors.buttonPrimary,
  },
});
