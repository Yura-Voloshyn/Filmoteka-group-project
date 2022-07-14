import MovieApiService from './MovieApiService.js';
import { refs } from './refs';
import { itemMarkupBySearch } from './renderSearchResult.js';
import { itemMarkup } from './renderTrendingPage';
import { getGenres } from './renderTrendingPage';
import { getGenreName } from './renderTrendingPage';
import { languageTranslate } from './language/language-translate-static';
import { modalTranslate } from './language/translateOnLangChange';
const movieApiService = new MovieApiService();

if (window.location.hash === '#en') {
  refs.selectLang.value = 'en';
} else if (window.location.hash === '#uk') {
  refs.selectLang.value = 'uk';
}
const lang = refs.selectLang.value;
export function renderPaginationSearchBtn(e) {
  const per_page_max = e;
  let current_page = 1;

  function appendBtn(i, ellipsis) {
    const activeBtn = current_page === i;
    const button = document.createElement('button');
    button.classList.add('btn-pagination');
    if (ellipsis === true) {
      button.innerHTML = '...';
      button.disabled = true;
      refs.paginationSearch.append(button);
      return false;
    }
    if (activeBtn) {
      button.classList.add('active-btn-pagination');
    }
    button.disabled = activeBtn;
    button.innerHTML = i;
    button.addEventListener('click', () => {
      current_page = i;
      refs.paginationSearch.innerHTML = '';
      logic();
    });
    refs.paginationSearch.append(button);
  }
  logic();
  function logic() {
    appendBtn(1);
    if (per_page_max < 7) {
      for (let i = 2; i <= per_page_max; i++) {
        appendBtn(i);
      }
      return;
    }
    // left
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

export function onPaginateSearchBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  refs.mainMarkup.innerHTML = '';
  let page = e.target.innerText;

  movieApiService.fetchArticlesSearchClick(page, lang).then(data => {
    const markupPagin = data.results
      .map(item => itemMarkupBySearch(item))
      .join('');
    refs.mainMarkup.insertAdjacentHTML('beforeend', markupPagin);
  });
}
