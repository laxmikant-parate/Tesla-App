import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import * as Network from "expo-network";
import ConnectivityManager from "react-native-connectivity-status";

import { useNavigation } from "@react-navigation/native";
import AppInput from "../components/AppInput";
import Colors from "../colors/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useLocation from "../hooks/useLocation";
import AppButton from "../components/AppButton";
import { Feather } from "@expo/vector-icons";

const PaymentScreen = () => {
  const location = useLocation();

  return (
    <View style={styles.container}>
      <AppInput
        placeholder={"Name"}
        icon={
          <MaterialIcons name="person" size={24} color={Colors.buttonPrimary} />
        }
        onChangeText={(item) => setName(item)}
      />
      <AppInput
        placeholder={"Mobile"}
        icon={
          <MaterialIcons
            name="local-phone"
            size={24}
            color={Colors.buttonPrimary}
          />
        }
        keyboardType={"numeric"}
      />
      <AppInput
        placeholder={"Email"}
        icon={
          <MaterialIcons
            name="attach-email"
            size={24}
            color={Colors.buttonPrimary}
          />
        }
        keyboardType={"email-address"}
      />
      <AppInput
        placeholder={"Address"}
        icon={
          <MaterialIcons name="place" size={24} color={Colors.buttonPrimary} />
        }
      />
      <AppInput
        placeholder={"Postal Code"}
        icon={
          <MaterialCommunityIcons
            name="postage-stamp"
            size={24}
            color={Colors.buttonPrimary}
          />
        }
        keyboardType={"numeric"}
      />
      {location && (
        <>
          <MapView style={styles.map} region={location}>
            <Marker coordinate={location} title="Marker" />
          </MapView>
          <Text style={styles.title}>*Your Location as detected</Text>
        </>
      )}
      <AppButton
        title={"checkout"}
        color={Colors.white}
        bgColor={Colors.buttonPrimary}
        style={{
          position: "absolute",
          top: Dimensions.get("window").height - 150,
        }}
        onPress={() => alert("No payment enabled; Its a dummy app :)")}
      />
      <TouchableOpacity
        style={styles.redirect}
        onPress={() => console.log("clicked")}
      >
        <Text style={styles.redirectText}>Look for other options</Text>
        <Feather name="external-link" size={24} color={Colors.buttonPrimary} />
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  map: {
    marginTop: 20,
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.buttonPrimary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: "flex-end",
  },
  redirect: {
    position: "absolute",
    top: Dimensions.get("window").height - 100,
    flexDirection: "row",
    alignItems: "center",
  },
  redirectText: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.buttonPrimary,
    marginRight: 10,
  },
});
