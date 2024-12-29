import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

const getHTML = (title) => {
  return `<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
</head>
<body>
  <h1>${title}</h1>
  <nav>
    <ul>
      <li><a href="/">Index</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact us</a></li>
    </ul>
  </nav>
</body>`
};

app.get("/", (c) => {
  return c.html(getHTML("index"))
})

app.get("/about", (c) => {
  return c.html(getHTML("About"))
})

app.get("/contact", (c) => {
  return c.html(getHTML("Contact"))
})
Deno.serve(app.fetch);