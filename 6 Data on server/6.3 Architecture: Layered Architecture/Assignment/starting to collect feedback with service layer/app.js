import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedbacks from "./feedbackControllers.js" 
const app = new Hono();

// let count = 0;

app.get("/feedbacks/:id",feedbacks.getFeedback );

app.post("/feedbacks/:id",feedbacks.incrementAndGetFeedback );




export default app;
