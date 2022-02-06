import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../colors/Colors";

const SelectModel = ({ one, two, three }) => {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <View style={styles.menuItem}>
          <Text style={styles.menuValue}>
            {one}
            <Text style={styles.menuSubValue}>mi</Text>
          </Text>
          <Text style={styles.menuName}>Range</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuValue}>
            {two}
            <Text style={styles.menuSubValue}>mph</Text>
          </Text>
          <Text style={styles.menuName}>Speed</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuValue}>
            {three}
            <Text style={styles.menuSubValue}>s</Text>
          </Text>
          <Text style={styles.menuName}>0-60 mph</Text>
        </View>
      </View>
    </View>
  );
};

export default SelectModel;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },
  menuContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  menuItem: {
    padding: 10,
    alignItems: "center",
  },
  menuValue: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  menuSubValue: {
    fontSize: 16,
    color: Colors.buttonPrimary,
  },
  menuName: {
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
});
