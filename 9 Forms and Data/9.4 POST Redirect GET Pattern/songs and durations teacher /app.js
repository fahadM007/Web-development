import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

import * as songController from "./songController.js";




 const app = new Hono()

// app.get("/",(c) => {
 
//  return c.html(eta.render("index.eta"));
// });

// app.post("/songs", async (c) => {
//   // const body = await c.req.parseBody();
//   //return c.html(eta.render("index.eta"));
//   return c.redirect("/")

// })

app.get("/", songController.listSongs);
app.post("/songs", songController.addSongsAndListSongs);


 export default app;

 // deno run --allow-net --watch --allow-read app-run.js
 // deno run --allow-net --watch --unstable-kv --allow-read app-run.js