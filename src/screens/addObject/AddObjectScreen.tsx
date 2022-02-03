import { Platform, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "./styles";

export const AddObjectScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Object Screen</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};
