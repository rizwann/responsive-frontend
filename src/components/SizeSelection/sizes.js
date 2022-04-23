const InternationaSize = [
  { value: "xx-small", label: "XXS" },
  { value: "x-small", label: "XS" },
  { value: "small", label: "S" },
  { value: "medium", label: "M" },
  { value: "large", label: "L" },
  { value: "x-large", label: "XL" },
  { value: "xx-large", label: "XXL" },
];

const clothingSize = [
  { value: "32", label: "32" },
  { value: "34", label: "34" },
  { value: "36", label: "36" },
  { value: "38", label: "38" },
  { value: "40", label: "40" },
  { value: "42", label: "42" },
  { value: "44", label: "44" },
  { value: "46", label: "46" },
  { value: "48", label: "48" },
  { value: "50", label: "50" },
];

const otherSize = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
];

export const groupedOptions = [
  {
    label: "Internationale Größen",
    options: InternationaSize,
  },
  {
    label: "Konfektionsgrößen",
    options: clothingSize,
  },
  {
    label: "Sonstige Größen",
    options: otherSize,
  },
];
