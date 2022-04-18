const sortedList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const binarySearch = (sortedList, target) => {
  let [first, last] = [0, sortedList.length - 1];
  while (first <= last) {
    const midpoint = Math.floor((first + last) / 2);
    const value = sortedList[midpoint];
    if (value === target) {
      return midpoint;
    } else if (value > target) {
      last = midpoint - 1;
    } else if (value < target) {
      first = midpoint + 1;
    }
  }
  return -1;
};

const numberToSearch = 2;
const index = binarySearch(sortedList, numberToSearch);
if (index !== -1) {
  console.log(`The number ${numberToSearch} is located at position ${index}`);
} else {
  console.log(`Number not found`);
}
