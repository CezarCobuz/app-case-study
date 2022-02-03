import { Text, View } from "react-native";
import { typographyStyles } from "src/styles/typography.styles";

import styles from "./styles";

export const RealtyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={typographyStyles.largeTitle}>Realty Screen</Text>
    </View>
  );
};
