import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as addressServices from "./addressService.js"

const eta = new Eta({views:`${Deno.cwd()}/templates/`})

const app = new Hono();

let data = {
}

app.get("/", (c) => {
  return c.html(eta.render("index.eta",addressServices.getData));
});


app.post("/addresses",async (c) => {
  const body = await c.req.parseBody();
  console.log(body);
  addressServices.setData(body);
  return c.html(eta.render("index.eta",data));
});


export default app;