import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SelectModel = ({ one, two, three }) => {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <View style={styles.menuItem}>
          <Text style={styles.menuValue}>{one + " mi"}</Text>
          <Text style={styles.menuName}>Range</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuValue}>{two + " mph"}</Text>
          <Text style={styles.menuName}>Speed</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuValue}>{three + " s"}</Text>
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
    marginTop: 20,
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
  menuName: {
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 0.5,
  },
});
