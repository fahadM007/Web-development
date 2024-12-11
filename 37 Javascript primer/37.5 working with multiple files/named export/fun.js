const hello = () => {
  console.log("Hello world!");
};

const greeting = (who = "John Doe") => {
  return `Hello ${who}!`;
};

//named export using destructuring 
export { greeting, hello };