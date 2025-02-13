import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

const data = {
  todos: [
    {task:"Write a TODO app", status: "false"},
    {task:"Show a list of TODOs", status: "true"},
    {task:"Move TODOs to a database", status: "false"},
    {task:"Allow marking TODOs done", status: "false"},
    
  ],
};

app.get("/", (c) => {
  return c.html(eta.render("index.eta", data));
});

export default app;