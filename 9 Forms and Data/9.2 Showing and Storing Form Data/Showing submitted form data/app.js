import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

app.get("/",  (c) => {
  return  c.html(eta.render("index.eta"));
});

app.post("/addresses", async (c) => {
  const body = await c.req.parseBody();
  console.log(body)
  return c.html(eta.render("index.eta",body));
});


Deno.serve(app.fetch);


//curl -X POST http://localhost:8000/addressess -d "name=Juma&address=Helsinki"
