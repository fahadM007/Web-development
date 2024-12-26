import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as store from "./store.js";

const app = new Hono();




app.get("/", (c) =>{
  const value = c.req.query("store");
  if (value)
  {
    store.setStore(value);
    
  }
  return c.text(`Store: ${store.getStore()}`)
} );

export default app;
