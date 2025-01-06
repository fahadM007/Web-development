
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

import * as addressController from './addressController.js';


const app = new Hono();

// let storedData = {
  
// };


app.get("/",addressController.listAddresses);

app.post("/addresses",addressController.setAndRenderStoredData);

 Deno.serve(app.fetch)

 //optional chaining 