import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const eta = new Eta({ views: "templates" });

const app = new Hono()

//validation 

const validator = z.object({
  email: z.string().email(),
  yearOfBirth: z.coerce.number().min(1900).max(2030),
});


app.get("/", (c) => {
  return c.html(eta.render("index.eta"))
})

app.post("/emails", async (c) => {
  const body = await c.req.parseBody();

  const validationResult = validator.safeParse(body);
  console.log(validationResult.error.format());
  if(!validationResult.success){
    return c.html(eta.render("index.eta",body));
  }
  return c.text("ok");
})


Deno.serve(app.fetch);

/*curl -X POST -d email="valid@email.com" -d yearOfBirth="1899" localhost:8000/emails
not ok
curl -X POST -d email="valid@email.com" -d yearOfBirth="1900" localhost:8000/emails
ok
curl -X POST -d email="nonvalid@email" -d yearOfBirth="1900" localhost:8000/emails
not ok 

{
  _errors: [],
  yearOfBirth: { _errors: [ "Number must be greater than or equal to 1900" ] }
}


*/