import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AppButton from "./AppButton";
import Colors from "../colors/Colors";
import { useNavigation } from "@react-navigation/native";

const CarItem = ({ name, url, id }) => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={{ uri: url }} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          Order Online for{" "}
          <Text style={styles.specialSubTitle}>Touchless Delivery</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          color={Colors.white}
          bgColor={Colors.buttonPrimary}
          title={"custom order"}
          onPress={() => {
            navigation.push("CustomisingCarScreen", { id, name });
          }}
        />
        <AppButton
          bgColor={Colors.buttonSecondary}
          color={Colors.black}
          title={"learn more"}
          onPress={() => {
            navigation.push("LearnMoreScreen", { id, name });
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("screen").height,
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
  titleContainer: {
    position: "absolute",
    top: 150,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: Colors.buttonPrimary,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.lightGrey,
    letterSpacing: 1,
  },
  specialSubTitle: {
    textDecorationLine: "underline",
    color: Colors.lightGrey,
  },
});
