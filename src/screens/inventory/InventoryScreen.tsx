import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import mock from "src/dev/mockData.json";
import { useState } from "react";
import { InventoryCard } from "src/components/inventoryCard/InventoryCard";
import { Header } from "src/components/header/Header";
import AddIcon from "src/assets/icons/inventory/add.svg";
import { Screens } from "src/constants/enums";
import C from "src/constants";

export const InventoryScreen = () => {
  const navigation = useNavigation();

  const [valuableItems, setValuableItems] = useState(mock);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={C.strings.inventory.title}
        button={
          <Pressable
            onPress={() => navigation.navigate(Screens.AddObject)}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <AddIcon color={C.colors.primaryButton} />
          </Pressable>
        }
      />

      <FlatList
        style={styles.cardsWrapper}
        showsVerticalScrollIndicator={false}
        data={valuableItems}
        numColumns={C.specific.numberOfColumns}
        renderItem={({ item: valuableItem }) => {
          const { id, name, purchasePrice, photo } = valuableItem;

          return (
            <InventoryCard
              key={id}
              imageUri={photo}
              name={name}
              price={purchasePrice}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};
