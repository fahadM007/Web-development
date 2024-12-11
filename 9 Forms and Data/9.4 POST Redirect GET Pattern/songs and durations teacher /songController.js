import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as songService from "./songService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const getAndRenderSongs = async (c) => {
  const data = {
    songs: await songService.listSongs(),
  };

  return c.html(
    eta.render("index.eta", data),
  );
};

const listSongs = async (c) => {
  return await getAndRenderSongs(c);
};

const addSongsAndListSongs = async (c) => {
  const body = await c.req.parseBody();
  await songService.addSongs(body);

  return await getAndRenderSongs(c);
};

export { addSongsAndListSongs, listSongs };