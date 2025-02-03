import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
  getCookie,
  setCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const app = new Hono();

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

app.get("/" , (c) => {
  //he application looks for the name from cookies
 const body = {name: getCookie(c, "name")}; //only used when there isa cookies stored in the 
  return c.html(eta.render("index.eta", body));
})


app.post("/" , async (c) => {
  const body = await  c.req.parseBody();
  let name = getCookie(c,"name");
  //Once a name has been sent to the server, the name should be stored in a cookie
  setCookie(c,"name",`${body.name}`);
  return c.html(eta.render("index.eta",body))
})

export default app;