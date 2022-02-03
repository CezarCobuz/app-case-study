import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import useColorScheme from "../hooks/useColorScheme";
import { AddObjectScreen } from "../screens/addObject/AddObjectScreen";
import { HomeScreen } from "../screens/home/HomeScreen";
import { InsuranceScreen } from "../screens/insurance/InsuranceScreen";
import { InventoryScreen } from "../screens/inventory/InventoryScreen";
import { MenuScreen } from "../screens/menu/MenuScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RealtyScreen } from "../screens/realty/RealtyScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import HomeIcon from "src/assets/icons/bottomTabs/home.svg";
import InsuranceIcon from "src/assets/icons/bottomTabs/insurance.svg";
import InventoryIcon from "src/assets/icons/bottomTabs/inventory.svg";
import RealtyIcon from "src/assets/icons/bottomTabs/realty.svg";
import MenuIcon from "src/assets/icons/bottomTabs/menu.svg";
import AddIcon from "src/assets/icons/inventory/add.svg";
import { Screens } from "src/constants/enums";
import C from "src/constants";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="AddObject" component={AddObjectScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  // TODO: Map over a defined screens object
  return (
    <BottomTab.Navigator
      initialRouteName={Screens.Inventory}
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarActiveTintColor: C.colors.tabIconSelected,
        tabBarInactiveTintColor: C.colors.tabIconDefault,
      }}
    >
      <BottomTab.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          title: C.strings.bottomTabs.home,
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

      <BottomTab.Screen
        name={Screens.Insurance}
        component={InsuranceScreen}
        options={{
          title: C.strings.bottomTabs.insurance,
          tabBarIcon: ({ color }) => <InsuranceIcon color={color} />,
        }}
      />

      {/* TODO: Increase header height, separate header */}
      <BottomTab.Screen
        name={Screens.Inventory}
        component={InventoryScreen}
        options={({ navigation }: RootTabScreenProps<"Inventory">) => ({
          title: C.strings.bottomTabs.inventory,
          tabBarIcon: ({ color }) => <InventoryIcon color={color} />,

          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate(Screens.AddObject)}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <AddIcon
                color={C.colors.primaryButton}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />

      <BottomTab.Screen
        name={Screens.Realty}
        component={RealtyScreen}
        options={{
          title: C.strings.bottomTabs.realty,
          tabBarIcon: ({ color }) => <RealtyIcon color={color} />,
        }}
      />

      <BottomTab.Screen
        name={Screens.Menu}
        component={MenuScreen}
        options={{
          title: C.strings.bottomTabs.menu,
          tabBarIcon: ({ color }) => <MenuIcon color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
