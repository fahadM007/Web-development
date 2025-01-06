let data = {
  songs : []
}


const listSongs = () => {
  return data;
}

const setSongs = (body) => {
  data.songs.push(body);
  console.log(data.songs);
}


export {listSongs, setSongs}