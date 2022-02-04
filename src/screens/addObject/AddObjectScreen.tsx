import { Platform, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TextButton } from "src/components/textButton/TextButton";
import C from "src/constants";
import { ImagePicker } from "src/components/imagePicker/ImagePicker";
import { typographyStyles } from "src/styles/typography.styles";
import { useState } from "react";
import { Input } from "src/components/input/Input";

export const AddObjectScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Modal Header  */}
      <View style={styles.topButtonsWrapper}>
        <TextButton
          label={C.strings.addObject.cancel}
          onPress={() => navigation.goBack()}
        />

        {/* TODO: Mode for edit  */}
        <TextButton
          label={C.strings.addObject.add}
          onPress={() => console.log("TODO: Add item")}
          disabled
        />
      </View>

      <View style={styles.photoSpacer}>
        <ImagePicker onPress={() => {}} />
      </View>

      <Input
        containerStyle={styles.inputContainerStyle}
        label={C.strings.addObject.name}
        placeholder={C.strings.addObject.namePlaceholder}
        onChangeText={setName}
      />

      {/* TODO: Add Category Picker here   */}

      <Input
        containerStyle={styles.inputContainerStyle}
        label={C.strings.addObject.value}
        placeholder={C.strings.addObject.valuePlaceholder}
        onChangeText={setPrice}
        keyboardType={"numeric"}
        currency={"€"}
      />

      <Input
        containerStyle={styles.inputContainerStyle}
        label={C.strings.addObject.description}
        placeholder={C.strings.addObject.descriptionPlaceholder}
        onChangeText={setDescription}
        multiline
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};
