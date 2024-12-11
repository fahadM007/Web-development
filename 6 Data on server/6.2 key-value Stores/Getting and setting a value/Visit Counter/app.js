import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as visit from "./visits.js";

const app = new Hono();

app.get("/", async (c) => {
  await visit.incrementVisits();
  return c.text("hello world");
});

app.get("/visits", async (c) => {
  return c.text(`Visit count: ${await visit.getVisits()}`);
});

export default app;