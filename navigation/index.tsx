/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { strings } from "../assets/strings";

import Colors from "../constants/Colors";
import { Screens } from "../constants/enums";
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
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

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

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
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

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  // TODO: Map over a defined screens object
  return (
    <BottomTab.Navigator
      initialRouteName={Screens.Inventory}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          title: strings.bottomTabs.home,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      <BottomTab.Screen
        name={Screens.Insurance}
        component={InsuranceScreen}
        options={{
          title: strings.bottomTabs.insurance,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="umbrella" color={color} />
          ),
        }}
      />

      {/* TODO: Increase header height  */}
      <BottomTab.Screen
        name={Screens.Inventory}
        component={InventoryScreen}
        options={({ navigation }: RootTabScreenProps<"Inventory">) => ({
          title: strings.bottomTabs.inventory,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="dropbox" color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate(Screens.AddObject)}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="plus-circle"
                size={25}
                color={Colors[colorScheme].text}
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
          title: strings.bottomTabs.realty,
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />

      <BottomTab.Screen
        name={Screens.Menu}
        component={MenuScreen}
        options={{
          title: strings.bottomTabs.menu,
          tabBarIcon: ({ color }) => <TabBarIcon name="bars" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  // TODO: Replace with actual exported SVG + transform
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
