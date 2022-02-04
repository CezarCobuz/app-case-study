import React from "react";
import { Pressable, Text, View } from "react-native";
import C from "src/constants";
import { typographyStyles } from "src/styles/typography.styles";
import styles from "./styles";

type Props = {
  label: string;
  onPress: () => void;

  disabled?: boolean;
};

export const TextButton = (props: Props): JSX.Element => {
  const { label = "", disabled = false, onPress } = props;

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <Text
        style={[
          typographyStyles.body,
          {
            color: disabled ? C.colors.disabledButton : C.colors.primaryButton,
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};
