import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import C from "src/constants";

type Styles = {
  frame: ViewStyle;
};

const frameSize = 150;

const styles: Styles = StyleSheet.create<Styles>({
  frame: {
    width: frameSize,
    height: frameSize,
    borderWidth: 2,
    borderColor: C.colors.fadedAccent,
    borderRadius: frameSize / 2,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
  },
});

export default styles;
