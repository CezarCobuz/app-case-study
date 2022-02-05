export type TInventoryItem = {
  id?: number;
  name: string;
  purchasePrice: number;
  type: string; // TODO: const strings
  description?: string;
  photo: string;
};

export type TState = {
  items: TInventoryItem[];
  totalInventoryValue: number;
};
export type TAction = {
  type: "add_item"; // | "edit_item" | "delete_item" etc..
  payload: TInventoryItem;
};

export type TInventoryContext = {
  inventoryState: TState;
  inventoryDispatch: React.Dispatch<TAction>;
};
