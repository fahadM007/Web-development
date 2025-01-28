import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as emailController from "./emailController.js";

const app = new Hono();

app.get("/", emailController.showForm);
app.post("/emails", emailController.validateEmail);

export default app;


/*
ZodError: [
  {
    "validation": "email",
    "code": "invalid_string",
    "message": "The email was not a valid email.",
    "path": [
      "email"
    ]
  }
]
    at Object.get error (https://deno.land/x/zod@v3.22.4/types.ts:108:23)
    at Array.validateEmail (file:///Users/lachi.dong/Desktop/centria/web development/11 Data validation/11.3 Zod on a Server/11.3.2 Displaying validation errors/model solution/emailController.js:19:32)
    at eventLoopTick (ext:core/01_core.js:177:7)
    at async mapped (ext:deno_http/00_serve.ts:391:18) {
  issues: [
    {
      validation: "email",
      code: "invalid_string",
      message: "The email was not a valid email.",
      path: [ "email" ]
    }
  ],
  addIssue: [Function: addIssue],
  addIssues: [Function: addIssues],
  name: "ZodError"
}
*/ 