import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const emailValidator = z.object({
  email: z.string().email({ message: "The email was not a valid email Custom message." }),
});

const showForm = async (c) => {
  return c.html(
    eta.render("index.eta"),
  );
};

const validateEmail = async (c) => {
  const body = await c.req.parseBody();
  const validationResult = emailValidator.safeParse(body);
  console.log(validationResult)
  if (!validationResult.success) {
    return c.text(validationResult.error.issues[0].message);
  } else {
    return c.text("Valid email, thank you!");
  }
};

export { showForm, validateEmail };