// Import the Eta template engine from a specific version on Deno's third-party modules
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";

// Import the Hono framework from Deno for building HTTP servers
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

// Create a new Eta instance that will look for template files inside the "templates/" folder in the current directory
const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

// Initialize a new Hono app (which is an HTTP server)
const app = new Hono();

// Declare an object called `data` that will hold data to pass to templates
let data = {};

// Set up a route for handling GET requests to the root URL ("/")
// When someone visits the root URL, the server responds by rendering the "index.eta" template with the current `data`
app.get("/", (c) => {
  // Render the "index.eta" template and return the HTML response to the user
  return c.html(eta.render("index.eta", data));
});

// Set up a route for handling POST requests to "/addresses"
// This will be used for receiving and processing form data (or any other POST data)
app.post("/addresses", async (c) => {
  // Parse the body of the request to get the data that was sent in the POST request
  const body = await c.req.parseBody();

  // Store the parsed data in the `data` object, so it can be accessed by the template in subsequent requests
  data = body;

  // After storing the data, render the "index.eta" template again, this time with the updated `data`
  return c.html(eta.render("index.eta", data));
});

// Finally, start the server to listen for incoming requests using Deno's built-in `Deno.serve` method
Deno.serve(app.fetch);
