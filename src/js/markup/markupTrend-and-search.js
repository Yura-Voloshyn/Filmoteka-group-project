// import MovieApiService from '../MovieApiService';
// import '../refs';

// const movieApiService = new MovieApiService();

// // render trending & search //
// movieApiService
//   .getGenres()
//   .then(res => localStorage.setItem('genres', JSON.stringify(res.data.genres)));

// export const getGenreName = function (ids) {
//   const parsedGenres = JSON.parse(localStorage.getItem('genres'));
//   singleGenre = [];
//   ids.forEach(id => {
//     singleGenre.push(parsedGenres.find(gnr => gnr.id === id));
//   });
// };

// export function formatArr(arr, maxLength) {
//   let result;
//   if (arr.length <= maxLength) {
//     result = arr;
//   } else {
//     result = arr.slice(0, maxLength).join(', ') + ', other';
//   }
//   return result;
// }
// export function itemMarkup({
//   id,
//   poster_path,
//   title,
//   genre_ids,
//   release_date,
//   vote_average,
// }) {
//   getGenreName(genre_ids);
//   return `
//         <li class="movie-card" id="${id}">
//   <a class="card-link" href="#"><img class="poster-image" src="https://image.tmdb.org/t/p/w342/${poster_path}" alt="${title}" loading="lazy" /></a>

//     <h2 class="card-title">
//       ${title}
//     </h2>
//     <div class="info">
//     <p class="info-item">
//       ${formatArr(
//         singleGenre.map(genre => genre.name),
//         2
//       )}
//     </p>
//     <p class="info-item info-item__date">|
//       ${release_date.slice(0, 4)}
//     </p>
//     <p class="info-item info-item__vote">
//       ${vote_average.toFixed(1)}
//     </p>

//   </div>
// </li>
//       `;
// }

// // render for ID //
// export function formatArr(arr, maxLength) {
//   let result;
//   if (arr.length <= maxLength) {
//     result = arr;
//   } else {
//     result = arr.slice(0, maxLength).join(', ') + ', other';
//   }
//   return result;
// }
// export function idItemMarkup({
//   id,
//   poster_path,
//   title,
//   genres,
//   release_date,
//   vote_average,
// }) {
//   return `
//         <li class="movie-card" id="${id}">
//   <a class="card-link" href="#"><img class="poster-image" src="https://image.tmdb.org/t/p/w342/${poster_path}" alt="${title}" loading="lazy" /></a>

//     <h2 class="card-title">
//       ${title}
//     </h2>
//     <div class="info">
//     <p class="info-item">
//       ${formatArr(
//         genres.map(genre => genre.name),
//         2
//       )}
//     </p>
//     <p class="info-item info-item__date">|
//       ${release_date.slice(0, 4)}
//     </p>
//     <p class="info-item info-item__vote">
//       ${vote_average.toFixed(1)}
//     </p>

//   </div>
// </li>
//       `;
// }
