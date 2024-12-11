import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedbacks from "./feedback.js"
// Initialize Hono app
const app = new Hono();





app.get("/feedback/:id", async (c)=>{
  const id = c.req.param("id")
  return c.text(`Feedback ${id}: (${await feedbacks.getFeedbacks(id)})`)
})




// incrementing using the post method
// lets use path variables from hono

app.post("/feedback/:id", async (c) => {
  const id = c.req.param("id")
  // Increment the feedback count for feedback value 1
await feedbackServices.incrementFeedBack(id)
  // Return the updated count as a text response
  return c.text(`updated`);
});






export default app;