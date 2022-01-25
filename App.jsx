import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./app/screens/HomeScreen";
import AboutMeScreen from "./app/screens/AboutMeScreen";
import PaymentScreen from "./app/screens/PaymentScreen";
import LearnMoreScreen from "./app/screens/LearnMoreScreen";
import LoginSignUpScreen from "./app/screens/LoginSignUpScreen";
import CustomisingCarScreen from "./app/screens/CustomisingCarScreen";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="AboutMeScreen" component={AboutMeScreen} />
    <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    <Stack.Screen name="LearnMoreScreen" component={LearnMoreScreen} />
    <Stack.Screen name="LoginSignUpScreen" component={LoginSignUpScreen} />
    <Stack.Screen
      name="CustomisingCarScreen"
      component={CustomisingCarScreen}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
