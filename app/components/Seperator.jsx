import { View } from "react-native";
import Colors from "../colors/Colors";

const Seperator = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.black,
        width: "50%",
        height: 0.5,
      }}
    ></View>
  );
};

export default Seperator;
