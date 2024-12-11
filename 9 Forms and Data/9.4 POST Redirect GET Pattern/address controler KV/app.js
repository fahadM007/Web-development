// import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as addressController from "./addressController.js";

// creating the server 
// routing the request to the address controller 


// const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

// app.get("/", async (c) => {
//   const data = {
//     address: await addressService.listAddresses(),
//   };

//   return c.html(eta.render("index.eta", data));
// });

// app.post("/addresses", async (c) => {
//   const body = await c.req.parseBody();
//   await addressService.addAddress(body);
  
//   const data = {
//     addressService:await addressService.listAddresses(),
//   };

//   return c.html(eta.render("index.eta", data));
// });


app.get("/", addressController.listAddresses);
app.post("/addresses", addressController.addAddressAndListAddresses);

export default app;
