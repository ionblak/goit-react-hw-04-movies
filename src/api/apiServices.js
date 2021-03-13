import axios from 'axios';

const API_KEY = 'a968de91ad7c5ce8880b16a6991c4832';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

const getPopularFilms = async () => {
  try {
    const { data } = await axios.get(`/trending/movie/week`);

    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getPopularFilms;
