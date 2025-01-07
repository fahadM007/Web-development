import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

// let data = {
//   songs: [
//     { name: "Juma", duration: "300000" },  // Example song with name and duration
//     { name: "Jesi", duration: "4000" },    // Another example song with name and duration
//   ]
// }

let count = 0;

let data = {
  feedback: {
    "1": { count: 0 },
    "2": { count: 0 },
  },
};


app.get("/feedback/:id", (c) => {
  //lets extract the request parameter and store it in a variable 
  const id = c.req.param("id");
  const feedback = data.feedback[id];
  return c.text(`Feedback ${id}: (${feedback.count})`)
})

app.post ("/feedback/:id", (c) => {
  const id = c.req.param("id");
  const feedback = data.feedback[id];
  feedback.count++;
  return c.text(`${feedback.count}`)
})

export default app;


//  curl localhost:8000/feedback/1 

//  curl -X POST http://localhost:8000/feedback/1