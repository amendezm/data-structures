class Subscriber<T> {
  values: T[] = [];

  constructor() {}

  next<U extends T>(value: U) {
    this.values.push(value);
  }
}

export class Observable<T> {
  subscriber: Subscriber<T>;

  constructor(subscriberFn: (subscriber: Subscriber<T>) => void) {
    this.subscriber = new Subscriber<T>();
    subscriberFn(this.subscriber);
  }

  subscribe({ next }: { next: (value: T) => void }) {
    this.subscriber.values.forEach((value) => next(value));
  }
}

// const observable = new Observable((subscribe) => {
//   subscribe.next(1);
//   subscribe.next(2);
//   subscribe.next(3);
// });

// observable.subscribe({
//   next: (x) => {
//     console.log(x);
//   },
// });
