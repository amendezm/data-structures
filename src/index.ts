import { LinkedList } from "./linked-list/LinkedList";

const list = new LinkedList<number>();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

const filteredList = list.filter((item) => item < 3);
const mappedList = list.map((item) => item * 3);
const value = list.reduce((prev, item) => prev + item, 0);

console.log(value);
