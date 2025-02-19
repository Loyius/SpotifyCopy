// import React from "react";
// import Player from "../components/Player";
// import { Link, useParams } from "react-router-dom";
// import { songsArray } from "../assets/database/songs";
// import { artistsArray } from "../assets/database/artists";

// const Song = () => {
//   const { id } = useParams();
//   // console.log(id);

//   const { image, name, duration, artist, audio } = songsArray.filter(
//     (currentSongObj) => currentSongObj._id === id
//   )[0];
//   // console.log(songObj);

//   const artistObj = artistsArray.filter(
//     (currentArtistObj) => currentArtistObj.name === artist
//   )[0];
//   // console.log(artistObj);

//   const songsArrayFromArtist = songsArray.filter(
//     (currentSongObj) => currentSongObj.artist === artist
//   );
//   // console.log(songsArrayFromArtist);

//   const randomIndex = Math.floor(
//     Math.random() * (songsArrayFromArtist.length - 1)
//   );

//   const randomIndex2 = Math.floor(
//     Math.random() * (songsArrayFromArtist.length - 1)
//   );

//   const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
//   const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id;

//   return (
//     <div className="song">
//       <div className="song__container">
//         <div className="song__image-container">
//           <img src={image} alt={`Imagem da música ${name}`} />
//         </div>
//       </div>

//       <div className="song__bar">
//         <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
//           <img
//             width={75}
//             height={75}
//             src={artistObj.image}
//             alt={`Imagem do Artista ${artist}`}
//           />
//         </Link>

//         <Player
//           duration={duration}
//           randomIdFromArtist={randomIdFromArtist}
//           randomId2FromArtist={randomId2FromArtist}
//           audio={audio}
//         />

//         <div>
//           <p className="song__name">{name}</p>
//           <p>{artist}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Song;

import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistsArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  // Usando .find() para pegar a música e o artista diretamente
  const songObj = songsArray.find((currentSongObj) => currentSongObj._id === id);
  const artistObj = artistsArray.find((currentArtistObj) => currentArtistObj.name === songObj.artist);

  // Verificação de dados
  if (!songObj || !artistObj) {
    return <p>Música ou artista não encontrado</p>;
  }

  const { image, name, duration, artist, audio } = songObj;
  const songsArrayFromArtist = songsArray.filter((currentSongObj) => currentSongObj.artist === artist);

  // Função para gerar um índice aleatório único
  const generateRandomIndex = (max, excludeIndex = -1) => {
    let index;
    do {
      index = Math.floor(Math.random() * max);
    } while (index === excludeIndex); // Garante que o índice não seja igual ao anterior
    return index;
  };

  // Gerando índices aleatórios diferentes
  const randomIndex = generateRandomIndex(songsArrayFromArtist.length);
  const randomIndex2 = generateRandomIndex(songsArrayFromArtist.length, randomIndex);

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artist}`}
          />
        </Link>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
