import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddObjectScreen } from "../screens/addObject/AddObjectScreen";
import { RootStackParamList } from "../../types";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { Screens } from "src/constants/enums";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.BottomTabNavigator}
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name={Screens.AddObject}
            component={AddObjectScreen}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
