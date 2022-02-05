import C from "src/constants";

export const getFormattedCurrency = (value: number): string => {
  return new Intl.NumberFormat("us-US", {
    style: "currency",
    currency: C.specific.currency.name,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
