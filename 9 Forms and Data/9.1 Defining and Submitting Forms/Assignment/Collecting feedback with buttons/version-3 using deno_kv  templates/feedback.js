// let count = 0;

// let data = {
//   feedback: {
//     "1": { count: 0 },
//     "2": { count: 0 },
//     "3": { count: 0 },
//   },
// };

//lets introduce the deno kv database 



//function that returns the data from the variable 

const getFeedbackCount = async () => {
  const kv = await Deno.openKv(); //open connection
  //get the data from the database
  const store = await kv.get(["feedbacks"]);
  console.log(store);
  return store?.value ?? 0;
}



const incrementFeedbackCount =  async(id) => {
  const kv = await Deno.openKv(); //open connection
  //set the data in the database 
  const count = await getFeedbackCount(id);
  await kv.set(["feedbacks",id],count + 1)
  
  
}


export {getFeedbackCount,incrementFeedbackCount}