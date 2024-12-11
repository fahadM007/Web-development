import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
// lets import the function getCount using namespace imports or named imports 
import * as visits from './countService.js';

const app = new Hono(); // object instantiation 



app.get("/", async (c)=> {
  await visits.incrementCount()
 return c.text("Hello world!")

});

app.get("/visits", async (c)=> {
  
  return c.text(`Visit count: ${await visits.getCount()}`);
})



Deno.serve(app.fetch);
