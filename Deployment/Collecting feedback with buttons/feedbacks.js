//Define a simple in-memory "database" to store the feedback using denokv




const getFeedbacks = async (id) => {
  const kv = await Deno.openKv();
  const feedback = await kv.get(["feedback", id]);
  return feedback?.value ?? 0;
}


const incrementFeedbacks = async (id) => {
  let count = await getFeedbacks(id);
  count++;
  await setFeedbacks(count, id);
};

const setFeedbacks = async (count, id) => {
  const kv = await Deno.openKv();
  await kv.set(["feedback",id], count);
}

export {getFeedbacks , incrementFeedbacks};