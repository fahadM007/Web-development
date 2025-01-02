import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as addressService from "./addressService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

app.get(
  "/",
  async (c) => {
    const data = {
      addresses: await addressService.listAddresses(),
    };

    return c.html(
      eta.render("index.eta", data),
    );
  },
);

app.post("/addresses", async (c) => {
  const body = await c.req.parseBody();
  await addressService.addAddress(body);

  const data = {
    addresses: await addressService.listAddresses(),
  };

  return c.html(
    eta.render("index.eta", data),
  );
});

Deno.serve(app.fetch);