//lets introduce deno database kv
//let visits = 0;


const incrementVisits = async () => {
  const kv = await Deno.openKv();
  const visit = await getVisits();
  await kv.set(["visits"], visit + 1);
}


const getVisits = async () => {
  const kv = await Deno.openKv();
  const store = await kv.get(["visits"])
  return store?.value ?? 0;
}


export {incrementVisits,getVisits};