//open the key value store 

const kv = await Deno.openKv();


//retrieve the value
const count = await kv.get(["count"]);
const value = count.value ?? 0;


//Set the value 
await kv.set(["count"],2);

//output the retrieved value 

console.log("Count:",value);

// delete the value 

await kv.delete(["count"]);


//output the retrieved value 

console.log("Count:",value);