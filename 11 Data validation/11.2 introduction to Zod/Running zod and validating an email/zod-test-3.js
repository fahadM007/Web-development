import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const bookValidator = z.object({
    name:z.string(),
    pages:z.number().gt(1),
}); 

const personValidator = z.object({
    name:z.string(),
    email:z.string().email(),
    age:z.number().min(0).max(120),
    
}); // fix
let result = bookValidator.safeParse({name:"juma",email:"this-is-an@email.com"})
console.log(result)
export { bookValidator, personValidator };