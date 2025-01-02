import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as addressServices from "./addressService.js"

import * as addressController  from './addressController.js'


const app = new Hono();


app.get("/",addressController.getAndRenderAddresses);


app.post("/addresses",addressController.listAndRenderAddresses
);


export default app;