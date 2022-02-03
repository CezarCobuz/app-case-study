import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import C from "src/constants";

type Styles = {
  container: ViewStyle;
  image: ImageStyle;
  name: TextStyle;
  price: TextStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: "gold",
    borderRadius: 14,
    overflow: "hidden",
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  name: { fontSize: 20, fontWeight: "bold", color: "red" },
  price: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
