import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

import  * as countController from "./countControllers.js"

const app = new Hono();

app.get("/", countController.getCount);

app.post("/", countController.incrementAndGetCount);

export default app;

//route handler hono call function by reference 