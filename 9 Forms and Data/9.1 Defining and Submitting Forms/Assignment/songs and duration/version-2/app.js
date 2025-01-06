
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";


import * as songController from "./songController.js";


const app = new Hono();



app.get("/",songController.renderSongListPage );

app.post("/songs",songController.handleSongSubmission);

export default app;


// curl -X POST localhost:8000/songs -d "name=theStart&duration=20"
// curl localhost:8000/