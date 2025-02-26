import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as feedBackService from "./feedback.js"


const eta = new Eta({ views: `${Deno.cwd()}/templates/` });
const app = new Hono();









app.get("/feedbacks/:id", async (c) => {
  //lets extract the request parameter and store it in a variable 
  const id = c.req.param("id");
  const feedback =  await feedBackService.getFeedbackCount(id)
  return c.html(eta.render("index.eta",feedback))
})

app.post ("/feedbacks/:id", async (c) => {
  const id = c.req.param("id");
  await feedBackService.incrementFeedbackCount(id);
  return  c.redirect("/")
})

app.get("/", async (c) => {
  //lets extract the request parameter and store it in a variable 
 return c.html(eta.render("index.eta"))
})

export default app;


//  curl localhost:8000/feedback/1 

//  curl -X POST http://localhost:8000/feedback/1