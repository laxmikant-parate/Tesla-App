import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../colors/Colors";

const Changer = ({ title1, title2 }) => {
  const [display, setDisplay] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.changerItem,
          {
            backgroundColor: display ? Colors.white : "transparent",
            marginRight: "2%",
          },
        ]}
        onPress={() => setDisplay(!display)}
      >
        <Text style={[styles.text, { color: display ? Colors.black : "grey" }]}>
          {title1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.changerItem,
          { backgroundColor: display ? "transparent" : Colors.white },
        ]}
        onPress={() => setDisplay(!display)}
      >
        <Text style={[styles.text, { color: display ? "grey" : Colors.black }]}>
          {title2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Changer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: Colors.buttonSecondary,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  changerItem: {
    paddingVertical: 7,
    width: "49%",
    borderRadius: 100,
    backgroundColor: "white",
    alignItems: "center",
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
