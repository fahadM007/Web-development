import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";

import * as addressService from "./addressService.js"

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });



const getAndRenderStoredData = async (c) => {
  const data = {
    addresses: await addressService.getStoredData() ,
  };
  return await c.html(eta.render("index.eta",data));
}

const listAddresses = async (c) => {
  return await getAndRenderStoredData(c);
};

const setAndRenderStoredData = async (c) => {

  const body = await c.req.parseBody();
  
  await addressService.setStoredData(body)
  
  return c.redirect("/");
}

export {setAndRenderStoredData, listAddresses}