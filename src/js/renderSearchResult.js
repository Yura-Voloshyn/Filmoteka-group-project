import MovieApiService from './MovieApiService';
import { refs } from './refs';
import { onPaginateSearchBtnClick } from './paginationSearch';
import { renderPaginationSearchBtn } from './paginationSearch';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import '../js/language/translateOnLangChange';
import '../js/language/language-translate-static';
import { languageTranslate } from './language/language-translate-static';
import { modalTranslate } from './language/translateOnLangChange';
// import debounce from 'lodash.debounce';
if (window.location.hash === '#en') {
  refs.selectLang.value = 'en';
} else if (window.location.hash === '#uk') {
  refs.selectLang.value = 'uk';
}
const lang = refs.selectLang.value;
let singleGenre = [];
const movieApiService = new MovieApiService();
refs.form.addEventListener('submit', onFormSubmit);
// refs.input.addEventListener('input', debounce(onInputForm, 600));
import renderTrendingPage, { loadAnimationAction } from './renderTrendingPage';

export async function onFormSubmit(e) {
  e.preventDefault();
  modalTranslate();
  refs.homeBtn.disabled = false;
  refs.pagination.innerHTML = '';
  refs.paginationSearch.innerHTML = '';
  refs.mainMarkup.innerHTML = '';
  movieApiService.query = e.currentTarget.elements[0].value;
  if (movieApiService.query === '') {
    if (window.location.hash === '#en') {
      Notify.failure('input field cannot be empty.');
    }
    if (window.location.hash === '#uk') {
      Notify.failure('поле пошуку не може бути порожнім.');
    }
    return;
  }
  console.log("input", input)
  movieApiService.query = input;
  const searchData = await movieApiService.fetchArticlesSearch(1, lang);
  const searchMarkup = searchData.results
    .map(item => itemMarkupBySearch(item))
    .join('');
  const max_page = searchData.total_pages;
  if (
    movieApiService.query === '' ||
    movieApiService.query === ' ' ||
    searchData.total_results === 0
  ) {
    if (window.location.hash === '#en') {
      Notify.failure(
        'Sorry, there are no movies matching your search query. Please try again.'
      );
    }
    if (window.location.hash === '#uk') {
      Notify.failure(
        'На жаль, немає фільмів, які відповідають вашому пошуковому запиту. Будь ласка спробуйте ще раз.'
      );
    }

    loadAnimationAction.classList.add('is-hiden');
    return;
  } else {
    clearMarkup();
    const searchMarkup = searchData.results
    .map(item => itemMarkupBySearch(item))
    .join('');
  const max_page = searchData.total_pages;
 
    renderPaginationSearchBtn(max_page);
  
  loadAnimationAction.classList.add('is-hiden');
  if (searchData.total_results === 0) {
    if (window.location.hash === '#en') {
      Notify.failure(
        'Sorry, there are no movies matching your search query. Please try again.'
      );
    }
    if (window.location.hash === '#uk') {
      Notify.failure(
        'На жаль, немає фільмів, які відповідають вашому пошуковому запиту. Будь ласка спробуйте ще раз.'
      );
    }

    return;
  }
  refs.paginationSearch.addEventListener('click', onPaginateSearchBtnClick);
  return refs.mainMarkup.insertAdjacentHTML('beforeend', searchMarkup);
  }
  
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
}) {
  getGenreName(genre_ids);

  let genresForMkup =
    genre_ids.length !== 0
      ? `${genreEditForRender(
          singleGenre.map(genre => genre.name),
          2
        )}`
      : 'Genres not found';
  let src =
    poster_path === null
      ? 'https://stringfixer.com/files/951711496.jpg'
      : `https://image.tmdb.org/t/p/w342/${poster_path}`;
  let relData = !release_date ? 'Not found' : `${release_date.slice(0, 4)}`;

  return `
        <li class="movie-card" id="${id}">
  <a class="card-link" href="#"><img class="poster-image" src="${src}" alt="${title}" loading="lazy" /></a>
    <h2 class="card-title">
      ${title}
    </h2>
    <div class="info">
    <p class="info-item">
      ${genresForMkup} 
    </p>
    <p class="info-item info-item__date">| 
      ${relData}
    </p>
  </div>
</li>
      `;
}

refs.paginationSearch.addEventListener('click', onPaginateSearchBtnClick);




// export async function onInputForm(e) {
//   e.preventDefault();
//   refs.homeBtn.disabled = false;
//   refs.pagination.innerHTML = '';
//   refs.paginationSearch.innerHTML = '';
//   refs.mainMarkup.innerHTML = '';
//   movieApiService.query = e.target.value;
//   if (movieApiService.query === '') {
//     Notify.failure('input field cannot be empty.');
//     return;
//   }
//   clearMarkup();
//   movieApiService.resetPage();
//   loadAnimationAction.classList.remove('is-hiden');
//   const input = e.target.value;
//   console.log('input', input);
//   movieApiService.query = input;
//   const searchData = await movieApiService.fetchArticlesSearch(1);

//   console.log('movieApiService.query', movieApiService.query);
//   console.log('searchData', searchData);
//   const searchMarkup = searchData.results
//     .map(item => itemMarkupBySearch(item))
//     .join('');
//   const max_page = searchData.total_pages;

//   renderPaginationSearchBtn(max_page);

//   loadAnimationAction.classList.add('is-hiden');

//   if (searchData.total_results === 0) {
//     Notify.failure(
//       'Sorry, there are no movies matching your search query. Please try again.'
//     );
//     return;
//   }
//   refs.paginationSearch.addEventListener('click', onPaginateSearchBtnClick);
//   return refs.mainMarkup.insertAdjacentHTML('beforeend', searchMarkup);
// }

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
  } else if (window.location.hash === '#en') {
    result = arr.slice(0, maxLength).join(', ') + ', other';
  } else if (window.location.hash === '#uk') {
    result = arr.slice(0, maxLength).join(', ') + ', інші';
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
  if (vote_average < 1) {
    return;
  } else if (poster_path === null) {
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
  </div>
</li>
      `;
  }
}
refs.paginationSearch.addEventListener('click', onPaginateSearchBtnClick);
