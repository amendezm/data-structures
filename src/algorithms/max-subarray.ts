const maxSubarray = (array: number[]) => {
  let maxSum = Number.MIN_VALUE;
  let currentSum = 0;
  let [start, end] = [0, 0];

  for (let i = 0; i < array.length; i++) {
    currentSum = 0;
    for (let j = i; j < array.length; j++) {
      currentSum += array[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
        start = i;
        end = j;
      }
    }
  }

  return array.slice(start, end + 1);
};

const dynamicMaxSubarray = (array: number[]) => {
  let maxSum = Number.MIN_VALUE;
  let currentSum = 0;
  let [start, end] = [0, 0];

  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
      end = i;
    }

    if (currentSum < 0) {
      currentSum = 0;
      start = i + 1;
    }
  }

  return array.slice(start, end + 1);
};

export { maxSubarray, dynamicMaxSubarray };
