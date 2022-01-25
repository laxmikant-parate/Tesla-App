import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const AboutMeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>About me screen</Text>
      <Button
        title="Customize car"
        onPress={() => navigation.navigate("LoginSignUpScreen")}
      />
    </View>
  );
};

export default AboutMeScreen;

const styles = StyleSheet.create({});
