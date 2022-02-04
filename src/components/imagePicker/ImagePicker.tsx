import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import C from "src/constants";
import { typographyStyles } from "src/styles/typography.styles";
import styles from "./styles";
import PhotoIcon from "src/assets/icons/addObject/photo.svg";
import * as ExpoImagePicker from "expo-image-picker";
import TrashIcon from "src/assets/icons/addObject/trash.svg";
import { IconButton } from "../iconButton/IconButton";

type Props = {
  onPress: () => void;
};

const pickImage = async (setImage: any) => {
  const result = await ExpoImagePicker.launchImageLibraryAsync({
    mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  if (!result.cancelled) {
    setImage(result.uri);
  }
};

export const ImagePicker = (props: Props): JSX.Element => {
  const { onPress } = props;

  // ExpoImagePicker.ImagePickerResult
  const [image, setImage] = useState<any>(null);

  return (
    <Pressable
      onPress={() => pickImage(setImage)}
      style={({ pressed }) => [
        styles.frame,
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
    >
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <IconButton
            style={styles.deleteButton}
            onPress={() => setImage(null)}
            icon={<TrashIcon color={C.colors.danger} />}
          />
        </>
      ) : (
        <>
          <PhotoIcon color={C.colors.primaryButton} />
          <Text style={typographyStyles.bodyBold}>
            {C.strings.addObject.addPhoto}
          </Text>
        </>
      )}
    </Pressable>
  );
};
