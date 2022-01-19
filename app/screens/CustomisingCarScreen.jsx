import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CustomisingCarScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Customizing car Screen</Text>
      <Button
        title="Learn more"
        onPress={() => navigation.navigate("LearnMoreScreen")}
      />
    </View>
  );
};

export default CustomisingCarScreen;

const styles = StyleSheet.create({});
