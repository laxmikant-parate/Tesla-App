import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PaymentScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Payments Screen</Text>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
