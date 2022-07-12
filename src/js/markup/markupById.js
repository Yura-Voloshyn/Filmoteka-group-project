import MovieApiService from '../MovieApiService';
import '../refs';

const movieApiService = new MovieApiService();

// render for ID //
export function formatArr(arr, maxLength) {
  let result;
  if (arr.length <= maxLength) {
    result = arr;
  } else if (window.location.hash === '#en') {
    result = arr.slice(0, maxLength).join(', ') + ', other';
  } else if (window.location.hash === '#uk') {
    result = arr.slice(0, maxLength).join(', ') + ', інші';
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
