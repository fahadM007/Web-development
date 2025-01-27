
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.get("/", (c)=> {
  return c.html(` <form method="POST" action="/emails">
    <input type="email" name="email" />
    <input type="submit" />
  </form>`)
})

app.post("/emails", async (c) => {
  const body = await c.req.parseBody();
  console.log(body);
  //lets check of the data submitted has @ symbol 
  // the body comes as an object 
  if (!body || !body.email || !body.email.includes("@")){
    return c.text("not ok")
  }
  return c.text("ok");
});

Deno.serve(app.fetch);


// deno run --watch --allow-net app.js 
//curl -X POST -d email="This is not an email" localhost:8000/emails