import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";


//z in the variable is the namespace of object for the zod library 
// string () the method provided by zod to create a string schema  
const validator = z.string();

let result = validator.safeParse("a string");
console.log(result);

result = validator.safeParse(123);
console.log(result);