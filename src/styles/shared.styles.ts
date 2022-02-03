import { StyleSheet, ViewStyle } from "react-native";
import C from "src/constants";

type Styles = {
  cardShadow: ViewStyle;
};

export const sharedStyles: Styles = StyleSheet.create<Styles>({
  cardShadow: {
    flex: 1,
    backgroundColor: C.colors.transparent,
    shadowColor: C.colors.dark,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 6,
  },
});
