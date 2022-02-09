import { StyleSheet, View } from "react-native";

const Dots = ({ size, bgColor, top, left }) => {
  return (
    <View
      style={{
        position: "absolute",
        top: top,
        left: left,
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: bgColor,
      }}
    />
  );
};

export default Dots;

const styles = StyleSheet.create({});
