import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

const CarItem = ({ name, url }) => {
  return (
    <ImageBackground source={{ uri: url }} style={styles.container}>
      <Text>{name}</Text>
    </ImageBackground>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("screen").height,
  },
});
