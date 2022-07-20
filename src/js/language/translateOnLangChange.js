import '../library';
import MovieApiService from '../MovieApiService';
import { refs } from '../refs';
import './language-translate-static';
import { languageTranslate } from './language-translate-static';
// function changeLanguage(lang) {
//   location.hash = lang;
//   location.reload();
// }
const movieApiService = new MovieApiService();
let lang;
refs.selectLang.addEventListener('change', onLanguageChange);

export function onLanguageChange(e) {
  lang = e.currentTarget.value;
  location.hash = lang;

  location.reload();
  refs.selectLang.value = lang;
}

switch (window.location.hash) {
  case '#en':
    refs.input.placeholder = languageTranslate.placeholder.en;
    refs.logoBtn.href = '#en';
    refs.studModalLink.href = '#en';
    break;
  case '#uk':
    refs.input.placeholder = languageTranslate.placeholder.uk;
    refs.logoBtn.href = '#uk';
    refs.studModalLink.href = '#uk';
    break;
}

export function modalTranslate() {
  document.querySelectorAll('[data-lang]').forEach(el => {
    for (const key in languageTranslate) {
      if (key === el.dataset.lang) {
        el.textContent =
          location.hash === '#uk'
            ? languageTranslate[key].uk
            : languageTranslate[key].en;
      }
    }
  });
}
