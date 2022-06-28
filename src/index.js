// https://api.themoviedb.org/3/movie/550?api_key=b28dcafbfbdc99f3059a27aaeb93fed6
import MovieApiService from './js/MovieApiService';

const refs = {
  mainMarkup: document.querySelector('.main-render'),
  submitBtn: document.querySelector('.submit-btn'),
};

const movieApiService = new MovieApiService();
console.log(movieApiService);

async function asd() {
  const zxc = await movieApiService.getAllGenres();
  //   console.log(zxc);
}
console.log(asd());

async function renderMainPage() {
  const data = await movieApiService.fetchMovies();
  const markup = data.results.map(item => itemMarkup(item)).join('');

  console.log(data.results);
  refs.mainMarkup.insertAdjacentHTML('beforeend', markup);
}
renderMainPage();
function itemMarkup({
  poster_path,
  title,
  genre_ids,
  release_date,
  vote_average,
}) {
  //   const demoArr = movieApiService.allGenres.filter(genre => {
  //     return genre.id;
  //   });
  //   const asd = genre_ids;
  //   console.log(asd);

  //   const demoArr = movieApiService.allGenres.flatMap(gender => gender.id);
  //   console.log(demoArr);

  //   const id1 = genre_ids[0];
  //   const id2 = genre_ids[1] || '';
  //   console.log(id1, id2);
  //   const asd = [...genre_ids];
  //   console.log(asd[0]);
  //   const genre = movieApiService.allGenres;
  //   console.log(genre);
  return `
        <div class="photo-card">
  <a class="card-link" href="#"><img class="card-image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      ${title}
    </p>
    <p class="info-item">
      ${release_date}
    </p>
    <p class="info-item">
      ${vote_average}
    </p>
    <p class="info-item">
      <b>genres</b>
      ${genre_ids.slice(0, 2).join(', ')}, other
    </p>
    
  </div>
</div>
      `;
}
