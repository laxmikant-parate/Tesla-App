import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Colors from "../colors/Colors";
import Changer from "../components/Changer";
import { Ionicons } from "@expo/vector-icons";
import SelectModel from "../components/SelectModel";

const CustomisingCarScreen = () => {
  const navigation = useNavigation();

  const [selectedItem, setSelectedItem] = useState(1);

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
        <Changer title1={"Purchase Value"} title2={"Potential Savings*"} />
        <SelectModel one={340} two={60} three={5.4} />
        <View style={styles.selectModelContainer}>
          <View style={styles.selectModelItem}>
            <Text style={styles.selectModelItemTitle}>Title 1</Text>
            <TouchableWithoutFeedback
              style={styles.selectModelItemValue}
              onPress={() => setSelectedItem(1)}
            >
              <View
                style={[
                  styles.selectModelItemValueContainer,
                  selectedItem === 1 ? customBorder1 : customBorder2,
                ]}
              >
                <Text style={styles.selectModelItemValueTitle}>Title</Text>
                <Text style={styles.selectModelItemValueSubtitle}>
                  Subtitle
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.selectModelItem}>
            <Text style={styles.selectModelItemTitle}>Title 2</Text>
            <TouchableWithoutFeedback
              style={styles.selectModelItemValue}
              onPress={() => setSelectedItem(2)}
            >
              <View
                style={[
                  styles.selectModelItemValueContainer,
                  selectedItem === 2 ? customBorder1 : customBorder2,
                ]}
              >
                <Text style={styles.selectModelItemValueTitle}>Title</Text>
                <Text style={styles.selectModelItemValueSubtitle}>
                  Subtitle
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              style={styles.selectModelItemValue}
              onPress={() => setSelectedItem(3)}
            >
              <View
                style={[
                  styles.selectModelItemValueContainer,
                  selectedItem === 3 ? customBorder1 : customBorder2,
                ]}
              >
                <Text style={styles.selectModelItemValueTitle}>Title</Text>
                <Text style={styles.selectModelItemValueSubtitle}>
                  Subtitle
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
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
  selectModelContainer: {
    width: "100%",
  },
  selectModelItem: {
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  selectModelItemTitle: {
    marginLeft: 15,
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.lightGrey,
    letterSpacing: 0.5,
  },
  selectModelItemValueContainer: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 100,
    justifyContent: "space-between",
    marginTop: 10,
  },
  selectModelItemValueTitle: {
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  selectModelItemValueSubtitle: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.5,
  },
});

const customBorder1 = {
  borderColor: Colors.dodgerBlue,
  borderStyle: "solid",
  borderWidth: 3,
};

const customBorder2 = {
  borderColor: Colors.lightGrey,
  borderStyle: "solid",
  borderWidth: 1,
};
