//functionality 
// function that sets a value in the data base 
const getCount = async () => {
  const kv = await Deno.openKv();
  const count = await kv.get(["count"]);
  return count.value ?? 0; // Use nullish coalescing operator
}

//increment function 
const incrementCount = async () => {
  let count = await getCount();
  count++;
  await setCount(count);
}


const setCount = async (count) => {
  const kv = await Deno.openKv();
  await kv.set(["count"], count);
}

export {getCount,incrementCount};