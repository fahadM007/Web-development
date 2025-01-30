import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import courseRoutes from "./routes/courseRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

const app = new Hono();

// Mount Routes
app.route("/courses", courseRoutes);
app.route("/", feedbackRoutes);

export default app;

// curl "localhost:8000/feedbacks/1"
// curl -X POST  "localhost:8000/feedbacks/1"