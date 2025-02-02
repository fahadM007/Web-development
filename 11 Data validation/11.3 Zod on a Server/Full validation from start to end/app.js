import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const eta = new Eta({ views: "templates" });

const app = new Hono()

//validation with custom validation error messages with attribute message 

const validator = z.object({
  email: z.string().email({ message: "The email was not a valid email." }),
  yearOfBirth: z.coerce.number({
    message: "The year of birth was not a number.",
  })
    .min(1900, { message: "The year of birth cannot be smaller than 1900." })
    .max(2030, { message: "The year of birth cannot be larger than 2030." }),
});


app.get("/", (c) => {
  return c.html(eta.render("index.eta"))
})

app.post("/emails", async (c) => {
  const body = await c.req.parseBody();

  const validationResult = validator.safeParse(body);

  if (!validationResult.success) {
    return c.html(eta.render("index.eta", {
      email: body.email,
      yearOfBirth: body.yearOfBirth,
      errors: validationResult.error.format(),
    }),
    );
  }
  return c.text("ok");
})


Deno.serve(app.fetch);

/*
{ email: "valid@email.com", yearOfBirth: "1899" }

curl -X POST -d email="valid@email.com" -d yearOfBirth="1899" localhost:8000/emails
not ok
curl -X POST -d email="valid@email.com" -d yearOfBirth="1900" localhost:8000/emails
ok
curl -X POST -d email="nonvalid@email" -d yearOfBirth="1900" localhost:8000/emails
not ok
{ email: "valid@email.com", yearOfBirth: "1899" }
{
  _errors: [],
  yearOfBirth: { _errors: [ "Number must be greater than or equal to 1900" ] }
}


*/

// adding a new attribute to the body
// the attribute errors is an object the 
/*The attribute errors is an object with attributes corresponding to the form field names. For each form field name, given that there are validation errors, the associated attribute contains a list of errors under the attribute _errors. As an example, if the email validation would fail, specific errors for the email would be found at errors.email._errors.
 
{
_errors: [],
email: { _errors: [ "Invalid email" ] },
yearOfBirth: { _errors: [ "Number must be greater than or equal to 1900" ] }
}





*/