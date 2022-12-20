const insertionSort = (numbers: number[]) => {
  for (let j = 1; j < numbers.length; j++) {
    const number = numbers[j];
    let i = j - 1;
    while (i >= 0 && numbers[i] > number) {
      numbers[i + 1] = numbers[i];
      i -= 1;
    }
    numbers[i + 1] = number;
  }
  return numbers;
};

export { insertionSort };
