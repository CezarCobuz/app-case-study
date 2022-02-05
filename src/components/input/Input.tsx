import React from "react";
import { useState } from "react";
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import { typographyStyles } from "src/styles/typography.styles";
import styles from "./styles";

type Props = {
  label: string;
  placeholder: string;
  onChangeText: any;
  keyboardType?: KeyboardTypeOptions | undefined;
  containerStyle?: ViewStyle;
  currency?: string | undefined;
  multiline?: boolean | undefined;
  inputTestID?: string;
};

export const Input = (props: Props): JSX.Element => {
  const {
    label,
    placeholder,
    onChangeText,
    keyboardType = "default",
    containerStyle,
    currency,
    multiline,
    inputTestID,
  } = props;

  const [focused, setFocused] = useState(false);

  // TODO: Handle cases for edit when receiving value
  return (
    <View style={containerStyle}>
      <Text style={typographyStyles.captionBold}>{label}</Text>
      <TextInput
        testID={inputTestID}
        maxLength={currency ? 5 : undefined}
        keyboardType={keyboardType}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={[
          styles.textInput,
          focused ? styles.textInputFocused : null,
          multiline ? styles.textInputMultiline : null,
        ]}
        placeholder={placeholder}
        onChangeText={(newName) => onChangeText(newName)}
        multiline={multiline}
        textAlignVertical={multiline ? "top" : undefined}
      />
      {currency && <Text style={styles.currency}>{currency}</Text>}
    </View>
  );
};
