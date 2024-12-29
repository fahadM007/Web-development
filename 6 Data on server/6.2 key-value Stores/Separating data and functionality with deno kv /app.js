import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as countService from "./countService.js";

const app = new Hono();

app.get("/", async (c) => c.text(await countService.getCount()));

app.post("/", async (c) => {
  await countService.incrementCount();
  return c.text(await countService.getCount());
});

Deno.serve(app.fetch);