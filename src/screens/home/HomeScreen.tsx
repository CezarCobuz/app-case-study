import { Text, View } from "react-native";
import { typographyStyles } from "src/styles/typography.styles";

import styles from "./styles";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={typographyStyles.largeTitle}>Home Screen</Text>
    </View>
  );
};
