import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

import * as feedBackService from "./feedback.js"







app.get("/feedbacks/:id", async (c) => {
  //lets extract the request parameter and store it in a variable 
  const id = c.req.param("id");
  const feedback =  await feedBackService.getFeedbackCount(id)
  return c.text(`Feedback ${id}: (${feedback})`)
})

app.post ("/feedbacks/:id", async (c) => {
  const id = c.req.param("id");
  await feedBackService.incrementFeedbackCount(id);
  
  return c.text("ok")
})

export default app;


//  curl localhost:8000/feedback/1 

//  curl -X POST http://localhost:8000/feedback/1