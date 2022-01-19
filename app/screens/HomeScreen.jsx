import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Customize car"
        onPress={() => navigation.navigate("CustomisingCarScreen")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
