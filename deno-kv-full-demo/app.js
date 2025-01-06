const kv = await Deno.openKv();


async function setKeyValue () {
  await kv.set(Key,value);
  console.log(`key ${JSON.stringify(key)} saved with a value:` ,value)
}

await setKeyValue(["user", "john_doe"], { theme: "dark", language: "en-US" });
await setKeyValue(["user", "jane_doe"], { theme: "light", language: "fr-FR" });