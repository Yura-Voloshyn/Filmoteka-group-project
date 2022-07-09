import MovieApiService from './MovieApiService';
import { refs } from './refs';
import { onPaginateSearchBtnClick } from './paginationSearch';
import { renderPaginationSearchBtn } from './paginationSearch';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

let singleGenre = [];
const movieApiService = new MovieApiService();
refs.input.addEventListener('input', debounce(onInputForm, 300));
import { loadAnimationAction } from './renderTrendingPage';

export async function onInputForm(e) {
  e.preventDefault();
  refs.homeBtn.disabled = false;
  refs.pagination.innerHTML = '';
  refs.paginationSearch.innerHTML = '';
  refs.mainMarkup.innerHTML = '';
  movieApiService.query = e.target.value;
  if (movieApiService.query === '') {
    Notify.failure('input field cannot be empty.');
    return;
  }
  clearMarkup();
  movieApiService.resetPage();
  loadAnimationAction.classList.remove('is-hiden');
  const input = e.target.value;
  console.log("input", input);
  movieApiService.query = input;
  const searchData = await movieApiService.fetchArticlesSearch(1);

    console.log("movieApiService.query", movieApiService.query);
    console.log("searchData", searchData);
  const searchMarkup = searchData.results
    .map(item => itemMarkupBySearch(item))
    .join('');
  const max_page = searchData.total_pages; 

  renderPaginationSearchBtn(max_page);

  loadAnimationAction.classList.add('is-hiden');

  if (searchData.total_results === 0) {
    Notify.failure(
      'Sorry, there are no movies matching your search query. Please try again.'
    );
    return;
  }
  refs.paginationSearch.addEventListener('click', onPaginateSearchBtnClick);
  return refs.mainMarkup.insertAdjacentHTML('beforeend', searchMarkup);
  
}

export function clearMarkup() {
  refs.mainMarkup.innerHTML = '';
}

const getGenreName = function (ids) {
  const parsedGenres = JSON.parse(localStorage.getItem('genres'));
  singleGenre = [];
  ids.forEach(id => {
    singleGenre.push(parsedGenres.find(gnr => gnr.id === id));
  });
};

export function genreEditForRender(arr, maxLength) {
  let result;
  if (arr.length <= maxLength) {
    result = arr;
  } else {
    result = arr.slice(0, maxLength).join(', ') + ', other';
  }
  return result;
}

export function itemMarkupBySearch({
  id,
  poster_path,
  title,
  genre_ids,
  release_date,
  vote_average,
}) {
  if (poster_path === null) {
    console.log('poster_path is null', poster_path);
    return;
  } else {
    getGenreName(genre_ids);
    return `
        <li class="movie-card" id="${id}">
  <a class="card-link" href="#"><img class="poster-image" src="https://image.tmdb.org/t/p/w342/${poster_path}" alt="${title}" loading="lazy" /></a>
  
    <h2 class="card-title">
      ${title}
    </h2>
    <div class="info">
    <p class="info-item">
      ${genreEditForRender(
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
}
refs.paginationSearch.addEventListener('click', onPaginateSearchBtnClick);