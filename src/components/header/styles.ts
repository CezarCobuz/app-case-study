import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import C from "src/constants";

type Styles = {
  spacer: ViewStyle;
  title: TextStyle;
  container: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  spacer: {
    backgroundColor: "green",
    height: C.dimensions.headerHeight,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
  },
  container: {
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});

export default styles;
