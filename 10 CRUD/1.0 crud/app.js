
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";



import * as todoController from "./todoControllers.js";

const app = new Hono();

app.get("/todos", todoController.showForm);

export default app;

