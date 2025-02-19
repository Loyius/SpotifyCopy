// 

import React, { useState } from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);

  // Verifica se songsArray é um array válido
  if (!Array.isArray(songsArray)) {
    return <p>Erro: A lista de músicas não é válida.</p>;
  }

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={currentSongObj.id || index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => setItems(prevItems => prevItems + 5)} // Usando a versão de função do setItems
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
