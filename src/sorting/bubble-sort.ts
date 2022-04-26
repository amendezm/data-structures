const bubbleSort = (array: number[]) => {
  for (let i = array.length - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
};

const swap = (array: number[], index1: number, index2: number) => {
  const save = array[index1];
  array[index1] = array[index2];
  array[index2] = save;
};

export { bubbleSort };
