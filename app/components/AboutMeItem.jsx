import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../colors/Colors";

const AboutMeItem = ({ image, title, cite }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: image }} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.cited}>{cite}</Text>
    </TouchableOpacity>
  );
};

export default AboutMeItem;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: Colors.buttonPrimary,
  },
  cited: {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});
