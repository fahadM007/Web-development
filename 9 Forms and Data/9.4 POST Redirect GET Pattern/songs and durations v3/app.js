import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
 
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";

import  *  as songsService from "./songService.js"

const app = new Hono();

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });


 

app.get("/",async (c) => {
  const data = {
    songs: await songsService.listSongs(),
  }
  console.log(data.songs);
 return c.html(await eta.render("index.eta",data));
});

app.post("/songs", async (c) => {
  const body = await c.req.parseBody();
  await songsService.addSongs(body);
  const data = { songs: await songsService.listSongs() }
  console.log(data.songs);
  return c.html(await eta.render("index.eta",data));
 
 })



 export default app;