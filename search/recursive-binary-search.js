const sortedList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const binarySearch = (sortedList, target) => {
  if (!sortedList.length) {
    return false;
  }
  const midpoint = Math.floor(sortedList.length / 2);
  const value = sortedList[midpoint];
  if (value === target) {
    return true;
  }
  if (value > target) {
    return binarySearch(sortedList.slice(0, midpoint), target);
  }
  return binarySearch(sortedList.slice(midpoint + 1), target);
};

const numberToSearch = 6;
if (binarySearch(sortedList, numberToSearch)) {
  console.log(`The number was found!`);
} else {
  console.log(`Number not found`);
}
