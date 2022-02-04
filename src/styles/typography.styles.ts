import { StyleSheet, TextStyle } from "react-native";
import C from "src/constants";

type Styles = {
  largeTitle: TextStyle;
  headlineBold: TextStyle;
  body: TextStyle;
  bodyBold: TextStyle;
  subBody: TextStyle;
  captionBold: TextStyle;
};

export const typographyStyles: Styles = StyleSheet.create<Styles>({
  largeTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: C.colors.textPrimary,
  },
  headlineBold: {
    fontSize: 19,
    fontWeight: "400",
    color: C.colors.textPrimary,
  },
  body: {
    fontSize: 17,
    color: C.colors.textPrimary,
  },
  bodyBold: {
    fontSize: 17,
    fontWeight: "400",
    color: C.colors.textPrimary,
  },
  subBody: {
    fontSize: 15,
    color: C.colors.textFaded,
  },
  captionBold: {
    fontSize: 13,
    fontWeight: "400",
    color: C.colors.textPrimary,
  },
});
