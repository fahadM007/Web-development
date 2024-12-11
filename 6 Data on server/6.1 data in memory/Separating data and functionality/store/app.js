import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as storeValue from "./store.js";

const app = new Hono();



app.get("/", (c) => {
  let storeParam = c.req.query("store")
  if (storeParam) {
   storeValue.setStore(storeParam);
  }
  
  return c.text(`Store: ${storeValue.getStore()}`);
});


export default app;