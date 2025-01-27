import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";



const validate = z.object({
  email:z.string().email(),
  yearOfBirth:z.coerce.number().min(1900).max(2030),
})

let result = validate.safeParse({
  email:"lachi@email.com",
  yearOfBirth:"2010",
})

if(result.success == true){
  console.log(result.data);
}
else
{
  console.log(result.error)
}

