import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as feedbacks from "./feedbacks.js";
import * as courseController from "./courseController.js";


const app = new Hono();


app.get("/", async (c) => {
  return c.html(eta.render("index.eta"));
});

app.get("/feedbacks/:id", async (c) => {
  const id = c.req.param("id");
  const feedbackCount = await feedbacks.getFeedbackCount(id);
  return c.text(`Feedback ${id}: ${feedbackCount}`);
});

app.post("/feedbacks/:id", async (c) => {
  const id = c.req.param("id");
  await feedbacks.incrementFeedbackCount(id);
  return c.redirect("/");
});

//courses section 

app.get("/courses", courseController.showForm);
app.get("/courses/:id", courseController.showCourse);


//post request 
app.post("/courses", courseController.createCourse);
app.post("/courses/:id/delete", courseController.deleteCourse);

// Feedback Routes (Updated to be Course-Specific)

app.get("/courses/:courseId/feedbacks/:feedbackId", courseController.showFeedback);


app.post("/courses/:courseId/feedbacks/:feedbackId", courseController.rateCourse);







export default app;

// curl "localhost:8000/feedbacks/1"
// curl -X POST  "localhost:8000/feedbacks/1"