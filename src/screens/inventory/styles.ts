import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import C from "src/constants";

type Styles = {
  container: ViewStyle;
  cardsWrapper: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: C.colors.background,
  },
  cardsWrapper: {
    paddingHorizontal: C.dimensions.contentOffset,
  },
});

export default styles;
