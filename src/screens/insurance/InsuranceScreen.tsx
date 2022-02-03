import { Text, View } from "react-native";
import { typographyStyles } from "src/styles/typography.styles";

import styles from "./styles";

export const InsuranceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={typographyStyles.largeTitle}>Insurance Screen</Text>
    </View>
  );
};
