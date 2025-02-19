import React from "react";
import ItemList from "./ItemList";
import { artistsArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({ type = "both" }) => {
  const shouldShowArtists = type === "artists" || type === "both";
  const shouldShowSongs = type === "songs" || type === "both";

  return (
    <div className="main">
      {/* Item List de Artistas */}
      {shouldShowArtists && (
        <ItemList
          title="Artistas"
          items={5}
          itemsArray={artistsArray}
          path="/artists"
          idPath="/artist"
        />
      )}

      {/* Item List de Músicas */}
      {shouldShowSongs && (
        <ItemList
          title="Músicas"
          items={10}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      )}
    </div>
  );
};

export default Main;
