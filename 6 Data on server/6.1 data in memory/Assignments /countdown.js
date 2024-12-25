import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

let count = 3; //data stored in a variable 

// app.get("/", (c) => c.text(count));

app.get("/", (c) => {
  
 let message = "Kaboom!";
 if (count > 0)
 {
  message = count; // could be kept in a function
  count = count -1; // could be kep in  a separate function 
 }
    
  
  
  return c.text(message)
});



Deno.serve(app.fetch);