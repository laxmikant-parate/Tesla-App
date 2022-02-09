import Colors from "../colors/Colors";
import { StyleSheet, TextInput, View } from "react-native";

const AppInput = ({
  placeholder,
  icon,
  keyboardType,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      {icon}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: Colors.buttonSecondary,
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flexGrow: 1,
    marginLeft: 15,
    letterSpacing: 0.5,
  },
});
