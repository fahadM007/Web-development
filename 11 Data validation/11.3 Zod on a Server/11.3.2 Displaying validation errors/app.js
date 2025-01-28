import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const eta = new Eta({views:"templates"});

//we create a validation middleware  for the application

const validator = z.object({
  email: z.string().email({ message: "The email was not a valid email." }),
  yearOfBirth: z.coerce.number({
    message: "The year of birth was not a number.",
  })
    .min(1900, { message: "The year of birth cannot be smaller than 1900." })
    .max(2030, { message: "The year of birth cannot be larger than 2030." }),
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
 
  //validate form data 
  const validationResult = validator.safeParse(body);

  if(!validationResult.success) {
    //lets look for errors
    const errors = validationResult.error.format();
    console.log(errors);
    
    return c.html(eta.render("index.eta",{
      email:body.email ?? "",
      yearOfBirth:body.yearOfBirth ?? "",
      errors:errors, //Explicity pass errors 
    }))
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


{
  _errors: [],
  yearOfBirth: { _errors: [ "Number must be less than or equal to 2030" ] }
}
{ _errors: [], email: { _errors: [ "Invalid email" ] } }
*/