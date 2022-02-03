import { StyleSheet, ViewStyle } from "react-native";

type Styles = {
  container: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
