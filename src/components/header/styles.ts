import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import C from "src/constants";

type Styles = {
  spacer: ViewStyle;
  container: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  spacer: {
    height: C.dimensions.headerHeight,
    justifyContent: "flex-end",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});

export default styles;
