//function that get number of visits stored in the deno KV database

const getVisits = async () => {
  //open connection to the deno kv database
  const kv = await Deno.openKv();
  //get the number of visits stored in the database
  const visits = await kv.get(["visits"]);
  // use nullish coalescing operator to change the default null value
  return visits.value ?? 0;
};

//function to incrementCount
const incrementVisits = async () => {
  let visits = await getVisits();
  visits = visits + 1;
  await setVisits(visits);
};

//function that sets the number of visits

const setVisits = async (visits) => {
  //open connection to the deno kv database
  const kv = await Deno.openKv();
  //set the number of visits into the database
  await kv.set(["visits"], visits);
};

export { getVisits, incrementVisits };


