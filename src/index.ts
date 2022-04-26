import { LinkedList } from "./linked-list/LinkedList";
import { bubbleSort } from "./sorting/bubble-sort";
import { mergeSort } from "./sorting/merge-sort";

const list = new LinkedList<number>();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

for (let item of list) {
  console.log(item);
}

console.log([...list]);

const digits = [9, 8, 7, 3, 4, 1];
bubbleSort(digits);
console.log(digits);
