import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import C from "src/constants";
import { typographyStyles } from "src/styles/typography.styles";

type Styles = {
  textInput: TextStyle;
  textInputFocused: TextStyle;
  currency: TextStyle;
  textInputMultiline: TextStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  textInput: {
    marginTop: 5,
    borderColor: C.colors.disabledButton,
    backgroundColor: C.colors.dimAccent,
    borderWidth: 2,
    height: 48,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  textInputFocused: {
    borderColor: C.colors.primaryButton,
    backgroundColor: C.colors.contentBackground,
    shadowColor: C.colors.primaryButton,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  currency: {
    position: "absolute",
    bottom: 10,
    right: 13,
    ...typographyStyles.body,
    color: C.colors.textFaded
  },
  textInputMultiline: {
    height: 128,
    paddingTop: 12,
  }
});

export default styles;
