import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as courseController from "../controllers/courseController.js";

const courseRoutes = new Hono();

// Course pages
courseRoutes.get("/", courseController.showForm);
courseRoutes.get("/:id", courseController.showCourse);
courseRoutes.post("/", courseController.createCourse);
courseRoutes.post("/:id/delete", courseController.deleteCourse);

// Course-Specific Feedback
courseRoutes.get("/:courseId/feedbacks/:feedbackId", courseController.showFeedback);
courseRoutes.post("/:courseId/feedbacks/:feedbackId", courseController.rateCourse);

export default courseRoutes;