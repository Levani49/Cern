export const convertToNums = (stringArray: string[]): number[] =>
  stringArray.map((element: string) => parseFloat(element));
