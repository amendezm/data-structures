const mergeSort = (array: number[]) => {
  if (array.length <= 1) {
    return array;
  }
  const midpoint = array.length / 2;
  const firstHalf = mergeSort(array.slice(0, midpoint));
  const secondHalf = mergeSort(array.slice(midpoint));
  return merge(firstHalf, secondHalf);
};

const merge = (sortedArray1: number[], sortedArray2: number[]) => {
  const [size1, size2] = [sortedArray1.length, sortedArray2.length];
  let index1 = 0;
  let index2 = 0;
  let responseArray: number[] = [];

  while (index1 < size1 && index2 < size2) {
    if (sortedArray1[index1] < sortedArray2[index2]) {
      responseArray = [...responseArray, sortedArray1[index1]];
      index1++;
    } else {
      responseArray = [...responseArray, sortedArray2[index2]];
      index2++;
    }
  }
  while (index1 < size1) {
    responseArray = [...responseArray, sortedArray1[index1]];
    index1++;
  }
  while (index2 < size2) {
    responseArray = [...responseArray, sortedArray2[index2]];
    index2++;
  }

  return responseArray;
};

export { mergeSort };
