import {
  StyleSheet,
  Image,
  View,
  StatusBar,
  FlatList,
  Linking,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import Colors from "../colors/Colors";
import aboutMeScreenData from "../api/aboutMeScreenData";
import AboutMeItem from "../components/AboutMeItem";
import SkillItem from "../components/SkillItem";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const skills = [
  { name: "C++" },
  { name: "JavaScript" },
  { name: "Python" },
  { name: "Java" },
];

const skills2 = [{ name: "HTML" }, { name: "CSS" }, { name: "MySQL" }];
const skills3 = [{ name: "ReactJS" }, { name: "React Native" }];

const AboutMeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={24}
        color={Colors.buttonPrimary}
        style={styles.backIcon}
        onPress={() => navigation.pop()}
      />
      <View style={styles.bottomDesign}>
        <View style={styles.linkRowContainer}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://auth.geeksforgeeks.org/user/laxmikantparate01/profile"
              ).catch((error) => alert(error));
            }}
          >
            <Image
              source={{ uri: aboutMeScreenData.gfg }}
              style={styles.link}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://leetcode.com/Laxmikant01").catch(
                (error) => alert(error)
              );
            }}
          >
            <Image
              source={{ uri: aboutMeScreenData.leetcode }}
              style={styles.link}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://github.com/Laxmikant-Rajkapoor-Parate/"
              ).catch((error) => alert(error));
            }}
          >
            <AntDesign
              name="github"
              size={26}
              color="black"
              style={{ marginHorizontal: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://www.linkedin.com/in/laxmikant-parate-10075a191"
              ).catch((error) => alert(error));
            }}
          >
            <Image
              source={{ uri: aboutMeScreenData.linkedin }}
              style={styles.link2}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://www.facebook.com/laxmikant.parate.33"
              ).catch((error) => alert(error));
            }}
          >
            <Image
              source={{ uri: aboutMeScreenData.fb }}
              style={styles.link2}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://www.instagram.com/laxmikant.parate"
              ).catch((error) => alert(error));
            }}
          >
            <Image
              source={{ uri: aboutMeScreenData.insta }}
              style={styles.link2}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <View style={{ width: "85%", paddingLeft: "33%" }}>
          <Image
            source={{
              uri: aboutMeScreenData.url,
            }}
            style={styles.profilePic}
          />
        </View>
        <View style={styles.iconContainer}>
          <Fontisto
            name="mobile-alt"
            size={24}
            color={Colors.buttonPrimary}
            style={{ marginVertical: 5 }}
            onPress={() => Linking.openURL("tel:+917030083767")}
          />
          <MaterialIcons
            name="attach-email"
            size={24}
            color={Colors.buttonPrimary}
            style={{ marginVertical: 5 }}
            onPress={() =>
              Linking.openURL("mailto:laxmikantparate01@gmail.com")
            }
          />
        </View>
      </View>
      <AboutMeItem
        image={aboutMeScreenData.hi}
        title={"Hey folk, I'm "}
        cite={"Laxmikant Parate"}
      />
      <AboutMeItem
        image={aboutMeScreenData.education}
        title={"Currently, "}
        cite={"3rd Yr, IT"}
      />
      <AboutMeItem
        image={aboutMeScreenData.location}
        title={"Nagpur, Maharashtra,"}
        cite={" India"}
      />
      <AboutMeItem
        image={aboutMeScreenData.achievement}
        title={"Handson with "}
        cite={"DSA, Problem Solving"}
      />
      <AboutMeItem
        image={aboutMeScreenData.learning}
        title={"Learning "}
        cite={"React, React Native"}
      />
      <AboutMeItem
        image={aboutMeScreenData.goal}
        title={"Looking for "}
        cite={"Internships"}
      />
      <AboutMeItem
        image={aboutMeScreenData.resume}
        title={"Have a look at my "}
        cite={"Resume"}
        onPress={() =>
          Linking.openURL(
            "https://drive.google.com/file/d/10Pg0CQH7CbgaWV_Lmo2qEuj0DGDnvHRy/view?usp=sharing"
          )
        }
      />
      <View style={styles.skillContainer}>
        <FlatList
          horizontal
          data={skills}
          keyExtractor={({ name }) => name}
          renderItem={({ item }) => <SkillItem name={item.name} />}
        />
        <FlatList
          horizontal
          data={skills2}
          keyExtractor={({ name }) => name}
          renderItem={({ item }) => <SkillItem name={item.name} />}
        />
        <FlatList
          horizontal
          data={skills3}
          keyExtractor={({ name }) => name}
          renderItem={({ item }) => <SkillItem name={item.name} />}
        />
      </View>
    </View>
  );
};

export default AboutMeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingTop: StatusBar.currentHeight + 10,
  },
  backIcon: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  bottomDesign: {
    width: "100%",
    backgroundColor: Colors.buttonSecondary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    bottom: 0,
    paddingVertical: 20,
    alignItems: "center",
  },
  linkRowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  link: { width: 30, height: 30, marginHorizontal: 10 },
  link2: { width: 25, height: 25, marginHorizontal: 10 },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  skillContainer: {
    marginTop: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    paddingVertical: 20,
    width: "100%",
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: Colors.buttonSecondary,
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
});
