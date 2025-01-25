import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";


// schema  obeject
const validator = z.object({
  email:z.string().email(),
})



let result = validator.safeParse("this-is-an@email.com");
console.log(result);


//validating a proper object 
result = validator.safeParse({ email: "this-is-an@email.com" });
console.log(result);