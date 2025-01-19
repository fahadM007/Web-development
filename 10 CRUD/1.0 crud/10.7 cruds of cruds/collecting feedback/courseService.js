// function that createCourse to the database 
const createCourse = async (course) => {
  // Generate a unique ID for the new course
   course.id = crypto.randomUUID();
  // open a connection to denoKv database
  const kv = await Deno.openKv();
  // set the  data into the database using composite keys 
  await kv.set(["courses",course.id], course);

  for await (const entry of kv.list({ prefix: ["courses"] })) {
    console.log(entry)
  }

}

//function to list all courses from the database 

const listCourses = async () => {
  const kv = await Deno.openKv();
  const courseEntries = await kv.list({ prefix: ["courses"] });
  const courses = [];
  for await (const entry of courseEntries) {
    courses.push(entry.value);
  }

  return courses;
};

const getCourse = async (id) => 
{
  const kv = await Deno.openKv();
  const course = await kv.get(["courses", id]);
  return course?.value ?? {};
  /*
  if (course && course.value !== undefined && course.value !== null) {
  return course.value;
} else {
  return {};
}

  
  */ 
}

//writing function to update the course 

const updateCourse = async (id,course) => {
  //Assign the id of the course to the object of the course 
  course.id = id; //the identifier is included in the course object 
  const kv = await Deno.openKv();
  await kv.set(["courses",id],course)
}

//a function that deletes a courses
const deleteCourse = async (id) => {
  const kv = await Deno.openKv();
  await kv.delete(["courses",id]);
}

export { createCourse, listCourses, getCourse,updateCourse,deleteCourse }