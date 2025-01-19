import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

import * as courseController from "./courseControllers.js";
import * as feedbackControllers from "./feedbackControllers.js";
const app = new Hono();

//  route that that render the course form
app.get("/courses", courseController.showForm);

//http://0.0.0.0:8000/courses


// route that add a course on a post request
app.post("/courses", courseController.createCourse);

// route that renders individual courses with function showCourse
app.get("/courses/:courseId", courseController.showCourse);




//route that updates the course on a post request

app.post("/courses/:courseId",courseController.updateCourse);

//route that deletes a specific course
app.post("/courses/:courseId/delete", courseController.deleteCourse);


//feedback routes 

app.get("/", feedbackControllers.showForm);

app.get("/feedbacks/:id", feedbackControllers.showFeedbacks);

app.post("/feedbacks/:id", feedbackControllers.createFeedbacks);

export default app;
