import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.get("/", (c) =>
  c.html(`<form method="POST" action="/authenticate">
  <input type="password" name="password" />
  <input type="submit" />
</form>`));

app.post("/authenticate", async (c) => {
  const body = await c.req.parseBody();
  if (body.password === "very secret password") {
    return c.text("You knew the password, you are authenticated!");
  }
  return c.text("Invalid password, you are not authenticated!", 401);
});

Deno.serve(app.fetch);