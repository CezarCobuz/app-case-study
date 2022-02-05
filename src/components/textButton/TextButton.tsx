import React from "react";
import { Pressable, Text } from "react-native";
import C from "src/constants";
import { typographyStyles } from "src/styles/typography.styles";

type Props = {
  label: string;
  onPress: () => void;

  disabled?: boolean;
  testID?: string;
};

export const TextButton = (props: Props): JSX.Element => {
  const { label = "", disabled = false, onPress, testID } = props;

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
      testID={testID}
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
