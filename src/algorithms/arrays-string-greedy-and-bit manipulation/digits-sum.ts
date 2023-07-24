export const digitsSum = (value: number) => {
  let sum = 0;

  while (value) {
    const mod = value % 10;
    sum += mod;
    value = Math.floor(value / 10);
  }

  return sum;
};
