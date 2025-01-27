import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";


// the form that submits the data comes in form of an object this allows us to validate the data inside the object 
const validator = z.object({
  email:z.string().email(),
});

let result = validator.safeParse("example@email.com");
console.log("invalidResults:",JSON.stringify(result,null,2));
//console.log(result);

result = validator.safeParse({email:"example@email.com"});
console.log(result);



