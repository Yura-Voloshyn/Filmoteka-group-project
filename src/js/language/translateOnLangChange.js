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

refs.selectLang.addEventListener('change', onLanguageChange);

export function onLanguageChange(e) {
  lang = e.currentTarget.value;
  location.hash = lang;

  location.reload();
  refs.selectLang.value = lang;
}

// console.log(languageTranslate);
// switch (window.location.hash) {
//   case '#en':
//     refs.homePageBtn.textContent = languageTranslate.home.en;
//     refs.libraryBtn.textContent = languageTranslate.library.en;
//     refs.loginBtn.textContent = languageTranslate.log.en;
//     refs.input.placeholder = languageTranslate.placeholder.en;
//     refs.watchedBtn.textContent = languageTranslate.watchedB.en;
//     refs.queueBtn.textContent = languageTranslate.queueB.en;
//     break;
//   case '#uk':
//     refs.homePageBtn.textContent = languageTranslate.home.uk;
//     refs.libraryBtn.textContent = languageTranslate.library.uk;
//     refs.loginBtn.textContent = languageTranslate.log.uk;
//     refs.input.placeholder = languageTranslate.placeholder.uk;
//     refs.watchedBtn.textContent = languageTranslate.watchedB.uk;
//     refs.queueBtn.textContent = languageTranslate.queueB.uk;
//     break;
// }
// if (window.location.hash) {
//   if (window.location.hash === '#en') {
//     refs.homePageBtn.textContent = languageTranslate.home.en;
//     refs.libraryBtn.textContent = languageTranslate.library.en;
//     refs.loginBtn.textContent = languageTranslate.log.en;
//     refs.input.placeholder = languageTranslate.placeholder.en;
//     refs.watchedBtn.textContent = languageTranslate.watchedB.en;
//     refs.queueBtn.textContent = languageTranslate.queueB.en;
//   } else if (window.location.hash === '#uk') {
//     refs.homePageBtn.textContent = languageTranslate.home.uk;
//     refs.libraryBtn.textContent = languageTranslate.library.uk;
//     refs.loginBtn.textContent = languageTranslate.log.uk;
//     refs.input.placeholder = languageTranslate.placeholder.uk;
//     refs.watchedBtn.textContent = languageTranslate.watchedB.uk;
//     refs.queueBtn.textContent = languageTranslate.queueB.uk;
//   }
// }

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
