import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
  getCookie,
  setCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const app = new Hono();

// Configure Eta template engine to look for templates in the "templates" directory
const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

/**
 * Handles GET requests to "/"
 */
app.get("/", (c) => {
  // 1️⃣ The server checks if a "name" cookie exists in the request.
  const body = { name: getCookie(c, "name") };

  // 2️⃣ If a cookie exists, its value is stored in `body.name`.
  //    If no cookie is found (first visit), `body.name` will be `undefined`.

  // 3️⃣ The server renders the "index.eta" template and passes the `body` data.
  return c.html(eta.render("index.eta", body));
});

/**
 * Handles POST requests to "/"
 */
app.post("/", async (c) => {
  // 1️⃣ Parse the form data sent by the user (e.g., { name: "Alice" })
  const body = await c.req.parseBody();

  // 2️⃣ Retrieve any existing "name" cookie (if present).
  let name = getCookie(c, "name");

  // 3️⃣ Store the new name in a cookie.
  //    This means the next time the user visits, the server will remember their name.
  setCookie(c, "name", `${body.name}`);

  // 4️⃣ Render the "index.eta" template again, now with the submitted name.
  return c.html(eta.render("index.eta", body));
});

export default app;

