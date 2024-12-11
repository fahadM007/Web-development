import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono(); // object instantiation 

let count = 3; // variable to store the needed data in memory 

//route definition handler function 
app.get("/", 

(c) => {
let message = "Kaboom!";
if(count > 0) {
  message = `${count}`;
  count = count - 1;
}
return c.text(message)
});


export default app