//let count = 0;  //data stored in a variable

const getCount = async () => {
  //open the deno kv data base and store it in a variable
  const kv = await Deno.openKv();
  // set the intial value of the data base
  const count = await kv.get(["count"]);
  return count.value ?? 0;
};

const setCount = async (count) => {
  const kv = await Deno.openKv();
  await kv.set(["count"], count);
}

const incrementCount = async () => {
  let count = await getCount();
  count++;
  await setCount(count);
};

export { getCount, incrementCount };
