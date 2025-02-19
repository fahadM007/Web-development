import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
  getSignedCookie,
  setSignedCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const sessionCounts = new Map();
const secret = "secret";

import * as feedbacks from "./feedbacks.js";
import * as courseController from "./courseController.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });
const app = new Hono();


// Session management: Get or create a session ID
const getAndIncrementCount = async (sessionId) => {
  let count = await feedbacks.getFeedbackCount(sessionId, "session");
  count = count ?? 0;
  count++;

  // Update the session count in Deno KV
  await feedbacks.incrementFeedbackCount(sessionId, "session", count);
  return count;
};

// Route to display feedback form or thank you message
app.get("/courses/:courseId/feedbacks/:feedbackId", async (c) => {
  const courseId = c.req.param("courseId");
  const feedbackId = c.req.param("feedbackId");

  // Get session ID from the signed cookie, or generate a new one if not set
  const sessionId = await getSignedCookie(c, secret, "sessionId") ?? crypto.randomUUID();

  // Set the session ID cookie for future requests
  await setSignedCookie(c, "sessionId", sessionId, secret, { path: "/" });

  // Increment the session feedback count
  const count = await getAndIncrementCount(sessionId);

  // Render the feedback form or thank you message based on the count
  return c.html(eta.render("index.eta", { count, courseId, feedbackId }));
});

// Route to handle feedback submission
app.post("/courses/:courseId/feedbacks/:feedbackId", async (c) => {
  const courseId = c.req.param("courseId");
  const feedbackId = c.req.param("feedbackId");

  // Increment the feedback count for the specific course and feedback ID
  await feedbacks.incrementFeedbackCount(courseId, feedbackId);

  // Redirect to the course page after submitting feedback
  return c.redirect(`/courses/${courseId}`);
});

//date who gave that feedback stateless 
// stateless not saving any cookies
// token sent to the client will send the token 
// JWT TOKEN //  
app.get("/courses", courseController.showForm);
app.get("/courses/:id", courseController.showCourse);
app.post("/courses", courseController.createCourse);
app.post("/courses/:id/delete", courseController.deleteCourse);

export default app;

// deno run --watch --allow-net --allow-read --unstable-kv  app.js                          
