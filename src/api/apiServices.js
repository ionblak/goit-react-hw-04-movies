import axios from 'axios';

const API_KEY = 'a968de91ad7c5ce8880b16a6991c4832';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

const getPopularFilms = async () => {
  try {
    const { data } = await axios.get(`/trending/movie/day`);

    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getFilms = async filmTitle => {
  try {
    const { data } = await axios.get(`/search/movie?query=${filmTitle}`);

    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const getFilmById = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}`);

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getFilmInformationById = async (id, url) => {
  try {
    const { data } = await axios.get(`/movie/${id}/${url}`);

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { getPopularFilms, getFilms, getFilmById, getFilmInformationById };
