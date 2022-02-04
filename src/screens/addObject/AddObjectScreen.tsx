import { Platform, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useKeyboard } from "@react-native-community/hooks";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TextButton } from "src/components/textButton/TextButton";
import C from "src/constants";
import { ImagePicker } from "src/components/imagePicker/ImagePicker";
import { useState } from "react";
import { Input } from "src/components/input/Input";

export const AddObjectScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();

  const keyboard = useKeyboard();

  return (
    <ScrollView style={styles.container}>
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

      {/*
        Workaround as KeyboardAvoidingView did not work property
        TODO: Investigate: if modal from react-navigation is causing this)
      */}
      {keyboard.keyboardShown && (
        <View style={{ height: keyboard.keyboardHeight }} />
      )}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ScrollView>
  );
};
