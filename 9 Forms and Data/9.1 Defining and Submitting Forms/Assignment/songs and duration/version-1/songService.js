let data = {
  songs : [{ name: "Juma", duration: "300000" },
    { name: "jesi", duration: "4000" },]
}


const listSongs = () => {
  return data;
}

const setSongs = (body) => {
  data.songs.push(body);
  console.log(data.songs);
}


export {listSongs, setSongs}