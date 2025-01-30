import * as feedbacksServices from "../services/feedbacksServices.js";
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";



const eta = new Eta({ views: "templates" });

// function that would show the feedback buttons

const showFeedback = async (c) => {
  return c.html(eta.render("index.eta"));
};

const getFeedbackCount = async (c) => {
  const id = c.req.param("id");
  const feedbackCount = await feedbacksServices.getFeedbackCount(id);
  return c.text(`Feedback ${id}: ${feedbackCount}`);
}

const incrementFeedbackCount = async (c) => {
  const id = c.req.param("id");
  await feedbacksServices.incrementFeedbackCount(id);
  return c.redirect("/");
}



export { showFeedback, getFeedbackCount, incrementFeedbackCount };