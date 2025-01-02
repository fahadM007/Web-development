// let data = {
// }

const setData = async (body) => {
  const kv = await Deno.openKv();
  await kv.set(["addresses",body.name],body);
  // data = body;
  // return data 
}

const getData = async () => 
  { 
    const kv = await Deno.openKv();
    const addressData = kv.list({prefix:["addresses"]});
    const addresses = [];
    
    for await (const entry of addressData)
    {
      if(entry != null && entry.value != null)
      {
        addresses.push(entry.value);
      }
    }
    
    return addresses;

  }

 



  export {getData, setData};
