import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
  getSignedCookie,
  setSignedCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";


const app = new Hono();

// The secret should be a long random string for securing cookies
const secret = "secret";

// Define the route handler for the root ("/") path
app.get("/", async (c) => {
  // Get the 'count' cookie using getSignedCookie, or default to 0 if not set
  let count = await getSignedCookie(c, secret, "count") ?? 0;
  
  // Convert 'count' to a number, then increment it by 1
  count = Number(count) + 1;

  // Set the 'count' cookie with the updated value, signed with the secret
  await setSignedCookie(c, "count", `${count}`, secret, {
    path: "/"
  });

  // Return a response showing the current count
  return c.text(`Hello cookies! -- ${count}`);
});

// Start the server
Deno.serve(app.fetch);


// curl -v -H "Cookie: count=1.vSjuFCyltGJZ9uJ%2Fw6Qhb0R71YQ8QG5jIZz%2FMOc7E1s%3D" localhost:8000

//curl -v -H "Cookie: count=2.G0bBon7tcv7PLnbyKfn%2F1H0yfj75oTrTD0a9JH4H%2B%2B4%3D" localhost:8000