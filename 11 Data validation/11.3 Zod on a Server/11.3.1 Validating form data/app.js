import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const eta = new Eta({views:"templates"});

//we create a validation middleware  for the application

const validator = z.object({
  email: z.string().email(),
  yearOfBirth: z.coerce.number().min(1900).max(2030),
});

//initializes an instance of the Hono 

const app = new Hono();

//we create the first route of the application that send the webpage to the client when requested 
app.get("/",(c) => {
  return c.html(eta.render("index.eta"))
});

// create a post request to send the data from the client to the server using post method 

app.post("/emails", async (c) => {
  const body = await c.req.parseBody();
  // we need to take the body object into the validation to see if the data that is received  is valid data .'

  const validationResult = validator.safeParse(body);
  if(!validationResult.success) {
    console.log(validationResult);
    return c.html(eta.render("index.eta",body))
  }



  return c.text("ok")
})


//we start the server 
Deno.serve(app.fetch);


/*
{
  success: true,
  data: { email: "rashid50.fahad@gmail.com", yearOfBirth: 2030 }
}
*/