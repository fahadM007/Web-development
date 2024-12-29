import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
//we import the eta library which is used for rendering view templates 
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });
// we create an instance of the eta class 
//we define the location of the view templates 
//use the view object and set the location of the templates 

const app = new Hono();

app.get("/", async (c) => {
  const content = await eta.render("index.eta", { title: "Home" });
  return c.html(content);
});

app.get("/about", async (c)=> {
  const content = await eta.render("about.eta",{ title: "About" });
  return c.html(content)
})

app.get("/contact", (c) => c.html(eta.render("contact.eta",{title:"Contact"})));



/*
first we render the view template using the eta render method of the eta instance 
second we send the rendered html content as a response 
The render method takes the view template file name as a parameter and returns the resulting html element as a string which is then set as an html response using the html method of hono context.



*/ 

Deno.serve(app.fetch)