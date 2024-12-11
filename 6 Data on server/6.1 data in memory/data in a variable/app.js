import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono(); // object instantiation.

// define a variable to store the data in memory 

let count = 0;

// route definition and the handler function // this is a route handler for an http get request 
app.get("/", (c) => c.text(count));

//add another route that increments the count 

app.post("/", (c) => {
  count++;
 return c.text(count)
}); 


Deno.serve(app.fetch)