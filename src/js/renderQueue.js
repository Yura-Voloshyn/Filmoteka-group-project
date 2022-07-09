import { refs } from './refs';
import MovieApiService from './MovieApiService';
import { itemMarkup, loadAnimationAction } from './renderTrendingPage';
import './renderTrendingPage';
import './renderSearchResult';
import { clearMarkup } from './renderSearchResult';
let idsForRender = [];
const movieApiService = new MovieApiService();

refs.queueBtn.addEventListener('click', onQueueBtnClick);

async function onQueueBtnClick() {
  refs.watchedBtn.classList.remove('selected');
  refs.queueBtn.classList.add('selected');
  clearMarkup();
  refs.queueBtn.removeEventListener('click', onQueueBtnClick);

  const queueMovieId = JSON.parse(localStorage.getItem('queue')).map(id =>
    Number(id)
  );
  queueMovieId.forEach(id => {
    movieApiService.getMovieById(id).then(result => {
      refs.mainMarkup.insertAdjacentHTML('beforeend', idItemMarkup(result));
    });
  });
}

export function formatArr(arr, maxLength) {
  let result;
  if (arr.length <= maxLength) {
    result = arr;
  } else {
    result = arr.slice(0, maxLength).join(', ') + ', other';
  }
  return result;
}
export function idItemMarkup({
  id,
  poster_path,
  title,
  genres,
  release_date,
  vote_average,
}) {
  return `
        <li class="movie-card" id="${id}">
  <a class="card-link" href="#"><img class="poster-image" src="https://image.tmdb.org/t/p/w342/${poster_path}" alt="${title}" loading="lazy" /></a>
  
    <h2 class="card-title">
      ${title}
    </h2>
    <div class="info">
    <p class="info-item">
      ${formatArr(
        genres.map(genre => genre.name),
        2
      )} 
    </p>
    <p class="info-item info-item__date">| 
      ${release_date.slice(0, 4)}
    </p>
    <p class="info-item info-item__vote">
      ${vote_average.toFixed(1)}
    </p>
    
    
  </div>
</li>
      `;
}
// const watchedCollection = JSON.parse(localStorage.getItem('watched')).map(id =>
//   Number(id)
// );
// let watchedFromApi = [];
// console.log(watchedFromApi);
// async function getLibraryCollection() {
//   loadAnimationAction.classList.remove('is-hiden');
//   watchedCollection.map(movieId => {
//     return movieApiService
//       .getMovieById(movieId)
//       .then(result => watchedFromApi.push(result));
//   });
//   loadAnimationAction.classList.add('is-hiden');
//   console.log(watchedFromApi);
// }
// export default getLibraryCollection();
// export function renderLibraryCollection() {
//   clearMarkup();
//   const libraryMarkup = watchedFromApi.map(movie => itemMarkup(movie)).join('');
//   refs.mainMarkup.insertAdjacentHTML('beforeend', libraryMarkup);
// }
