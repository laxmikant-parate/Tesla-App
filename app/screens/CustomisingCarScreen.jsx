import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import Colors from "../colors/Colors";
import { Ionicons } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
import SelectModel from "../components/SelectModel";
import wheelAndColorData from "../api/wheelAndColorData";
import customizingCarScreenData from "../api/customizingCarScreenData";

const d = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CustomisingCarScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const data = customizingCarScreenData[route.params.id];

  const [display, setDisplay] = useState(1);
  const [autopilot, setAutopilot] = useState(true);
  const [selectedItem, setSelectedItem] = useState(1);
  const [selectedColorItem, setSelectedColorItem] = useState(1);
  const [selectedWheelItem, setSelectedWheelItem] = useState(1);

  return (
    <>
      <View
        style={{
          width: "100%",
          height: StatusBar.currentHeight,
          backgroundColor: Colors.white,
        }}
      />
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
              uri: data.url,
            }}
            style={styles.carImage}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{route.params.name}</Text>
            <Text style={styles.subtitle}>
              {"Estimated Delivery by " +
                months[d.getMonth() + 3] +
                ", " +
                d.getFullYear() +
                "*"}
            </Text>
          </View>

          <View style={styles2.container}>
            <TouchableOpacity
              style={[
                styles2.changerItem,
                {
                  elevation: display === 1 ? 2 : 0,
                  backgroundColor: display === 1 ? Colors.white : "transparent",
                  marginRight: "2%",
                },
              ]}
              onPress={() => setDisplay(1)}
            >
              <Text
                style={[
                  styles2.text,
                  { color: display === 1 ? Colors.black : "grey" },
                ]}
              >
                Purchase Price
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles2.changerItem,
                {
                  elevation: display === 1 ? 0 : 2,
                  backgroundColor: display === 1 ? "transparent" : Colors.white,
                },
              ]}
              onPress={() => setDisplay(2)}
            >
              <Text
                style={[
                  styles2.text,
                  { color: display === 1 ? "grey" : Colors.black },
                ]}
              >
                Potential Savings*
              </Text>
            </TouchableOpacity>
          </View>

          <SelectModel one={data.range} two={data.topSpeed} three={data.acc} />

          <Text style={styles.colorText}>Select Wheel</Text>
          <View style={styles.selectColorContainer}>
            <View style={styles.selectColorItem}>
              <TouchableWithoutFeedback onPress={() => setSelectedWheelItem(1)}>
                <View
                  style={[
                    styles.colorBorder,
                    selectedWheelItem === 1 ? customBorder11 : customBorder22,
                  ]}
                >
                  <View style={styles.actualColor}>
                    <Image
                      source={{
                        uri: "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/option-wheels-18-aero.png?&version=v0028d202202030409",
                      }}
                      style={styles.wheelImage}
                    />
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.colorPrice}>
                {wheelAndColorData.wheel[1]}
              </Text>
            </View>
            <View style={styles.selectColorItem}>
              <TouchableWithoutFeedback onPress={() => setSelectedWheelItem(2)}>
                <View
                  style={[
                    styles.colorBorder,
                    selectedWheelItem === 2 ? customBorder11 : customBorder22,
                  ]}
                >
                  <View style={styles.actualColor}>
                    <Image
                      source={{
                        uri: "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/option-wheels-19-sport.png?&version=v0028d202202030409",
                      }}
                      style={styles.wheelImage}
                    />
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.colorPrice}>
                {wheelAndColorData.wheel[2]}
              </Text>
            </View>
          </View>
          <Text style={styles.colorText}>Select Color</Text>
          <View style={styles.selectColorContainer}>
            <View style={styles.selectColorItem}>
              <TouchableWithoutFeedback onPress={() => setSelectedColorItem(1)}>
                <View
                  style={[
                    styles.colorBorder,
                    selectedColorItem === 1 ? customBorder11 : customBorder22,
                  ]}
                >
                  <View
                    style={[styles.actualColor, { backgroundColor: "#C0C0C0" }]}
                  />
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.colorPrice}>
                {wheelAndColorData.color[1]}
              </Text>
            </View>
            <View style={styles.selectColorItem}>
              <TouchableWithoutFeedback onPress={() => setSelectedColorItem(2)}>
                <View
                  style={[
                    styles.colorBorder,
                    selectedColorItem === 2 ? customBorder11 : customBorder22,
                  ]}
                >
                  <View
                    style={[styles.actualColor, { backgroundColor: "#a62c2b" }]}
                  />
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.colorPrice}>
                {wheelAndColorData.color[2]}
              </Text>
            </View>
            <View style={styles.selectColorItem}>
              <TouchableWithoutFeedback onPress={() => setSelectedColorItem(3)}>
                <View
                  style={[
                    styles.colorBorder,
                    selectedColorItem === 3 ? customBorder11 : customBorder22,
                  ]}
                >
                  <View
                    style={[styles.actualColor, { backgroundColor: "#2C2C2B" }]}
                  />
                </View>
              </TouchableWithoutFeedback>
              <Text style={styles.colorPrice}>
                {wheelAndColorData.color[3]}
              </Text>
            </View>
          </View>
          <View style={styles.selectModelContainer}>
            <View style={styles.selectModelItem}>
              <Text style={styles.selectModelItemTitle}>Rear-Wheel Drive</Text>
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
                  <Text style={styles.selectModelItemValueTitle}>
                    {route.params.name}
                  </Text>
                  <Text style={styles.selectModelItemValueSubtitle}>
                    {"$" + data[display][1]}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.selectModelItem}>
              <Text style={styles.selectModelItemTitle}>
                Dual Moter All-Wheel Drive
              </Text>
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
                  <Text style={styles.selectModelItemValueTitle}>
                    {route.params.name + " Long Range"}
                  </Text>
                  <Text style={styles.selectModelItemValueSubtitle}>
                    {"$" + data[display][2]}
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
                  <Text style={styles.selectModelItemValueTitle}>
                    {route.params.name + " Performance"}
                  </Text>
                  <Text style={styles.selectModelItemValueSubtitle}>
                    {"$" + data[display][3]}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>

          <Text style={styles.colorText}>Autopilot</Text>
          <TouchableOpacity
            style={[styles.autopilotContainer]}
            onPress={() => setAutopilot(!autopilot)}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                letterSpacing: 0.5,
                marginRight: 100,
              }}
            >
              {"Include Autopilot\n$14,555"}
            </Text>
            {autopilot && (
              <Ionicons
                name="checkmark-circle-sharp"
                size={24}
                color="#6a5acd"
              />
            )}
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              letterSpacing: 0.5,
              marginTop: 70,
              color: Colors.black,
            }}
          >
            Order Your {route.params.name}
          </Text>
          <Text style={[styles.billAmount, { marginTop: 10 }]}>
            {"Your total billing: $" +
              (data[display][selectedItem + 3] +
                wheelAndColorData.wheel[selectedWheelItem + 2] +
                wheelAndColorData.color[selectedColorItem + 3] +
                (autopilot ? 14555 : 0))}
          </Text>
          <Text style={[styles.billAmount, { marginBottom: 20 }]}>
            Due today: $250
          </Text>
          <AppButton
            bgColor={Colors.buttonPrimary}
            title={"Proceed for order"}
            color={Colors.white}
            onPress={() => navigation.navigate("PaymentScreen")}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default CustomisingCarScreen;

