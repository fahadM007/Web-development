import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

// Initialize Hono app
const app = new Hono();

//Define a simple in-memory "database" to store the count

// In-memory object to store feedback counts store data in memory 
const feedbackCounts = {
  1: 0,
  2: 0,
  3: 0
};


//lets use path variables 

/*
In Hono, path variables are defined by prefixing a part of a path with a colon (:). The part of the path that is prefixed with the colon is then available in the Hono context through the param method of the req property. As an example, if a path would be /products/:id, the value of the id variable would be available through the c.req.param("id") method.
*/
app.get("/feedback/:id",(c)=>{
  return c.text(`Feedback 1: (${feedbackCounts[c.req.param("id")]})`)
})


// app.get("/feedback/2",(c)=>{
//   return c.text(`Feedback 2: (${feedbackCounts[2]})`)
// })

// app.get("/feedback/3",(c)=>{
//   return c.text(`Feedback 3: (${feedbackCounts[3]})`)
// })


//incrementing using the post method
// lets use path variables from hono

app.post("/feedback/:id", (c) => {
  // Increment the feedback count for feedback value 1
  feedbackCounts[c.req.param("id")] = feedbackCounts[c.req.param("id")] + 1;
  // Return the updated count as a text response
  return c.text(`updated`);
});

// app.post("/feedback/2", (c) => {
//   // Increment the feedback count for feedback value 1
//   feedbackCounts[2] = feedbackCounts[2] + 1;
//   // Return the updated count as a text response
//   return c.text(`updated`);
// });

// app.post("/feedback/3", (c) => {
//   // Increment the feedback count for feedback value 1
//   feedbackCounts[3] = feedbackCounts[3] + 1;
//   // Return the updated count as a text response
//   return c.text(`updated`);
// });




Deno.serve(app.fetch);