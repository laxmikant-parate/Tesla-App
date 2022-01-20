import React from "react";
import { Image, StyleSheet } from "react-native";

import { logo } from "../api/homeScreenData";
import { Fontisto } from "@expo/vector-icons";
import CarItemList from "../components/CarItemList";

const HomeScreen = () => {
  return (
    <>
      <CarItemList />
      <Image
        source={{ uri: logo }}
        style={styles.teslaName}
        resizeMode="contain"
      />
      <Fontisto name="tesla" size={24} color="black" style={styles.teslaLogo} />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  teslaName: {
    position: "absolute",
    width: 100,
    height: 20,
    top: 55,
    left: 25,
  },
  teslaLogo: {
    position: "absolute",
    top: 52,
    right: 25,
  },
});
