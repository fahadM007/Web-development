import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

import * as songService from "./songServices.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();



app.get("/", (c) => {
  const data = songService.getSongData();
  return c.html(eta.render("index.eta",data));
});

app.post("/", async (c) => {
  const body = await c.req.parseBody();
  console.log(body);
  const data = songService.setSongData(body);
  return await c.html(eta.render("index.eta",data));
});

export default app;