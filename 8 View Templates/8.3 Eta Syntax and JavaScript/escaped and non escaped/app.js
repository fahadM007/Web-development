import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

const data = {
  count: 0,
  secret: "Illuminati",
  heading: "Hello world!",
  variable: "<strong>Epic HTML!</strong>",
};

app.get("/", (c) => {
  data.count++;
  return c.html(eta.render("index.eta", data));
});

export default app