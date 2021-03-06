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
import {
  getPriceWarningMessage,
  validateAddItemInputs,
  validatePrice,
} from "./utils/validator";
import { Warning } from "src/components/warning/Warning";

export const AddObjectScreen = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();
  const keyboard = useKeyboard();
  const scrollViewRef = useRef<any>();
  const inventoryContext = useContext(InventoryContext);

  const priceIsValid = validatePrice(inventoryContext, price);
  const itemCanBeAdded = validateAddItemInputs(
    image,
    name,
    price,
    priceIsValid
  );
  const priceWarningMessage = getPriceWarningMessage(inventoryContext);
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
          testID="AddObjectScreen.TextButton.Cancel"
          label={C.strings.addObject.cancel}
          onPress={() => navigation.goBack()}
        />

        {/* TODO: Mode for edit  */}
        <TextButton
          testID="AddObjectScreen.TextButton.Add"
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
        inputTestID="AddObjectScreen.TextInput.Name"
        containerStyle={styles.inputContainerStyle}
        label={C.strings.addObject.name}
        placeholder={C.strings.addObject.namePlaceholder}
        onChangeText={setName}
      />

      {/* TODO: Add Category Picker here   */}

      <Input
        inputTestID="AddObjectScreen.TextInput.Value"
        // containerStyle={styles.inputContainerStyle}
        label={C.strings.addObject.value}
        placeholder={C.strings.addObject.valuePlaceholder}
        onChangeText={setPrice}
        keyboardType={"numeric"}
        currency={C.specific.currency.symbol}
      />
      <Warning message={priceWarningMessage} showMessage={!priceIsValid} />

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
