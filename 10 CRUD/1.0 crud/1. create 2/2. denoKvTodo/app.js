import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

import * as todoController from "./todoControllers.js";

const app = new Hono();

//  route that that render the todo form
app.get("/main", todoController.showForm);

// route that add a todo on a post request
app.post("/todos", todoController.createTodo);

export default app;
