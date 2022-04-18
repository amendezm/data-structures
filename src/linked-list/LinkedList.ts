class LinkedList<T> {
  size: number;
  head: ListNode<T>;
  tail: ListNode<T>;

  constructor() {
    this.size = 0;
    this.head = this.tail = null;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }

  push(value: T) {
    const newNode = new ListNode<T>(value);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  forEach(callBack: (item: T, index: number) => void) {
    let current = this.head;
    let index = 0;
    while (current) {
      callBack(current.value, index++);
      current = current.next;
    }
  }

  filter(callBack: (item: T, index: number) => boolean) {
    const newList = new LinkedList<T>();
    this.forEach((item, index) => {
      if (callBack(item, index)) {
        newList.push(item);
      }
    });
    return newList;
  }

  map(callBack: (item: T, index: number) => any) {
    const newList = new LinkedList<T>();
    this.forEach((item, index) => {
      newList.push(callBack(item, index));
    });
    return newList;
  }

  reduce<G>(callBack: (prev: G, item: T, index: number) => G, initialValue: G) {
    let previous = initialValue;
    this.forEach((item, index) => {
      previous = callBack(previous, item, index);
    });
    return previous;
  }

  print() {
    this.forEach((item) => console.log(item));
  }
}

class ListNode<T> {
  value: T;
  next: ListNode<T>;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export { LinkedList };
