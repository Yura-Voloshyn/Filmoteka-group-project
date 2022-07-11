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
let lang = '';
export function onLanguageChange(e) {
  e.preventDefault();

  lang = e.currentTarget.value;
  console.log(lang);
  //   console.log(chosenLang);
  location.hash = lang;
  //   console.log(location.hash);
  location.reload();
  //   console.log(movieApiService.language);
  // console.log(languageTranslate.home.uk);

  if (window.location.hash) {
    if (window.location.hash === '#en') {
      refs.homePageBtn.textContent = languageTranslate.home.en;
      refs.libraryBtn.textContent = languageTranslate.library.en;
      refs.loginBtn.textContent = languageTranslate.log.en;
    } else if (window.location.hash === '#uk') {
      refs.homePageBtn.textContent = languageTranslate.home.uk;
      refs.libraryBtn.textContent = languageTranslate.library.uk;
      refs.loginBtn.textContent = languageTranslate.log.uk;
    }
  }
}
// console.log(languageTranslate);
if (window.location.hash) {
  if (window.location.hash == '#en') {
    refs.homeBtn.textContent = languageTranslate.home.en;
  } else if (window.location.hash == '#uk') {
    refs.homeBtn.textContent = languageTranslate.home.uk;
  }
}
