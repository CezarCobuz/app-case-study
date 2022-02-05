import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import C from "src/constants";
import { typographyStyles } from "src/styles/typography.styles";

type Styles = {
  container: ViewStyle;
  message: TextStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  message: {
    ...typographyStyles.subCaption,
    color: C.colors.danger
  }
});

export default styles;
