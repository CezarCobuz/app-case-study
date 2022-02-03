import { Text, View } from "react-native";
import { typographyStyles } from "src/styles/typography.styles";

import styles from "./styles";

export const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={typographyStyles.largeTitle}>Menu Screen</Text>
    </View>
  );
};
