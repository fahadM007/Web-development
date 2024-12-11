// countService.js
// `countService.js – Contains the business logic, storing, retrieving, and updating the count.`

let count = 0; // "Database" for storing the count

// Function to get the current count
function getCount() {
  return count;
}

//Function to increment the count 

function incrementCount() {
  count++;
  return count;
}

export { getCount, incrementCount };