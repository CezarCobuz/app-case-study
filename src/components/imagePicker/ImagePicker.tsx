import React from "react";
import { Pressable, Text, View } from "react-native";
import C from "src/constants";
import { typographyStyles } from "src/styles/typography.styles";
import styles from "./styles";
import PhotoIcon from "src/assets/icons/addObject/photo.svg";

type Props = {
  onPress: () => void;
};

export const ImagePicker = (props: Props): JSX.Element => {
  const { onPress } = props;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.frame,
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
    >
      <PhotoIcon color={C.colors.primaryButton} />
      <Text style={typographyStyles.bodyBold}>
        {C.strings.addObject.addPhoto}
      </Text>
    </Pressable>
  );
};
