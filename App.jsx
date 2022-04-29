import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./app/screens/HomeScreen";
import AboutMeScreen from "./app/screens/AboutMeScreen";
import PaymentScreen from "./app/screens/PaymentScreen";
import LearnMoreScreen from "./app/screens/LearnMoreScreen";
import CustomisingCarScreen from "./app/screens/CustomisingCarScreen";
import LoginSignupScreen from "./app/screens/LoginSignupScreen";

import { firebaseConfig } from "./auth/firebase";
import { getApps, initializeApp } from "firebase/app";

LogBox.ignoreAllLogs(true);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="AboutMeScreen" component={AboutMeScreen} />
    <Stack.Screen
      name="PaymentScreen"
      component={PaymentScreen}
      options={{ headerShown: true, title: "Shipping Details" }}
    />
    <Stack.Screen name="LearnMoreScreen" component={LearnMoreScreen} />
    <Stack.Screen
      name="CustomisingCarScreen"
      component={CustomisingCarScreen}
    />
    <Stack.Screen name="LoginSignupScreen" component={LoginSignupScreen} />
  </Stack.Navigator>
);

const App = () => {
  if (!getApps.length) {
    initializeApp(firebaseConfig);
  }

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
