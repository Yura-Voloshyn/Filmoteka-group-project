import MovieApiService from './MovieApiService';
import { refs } from './refs';
// import { movieApiService } from './renderTrendingPage';
let singleGenre = [];
const movieApiService = new MovieApiService();
refs.form.addEventListener('submit', onFormSubmit);
// refs.btn.addEventListener('click', console.log('click'));
import { loadAnimationAction } from './renderTrendingPage';
export async function onFormSubmit(e) {
  e.preventDefault();
  clearMarkup();
  //   console.log(e.currentTarget.elements[0].value);
  movieApiService.query = e.currentTarget.elements[0].value;
  movieApiService.resetPage();
  loadAnimationAction.classList.remove('is-hiden');
  const searchData = await movieApiService.getMoviesBySearchQuery();
  //   console.log(movieApiService.query);
  //   console.log(searchData);
  const searchMarkup = searchData.results
    .map(item => itemMarkupBySearch(item))
    .join('');
  //   console.log(searchMarkup);
  loadAnimationAction.classList.add('is-hiden');
  //   console.log(searchData.total_results);
  if (searchData.total_results === 0) {
    return alert(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
  if (movieApiService.query === '') {
    return alert('input field cannot be empty.');
  } else {
    return refs.mainMarkup.insertAdjacentHTML('beforeend', searchMarkup);
  }
}

export function clearMarkup() {
  refs.mainMarkup.innerHTML = '';
}
export const getGenreName = function (ids) {
  singleGenre = [];
  ids.forEach(id => {
    singleGenre.push(localStorage.getItem(id));
  });
};

export function genreEditForRender(arr, maxLength) {
  let result;
  // Change code below this line
  if (arr.length <= maxLength) {
    result = arr;
  } else {
    result = arr.slice(0, maxLength).join(', ') + ', other';
  }
  /// Change code above this line
  return result;
}

export function itemMarkupBySearch({
  id,
  poster_path,
  title,
  genre_ids,
  release_date,
  vote_average,
}) {
  if (poster_path === null) {
    return;
  }
  getGenreName(genre_ids);
  return `
        <li class="movie-card" id="${id}">
  <a class="card-link" href="#"><img class="poster-image" src="https://image.tmdb.org/t/p/original/${poster_path}" alt="${title}" loading="lazy" /></a>
  
    <h2 class="card-title">
      ${title}
    </h2>
    <div class="info">
    <p class="info-item">
      ${genreEditForRender(singleGenre, 2)} 
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
