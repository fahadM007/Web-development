


//function to get data from memory 
const getSongData = async () => {
  const kv = await Deno.openKv();
  await kv.get(["name"])
  return data;
}


//function that would set the data in memory 

const setSongData = async (body) => {
  const kv = await Deno.openKv();
  const data = await kv.set(["name","duration"],body);
  console.log(data)
  return data;
}


export {getSongData, setSongData}