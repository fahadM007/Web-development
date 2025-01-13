// function that createTodo to the database 
const createTodo = async (todo) => {
  // Generate a unique ID for the new todo
   todo.id = crypto.randomUUID();
  // open a connection to denoKv database
  const kv = await Deno.openKv();
  // set the  data into the database using composite keys 
  await kv.set(["todos",todo.id], todo);

  for await (const entry of kv.list({ prefix: ["todos"] })) {
    
  }

}

//function to list all todos from the database 

const listTodos = async () => {
  const kv = await Deno.openKv();
  const todoEntries = await kv.list({ prefix: ["todos"] });
  const todos = [];
  for await (const entry of todoEntries) {
    todos.push(entry.value);
  }

  return todos;
};

const getTodo = async (id) => 
{
  const kv = await Deno.openKv();
  const todo = await kv.get(["todos", id]);
  return todo?.value ?? {};
  /*
  if (todo && todo.value !== undefined && todo.value !== null) {
  return todo.value;
} else {
  return {};
}

  
  */ 
}

//writing function to update the todo 

const updateTodo = async (id,todo) => {
  //Assign the id of the todo to the object of the todo 
  todo.id = id; //the identifier is included in the todo object 
  const kv = await Deno.openKv();
  await kv.set(["todos",id],todo)
}

export { createTodo, listTodos, getTodo,updateTodo }