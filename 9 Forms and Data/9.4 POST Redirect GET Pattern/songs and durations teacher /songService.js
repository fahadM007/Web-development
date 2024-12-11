

const addSongs = async (songsData) => {
  const kv = await Deno.openKv();
  await kv.set(["songs", songsData.name], songsData);
};

const listSongs = async () => {
  const kv = await Deno.openKv();
  const songsData = kv.list({ prefix: ["songs"] });
  const songs = [];
  for await (const entry of songsData) {
    if (entry != null && entry.value != null) {
      songs.push(entry.value);
    }
  }

  return songs;
};

export { addSongs, listSongs };