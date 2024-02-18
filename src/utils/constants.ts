export interface priceRangeI {
  label: string;
  value: string;
}

export const minPriceRange: priceRangeI[] = [
  { label: "100", value: "100" },
  { label: "1000", value: "1000" },
  { label: "10000", value: "10000" },
  { label: "100000", value: "100000" },
];
export const maxPriceRange: priceRangeI[] = [
  { label: "1000", value: "1000" },
  { label: "10000", value: "10000" },
  { label: "100000", value: "100000" },
];

export interface RattingRangeI extends priceRangeI {}
export const RattingRange: RattingRangeI[] = [
  { label: "5", value: "5" },
  { label: "4", value: "4" },
  { label: "3", value: "3" },
  { label: "2", value: "2" },
  { label: "1", value: "1" },
];
