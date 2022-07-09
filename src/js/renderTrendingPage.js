import MovieApiService from './MovieApiService';
import { renderPaginationBtn } from './pagination';
import { onPaginateBtnClick } from './pagination';
import { refs } from './refs';
let singleGenre = [];
export const movieApiService = new MovieApiService();

export const loadAnimationAction = document.querySelector(
  '.hollow-dots-spinner'
);
refs.pagination.addEventListener('click', onPaginateBtnClick);
async function renderMainPage() {
  refs.pagination.innerHTML = '';
  refs.mainMarkup.innerHTML = '';
  loadAnimationAction.classList.remove('is-hiden');
  const data = await movieApiService.fetchArticles(1);
  const markup = data.results.map(item => itemMarkup(item)).join('');
  loadAnimationAction.classList.add('is-hiden');
  const max_page = data.total_pages;

  renderPaginationBtn(max_page);
  
  //   console.log(markup);
  //   console.log(data.results);
  refs.mainMarkup.insertAdjacentHTML('beforeend', markup);
}

// refs.homeBtn.addEventListener('click', renderMainPage);
refs.logoBtn.addEventListener('click', renderMainPage);
refs.homeBtn.addEventListener('click', renderMainPage);
export default renderMainPage();
movieApiService
  .getGenres()
  .then(res => localStorage.setItem('genres', JSON.stringify(res.data.genres)));
// console.log(genresStorage);

// movieApiService
//   .getGenres()
//   .then(res =>
//     res.data.genres.forEach(genre => localStorage.setItem(genre.id, genre.name))
//   );

export const getGenreName = function (ids) {
  const parsedGenres = JSON.parse(localStorage.getItem('genres'));
  singleGenre = [];
  ids.forEach(id => {
    singleGenre.push(parsedGenres.find(gnr => gnr.id === id));
  });
};

export function formatArr(arr, maxLength) {
  let result;
  if (arr.length <= maxLength) {
    result = arr;
  } else {
    result = arr.slice(0, maxLength).join(', ') + ', other';
  }
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
  <a class="card-link" href="#"><img class="poster-image" src="https://image.tmdb.org/t/p/w342/${poster_path}" alt="${title}" loading="lazy" /></a>
  
    <h2 class="card-title">
      ${title}
    </h2>
    <div class="info">
    <p class="info-item">
      ${formatArr(
        singleGenre.map(genre => genre.name),
        2
      )} 
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
