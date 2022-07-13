import MovieApiService from '../MovieApiService';
import '../refs';

const movieApiService = new MovieApiService();

// render for ID //
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
  let genresForMkup =
    genres.length !== 0 ? `${genresToString(genres)}` : 'Genres not found';
  let src =
    poster_path === null
      ? 'https://stringfixer.com/files/951711496.jpg'
      : `https://image.tmdb.org/t/p/w342/${poster_path}`;
  let relData = !release_date
    ? 'Date not found'
    : `${release_date.slice(0, 4)}`;
  return `
        <li class="movie-card" id="${id}">
  <a class="card-link" href="#"><img class="poster-image" src="${src}" alt="${title}" loading="lazy" /></a>
  
    <h2 class="card-title">
      ${title}
    </h2>
    <div class="info">
    <p class="info-item">
      ${genresForMkup} 
    </p>
    <p class="info-item info-item__date">| 
      ${relData}
    </p>
    <p class="info-item info-item__vote">
      ${vote_average.toFixed(1)}
    </p>
    
    
  </div>
</li>
      `;
}

function genresToString(genres) {
  let arr = [];
  genres.forEach(el => {
    arr.push(el.name);
  });
  return arr.join(', ');
}
