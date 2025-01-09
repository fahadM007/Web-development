import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });


const showForm = (c) => {
  return c.html(eta.render("todos.eta"));
}

export {showForm}