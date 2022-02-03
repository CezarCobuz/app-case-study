import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export const InventoryScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory Screen</Text>
    </View>
  );
};
