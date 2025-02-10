import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
  getSignedCookie,
  setSignedCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const sessionCounts = new Map();
const app = new Hono();
const secret = "secret";

const getAndIncrementCount = (sessionId) => {
  let count = sessionCounts.get(sessionId) ?? 0;
  count++;
  sessionCounts.set(sessionId, count);
  return count;
};

app.get("/", async (c) => {
  const sessionId = await getSignedCookie(c, secret, "sessionId") ??
    crypto.randomUUID();
  await setSignedCookie(c, "sessionId", sessionId, secret, {
    path: "/",
  });
  const count = getAndIncrementCount(sessionId);
  return c.text(`Hello sessions! -- ${count}`);
});

Deno.serve(app.fetch);

//curl -v -H "Cookie: sessionId=66e1a837-d8f0-40e1-943d-e33c48d496c3.FJxoAPApMmtElx%2BwA4uPpboT%2FXLdShzQqPdIH%2FY%2FqOM%3D" localhost:8000