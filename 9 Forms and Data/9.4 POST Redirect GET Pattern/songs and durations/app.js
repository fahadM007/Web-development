import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
 
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";

const app = new Hono();

const eta = new Eta({views: `${Deno.cwd()}/templates/`});

let data = {};

app.get("/", (c) => {
 return c.html(eta.render("index.eta",data));
});

app.post("/songs", async (c) => {
  const body = await c.req.parseBody();
  data = body
  return c.html(eta.render("index.eta",data));
 });
 

 export default app;