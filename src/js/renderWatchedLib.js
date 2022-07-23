import { refs } from './refs';
import MovieApiService from './MovieApiService';
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
const movieApiService = new MovieApiService();
import { renderPaginationWatchedBtn } from './renderWatchedPaginationBtn';
import { formatArray } from './markup/markupById';
import { genresToString } from './markup/markupById';
import './library';

// refs.wachedBtn = document.querySelector('.wached');
refs.watchedBtn.addEventListener('click', onWatchedBtnClick);

  let notesOnPageWatch = 9;
  let countOfPageWatch = "";

export async function onWatchedBtnClick() {
  
  let watchedMovieId = JSON.parse(localStorage.getItem('watched'));
  if (!watchedMovieId) { 
   refs.clockFrame.classList.remove('is-hiden');
  } else {
    
  refs.queueBtn.classList.remove('selected');
  refs.watchedBtn.classList.add('selected');
  refs.paginationSearch.innerHTML = '';
  refs.pagination.innerHTML = '';
  refs.paginationWatched.innerHTML = '';

  clearMarkup();

  // refs.clockFrame.classList.add('is-hiden');
  // refs.watchedBtn.removeEventListener('click', onWatchedBtnClick);
  // refs.queueBtn.addEventListener('click', onQueueBtnClick);
  refs.watchedBtn.removeEventListener('click', onWatchedBtnClick);
  refs.queueBtn.addEventListener('click', onQueueBtnClick);

  watchedMovieId === null
      ? []
      : JSON.parse(localStorage.getItem('watched'));
  // console.log(watchedMovieId);

  // watchedMovieId.length === 0
  //   ? refs.clockFrame.classList.remove('is-hiden')
  //   : refs.clockFrame.classList.add('is-hiden');

  if (!watchedMovieId) {
    refs.clockFrame.classList.remove('is-hiden');
    return;
  }
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
  // watchedMovieId.forEach(item =>
  //   refs.mainMarkup.insertAdjacentHTML('beforeend', idItemMarkup(item))
  // );

  // const markup = watchedMovieId.map(item => itemMarkup(item)).join('');
  // console.log(markup);
  // watchedMovieId.forEach(id => {
  //   movieApiService.getMovieById(id).then(result => {
  //     refs.mainMarkup.insertAdjacentHTML('beforeend', idItemMarkup(result));
  //   });
  // });
  }
  // refs.mainMarkup.insertAdjacentHTML('beforeend', markup);
}

//  export function showPageWatch() {
//     refs.mainMarkup.innerHTML = '';
//     let notesFirst = watchedMovieId.slice(0, 9);
//     console.log("notesFirst", notesFirst);
//     const watchedPage = notesFirst.map(item => idItemMarkup(item)).join('');
//     refs.mainMarkup.insertAdjacentHTML('beforeend', watchedPage);
//   };


// export function onPaginationWatchedBtnClick(e) {
//     refs.mainMarkup.innerHTML = '';
//     let pageNum = e.target.innerText;
//     let start = (pageNum - 1) * notesOnPageWatch;
//     let end = start + notesOnPageWatch;
//     let notes = watchedMovieId.slice(start, end);
//     const watchedPageClick = notes.map(item => idItemMarkup(item)).join('');
//     refs.mainMarkup.insertAdjacentHTML('beforeend', watchedPageClick);
//     }

