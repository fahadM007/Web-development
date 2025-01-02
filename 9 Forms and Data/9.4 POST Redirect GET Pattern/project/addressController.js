import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as addressServices from "./addressService.js";


const eta = new Eta({views:`${Deno.cwd()}/templates/`})


const getAndRenderAddresses  =  async (c) => {
  const addresses = await addressServices.getData();  // Await the result
  return await c.html(eta.render("index.eta", { addresses }));  // Pass it correctly to the template
}


const listAndRenderAddresses = async (c) => {
  const body = await c.req.parseBody();
  await addressServices.setData(body);  // Save the address data
  const addresses = await addressServices.getData();  // Fetch updated addresses
  // return await c.html(eta.render("index.eta", { addresses }));  // Pass the updated addresses to the template
  return c.redirect("/");
}


export {getAndRenderAddresses, listAndRenderAddresses}