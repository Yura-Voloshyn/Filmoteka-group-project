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

  const queueMovieId = JSON.parse(localStorage.getItem('watched')).map(id =>
    Number(id)
  );
  queueMovieId.forEach(id => {
    movieApiService.getMovieById(id).then(result => {
      refs.mainMarkup.insertAdjacentHTML('beforeend', idItemMarkup(result));
    });
  });
}
