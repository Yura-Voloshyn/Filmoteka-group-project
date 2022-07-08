// import { refs } from './refs';
// import MovieApiService from './MovieApiService';
// import itemMarkup from './renderTrendingPage';

// const movieApiService = new MovieApiService();

// refs.watchedBtn.addEventListener('click', async() =>{
//     try{
//         const movies = await fetchMovies();
//         console.log(movies);
//                 // renderUserListItems();
//     } catch(error) {
//         console.log(error.message);
//     }
// });

// async function fetchMovies(){
//     let getWatched = localStorage.getItem('watched');
//     const parsedDataGetWatched = JSON.parse(getWatched);

//     const arrayOfPromises = parsedDataGetWatched.map(async (movieId) =>{
//         const response = await movieApiService.getMovieById(movieId);
//         // console.log ('response', response);
//       return response;
//     });

//     const movies = await Promise.all(arrayOfPromises);
//     // const markup = movies.map(item => renderUserListItems(item)).join('');
//     // console.log ('markup', markup);
//     return movies;
// }

// export default fetchMovies();

// function renderUserListItems({
//         id,
//         poster_path,
//         title,
//         genre_ids,
//         release_date,
//         vote_average,
//       }) {
//          return `
//               <li class="movie-card" id="${id}">
//         <a class="card-link" href="#"><img class="poster-image" src="https://image.tmdb.org/t/p/w342/${poster_path}" alt="${title}" loading="lazy" /></a>

//           <h2 class="card-title">
//             ${title}
//           </h2>
//           <div class="info">
//           <p class="info-item">
//             ${formatArr(singleGenre, 2)}
//           </p>
//           <p class="info-item info-item__date">|
//             ${release_date.slice(0, 4)}
//           </p>
//           <p class="info-item info-item__vote">
//             ${vote_average.toFixed(1)}
//           </p>

//         </div>
//       </li>
//             `;
// }
