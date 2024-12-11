const addAddress = async (addressData) => {
  const kv = await Deno.openKv();
  await kv.set(["addresses", addressData.name], addressData);

 
};

const listAddresses = async() => {
  const kv = await Deno.openKv();
  const addressData = kv.list({prefix:["addresses"]});
  const addresses = [];
  for await (const entry of addressData) {
    if(entry != null && entry.value != null){
      addresses.push(entry.value);
    }
  }
  return addresses;
}



export { addAddress,listAddresses};


















 /*
  so we have a key and subkey of the data 
  "addresses" is the main key for a collection of address data (think of it as a category or table).
  addressData.name (which is expected to be a string like "John Doe") is the subkey that uniquely identifies each entry within that category. This allows you to store multiple entries under the same main key, but each one can be identified by a different subkey (such as different names).
  addressData:
The second parameter to kv.set is the value you want to store in the database. This is the actual data that will be stored under the key-subkey combination.
addressData contains the actual address information, such as the name and address. This could be an object lik
  
  */