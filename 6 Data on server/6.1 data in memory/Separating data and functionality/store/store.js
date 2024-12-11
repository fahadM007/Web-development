
//define a variable that stores value in memory 
let store = 0;

// define a function that returns the store value 

const getStore = () => {
  return store;
}

// define a function that sets the store value 

const setStore = (s) => {
  console.log(s);
  return store = s;
 
}

// export the function 

export {setStore,getStore};

