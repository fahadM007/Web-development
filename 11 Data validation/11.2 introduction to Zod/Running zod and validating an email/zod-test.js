import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";


const validator = z.string().email();
// The z is the instance of the zod library 
// z.string() creates the string schema its used to define a validation rule that the value must be a string 
//.email() this is a method chained to z.string() it adds constrains to the string schema specifically to ensure that the string is valid email address 

// the variable validator has a value that validates that the input is a string  and its an email.

//define a variable for results 

let invalidResult = validator.safeParse("This is not an email");
console.log('Invalid Test:', JSON.stringify(invalidResult, null, 2));
/*
Invalid Test: {
  "success": false,
  "error": {
    "issues": [
      {
        "validation": "email",
        "code": "invalid_string",
        "message": "Invalid email",
        "path": []
      }
    ],
    "name": "ZodError"
  }
}

*/
console.log(invalidResult);
// { success: false, error: [Getter] }



// what is safeParse its a method used for safe parsing Unlike .pase() which will throw an error if the input is invalid  the safeParse returns ann object 

// success: true and data (if validation succeeds).
// success: false and error (if validation fails).

//reassigning the result variable with a correct email 
let validResult = validator.safeParse("this-is-am@email.com");
console.log('Valid Test:', JSON.stringify(validResult, null, 2));
/*
Valid Test: {
  "success": true,
  "data": "this-is-am@email.com"
}
  */
console.log(validResult)
/*
{ success: true, data: "this-is-am@email.com" }
*/
