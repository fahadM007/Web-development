import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
  getCookie,
  setCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const app = new Hono();

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

// add functionality 

app.get("/", (c) => {
  getCookie(c,"name",)
  return c.html(eta.render("index.eta"))
})

app.post("/", (c) => {
  const body = c.req.pareBody();
  
  return c.html(eta.render("index.eta",body))
})

export default app;
