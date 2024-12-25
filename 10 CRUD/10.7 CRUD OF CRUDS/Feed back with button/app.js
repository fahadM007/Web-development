
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedbacks from "./feedbacks.js"
import * as courseController from './courseController.js';

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

// Initialize Hono app
const app = new Hono();

app.get("/feedbacks/:id", async (c) => {
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
    return c.redirect("/");
  });

app.get("/", async (c) => {
  return c.html(eta.render("index.eta"))
})


app.get("/courses", courseController.showForm);
app.post("/courses", courseController.createCourse);
app.get("/courses/:courseId", courseController.showCourse);
app.post("/courses/:courseId", courseController.updateCourse);
app.post("/courses/:courseId/delete", courseController.deleteCourse);

export default app;