import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";


// const app = new Hono;

// app.get("/product/:id",(c) => {
//    let product = c.req.param("id")
//   return c.text(`information on product ${product}`);
// })

// app.get(
//   "/lists/:listId/items/:itemId",
//   (c) => {
//     const listId = c.req.param("listId");
//     const itemId = c.req.param("itemId");

//     return c.text(`List ${listId}, item ${itemId}`);
//   })

// export default app;

// Implement a web application that responds to requests in text format as follows.
//one 
// GET /restaurants returns the string "Listing restaurants."
//two
// POST /restaurants returns the string "Adding a restaurant."
//three
// GET /restaurants/:id returns the string "Showing restaurant with id :id.", where :id is a path variable.
//four
// GET /restaurants/:id/reviews returns the string "Listing reviews for restaurant with id :id.", where :id is a path variable.
//five
// POST /restaurants/:id/reviews returns the string "Adding a review for restaurant with id :id.", where :id is a path variable.
//six
// DELETE /restaurants/:id/reviews/:rid returns the string "Removing review :rid from restaurant with id :id.", where :rid and :id are path variables.
// When completed, test the application locally and return it here.
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
const app = new Hono();

//one
app.get("/restaurants", (c) => c.text(`Listing restaurants.`));
//two
app.post("/restaurants", (c) => c.text("Adding a restaurant."));
//three
app.get("/restaurants/:id", (c) => c.text(`Showing restaurant with id ${c.req.param("id")}.`));
//four
app.get("/restaurants/:id/reviews", (c) => c.text(`Listing reviews for restaurant with id ${c.req.param("id")}.`));
//five
app.post("/restaurants/:id/reviews", (c) => c.text(`Adding a review for restaurant with id ${c.req.param('id')}.`));
//six
app.delete("/restaurants/:id/reviews/:rid", (c) => c.text(`Removing review ${c.req.param("rid")} from restaurant with id ${c.req.param("id")}.`));



export default app;