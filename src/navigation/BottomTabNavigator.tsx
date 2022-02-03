import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "types";

import HomeIcon from "src/assets/icons/bottomTabs/home.svg";
import InsuranceIcon from "src/assets/icons/bottomTabs/insurance.svg";
import InventoryIcon from "src/assets/icons/bottomTabs/inventory.svg";
import RealtyIcon from "src/assets/icons/bottomTabs/realty.svg";
import MenuIcon from "src/assets/icons/bottomTabs/menu.svg";
import { Screens } from "src/constants/enums";
import C from "src/constants";
import { HomeScreen } from "../screens/home/HomeScreen";
import { InsuranceScreen } from "../screens/insurance/InsuranceScreen";
import { InventoryScreen } from "../screens/inventory/InventoryScreen";
import { MenuScreen } from "../screens/menu/MenuScreen";
import { RealtyScreen } from "../screens/realty/RealtyScreen";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={Screens.Inventory}
      screenOptions={{
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

      <BottomTab.Screen
        name={Screens.Inventory}
        component={InventoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <InventoryIcon color={color} />,
        }}
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
};
