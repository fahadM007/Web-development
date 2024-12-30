import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

const data = {
  title: "My webpage",
  contacts:  [
  { title: "Support", name: "John Doe", email: "john.doe@example.com", phone: "+1-234-567-890" },
  { title: "Sales", name: "Jane Smith", email: "jane.smith@example.com", phone: "+1-234-567-891" },
  { title: "HR", name: "Mike Johnson", email: "mike.johnson@example.com", phone: "+1-234-567-892" },
  { title: "Technical Support", name: "Alice Brown", email: "alice.brown@example.com", phone: "+1-234-567-893" },
  { title: "General Inquiries", name: "David Wilson", email: "david.wilson@example.com", phone: "+1-234-567-894" },
],

  
}

app.get("/", (c) => c.html(eta.render("/pages/home.eta",data)));
app.get("/about", (c) => c.html(eta.render("/pages/about.eta",data)));
app.get("/contact", (c) => c.html(eta.render("/pages/contact.eta",data)));



Deno.serve(app.fetch);