export const getFormattedCurrency = (value: number): string => {
  return new Intl.NumberFormat("us-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
