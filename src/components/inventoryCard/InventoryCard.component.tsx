import React from "react";
import { Text, View, Image } from "react-native";
import C from "src/constants";
import { sharedStyles } from "src/styles/shared.styles";
import { typographyStyles } from "src/styles/typography.styles";
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
    <View style={[styles.spacer, { height: height, width: width }]}>
      <View style={sharedStyles.cardShadow}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: imageUri,
            }}
          />
          <View style={styles.infoWrapper}>
            <Text style={typographyStyles.headlineBold}>{name}</Text>
            <Text style={typographyStyles.subBody}>{formattedPrice}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
