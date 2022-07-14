import MovieApiService from './MovieApiService';
import { loadAnimationAction } from './renderTrendingPage';
import { refs } from './refs';
import * as basicLightbox from 'basiclightbox';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { itemMarkup } from './markup/markupModal';
import { onQueueBtnClick } from './renderQueue';
import { onWatchedBtnClick } from './renderWatchedLib';

import { modalTranslate } from './language/translateOnLangChange';

const movieApiService = new MovieApiService();

const lightBoxOptions = {
  onShow: function (instance) {
    instance.element().querySelector('.close-modal').onclick = instance.close;
  },
  onClose: () => {
    window.removeEventListener('keydown', keydownHandler);
    enableScroll();
  },
};

let modal; //собственно будущая модалка
let movieData; // об'єкт фільму для маніпуляцій зі стореджом

refs.mainMarkup.addEventListener('click', onMovieCardClick);
const lang = refs.selectLang.value;
export async function onMovieCardClick(e) {
  e.preventDefault();
  disableScroll();
  const movieId = e.path.find(el => el.className === 'movie-card')?.id; //get movie ID
  if (!movieId) {
    return;
  }
  loadAnimationAction.classList.remove('is-hiden'); //loader animation switched-on
  movieData = await movieApiService.getMovieById(movieId, lang); //get from srver movie info
  const movieDatavideo = await movieApiService.getMovieByIdvideos(movieId);

  let videoId;
  if (movieDatavideo.results.length === 0) {
    videoId = undefined;
  } else if (movieDatavideo.results.find(el => el.name.includes('Trailer'))) {
    videoId = movieDatavideo.results.find(el =>
      el.name.includes('Trailer')
    ).key;
  } else {
    videoId = movieDatavideo.results[0].key;
  }

  const modalMarkup = itemMarkup(movieData, videoId); // create markup
  modal = basicLightbox.create(modalMarkup, lightBoxOptions); //create modal window//

  modalShow();
  modalTranslate();
  handleButtons(movieId);
  loadAnimationAction.classList.add('is-hiden'); //loader animation switched-off
}

function modalShow() {
  modal.show(); //show modal window
  window.addEventListener('keydown', keydownHandler);
}

function keydownHandler(e) {
  if (e.code === 'Escape') {
    modal.close();
  }
}

function onPosterClick(e) {
  if (e.target.dataset.video === 'undefined') {
    if (window.location.hash === '#en') {
      Notify.failure('There is no video in database');
    }
    if (window.location.hash === '#uk') {
      Notify.failure('На жаль, У базі немає відео.');
    }
  } else {
    basicLightbox
      .create(
        `
      <iframe src="https://www.youtube.com/embed/${e.target.dataset.video}" width="80%" height="70%" frameborder="0"></iframe>
  `
      )
      .show();
  }
}

let btnWatched;
let btnQueue;

function handleButtons(movieId) {
  btnWatched = document.querySelector('.button-watched');
  if (checkStorage('watched', movieId)) {
    buttonChange('watched');
    btnWatched.addEventListener('click', removeFromWatched);
  } else {
    btnWatched.addEventListener('click', addToWatched);
  }

  btnQueue = document.querySelector('.button-queue');
  if (checkStorage('queue', movieId)) {
    buttonChange('queue');
    btnQueue.addEventListener('click', removeFromQueue);
  } else {
    btnQueue.addEventListener('click', addToQueue);
  }

  document
    .querySelector('.movie-poster')
    .addEventListener('click', onPosterClick);
}

function checkStorage(key, movieId) {
  let arr =
    localStorage.getItem(key) !== null
      ? JSON.parse(localStorage.getItem(key))
      : [];
  return arr.some(movie => movie?.id === Number(movieId));
}

const libWrapper = document.querySelector('.library__btn--wrapper');

function removeFromWatched(e) {
  removeFromStorage(e, 'watched');
  btnWatched.addEventListener('blur', rerenderWatchedOnBlur, { once: true });

  btnWatched.removeEventListener('click', removeFromWatched);
  btnWatched.addEventListener('click', addToWatched);
}

function rerenderWatchedOnBlur() {
  if (
    refs.watchedBtn.classList.contains('selected') &&
    !libWrapper.classList.contains('visually-hidden')
  ) {
    onWatchedBtnClick();
  }
}

function removeFromQueue(e) {
  removeFromStorage(e, 'queue');
  btnQueue.addEventListener('blur', rerenderQueueOnBlur, { once: true });
  btnQueue.removeEventListener('click', removeFromQueue);
  btnQueue.addEventListener('click', addToQueue);
}

function rerenderQueueOnBlur() {
  if (
    refs.queueBtn.classList.contains('selected') &&
    !libWrapper.classList.contains('visually-hidden')
  ) {
    onQueueBtnClick();
  }
}

function removeFromStorage(e, key) {
  let arr = JSON.parse(localStorage.getItem(key));
  let index = arr.findIndex(movie => {
    return movie.id === Number(e.target.dataset.movieid);
  });
  arr.splice(index, 1);
  localStorage.setItem(key, JSON.stringify(arr));
  buttonChange(key);
  if (window.location.hash === '#en') {
    Notify.failure(`The movie successfully has been removed from ${key}`);
  }
  if (window.location.hash === '#uk') {
    Notify.failure('Фільм успішно видалено з ${key}');
  }
}

function addToWatched(e) {
  addToStorage(e, 'watched');
  btnWatched.addEventListener('blur', rerenderWatchedOnBlur, { once: true });
  btnWatched.addEventListener('click', removeFromWatched);
  btnWatched.removeEventListener('click', addToWatched);
}

function addToQueue(e) {
  addToStorage(e, 'queue');
  btnQueue.addEventListener('blur', rerenderQueueOnBlur, { once: true });
  btnQueue.addEventListener('click', removeFromQueue);
  btnQueue.removeEventListener('click', addToQueue);
}

function addToStorage(event, key) {
  buttonChange(key);
  let arr =
    localStorage.getItem(key) !== null
      ? JSON.parse(localStorage.getItem(key))
      : [];
  arr.push(movieData);
  localStorage.setItem(key, JSON.stringify(arr));

  if (window.location.hash === '#en') {
    Notify.success(`The movie successfully has been added to ${key}`);
  }
  if (window.location.hash === '#uk') {
    Notify.success(`Фільм успішно додано до ${key}`);
  }
}

function buttonChange(key) {
  let btn = document.querySelector(`.button-${key}`);
  btn.classList.toggle('already-added');

  switch (window.location.hash) {
    case '#en':
      btn.textContent === `Add to ${key}`
        ? (btn.textContent = `Remove from ${key}`)
        : (btn.textContent = `Add to ${key}`);
      break;
    case '#uk':
      key = key === 'watched' ? 'переглянутих' : 'черги';
      btn.textContent === `Додати до ${key}`
        ? (btn.textContent = `Видалити з ${key}`)
        : (btn.textContent = `Додати до ${key}`);
      break;
  }
}

function disableScroll() {
  document.body.classList.add('stop-scrolling');
}

function enableScroll() {
  document.body.classList.remove('stop-scrolling');
}
