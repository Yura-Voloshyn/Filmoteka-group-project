import MovieApiService from './MovieApiService';
import { refs } from './refs';

export const movieApiService = new MovieApiService();

async function renderMainPage() {
  const data = await movieApiService.fetchMovies();
  //   getGenreName(genre_ids);
  const markup = data.results.map(item => itemMarkup(item)).join('');
  //   console.log(markup);
  console.log(data.results);
  refs.mainMarkup.insertAdjacentHTML('beforeend', markup);
}
export default renderMainPage();

movieApiService
  .getGenres()
  .then(res =>
    res.data.genres.forEach(genre => localStorage.setItem(genre.id, genre.name))
  );
export const getGenreName = function (ids) {
  singleGenre = [];
  ids.forEach(id => {
    singleGenre.push(localStorage.getItem(id));
  });
};

export function itemMarkup({
  id,
  poster_path,
  title,
  genre_ids,
  release_date,
  vote_average,
}) {
  getGenreName(genre_ids);
  return `
        <div class="photo-card" id="${id}">
  <a class="card-link" href="#"><img class="card-image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      ${title}
    </p>
    <p class="info-item">
      ${release_date.slice(0, 4)}
    </p>
    <p class="info-item">
      ${vote_average.toFixed(1)}
    </p>
    <p class="info-item">
      ${singleGenre.slice(0, 2).join(', ')}, other
    </p>
    
  </div>
</div>
      `;
}
