import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";

import * as todoService from './todoService.js';

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });


// shows the form 
const showForm = async (c) => {
  return c.html(
    eta.render("todos.eta", { todos: await todoService.listTodos() }),
  );
};



// controller function that handles the post request
const createTodo = async (c) => {
  const body = await c.req.parseBody();
  console.log(body);
  await todoService.createTodo(body);
  return c.redirect("/todos");
};

//controller function that shows individual todos 

const showTodo = async (c) => {
  const id = c.req.param("id");

  return c.html(
    eta.render("todo.eta", { todo: await todoService.getTodo(id) }),
  );
}

//writing a function that updates a todo
const updateTodo = async (c) => {
  const id = c.req.param("id");
  const body = await c.req.parseBody();
  await todoService.updateTodo(id,body)
  return c.redirect(`/todos/${id}`);
};

//create a function that delets a todo 

const deleteTodo = async(c) => {
  const id = await c.req.param("id");
  await todoService.deleteTodo(id);
  return c.redirect("/todos");
}


export { createTodo, showForm, showTodo, updateTodo,deleteTodo };
