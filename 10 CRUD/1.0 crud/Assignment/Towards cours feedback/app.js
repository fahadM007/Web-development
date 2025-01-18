import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as bookController from "./bookController.js";

const app = new Hono();

app.get("/v1/books", bookController.showForm);
app.get("/v1/books/:id", bookController.showBook);
app.post("/v1/books", bookController.createBook);
app.post("/v1/books/:id", bookController.updateBook);
app.post("/v1/books/:id/delete", bookController.deleteBook);

export default app;