import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";

import * as courseService from "./courseService.js";


const eta = new Eta({ views: `${Deno.cwd()}/templates/` });


const showForm = async (c) => c.html(eta.render("courses.eta", { courses: await courseService.listCourses() }));

const createCourse = async (c) => {
  const body = await c.req.parseBody();
  //console.log(body);
  await courseService.createCourse(body);
  return c.redirect("/courses")
}

const showCourse = async (c) => {
  const id = c.req.param("courseId");
  console.log(id);
  return c.html(
    eta.render("course.eta", { Course: await courseService.getCourse(id) }),
  )
};

const updateCourse = async (c) => {
  const id = c.req.param("courseId");
  const body = await c.req.parseBody();
  await courseService.updateCourse(id, body);
  return c.redirect(`/courses/${id}`);
};

const deleteCourse = async (c) => {
  const id = c.req.param("courseId");
  await courseService.deleteCourse(id);
  return c.redirect("/courses");
};

export { showForm, createCourse, showCourse, updateCourse, deleteCourse };