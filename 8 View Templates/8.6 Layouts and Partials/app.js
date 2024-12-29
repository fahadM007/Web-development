import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

// Configure Eta
const eta = new Eta({ 
  views: "/Users/lachi.dong/Desktop/centria/web development/8 View Templates/8.6 Layouts and Partials/templates" 
});


// Initialize Hono app
const app = new Hono();

// Route to render the index.eta template
app.get("/", async (c) => {
  const html = await eta.render("index.eta", { title: "Home" }); // Pass dynamic data
  return c.html(html || "Error rendering template");
});

// Serve the app
Deno.serve(app.fetch);
