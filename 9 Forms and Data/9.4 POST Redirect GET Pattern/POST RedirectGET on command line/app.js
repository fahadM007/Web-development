import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.get("/", (c) => c.html(`
<form method="POST" action="/">
  <input type="submit"></input>
</form>
`));

app.post("/", (c) => c.redirect("/"));


Deno.serve(app.fetch);