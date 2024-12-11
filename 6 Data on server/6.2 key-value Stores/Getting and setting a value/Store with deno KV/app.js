import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as store from "./store.js";

const app = new Hono();

app.get("/",async (c) => {
  if (c.req.query("store")) {
   await store.setStore(c.req.query("store"));
  }

  return  c.text(`Store: ${await store.getStore()}`);
});


app.delete("/store", async (c) => {
 
   await store.deleteStore();
  return c.text("Store deleted successfully");
})

export default app;