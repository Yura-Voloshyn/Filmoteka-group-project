import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

export default class MovieApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.language = 'en';
    this.allGenres = [];
    this.options = {
      key: 'b28dcafbfbdc99f3059a27aaeb93fed6',
      page: this.page,
    };
  }

  async fetchMovies() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${this.options.key}&page=${this.page}&language=${this.language}`;

    return await axios
      .get(url, this.options)
      .then(resp => {
        this.page += 1;
        console.log('resp.data', resp.data);
        return resp.data;
      })
      .catch(error => console.log(error));
  }
  // pagination
  async fetchArticles(page) {
    const BASE_URL = 'https://api.themoviedb.org/3';
    const first = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${this.options.key}&page=${page}&language=${this.language}`
    );
    return first.data;
  }
  // pagination

  async getMoviesBySearchQuery() {
    const url = `${BASE_URL}/search/movie?api_key=${this.options.key}&query=${this.searchQuery}&page=${this.currentPage}&include_adult=false&language=${this.language}`;
    return await axios
      .get(url, this.options)
      .then(resp => {
        this.page += 1;
        return resp.data;
      })
      .catch(error => console.log(error));
  }
  getMovieById(movieId) {
    return axios
      .get(
        `${BASE_URL}/movie/${movieId}?api_key=${this.options.key}&language=${this.language}`
      )
      .then(resp => {
        this.page += 1;
        return resp.data;
      })
      .catch(error => console.log(error));
  }
  getGenres() {
    return axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${this.options.key}&language=${this.language}`
    );
  }

  async getAllGenres() {
    const genres = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${this.options.key}&language=${this.language}`
    );
    this.allGenres.push(...genres.data.genres);
    // console.log(this.allGenres[10].name);
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  getMovieByIdvideos(movieId) {
    return axios
      .get(
        `${BASE_URL}/movie/${movieId}/videos?api_key=${this.options.key}&language=${this.language}`
      )
      .then(resp => {
        this.page += 1;
        return resp.data;
      })
      .catch(error => console.log(error));
  }
}
