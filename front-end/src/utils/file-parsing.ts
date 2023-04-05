import { Sale } from "../interfaces";

function getSubstrings(str: string, interval: [number, number][]): string[] {
  const substrings = [];

  for (let i = 0; i < interval.length; i++) {
    const [start, end] = interval[i];
    const substring = str.substring(start, end);
    substrings.push(substring);
  }

  return substrings;
}

export function parseStringFileToData(data: String): Sale[] {
  const lines = data.split("\n");

  return lines
    .filter((el) => el !== "")
    .map((line) => {
      const [typeStr, date, productStr, valueStr, seller] = getSubstrings(
        line,
        [
          [0, 1],
          [1, 26],
          [26, 56],
          [56, 66],
          [66, 85],
        ]
      );
      const value = Number(valueStr) / 100;
      const type = Number(typeStr);
      const product = productStr.trim();
      return { type, date, product, value, seller };
    });
}
