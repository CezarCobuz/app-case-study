import C from "src/constants";
import { TInventoryContext } from "src/context/inventoryContext.types";
import { getFormattedCurrency } from "src/utils/currency";

export const validateAddItemInputs = (
  image: string,
  name: string,
  price: string,
  priceIsValid: boolean
): boolean => {
  const isValid =
    image !== null &&
    image !== "" &&
    name !== "" &&
    price !== "" &&
    priceIsValid;

  return isValid;
};

export const validatePrice = (
  inventoryContext: TInventoryContext,
  price: string
): boolean => {
  if (price === "") {
    return true;
  }
  const newTotal =
    inventoryContext.inventoryState.totalInventoryValue + parseInt(price);

  return newTotal <= C.specific.maximumInventoryValue;
};

export const getPriceWarningMessage = (inventoryContext: TInventoryContext) => {
  let formattedMax = getFormattedCurrency(C.specific.maximumInventoryValue);
  let formattedRemaining = getFormattedCurrency(
    C.specific.maximumInventoryValue -
      inventoryContext.inventoryState.totalInventoryValue
  );

  return `${C.strings.addObject.valueWarning} ${formattedMax}. Available: ${formattedRemaining}`;
};
