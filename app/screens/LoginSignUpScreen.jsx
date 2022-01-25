import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LoginSignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Login SignUp Screen</Text>
      <Button
        title="Customize car"
        onPress={() => navigation.navigate("PaymentScreen")}
      />
    </View>
  );
};

export default LoginSignUpScreen;

const styles = StyleSheet.create({});
