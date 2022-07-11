import { refs } from './refs';
import MovieApiService from './MovieApiService';
import itemMarkup from './renderTrendingPage';
import { loadAnimationAction } from './renderTrendingPage';
// import './renderTrendingPage';
import { clearMarkup } from './renderSearchResult';
import { idItemMarkup } from './markup/markupById';
import './renderQueue';
import { onQueueBtnClick } from './renderQueue';

const movieApiService = new MovieApiService();

refs.watchedBtn.addEventListener('click', onWatchedBtnClick);

export async function onWatchedBtnClick() {
  refs.queueBtn.classList.remove('selected');
  refs.watchedBtn.classList.add('selected');
  refs.paginationSearch.innerHTML = '';
  refs.pagination.innerHTML = '';

  clearMarkup();
  refs.watchedBtn.removeEventListener('click', onWatchedBtnClick);
  refs.queueBtn.addEventListener('click', onQueueBtnClick);

  const watchedMovieId =
    JSON.parse(localStorage.getItem('watched')) === null
      ? []
      : JSON.parse(localStorage.getItem('watched'));
  // console.log(watchedMovieId);

  watchedMovieId.length === 0
    ? refs.clockFrame.classList.remove('is-hiden')
    : refs.clockFrame.classList.add('is-hiden');

  watchedMovieId.forEach(item =>
    refs.mainMarkup.insertAdjacentHTML('beforeend', idItemMarkup(item))
  );
  // const markup = watchedMovieId.map(item => itemMarkup(item)).join('');
  // console.log(markup);
  // watchedMovieId.forEach(id => {
  //   movieApiService.getMovieById(id).then(result => {
  //     refs.mainMarkup.insertAdjacentHTML('beforeend', idItemMarkup(result));
  //   });
  // });
  // refs.mainMarkup.insertAdjacentHTML('beforeend', markup);
}
