// let storedData = {
  
// };

const getStoredData =  async () => {
  const kv = await Deno.openKv();
  const storedData = await kv.list({prefix:["addresses"]});
  console.log(storedData);
  const addresses = [];
  
  for await (const entry of storedData) {
    if (entry != null && entry.value != null)
    {
      addresses.push(entry.value)
    }
  }

  console.log(addresses)
  return addresses;
}


// const setStoredData = (body) => 
// {
//   storedData = body;
// }

//lets make a function that would store data in a database 
const setStoredData = async (body) => 
{
  const kv = await Deno.openKv();
  await kv.set(["addresses",body.name],body);
  
}

export {getStoredData,setStoredData}