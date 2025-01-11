// function that createTodo to the database 
const createTodo = async (todo) => {
  // Generate a unique ID for the new todo
   todo.id = crypto.randomUUID();
  // open a connection to denoKv database
  const kv = await Deno.openKv();
  // set the  data into the database using composite keys 
  await kv.set(["todos",todo.id], todo);

  for await (const entry of kv.list({ prefix: ["todos"] })) {
    console.log(entry);
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


export { createTodo, listTodos }