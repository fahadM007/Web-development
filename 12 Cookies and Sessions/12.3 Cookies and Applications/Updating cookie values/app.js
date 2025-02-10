import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
  getCookie,
  setCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const app = new Hono();

app.get("/", (c) => {
  let count = getCookie(c, "count") ?? 0;
  count = Number(count) + 1;
  setCookie(c, "count", `${count}`);
  return c.text(`Hello cookies! -- ${count}`);
});

Deno.serve(app.fetch);


// curl -v -H localhost:8000
// ...
// < HTTP/1.1 200 OK
// < set-cookie: count=1
// ...
// Hello cookies -- 1!
// curl -v -H "Cookie: count=1" localhost:8000
// ...
// < HTTP/1.1 200 OK
// < set-cookie: count=2
// ...
// Hello cookies -- 2!
// curl -v -H "Cookie: count=2" localhost:8000
// ...
// < HTTP/1.1 200 OK
// < set-cookie: count=3
// ...
// Hello cookies -- 3!