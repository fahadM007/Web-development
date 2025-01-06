import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as addressService from "./addressService.js"
const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

// let storedData = {
  
// };


app.get("/", (c) => {
  return c.html(eta.render("index.eta",addressService.getStoredData()));
});

app.post("/addresses", async (c) => {
  const body = await c.req.parseBody();
  console.log(body);
  addressService.setStoredData(body)
  return await c.html(eta.render("index.eta",addressService.getStoredData()));
});

 Deno.serve(app.fetch)

 //optional chaining 