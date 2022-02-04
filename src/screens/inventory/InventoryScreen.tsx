import { FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { useContext, useState } from "react";
import { InventoryCard } from "src/components/inventoryCard/InventoryCard";
import { Header } from "src/components/header/Header";
import AddIcon from "src/assets/icons/inventory/add.svg";
import { Screens } from "src/constants/enums";
import C from "src/constants";
import { IconButton } from "src/components/iconButton/IconButton";
import InventoryContext from "src/context/inventoryContext";

export const InventoryScreen = () => {
  const navigation = useNavigation();

  const inventoryContext = useContext(InventoryContext);

  const valuableItems = inventoryContext.inventoryState.items;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={C.strings.inventory.title}
        button={
          <IconButton
            onPress={() => navigation.navigate(Screens.AddObject)}
            icon={<AddIcon color={C.colors.primaryButton} />}
          />
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
