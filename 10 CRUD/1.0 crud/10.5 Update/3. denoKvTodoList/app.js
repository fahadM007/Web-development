import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

import * as todoController from "./todoControllers.js";

const app = new Hono();

//  route that that render the todo form
app.get("/todos", todoController.showForm);

// route that renders individual todos with function showTodo
app.get("/todos/:id", todoController.showTodo);

// route that add a todo on a post request
app.post("/todos", todoController.createTodo);

//route that updates the todo on a post request

app.post("/todos/:id",todoController.updateTodo);

export default app;
