export const reverseArray = <T>(array: T[]) => {
  let [i, j] = [0, array.length - 1];

  while (i < j) {
    [array[i], array[j]] = [array[j], array[i]];
    i++;
    j--;
  }
};
