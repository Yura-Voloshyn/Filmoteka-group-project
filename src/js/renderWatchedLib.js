import { refs } from './refs';
import itemMarkup from './renderTrendingPage';
import { loadAnimationAction } from './renderTrendingPage';
// import './renderTrendingPage';
import { clearMarkup } from './renderSearchResult';
import { idItemMarkup } from './markup/markupById';
import './renderQueue';
import { onQueueBtnClick } from './renderQueue';
import '../js/language/translateOnLangChange';
import '../js/language/language-translate-static';
import { languageTranslate } from './language/language-translate-static';
import { modalTranslate } from './language/translateOnLangChange';
import { renderPaginationWatchedBtn } from './renderWatchedPaginationBtn';
import { formatArray } from './markup/markupById';
import { genresToString } from './markup/markupById';
import './library';

refs.watchedBtn.addEventListener('click', onWatchedBtnClick);

  let notesOnPageWatch = 9;
  let countOfPageWatch = "";

export async function onWatchedBtnClick() {
  refs.queueBtn.classList.remove('selected');
  refs.watchedBtn.classList.add('selected');
  refs.paginationSearch.innerHTML = '';
  refs.pagination.innerHTML = '';
  refs.paginationWatched.innerHTML = '';
  refs.paginationQueue.innerHTML = '';

  clearMarkup();
  refs.watchedBtn.removeEventListener('click', onWatchedBtnClick);
  refs.queueBtn.addEventListener('click', onQueueBtnClick);

let watchedMovieId =
    JSON.parse(localStorage.getItem('watched')) === null
      ? []
      : JSON.parse(localStorage.getItem('watched'));

  watchedMovieId.length === 0
    ? refs.clockFrame.classList.remove('is-hiden')
    : refs.clockFrame.classList.add('is-hiden');
  
  countOfPageWatch = Math.ceil(watchedMovieId.length / notesOnPageWatch);
  if (countOfPageWatch <= 1) {
    watchedMovieId.forEach(item =>
    refs.mainMarkup.insertAdjacentHTML('beforeend', idItemMarkup(item)));
    return;
  } else {
    showPageWatch();
    renderPaginationWatchedBtn(countOfPageWatch);
  }
  

  function showPageWatch() {
    refs.mainMarkup.innerHTML = '';
    let notesFirst = watchedMovieId.slice(0, 9);
    const watchedPage = notesFirst.map(item => idItemMarkup(item)).join('');
    refs.mainMarkup.insertAdjacentHTML('beforeend', watchedPage);
  };


  function onPaginationWatchedBtnClick(e) {
    refs.mainMarkup.innerHTML = '';
    let pageNum = e.target.innerText;
    let start = (pageNum - 1) * notesOnPageWatch;
    let end = start + notesOnPageWatch;
    let notes = watchedMovieId.slice(start, end);
    const watchedPageClick = notes.map(item => idItemMarkup(item)).join('');
    refs.mainMarkup.insertAdjacentHTML('beforeend', watchedPageClick);
  }
  refs.paginationWatched.addEventListener('click', onPaginationWatchedBtnClick);

  }

