import { StyleSheet, ViewStyle, TextStyle } from "react-native";

type Styles = {
  container: ViewStyle;
  title: TextStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
