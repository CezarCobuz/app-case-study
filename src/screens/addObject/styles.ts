import { StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import C from "src/constants";

type Styles = {
  container: ViewStyle;
  topButtonsWrapper: ViewStyle;
  photoSpacer: ViewStyle;
  inputContainerStyle: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: C.colors.background,
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,

    /** Native modal causes inconsistency */
    marginTop: Platform.OS === "ios" ? 0 : 60,
  },
  topButtonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  photoSpacer: {
    marginTop: 26,
    alignItems: "center",
    marginBottom: 20,
  },
  inputContainerStyle: {
    marginBottom: 20
  }
});

export default styles;
