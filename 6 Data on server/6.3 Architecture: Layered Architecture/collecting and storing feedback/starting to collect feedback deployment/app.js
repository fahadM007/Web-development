import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedbacks from "./feedbacks.js"

// Initialize Hono app
const app = new Hono();





app.get("/feedbacks/:id", async (c)=>{
  const id = c.req.param("id");
  const feedback = await feedbacks.getFeedbacks(id)
  return c.text(`Feedback ${id}: ${feedback}`);
});




// incrementing using the post method path variables from Hono

app.post("/feedbacks/:id",
   async (c) => {
  const id = c.req.param("id");
  // Increment the feedback count for feedback value 1
 await feedbacks.incrementFeedbacks(id);
  // Return the updated count as a text response
  return c.text("");
});






export default app;