import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as courseService from "../services/courseService.js";
import * as feedbacksServices from "../services/feedbacksServices.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const showForm = async (c) => {
  return c.html(
    eta.render("courses.eta", { courses: await courseService.listCourses() }),
  );
};

const showCourse = async (c) => {
  const id = c.req.param("id");
  return c.html(
    eta.render("course.eta", { course: await courseService.getCourse(id) }),
  );
};


const createCourse = async (c) => {
  const body = await c.req.parseBody();
  await courseService.createCourse(body);
  return c.redirect("/courses");
};

const deleteCourse = async (c) => {
  const id = c.req.param("id");
  await courseService.deleteCourse(id);
  return c.redirect("/courses");
};


const showFeedback = async (c) => {
  const courseId = c.req.param("courseId");
  const feedbackId = c.req.param("feedbackId");
  const count = await feedbacksServices.getFeedbackCount(courseId, feedbackId);
  return c.text(`Feedback ${feedbackId}: ${count}`);
}

const rateCourse = async (c) => {
  const courseId = c.req.param("courseId");
  const feedbackId = c.req.param("feedbackId");

  await feedbacksServices.incrementFeedbackCount(courseId, feedbackId);
  return c.redirect(`/courses/${courseId}`); redirect(`/course/${courseId}`);
}

export { showForm, showCourse, createCourse, deleteCourse, showFeedback, rateCourse }