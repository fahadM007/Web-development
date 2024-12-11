import * as countService from "./countService.js";


// countController.js – Acts as the intermediary that directs requests to the service functions and formats the response.

const getCount = (c) => {
  const count = countService.getCount();
  return c.text(`Current count: ${count}`);
}
const incrementAndGetCount = (c) => {
  const updatedCount = countService.incrementCount();
  return c.text(`Updated count: ${updatedCount}`);
}

export {getCount, incrementAndGetCount}