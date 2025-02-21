import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
  getCookie,
  setCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";


const app = new Hono();

app.get("/", (c) => {
  //reading the cookie from the request  
  let count = getCookie(c,"count");
  
  //Cookie names and values are strings.
  setCookie(c,"count","1");
  
  //our response from the intial request 
  return c.text(`Hello cookies! -- ${count}`);
});

Deno.serve(app.fetch);

//curl -v -H "Cookie: count=1" localhost:8000

