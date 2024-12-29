import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedback from "./feedback.js" 
const app = new Hono();

// let count = 0;

app.get("/feedbacks/:id", async (c) => {
  const id = c.req.param("id");
 return  c.text(`Feedback 1: ${ (await feedback.getFeedback(id))}`)
} );

app.post("/feedbacks/:id", async (c) => {
  const id = c.req.param("id");
  await feedback.incrementFeedback(id);
  
  return c.text();

});




export default app;
