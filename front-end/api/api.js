import axios from "axios";

const responseArtists = await axios.get('http://localhost:3001/api/songs');
const responseSongs = await axios.get('http://localhost:3001/api/artists');

export const artistsArray = responseArtists.data;
export const songsArray = responseSongs.data;