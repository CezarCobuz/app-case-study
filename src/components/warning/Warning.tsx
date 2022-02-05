import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

type Props = {
  message: string;
  showMessage: boolean;
};

export const Warning = (props: Props): JSX.Element => {
  const { message = "Warning!", showMessage = false } = props;

  return (
    <View style={styles.container}>
      {showMessage && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};
