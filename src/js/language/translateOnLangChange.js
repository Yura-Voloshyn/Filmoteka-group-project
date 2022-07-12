/* <div class="lang-select">
  <select class="select" name="select" id="select">
    <a href="#" class="opt-en">
      <option value="en">EN</option>
    </a>
    <a href="#" class="opt-uk">
      <option value="uk">UA</option>
    </a>
  </select>
</div>; */
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
if (window.location.hash) {
  if (window.location.hash === '#en') {
    refs.homePageBtn.textContent = languageTranslate.home.en;
    refs.libraryBtn.textContent = languageTranslate.library.en;
    refs.loginBtn.textContent = languageTranslate.log.en;
    refs.input.placeholder = languageTranslate.placeholder.en;
    refs.watchedBtn.textContent = languageTranslate.watchedB.en;
    refs.queueBtn.textContent = languageTranslate.queueB.en;
  } else if (window.location.hash === '#uk') {
    refs.homePageBtn.textContent = languageTranslate.home.uk;
    refs.libraryBtn.textContent = languageTranslate.library.uk;
    refs.loginBtn.textContent = languageTranslate.log.uk;
    refs.input.placeholder = languageTranslate.placeholder.uk;
    refs.watchedBtn.textContent = languageTranslate.watchedB.uk;
    refs.queueBtn.textContent = languageTranslate.queueB.uk;
  }
}
