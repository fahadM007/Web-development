import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as store from "./store.js";

const app = new Hono();




app.get("/",async (c) =>{
  const value = c.req.query("store");
  if (value)
  {
    await store.setStore(value);
    
  }
  return c.text(`Store: ${await store.getStore()}`)
} );

export default app;
