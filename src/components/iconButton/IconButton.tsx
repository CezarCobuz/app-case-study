import React from "react";
import { Pressable, ViewStyle } from "react-native";

type Props = {
  icon: JSX.Element;
  onPress: () => void;
  style?: ViewStyle;
  disabled?: boolean;
};

export const IconButton = (props: Props): JSX.Element => {
  const { icon = null, disabled = false, onPress, style } = props;

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        style,
      ]}
    >
      {icon}
    </Pressable>
  );
};
