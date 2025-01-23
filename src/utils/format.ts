export const formatNumberWithDots = (numericString: string): string => {
  return numericString.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const removeDotsFromString = (value: string): string => {
  return value.replace(/\./g, '');
};
