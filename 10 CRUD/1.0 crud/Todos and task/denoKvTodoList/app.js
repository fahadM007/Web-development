import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

import * as todoController from "./todoControllers.js";

const app = new Hono();

//  route that that render the todo form
app.get("/todos", todoController.showForm);

// route that renders individual todos with function showTodo
app.get("/todos/:id", todoController.showTodo);

// route that renders individual task with function show task 
app.get("/todos/:id/tasks", todoController.showTask);

// route that add a todo on a post request
app.post("/todos", todoController.createTodo);

//route that updates the todo on a post request

app.post("/todos/:id",todoController.updateTodo);

//route that deletes a specific todo
app.post("/todos/:id/delete", todoController.deleteTodo);

export default app;
