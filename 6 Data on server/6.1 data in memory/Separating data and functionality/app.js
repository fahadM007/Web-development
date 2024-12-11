import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
// lets import the function getCount using namespace imports or named imports 
import * as countService from './countService.js';

const app = new Hono(); // object instantiation 



app.get("/", (c)=> {
 
 return c.text(countService.getCount())

});

app.post("/", (c)=> {
  countService.incrementCount()
  return c.text(countService.getCount());
})



Deno.serve(app.fetch);