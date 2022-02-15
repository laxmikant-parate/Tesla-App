import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import learnMoreScreenData from "../api/learnMoreScreenData";
import SpecsItemList from "../components/SpecsItemList";
import Colors from "../colors/Colors";
import { Ionicons } from "@expo/vector-icons";
import ExperienceItem from "../components/ExperienceItem";

const LearnMoreScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <>
      <ScrollView>
        <Ionicons
          name="arrow-back"
          size={24}
          color={"#E8EAED"}
          style={styles.icon}
          onPress={() => navigation.pop()}
        />
        <View style={styles.container}>
          <Image
            source={{ uri: learnMoreScreenData[route.params.id].url }}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.Main}>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{route.params.name}</Text>
            </View>
            <View style={styles.specsContainer}>
              <View style={[styles.part, { paddingHorizontal: 30 }]}>
                <SpecsItemList
                  data={learnMoreScreenData[route.params.id].specs.part1}
                />
              </View>
              <View style={[styles.part, { paddingRight: 30 }]}>
                <SpecsItemList
                  data={learnMoreScreenData[route.params.id].specs.part2}
                />
              </View>
            </View>
          </View>
          <ExperienceItem
            url={learnMoreScreenData[route.params.id].url2}
            name={route.params.name}
            id={route.params.id}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default LearnMoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.black,
  },
  image: {
    height: 300,
    width: Dimensions.get("screen").width,
  },
  specsContainer: {
    paddingBottom: 20,
    backgroundColor: Colors.white,
    flexDirection: "row",
  },
  Main: {
    width: "100%",
    borderRadius: 40,
    overflow: "hidden",
  },
  part: {
    width: "50%",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: Colors.white,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.black,
    letterSpacing: 1,
  },
  icon: {
    zIndex: 1,
    position: "absolute",
    top: 40,
    left: 20,
  },
});
