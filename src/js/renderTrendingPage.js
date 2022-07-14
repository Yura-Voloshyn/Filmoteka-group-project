import MovieApiService from './MovieApiService';
import { renderPaginationBtn } from './pagination';
import { onPaginateBtnClick } from './pagination';
import { refs } from './refs';
import { onLanguageChange } from './language/translateOnLangChange';
import '../js/language/translateOnLangChange';
import '../js/language/language-translate-static';
import './library';
import { languageTranslate } from './language/language-translate-static';
import { modalTranslate } from './language/translateOnLangChange';

let singleGenre = [];

// console.log(languageTranslate.genreOth.uk);
export const movieApiService = new MovieApiService();

if (window.location.hash === '#en') {
  refs.selectLang.value = 'en';
} else if (window.location.hash === '#uk') {
  refs.selectLang.value = 'uk';
}
const lang = refs.selectLang.value;
export const loadAnimationAction = document.querySelector(
  '.hollow-dots-spinner'
);
refs.pagination.addEventListener('click', onPaginateBtnClick);

movieApiService
  .getGenres(lang)
  .then(res => localStorage.setItem('genres', JSON.stringify(res.data.genres)))
  .catch(eror => console.log(eror));
modalTranslate();
async function renderMainPage() {
  refs.selectLang.addEventListener('change', onLanguageChange);

  refs.paginationSearch.innerHTML = '';
  refs.pagination.innerHTML = '';
  refs.mainMarkup.innerHTML = '';
  refs.input.value = '';
  loadAnimationAction.classList.remove('is-hiden');

  const data = await movieApiService.fetchArticles(1, lang);
  const markup = data.results.map(item => itemMarkup(item)).join('');
  loadAnimationAction.classList.add('is-hiden');
  const max_page = data.total_pages;

  renderPaginationBtn(max_page);
  refs.mainMarkup.insertAdjacentHTML('beforeend', markup);
}

refs.logoBtn.addEventListener('click', renderMainPage);
refs.homeBtn.addEventListener('click', renderMainPage);
export default renderMainPage();

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
  } else if (window.location.hash === '#en') {
    result = arr.slice(0, maxLength).join(', ') + ', other';
  } else if (window.location.hash === '#uk') {
    result = arr.slice(0, maxLength).join(', ') + ', інші';
  }
  return result;
}
export function itemMarkup({
  id,
  poster_path,
  title,
  genre_ids,
  release_date,
}) {
  getGenreName(genre_ids);

  let genresForMkup =
    genre_ids.length !== 0
      ? `${formatArr(
          singleGenre.map(genre => genre.name),
          2
        )}`
      : 'Genres not found';
  let src =
    poster_path === null
      ? 'https://stringfixer.com/files/951711496.jpg'
      : `https://image.tmdb.org/t/p/w342/${poster_path}`;
  let relData = !release_date
    ? 'Date not found'
    : `${release_date.slice(0, 4)}`;

  return `
        <li class="movie-card" id="${id}">
  <a class="card-link" href="#"><img class="poster-image" src="${src}" alt="${title}" loading="lazy" /></a>
  
    <h2 class="card-title">
      ${title}
    </h2>
    <div class="info">
    <p class="info-item info-other">
      ${formatArr(
        singleGenre.map(genre => genre.name),
        2
      )} 
    </p>
    <p class="info-item info-item__date">| 
      ${relData}
    </p>
    
  </div>
</li>
      `;
  }
}
