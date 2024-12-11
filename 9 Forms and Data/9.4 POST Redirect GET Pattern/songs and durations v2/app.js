import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
 
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";

const app = new Hono();

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });


 

app.get("/",async (c) => {
  const data = {
    songs: await listSongs(),
  }

 return c.html(await eta.render("index.eta",data));
});

app.post("/songs", async (c) => {
  const body = await c.req.parseBody();
  await addSongs(body);
  const data = { songs: await listSongs() }
  return c.html(await eta.render("index.eta",data));
 })


 // function to add songs when post request is made 
 const addSongs = async (songData) => {
  const kv = await Deno.openKv();
  await kv.set(["songs", songData.name], songData)
 };

 // function to list the songs in the data base 

 const listSongs = async () => {
  const kv = await Deno.openKv();
  const songData =  kv.list({ prefix: ["songs"] })
  const songs = [];
 
  for await (const entry of songData) {
    if(entry != null && entry.value !=null){
      songs.push(entry.value)
    }
  }
  return songs;

 }

 export default app;