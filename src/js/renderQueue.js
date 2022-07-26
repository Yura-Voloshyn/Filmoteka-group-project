import { refs } from './refs';
import { loadAnimationAction } from './renderTrendingPage';
import './renderSearchResult';
import { clearMarkup } from './renderSearchResult';
import { idItemMarkup } from './markup/markupById';
import { onWatchedBtnClick } from './renderWatchedLib';
import '../js/language/translateOnLangChange';
import '../js/language/language-translate-static';
import { languageTranslate } from './language/language-translate-static';
import { modalTranslate } from './language/translateOnLangChange';
import { renderPaginationQueueBtn } from './renderQueuePaginationBtn';
import { formatArray } from './markup/markupById';
import { genresToString } from './markup/markupById';
import './library';

refs.queueBtn.addEventListener('click', onQueueBtnClick);

let notesOnPageQueue = 9;
let countOfPageQueue = "";

export async function onQueueBtnClick() {
  refs.watchedBtn.classList.remove('selected');
  refs.queueBtn.classList.add('selected');
  refs.pagination.innerHTML = '';
  refs.paginationSearch.innerHTML = '';
  refs.paginationWatched.innerHTML = '';
  refs.paginationQueue.innerHTML = '';

  clearMarkup();
  refs.queueBtn.removeEventListener('click', onQueueBtnClick);
  refs.watchedBtn.addEventListener('click', onWatchedBtnClick);

  let queueMovieId =
    JSON.parse(localStorage.getItem('queue')) === null
      ? []
      : JSON.parse(localStorage.getItem('queue'));

  queueMovieId.length === 0
    ? refs.clockFrame.classList.remove('is-hiden')
    : refs.clockFrame.classList.add('is-hiden');
  
  countOfPageQueue = Math.ceil(queueMovieId.length / notesOnPageQueue);
  if (countOfPageQueue <= 1) {
    queueMovieId.forEach(item =>
    refs.mainMarkup.insertAdjacentHTML('beforeend', idItemMarkup(item)));
    return;
  } else {
    refs.paginationQueue.innerHTML = '';
    showPageQueue();
    renderPaginationQueueBtn(countOfPageQueue);
  }

    function showPageQueue() {
    refs.mainMarkup.innerHTML = '';
    let notesFirstQ = queueMovieId.slice(0, 9);
    const queuePage = notesFirstQ.map(item => idItemMarkup(item)).join('');
    refs.mainMarkup.insertAdjacentHTML('beforeend', queuePage);
  };

  function onPaginationQueueBtnClick(e) {
    refs.mainMarkup.innerHTML = '';
    let pageNumQ = e.target.innerText;
    let startQ = (pageNumQ - 1) * notesOnPageQueue;
    let endQ = startQ + notesOnPageQueue;
    let notesQ = queueMovieId.slice(startQ, endQ);
    const queuePageClick = notesQ.map(item => idItemMarkup(item)).join('');
    refs.mainMarkup.insertAdjacentHTML('beforeend', queuePageClick);
  }
  refs.paginationQueue.addEventListener('click', onPaginationQueueBtnClick);

  }

