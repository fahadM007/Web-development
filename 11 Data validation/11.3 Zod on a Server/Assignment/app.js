import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";


const eta = new Eta({views:"templates"});


const validator = z.object({
  email:z.string().email(),
})

const app = new Hono();


//first route 
app.get("/", (c) => {
  return c.html(eta.render("index.eta"));
})


//second route that post the email data to the server 

app.post("/emails", async (c) => {
  const body = await c.req.parseBody();
  const validationResult = validator.safeParse(body);
  if(!validationResult.success)
  {
    return c.text("Not a valid email, try again.");
  }

  return c.text("Valid email, thank you!");
})



export default app;