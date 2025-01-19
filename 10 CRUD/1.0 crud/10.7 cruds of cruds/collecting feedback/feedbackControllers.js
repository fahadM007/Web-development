import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";

import * as feedbackService from './feedbackService.js';

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });


// shows the form 
const showForm = async (c) => {
  return c.html(eta.render("index.eta"));
};

//controller function that shows individual feedbacks 

const showFeedbacks = async (c) => {
  const id = c.req.param("id");
  const feedbackCount = await feedbackService.getFeedbackCount(id);
  return c.text(`Feedback ${id}: ${feedbackCount}`);
}



// controller function that handles the post request
const createFeedbacks = async (c) => {
  const id = c.req.param("id");
  await feedbackService.incrementFeedbackCount(id);
  return c.redirect("/");
};



//writing a function that updates a feedback
// const updateCourse = async (c) => {
//   const id = c.req.param("id");
//   const body = await c.req.parseBody();
//   await feedbackService.updateCourse(id,body)
//   return c.redirect(`/feedbacks/${id}`);
// };

// //create a function that delets a feedback 

// const deleteCourse = async(c) => {
//   const id = await c.req.param("id");
//   await feedbackService.deleteCourse(id);
//   return c.redirect("/feedbacks");
// }


export { createFeedbacks, showForm, showFeedbacks };
