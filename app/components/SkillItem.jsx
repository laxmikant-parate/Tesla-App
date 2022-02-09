import Colors from "../colors/Colors";
import { StyleSheet, Text, View } from "react-native";

const SkillItem = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default SkillItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.buttonSecondary,
    borderRadius: 10,
    margin: 5,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.buttonPrimary,
    letterSpacing: 0.5,
  },
});
