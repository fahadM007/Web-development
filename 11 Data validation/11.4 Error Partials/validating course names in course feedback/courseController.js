import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as courseService from "./courseService.js";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";


const eta = new Eta({ views: `${Deno.cwd()}/templates/` });


const validation = z.object({
   name:z.string().min(4,{message:"The course name should be a string of at least 4 characters."} )
})


const showForm = async (c) => {
  return c.html(
    eta.render("courses.eta", { courses: await courseService.listCourses() }),
  );
};

const createCourse = async (c) => {
  const body = await c.req.parseBody();
  const validationResults = validation.safeParse(body);
  if(!validationResults.success) {
   return c.html(
         eta.render("courses.eta", {
           name:body.name,  // Explicitly pass user input
           errors: validationResults.error.format(),
           courses: await courseService.listCourses(),
   
         })
       );
  }
  await courseService.createCourse(body);
  return c.redirect("/courses");
};

const showCourse = async (c) => {
  const id = c.req.param("id");
  return c.html(
    eta.render("course.eta", { course: await courseService.getCourse(id) }),
  );
};

const deleteCourse = async (c) => {
  const id = c.req.param("id");
  await courseService.deleteCourse(id);
  return c.redirect("/courses");
};

export { createCourse, deleteCourse, showCourse, showForm };