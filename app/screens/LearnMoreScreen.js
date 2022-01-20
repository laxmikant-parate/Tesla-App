import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LearnMoreScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Learn more Screen</Text>
      <Button
        title="Customize car"
        onPress={() => navigation.navigate("AboutMeScreen")}
      />
    </View>
  );
};

export default LearnMoreScreen;

const styles = StyleSheet.create({});
