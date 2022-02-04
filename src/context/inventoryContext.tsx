import React, { useReducer } from "react";
import { TInventoryContext, TState } from "./inventoryContext.types";
import mock from "src/dev/mockData.json";

const initialInventoryState: TState = {
  items: mock,
};

const InventoryContext = React.createContext<TInventoryContext>({
  inventoryState: initialInventoryState,
  inventoryDispatch: () => {},
});

const inventoryReducer = (state: any, action: any) => {
  switch (action.type) {
    case "add_item":
      const newItem = { ...action.payload, id: state.items.length + 1 };

      return {
        ...state,
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
