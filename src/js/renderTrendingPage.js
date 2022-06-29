import MovieApiService from './MovieApiService';
import { refs } from './refs';
let singleGenre = [];
export const movieApiService = new MovieApiService();

export const loadAnimationAction = document.querySelector(
  '.hollow-dots-spinner'
);

async function renderMainPage() {
  loadAnimationAction.classList.remove('is-hiden');
  const data = await movieApiService.fetchMovies();
  const markup = data.results.map(item => itemMarkup(item)).join('');
  loadAnimationAction.classList.add('is-hiden');
  //   console.log(markup);
  //   console.log(data.results);
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

export function formatArr(arr, maxLength) {
  let result;
  // Change code below this line
  if (arr.length <= maxLength) {
    result = arr;
  } else {
    result = arr.slice(0, maxLength).join(', ') + ', other';
  }
  /// Change code above this line
  return result;
}
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
        <li class="movie-card" id="${id}">
  <a class="card-link" href="#"><img class="poster-image" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" loading="lazy" /></a>
  
    <h2 class="card-title">
      ${title}
    </h2>
    <div class="info">
    <p class="info-item">
      ${formatArr(singleGenre, 2)} 
    </p>
    <p class="info-item info-item__date">| 
      ${release_date.slice(0, 4)}
    </p>
    <p class="info-item info-item__vote">
      ${vote_average.toFixed(1)}
    </p>
    
    
  </div>
</li>
      `;
}
