import Colors from "../colors/Colors";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const AboutMeItem = ({ image, title, cite, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
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
