import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";

import * as courseService from './courseService.js';

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });


// shows the form 
const showForm = async (c) => {
  return c.html(
    eta.render("courses.eta", { courses: await courseService.listCourses() }),
  );
};



// controller function that handles the post request
const createCourse = async (c) => {
  const body = await c.req.parseBody();
  console.log(body);
  await courseService.createCourse(body);
  return c.redirect("/courses");
};

//controller function that shows individual courses 

const showCourse = async (c) => {
  const id = c.req.param("courseId");

  return c.html(
    eta.render("course.eta", { course: await courseService.getCourse(id) }),
  );
}

//writing a function that updates a course
const updateCourse = async (c) => {
  const id = c.req.param("courseId");
  const body = await c.req.parseBody();
  await courseService.updateCourse(id,body)
  return c.redirect(`/courses/${id}`);
};

//create a function that delets a course 

const deleteCourse = async(c) => {
  const id = await c.req.param("courseId");
  await courseService.deleteCourse(id);
  return c.redirect("/courses");
}


export { createCourse, showForm, showCourse, updateCourse,deleteCourse };
