import MovieApiService from './MovieApiService';
import { loadAnimationAction } from './renderTrendingPage';
import { refs } from './refs';
import * as basicLightbox from 'basiclightbox';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { itemMarkup } from './markup/markupModal';

const movieApiService = new MovieApiService();

const lightBoxOptions = {
  onShow: function (instance) {
    instance.element().querySelector('.close-modal').onclick = instance.close;
  },
  onClose: () => {
    window.removeEventListener('keydown', keydownHandler);
  },
};

let modal; //собственно будущая модалка

refs.mainMarkup.addEventListener('click', onMovieCardClick);

export async function onMovieCardClick(e) {
  e.preventDefault();
  const movieId = e.path.find(el => el.className === 'movie-card').id; //get movie ID
  loadAnimationAction.classList.remove('is-hiden'); //loader animation switched-on
  const movieData = await movieApiService.getMovieById(movieId); //get from srver movie info
  const movieDatavideo = await movieApiService.getMovieByIdvideos(movieId);
  const videoId = movieDatavideo.results.find(el =>
    el.name.includes('Trailer')
  ).key;
  const modalMarkup = itemMarkup(movieData, videoId); // create markup
  modal = basicLightbox.create(modalMarkup, lightBoxOptions); //create modal window//
  modalShow();
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
  e.preventDefault();
  const player = basicLightbox.create(`
    <iframe src="https://www.youtube.com/embed/${e.target.dataset.video}" width="80%" height="70%" frameborder="0"></iframe>
`);
  player.show();
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
  let arr = JSON.parse(localStorage.getItem(key));
  if (arr !== null) {
    return arr.includes(movieId);
  } else {
    return;
  }
}

function removeFromWatched(e) {
  removeFromStorage(e, 'watched');
  btnWatched.removeEventListener('click', removeFromWatched);
  btnWatched.addEventListener('click', addToWatched);
}

function removeFromQueue(e) {
  removeFromStorage(e, 'queue');
  btnQueue.removeEventListener('click', removeFromQueue);
  btnQueue.addEventListener('click', addToQueue);
}

function removeFromStorage(e, key) {
  let arr = JSON.parse(localStorage.getItem(key));
  let index = arr.indexOf(e.target.dataset.movieid);
  arr.splice(index, 1);
  localStorage.setItem(key, JSON.stringify(arr));
  buttonChange(key);
  Notify.failure(`The movie successfully has been removed from ${key}`);
}

function addToWatched(e) {
  addToStorage(e, 'watched');
  btnWatched.addEventListener('click', removeFromWatched);
  btnWatched.removeEventListener('click', addToWatched);
}

function addToQueue(e) {
  addToStorage(e, 'queue');
  btnQueue.addEventListener('click', removeFromQueue);
  btnQueue.removeEventListener('click', addToQueue);
}

function addToStorage(event, key) {
  buttonChange(key);
  let arr =
    localStorage.getItem(key) !== null
      ? JSON.parse(localStorage.getItem(key))
      : [];
  arr.push(event.target.dataset.movieid);
  localStorage.setItem(key, JSON.stringify(arr));
  Notify.success(`The movie successfully has been added to ${key}`);
}

function buttonChange(key) {
  let btn = document.querySelector(`.button-${key}`);
  btn.classList.toggle('already-added');
  btn.textContent === `Add to ${key}`
    ? (btn.textContent = `Remove from ${key}`)
    : (btn.textContent = `Add to ${key}`);
}
