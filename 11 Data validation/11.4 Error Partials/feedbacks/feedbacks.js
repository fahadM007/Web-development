const getCount = async (id) => {
  const kv = await Deno.openKv();
  const store = await kv.get(["feedbacks", id]);
  return store?.value ?? 0;
};

const incrementCount = async (id) => {
  const kv = await Deno.openKv();
  const count = await getCount(id);
  await kv.set(["feedbacks", id], count + 1);
};

export { getCount, incrementCount };