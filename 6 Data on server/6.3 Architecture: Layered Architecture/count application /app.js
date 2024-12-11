//importing Hono for routing 
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as countController from "./countController.js";
import { getCount } from "./countService.js";
// import * as countService from "./countService.js";



// Initialize Hono app
const app = new Hono();

// // Define a simple in-memory "database" to store the count
// let count = 0;

// GET route to retrieve the current count
// app.get("/", (c) => {
//   return c.text(`Current count: ${count}`);
// });
// app.get("/", (c) => {
//   const count = countService.getCount();
//   return c.text(`Current count: ${count}`);
// });
app.get("/", countController.getCount);

// POST route to increment the count
// app.post("/", (c) => {
//   count += 1;
//   return c.text(`Updated count: ${count}`);
// });
// app.post("/", (c) => {
//   const updatedCount = countService.incrementCount();
//   return c.text(`Updated count: ${updatedCount}`);
// });

app.post("/", countController.incrementCount);


// Start the server
Deno.serve(app.fetch);