import { StyleSheet, ViewStyle, ImageStyle } from "react-native";
import C from "src/constants";

type Styles = {
  frame: ViewStyle;
  image: ImageStyle;
  deleteButton: ViewStyle;
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

  image: {
    width: frameSize,
    height: frameSize,
    borderRadius: frameSize / 2,
  },

  deleteButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export default styles;
