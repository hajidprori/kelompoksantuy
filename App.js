const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Onboarding from "./screens/Onboarding";
import Login1 from "./screens/Login1";
import SignUp from "./screens/SignUp";
import Payment from "./screens/Payment";
import Detail1 from "./screens/Detail1";
import Detail2 from "./screens/Detail2";
import HomePage from "./screens/HomePage";
import Detail from "./screens/Detail";
import Login from "./screens/Login";
import Rectangle from "./components/Rectangle";
import Save from "./components/Save";
import Save1 from "./components/Save1";
import LogoHondaMobil1C22eRemove from "./components/LogoHondaMobil1C22eRemove";
import Image1 from "./components/Image1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Detail1"
              component={Detail1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Detail2"
              component={Detail2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Detail"
              component={Detail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
