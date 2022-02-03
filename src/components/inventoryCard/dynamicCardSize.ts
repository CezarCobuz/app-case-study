import Constants from "expo-constants";
import C from "src/constants";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";

/** Current version works for numberOfColumns > 2 */
export const getDynamicCardSize = (numberOfColumns: number) => {
  const itemsPerColumns = 2;

  const bottomTabHeight = useBottomTabBarHeight();

  /** 2 - offset left and right (horizontal) */
  const availableWidth =
    (C.screenSize.width - 2 * C.dimensions.contentOffset) / numberOfColumns;


  let availableHeight =
    C.screenSize.height - C.dimensions.headerHeight - bottomTabHeight;
  if (Platform.OS === "ios") {
    availableHeight -= Constants.statusBarHeight;
  }

  return {
    width: availableWidth,
    height: availableHeight / itemsPerColumns,
  };
};
