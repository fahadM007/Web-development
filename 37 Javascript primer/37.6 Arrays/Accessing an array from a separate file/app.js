import * as queue from "./queue.js";

queue.enqueue("first");
queue.enqueue("second");
queue.enqueue("third");

while (!queue.isEmpty()) {
  console.log(queue.dequeue());
}
