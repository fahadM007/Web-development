const database = {
  '["todos", "f47ac10b-58cc-4372-a567-0e02b2c3d479"]': { 
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479", 
    todo: "Buy groceries" 
  },
  '["todos", "c56a4180-65aa-42ec-a945-5fd21dec0538"]': { 
    id: "c56a4180-65aa-42ec-a945-5fd21dec0538", 
    todo: "Do homework" 
  }
};

console.log(database);
// function that createTodo to the database 

const createTodo = async (body) => {
   // Generate a unique ID for the new todo
   const todoId = crypto.randomUUID();
   // Create a composite key for the new todo using ["todo", id]
   const compositeKey = `["todos", "${todoId}"]`;

   //create a new todo object 
   const newTodo = {
    id: todoId,
    todo: body
  };

  // Add the new todo to the mock database using the composite key

  database[compositeKey] = newTodo;

// Return the created todo (optional, for logging or further processing)
console.log(newTodo);
  return newTodo;
}


export {createTodo}