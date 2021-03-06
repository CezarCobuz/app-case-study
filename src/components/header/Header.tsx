import React from "react";
import { Text, View } from "react-native";
import { typographyStyles } from "src/styles/typography.styles";
import styles from "./styles";

type Props = {
  title: string;
  button: JSX.Element | null;
};

export const Header = ({ title = "", button = null }: Props): JSX.Element => {
  return (
    <View style={styles.spacer}>
      <View style={styles.container}>
        <Text style={typographyStyles.largeTitle}>{title}</Text>
        {button}
      </View>
    </View>
  );
};
