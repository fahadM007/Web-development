const kv = await Deno.openKv();

 // function to add songs when post request is made 
 const addSongs = async (songData) => {
  
  await kv.set(["songs", songData.name], songData)
 };

 // function to list the songs in the data base 

 const listSongs = async () => {
  const songData =  kv.list({ prefix: ["songs"] })
  const songs = [];
 
  for await (const entry of songData) {
    if(entry.value){
      songs.push(entry.value)
    }
  }
  return songs;

 }



 export {listSongs,addSongs}