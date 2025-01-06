// Data representing the song database
let data = {
  songs: [
    { name: "Juma", duration: "300000" },  // Example song with name and duration
    { name: "Jesi", duration: "4000" },    // Another example song with name and duration
  ]
}

// Function that returns the current list of songs from the database
const listSongs = () => {
  // Returns the song data stored in the `data` object
  return data;
}

// Function that adds new song data into the song database
const setSongs = (body) => {
  // Adds the new song data (body) to the songs array
  data.songs.push(body);
  // Logs the updated songs array to the console for debugging purposes
  console.log(data.songs);
}

// Export the functions to be used in other parts of the application
export { listSongs, setSongs }
