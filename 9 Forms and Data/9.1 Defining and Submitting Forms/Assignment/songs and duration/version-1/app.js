import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as songsService from "./songsService.js"
const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();



app.get("/", (c) => {
  return c.html(eta.render("index.eta", songsService.listSongs()));
});

app.post("/songs", async (c) => {
  const body = await c.req.parseBody();
  songsService.setSongs(body)

  return c.redirect("/");
});

export default app;


// curl -X POST localhost:8000/songs -d "name=theStart&duration=20"
// curl localhost:8000/