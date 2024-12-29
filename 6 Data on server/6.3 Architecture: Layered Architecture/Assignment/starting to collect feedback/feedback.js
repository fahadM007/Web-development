
// let count = 0;

const setFeedback = async (count,id) => {
  const kv = await Deno.openKv();
  await kv.set(["feedback", id],count);

}

const incrementFeedback = async (id) => 
{ 
  
  let count = await getFeedback(id);
  count++;
  await setFeedback(count,id)
}

const getFeedback = async (id) => 
{
  const kv = await Deno.openKv();
  const store = await kv.get(["feedback",id]); 
  if (store.value)
  {
    return store.value;
  }
  else
  {
    return 0;
  }
}



export {incrementFeedback, getFeedback}


