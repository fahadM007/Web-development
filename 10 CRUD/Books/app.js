//import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as bookController from "./bookController.js";
// const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

app.get("/books", bookController.showForm);
app.post("/books",bookController.createBook);
app.get("/books/:id", bookController.showBook);
app.post("/books/:id", bookController.updateBook);
app.post("/books/:id/delete", bookController.deleteBook);


export default app;

//deno run --watch --allow-net --allow-read app.js
//deno run --watch --allow-net --allow-read --unstable-kv app-run.js