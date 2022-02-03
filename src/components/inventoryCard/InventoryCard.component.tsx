import React from "react";
import { Text, View, Image } from "react-native";
import C from "src/constants";
import { getFormattedCurrency } from "src/utils/currency";
import { getDynamicCardSize } from "./dynamicCardSize";
import styles from "./styles";

type Props = {
  imageUri: string;
  name: string;
  price: number;
};

export const InventoryCard = ({
  imageUri = "",
  name = "",
  price = 0,
}: Props): JSX.Element => {
  const formattedPrice = getFormattedCurrency(price);

  // To fit exactly 4 into available viewport no matter the screen resolution
  const { height, width } = getDynamicCardSize(C.specific.numberOfColumns);

  return (
    <View style={[styles.container, { height: height, width: width }]}>
      <Image
        style={styles.image}
        source={{
          uri: imageUri,
        }}
      />

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{formattedPrice}</Text>
    </View>
  );
};
