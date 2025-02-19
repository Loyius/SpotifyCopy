import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistsArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
  const { id } = useParams();

  // Encontrando o artista pelo ID, utilizando find para um único item ou undefined
  const artist = artistsArray.find(
    (currentArtistObj) => currentArtistObj._id === id
  );

  // Verificando se o artista foi encontrado
  if (!artist) {
    return <p>Artista não encontrado</p>;
  }

  const { name, banner } = artist;

  // Filtrando as músicas do artista
  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === name
  );

  // Gerando um índice aleatório corretamente dentro do intervalo
  const randomIndex = Math.floor(Math.random() * songsArrayFromArtist.length);
  const randomIdFromArtist = songsArrayFromArtist[randomIndex].id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtist} />
      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
