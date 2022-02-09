import { Image, StyleSheet } from "react-native";

import Colors from "../colors/Colors";
import { logo } from "../api/homeScreenData";
import { Fontisto } from "@expo/vector-icons";
import CarItemList from "../components/CarItemList";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <CarItemList />
      <Image
        source={{ uri: logo }}
        style={styles.teslaName}
        resizeMode="contain"
      />
      <Fontisto
        name="person"
        size={24}
        color={Colors.buttonPrimary}
        style={styles.teslaLogo}
        onPress={() => navigation.push("AboutMeScreen")}
      />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  teslaName: {
    position: "absolute",
    width: 100,
    height: 20,
    top: 55,
    left: 25,
  },
  teslaLogo: {
    position: "absolute",
    top: 52,
    right: 25,
  },
});
