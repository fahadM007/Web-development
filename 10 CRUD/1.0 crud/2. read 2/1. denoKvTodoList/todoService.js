// function that createTodo to the database 
const createTodo = async (todo) => {
   // Generate a unique ID for the new todo
   const id = crypto.randomUUID();
  

   // open a connection to denoKv database
   const kv = await Deno.openKv();
   // set the  data into the database using composite keys 
   await kv.set(["todos",id],todo);

   for await (const entry of kv.list({ prefix: ["todos"] })) {
    console.log(entry);
  }

}

//function to list all todos from the database 

const listTodos = async () => {
    // open a connection to denoKv database
    const kv = await Deno.openKv();
      const todos = [];
    const entries = await kv.list({prefix:["todos"]});

    for (const entry of entries)
    {
      todos.push(entry.value)
    }
return todos;
}


export {createTodo,listTodos}