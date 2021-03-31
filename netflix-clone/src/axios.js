import axios from "axios";

/* Base URL TMDB */
const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
});

export default instance;
