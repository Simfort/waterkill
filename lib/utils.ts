export const formatAiBase = (str: string): InfoTextBase => {
  const text = str.split("'''stat");
  const newText = text[0];
  const water = text[2].replace(`'''`, "").trim();
  return {
    newText,
    water,
  };
};
export type InfoTextBase = {
  newText: string;
  water: string;
};

export function convertToSubcurrency(amount: number, factor = 100) {
  return Math.round(amount * factor);
}
