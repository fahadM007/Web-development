import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const eta = new Eta({ 
  //normal object which comes from the option/properties objects 
  views: `${Deno.cwd()}/templates/` 
}); //created an instance of the eta class

const app = new Hono();

app.get("/", (c) => c.html(eta.render("index.eta")));

Deno.serve(app.fetch);
