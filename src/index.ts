import { Observable } from "./observable";

const observable = new Observable((subscribe) => {
  console.log("START");
  subscribe.next(1);
  subscribe.next(2);
  subscribe.next(3);
  console.log("END");
});

observable.subscribe({
  next: (x) => {
    console.log(x);
  },
});
