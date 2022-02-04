import React, { useReducer } from "react";
import { TAction, TInventoryContext, TState } from "./inventoryContext.types";
import mock from "src/dev/mockData.json";

const initialInventoryState: TState = {
  items: mock,
  totalInventoryValue: mock.reduce(
    (prev, current) => prev + current.purchasePrice,
    0
  ),
};

const InventoryContext = React.createContext<TInventoryContext>({
  inventoryState: initialInventoryState,
  inventoryDispatch: () => {},
});

const inventoryReducer = (state: TState, action: TAction) => {
  console.log("+++ state", state);

  switch (action.type) {
    case "add_item":
      const newItem = { ...action.payload, id: state.items.length + 1 };

      return {
        ...state,
        totalInventory: state.totalInventoryValue + newItem.purchasePrice,
        items: [...state.items, newItem],
      };

    default:
      return state;
  }
};

export const InventoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [inventoryState, inventoryDispatch] = useReducer(
    inventoryReducer,
    initialInventoryState
  );

  const inventoryContextValue = {
    inventoryState,
    inventoryDispatch,
  };

  return (
    <InventoryContext.Provider value={inventoryContextValue}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryContext;

// Extend reducer with cb -> https://stackoverflow.com/a/66849648/8597377
