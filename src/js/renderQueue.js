import { refs } from './refs';
import MovieApiService from './MovieApiService';
import { loadAnimationAction } from './renderTrendingPage';
// import './renderTrendingPage';
import './renderSearchResult';
import { clearMarkup } from './renderSearchResult';
import { idItemMarkup } from './markup/markupById';
import { onWatchedBtnClick } from './renderWatchedLib';
let idsForRender = [];
const movieApiService = new MovieApiService();

refs.queueBtn.addEventListener('click', onQueueBtnClick);

export async function onQueueBtnClick() {
  refs.watchedBtn.classList.remove('selected');
  refs.queueBtn.classList.add('selected');
  refs.pagination.classList.add('visually-hidden');
  clearMarkup();
  refs.queueBtn.removeEventListener('click', onQueueBtnClick);

  refs.watchedBtn.addEventListener('click', onWatchedBtnClick);

  const queueMovieId = JSON.parse(localStorage.getItem('queue')).map(id =>
    Number(id)
  );
  queueMovieId.forEach(id => {
    movieApiService.getMovieById(id).then(result => {
      refs.mainMarkup.insertAdjacentHTML('beforeend', idItemMarkup(result));
    });
  });
}
