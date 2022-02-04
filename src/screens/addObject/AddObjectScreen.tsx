import { Platform, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useKeyboard } from "@react-native-community/hooks";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TextButton } from "src/components/textButton/TextButton";
import C from "src/constants";
import { ImagePicker } from "src/components/imagePicker/ImagePicker";
import { useRef, useState, useContext } from "react";
import { Input } from "src/components/input/Input";
import InventoryContext from "src/context/inventoryContext";

export const AddObjectScreen = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();

  const keyboard = useKeyboard();

  const scrollViewRef = useRef<any>();

  const inventoryContext = useContext(InventoryContext);

  /** Minimal validation */
  const newTotal =
    inventoryContext.inventoryState.totalInventoryValue + parseInt(price);

  const itemCanBeAdded =
    image !== null &&
    image !== "" &&
    name !== "" &&
    price !== "" &&
    newTotal <= C.specific.maximumInventoryValue;

  return (
    <ScrollView
      style={styles.container}
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({ animated: false })
      }
    >
      {/* Modal Header  */}
      <View style={styles.topButtonsWrapper}>
        <TextButton
          label={C.strings.addObject.cancel}
          onPress={() => navigation.goBack()}
        />

        {/* TODO: Mode for edit  */}
        <TextButton
          label={C.strings.addObject.add}
          onPress={() => {
            inventoryContext.inventoryDispatch({
              type: "add_item",
              payload: {
                photo: image,
                name: name,
                purchasePrice: parseInt(price),
                type: "TODO:",
                description: description,
              },
            });

            navigation.goBack();
          }}
          disabled={!itemCanBeAdded}
        />
      </View>

      <View style={styles.photoSpacer}>
        <ImagePicker setImageUri={setImage} />
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
      {keyboard.keyboardShown && Platform.OS === "ios" && (
        <View style={{ height: keyboard.keyboardHeight }} />
      )}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ScrollView>
  );
};
