export function itemMarkup(
  {
    id,
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  },
  videoId
) {
  return `
  <div class='modal'>
  <button class="close-modal"></button>
  <section class="modal-rendered">
    <div class="card-div"
      ><img
        class="movie-poster"
        src="https://image.tmdb.org/t/p/w500/${poster_path}"
        alt="${title}"
        loading="lazy"
        data-video='${videoId}'
    /></div>

    <div class="info-modal">
      <h2 class="card-title">${title.toUpperCase()}</h2>
      
      <table class="info-block">
        <tbody>
          <tr>
            <td data-lang='votes' class="list-keys">Vote / Votes</td>
            <td class="list-values">
              <span class="vote-span">${vote_average.toFixed(
                1
              )}</span> / ${vote_count}
            </td>
          </tr>
          <tr>
            <td data-lang='popularity' class="list-keys">Popularity</td>
            <td class="list-values">${popularity.toFixed(1)}</td>
          </tr>
          <tr>
            <td data-lang='title' class="list-keys">Original Title</td>
            <td class="list-values">${original_title.toUpperCase()}</td>
          </tr>
          <tr>
            <td data-lang='genres' class="list-keys">Genres</td>
            <td class="list-values">${genresToString(genres)}</td>
          </tr>
        </tbody>
      </table>

      <p data-lang='about' class="info-about">About</p>
      <p class="info-overview">${overview}</p>
      <div class="buttons">
        <button class="button-watched" data-movieId='${id}'>Add to watched</button>
        <button class="button-queue" data-movieId='${id}'>Add to queue</button>
      </div>
    </div>
  </section>
  </div>`;
}

function genresToString(genres) {
  let arr = [];
  genres.forEach(el => {
    arr.push(el.name);
  });
  return arr.join(', ');
}
