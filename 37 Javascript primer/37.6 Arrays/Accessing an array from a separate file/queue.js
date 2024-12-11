const list = [];

const dequeue = () => {
  if (isEmpty()) {
    return null;
  }

  return list.shift();
};

const enqueue = (element) => {
  return list.push(element);
};

const isEmpty = () => {
  return list.length === 0;
};

export { dequeue, enqueue, isEmpty };
