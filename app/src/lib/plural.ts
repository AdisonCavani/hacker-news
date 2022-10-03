export const plural = (num: number, str: string) =>
  `${num} ${str + (num === 0 || num > 1 ? "s" : "")}`;
