import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();
//multiple routes 
// app.get("/", (c) => c.text("The starting point."));
// app.post("/", (c) => c.text("Postman pat."));
// app.get("/it", (c) => c.text("I think so."));
// app.on("cats","/secrets", (c) => c.text("Meow!"));
// app.on("whats","/up", (c) => c.text("A movie!"));
app.get("*",(c) => c.text(`${c.req.method} ${c.req.path}`))


export default app;