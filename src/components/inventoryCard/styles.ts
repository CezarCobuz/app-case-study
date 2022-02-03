import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import C from "src/constants";

type Styles = {
  spacer: ViewStyle;
  card: ViewStyle;
  image: ImageStyle;
  infoWrapper: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  spacer: {
    padding: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 14,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  infoWrapper: {
    flex: 1,
    backgroundColor: C.colors.contentBackground,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
});

export default styles;
