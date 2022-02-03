import { StyleSheet, ViewStyle, TextStyle } from "react-native";

type Styles = {
  container: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: "coral",
    flex: 1,
  },
});

export default styles;
