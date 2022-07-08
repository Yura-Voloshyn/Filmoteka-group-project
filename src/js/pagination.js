import MovieApiService from './MovieApiService.js';
import { refs } from './refs';
import { itemMarkup } from './renderTrendingPage';
import { getGenres } from './renderTrendingPage';
import {getGenreName} from './renderTrendingPage';

const movieApiService = new MovieApiService();

export function renderPaginationBtn(e) {
    const per_page_max = e;
    let current_page = 1;
    // const btns = document.querySelector('.pagination-section');

function appendBtn(i, ellipsis) {
    const activeBtn = current_page === i;
    const button = document.createElement('button');
  button.classList.add('btn-pagination');
  if (ellipsis === true) {
    button.innerHTML = '...';
    button.disabled = true;
    refs.pagination.append(button);
    return false;
  }
  if (activeBtn) {
    button.classList.add('active-btn-pagination');
  }
  button.disabled = activeBtn;
  button.innerHTML = i;
  button.addEventListener('click', () => {
    current_page = i;
    refs.pagination.innerHTML = '';
    logic();
  });
  refs.pagination.append(button);
}
logic();
function logic() {
  // left
  appendBtn(1);
  // left
  // center
    if (current_page < 6) {
    appendBtn(2);
    appendBtn(3);
    appendBtn(4);
    appendBtn(5);
    appendBtn(6);
    appendBtn(7);
    appendBtn(current_page, true);
  } else if (current_page <= per_page_max - 5) {
    appendBtn(current_page, true);
    appendBtn(current_page - 2);
    appendBtn(current_page - 1);
    appendBtn(current_page);
    appendBtn(current_page + 1);
    appendBtn(current_page + 2);
    appendBtn(current_page, true);
  } else {
    appendBtn(current_page, true);
    appendBtn(per_page_max - 6);
    appendBtn(per_page_max - 5);
    appendBtn(per_page_max - 4);
    appendBtn(per_page_max - 3);
    appendBtn(per_page_max - 2);
    appendBtn(per_page_max - 1);
  }
  // center
  // right
  appendBtn(per_page_max);
  // right
  }
}

export function onPaginateBtnClick(e) {
  if (e.target.nodeName !== "BUTTON") {
      return;
  }
  refs.mainMarkup.innerHTML = '';
  let pageNum = e.target.innerText;
  console.log("pageNum", pageNum);
  movieApiService.fetchArticles(pageNum).then(data => {
      console.log("data.results on pag", data.results);
    const markupPagin = data.results.map(item => itemMarkup(item)).join('');
    refs.mainMarkup.insertAdjacentHTML('beforeend', markupPagin);
  });
}

// refs.pagination.innerHTML = '';
  // refs.mainMarkup.innerHTML = '';
  // loadAnimationAction.classList.remove('is-hiden');
  // const data = await movieApiService.fetchArticles(1);
  // const markup = data.results.map(item => itemMarkup(item)).join('');
  // loadAnimationAction.classList.add('is-hiden');
  // const max_page = data.total_pages; 

  // renderPaginationBtn(max_page);
  // refs.pagination.addEventListener('click', onPaginateBtnClick);
  // //   console.log(markup);
  // //   console.log(data.results);
  // refs.mainMarkup.insertAdjacentHTML('beforeend', markup);