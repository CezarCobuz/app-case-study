import Constants from "expo-constants";
import C from "src/constants";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";

/** Current version works for numberOfColumns > 2 */
export const getDynamicCardSize = (numberOfColumns: number) => {
  const itemsPerColumns = 2;

  const bottomTabHeight = useBottomTabBarHeight();

  let availableHeight =
    C.screenSize.height - C.dimensions.headerHeight - bottomTabHeight;

  if (Platform.OS === "ios") {
    availableHeight -= Constants.statusBarHeight;
  }

  return {
    width: C.screenSize.width / numberOfColumns,
    height: availableHeight / itemsPerColumns,
  };
};
