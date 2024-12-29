


const setStore = async (s) => {
  const kv = await Deno.openKv();
  await kv.set(["store"], s);
  
}

const getStore = async () => {
  const kv = await Deno.openKv();
  const store = await kv.get(["store"]);
  return store.value ?? "Nothing";
}

export {setStore, getStore};