import {
  Button,
  StyleSheet,
  Image,
  Text,
  View,
  StatusBar,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import Colors from "../colors/Colors";
import aboutMeScreenData from "../api/aboutMeScreenData";
import AboutMeItem from "../components/AboutMeItem";
import SkillItem from "../components/SkillItem";

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
      <View style={styles.topDesign}></View>
      <Image
        source={{
          uri: aboutMeScreenData.url,
        }}
        style={styles.profilePic}
      />
      <AboutMeItem
        image={aboutMeScreenData.hi}
        title={"Hey folks, I'm "}
        cite={"Laxmikant Parate"}
      />
      <AboutMeItem
        image={aboutMeScreenData.education}
        title={"Currently, "}
        cite={"3rd Yr, IT"}
      />
      <AboutMeItem
        image={aboutMeScreenData.achievement}
        title={"Good with "}
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
  topDesign: {
    width: "100%",
    height: "30%",
    backgroundColor: "lightgreen",
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    position: "absolute",
    bottom: 0,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  skillContainer: {
    marginTop: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
