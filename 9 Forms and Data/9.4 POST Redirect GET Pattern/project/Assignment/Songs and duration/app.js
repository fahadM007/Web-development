import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

const data = {
  songs: [
    { song: "Dont make the same mistake", duration: 20 },
    { song: "keep quite", duration: 10 },
    { song: "Usikere watu", duration: 50 },
    { song: "opinions dont matter", duration: 200 },
  ],
};

app.get("/", (c) => {
  return c.html(eta.render("index.eta", data));
});

export default app;
