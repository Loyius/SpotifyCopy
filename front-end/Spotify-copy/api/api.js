// Fetch ou Axios
import axios from "axios";

// const { NODE_ENV } = process.env;
// const URL = "http://localhost:3001/api";
const URL = "https://spotifycopy.onrender.com";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistsArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);