const styles = StyleSheet.create({
  billAmount: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.buttonPrimary,
    letterSpacing: 0.5,
  },
  autopilotContainer: {
    marginTop: 20,
    width: 300,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: Colors.buttonSecondary,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  back: {
    position: "absolute",
    left: 20,
    top: 20,
  },
  Container: {
    flex: 1,
    width: "100%",
    paddingTop: 10,
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  carImage: {
    width: "80%",
    height: 200,
  },
  titleContainer: {
    top: -10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: Colors.buttonPrimary,
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
    borderRadius: 10,
    justifyContent: "space-between",
    marginTop: 10,
    backgroundColor: Colors.buttonSecondary,
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
  colorText: {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 0.5,
    paddingTop: 25,
    color: Colors.buttonPrimary,
  },
  colorPrice: {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: Colors.buttonPrimary,
  },
  actualColor: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  colorBorder: {
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  selectColorItem: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  selectColorContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  wheelImage: {
    height: "100%",
    width: "100%",
  },
});

const customBorder1 = {
  borderColor: "#6a5acd",
  borderStyle: "solid",
  borderWidth: 3,
  backgroundColor: Colors.white,
};

const customBorder2 = {};

const customBorder11 = {
  borderColor: "#6a5acd",
  borderStyle: "solid",
  borderWidth: 2,
};

const customBorder22 = {
  borderColor: Colors.lightGrey,
  borderStyle: "solid",
  borderWidth: 0,
};

const styles2 = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: Colors.buttonSecondary,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  changerItem: {
    paddingVertical: 7,
    width: "49.5%",
    borderRadius: 100,
    backgroundColor: "white",
    alignItems: "center",
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
