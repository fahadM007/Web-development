//function used to create the resource 
const createCourse = async (course) => {
  course.id = crypto.randomUUID();

  const kv = await Deno.openKv();
  await kv.set(["courses", course.id], course);
};



//function use to list Courses from the database 
const listCourses = async () => {
  const kv = await Deno.openKv();
  const courseEntries = await kv.list({ prefix: ["courses"] });
  //add the Courses in an array
  const courses = [];
  for await (const entry of courseEntries) {
    courses.push(entry.value);
  }

  return courses;

};


const getCourse = async (id) => {
  const kv = await Deno.openKv();
  const course = await kv.get(["courses", id]);
  return course?.value ?? {};
};

const updateCourse = async (id, course) => {
  course.id = id;
  const kv = await Deno.openKv();
  await kv.set(["courses", id], course);
}

const deleteCourse = async (id) => {
  const kv = await Deno.openKv();
  await kv.delete(["courses", id]);
};





export { createCourse, listCourses, getCourse, updateCourse, deleteCourse };