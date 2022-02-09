import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "../colors/Colors";
import AppButton from "../components/AppButton";
import { Fontisto } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";

const ExperienceItem = ({ url, name, id }) => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={styles.experienceContainer}>
      <Text style={styles.experienceText}>Experience {route.params.name}</Text>
      <Image
        source={{
          uri: url,
        }}
        style={styles.experienceImage}
        resizeMode="contain"
      />
      <AppButton
        title={"order now"}
        bgColor={"#262626"}
        color={Colors.white}
        onPress={() => {
          navigation.pop();
          navigation.push("CustomisingCarScreen", { name, id });
        }}
      />
      <AppButton
        title={"see other cars"}
        bgColor={"#262626"}
        color={Colors.white}
        onPress={() => navigation.pop()}
      />

      <View style={styles.dummy}>
        <Fontisto
          name="tesla"
          size={24}
          color={Colors.white}
          style={styles.teslaLogo}
        />
        <Text style={styles.teslaText}>Dummy Tesla App!</Text>
      </View>
    </View>
  );
};

export default ExperienceItem;

const styles = StyleSheet.create({
  experienceContainer: {
    width: "100%",
    alignItems: "center",
  },
  experienceText: {
    color: Colors.white,
    paddingTop: 50,
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  experienceImage: {
    width: "80%",
    height: 200,
  },
  dummy: {
    flexDirection: "row",
    paddingTop: 300,
    paddingBottom: 10,
  },
  teslaLogo: {
    marginRight: 15,
  },
  teslaText: {
    letterSpacing: 1,
    color: Colors.white,
  },
});
