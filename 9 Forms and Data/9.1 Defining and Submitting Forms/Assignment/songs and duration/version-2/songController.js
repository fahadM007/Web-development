import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";

// Initialize Eta template engine, setting the views path to the templates directory
const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

// Import song service module, where business logic related to songs is managed
import * as songService from "./songService.js"

// Function to render the page displaying the list of songs
const renderSongListPage = async (c) => {
  // Calls the listSongs function from the songService and renders the "index.eta" template
  // passing the list of songs into the template for display
  return c.html(await eta.render("index.eta", songService.listSongs()));
}

// Function to handle the submission of new song data and store it
const handleSongSubmission = async (c) => {
  // Parse the body of the request to get the song data
  const body = await c.req.parseBody();
  // Calls the setSongs function in the songService to store the received song data
  songService.setSongs(body)

  // Redirect the user to the home page after the song data is set
  return c.redirect("/");
}

// Export the functions to be used in other parts of the application
export { renderSongListPage, handleSongSubmission }
