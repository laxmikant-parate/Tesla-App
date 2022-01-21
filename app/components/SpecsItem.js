import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Colors from "../colors/Colors";
const SpecsItem = ({ name, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}> {name}</Text>
      <Text style={styles.value}> {value}</Text>
    </View>
  );
};

export default SpecsItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: Colors.white,
    width: "100%",
  },
  name: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: "bold",
  },
  value: {
    color: Colors.black,
    fontSize: 13,
    fontWeight: "400",
  },
});
