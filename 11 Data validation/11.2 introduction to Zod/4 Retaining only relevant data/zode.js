import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";


const schema = z.object({
  email:z.string().email(),
})

let result = schema.safeParse({
  garbage: "not needed",
  email: "another@email.com",
})

console.log(result);