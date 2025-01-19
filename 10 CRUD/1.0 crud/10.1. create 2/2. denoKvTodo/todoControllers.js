import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";

import * as todoService from './todoService.js';

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const showForm = (c) => {
  return c.html(eta.render("todos.eta"));
};

function createTodo (c) {
  const body =  c.req.parseBody();
  console.log(body);
 todoService.createTodo(body);
  return c.redirect("/main");
}

const createTodo = function(c)
{
  const body =  c.req.parseBody();
  console.log(body);
   todoService.createTodo(body);
  return c.redirect("/main");
}


// controller function that handles the post request
const createTodo = async (c) => {
  const body = await c.req.parseBody();
  console.log(body);
  await todoService.createTodo(body);
  return c.redirect("/main");
};

export { createTodo, showForm };
