import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Colors from "../colors/Colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Changer from "../components/Changer";
import { Ionicons } from "@expo/vector-icons";

const CustomisingCarScreen = () => {
  const navigation = useNavigation();

  const [selectedObject, setSelectedObject] = useState(false);

  return (
    <ScrollView>
      <View style={styles.Container}>
        <Ionicons
          name="arrow-back"
          size={24}
          color={Colors.black}
          style={styles.back}
          onPress={() => navigation.pop()}
        />
        <Image
          source={{
            uri: "https://pbs.twimg.com/media/FJrjbbGXsAAqAbf?format=png&name=small",
          }}
          style={styles.carImage}
          resizeMode="contain"
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Model 3</Text>
          <Text style={styles.subtitle}>This is a longer line</Text>
        </View>
        <View style={styles.changer}></View>
        <Changer title1={"title 1"} title2={"title 2"} />
      </View>
    </ScrollView>
  );
};

export default CustomisingCarScreen;

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    left: 20,
    top: 40,
  },
  Container: {
    flex: 1,
    width: "100%",
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  carImage: {
    width: "80%",
    height: 250,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
});
