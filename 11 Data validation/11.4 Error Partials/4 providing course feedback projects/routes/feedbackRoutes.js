import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as feedbacksController from "../controllers/feedbacksController.js";

const feedbackRoutes = new Hono();

// General Feedback Routes
feedbackRoutes.get("/", feedbacksController.showFeedback);
feedbackRoutes.get("/feedbacks/:id", feedbacksController.getFeedbackCount);
feedbackRoutes.post("/feedbacks/:id", feedbacksController.incrementFeedbackCount);

export default feedbackRoutes;