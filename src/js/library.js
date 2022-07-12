import { refs } from './refs';
import { onWatchedBtnClick } from './renderWatchedLib';

refs.header = document.querySelector('header');
refs.librarySwitcher = document.querySelector('.library__btn--wrapper');
refs.headerContainer = document.querySelector('header > .container');
refs.libraryBtn = document.querySelector('.nav-btn.library__btn');
refs.homePageBtn = document.querySelector('.nav-btn.home__btn');
refs.wachedBtn = document.querySelector('.wached');
refs.logoLink = document.querySelector('.logo-link');

refs.libraryBtn.disabled = false;
refs.homePageBtn.disabled = true;

refs.headerContainer.append(refs.librarySwitcher);

refs.libraryBtn.addEventListener('click', e => menuSwitcher(e));
refs.homePageBtn.addEventListener('click', e => menuSwitcher(e));
refs.logoLink.addEventListener('click', () => {
  refs.homePageBtn.parentNode.classList.add('active__page');
  goToHomePage();
});

export function menuSwitcher(e) {
  if (e.target.classList.contains('library__btn')) {
    e.target.parentNode.classList.add('active__page');
    showLibrary();
  } else if (e.target.classList.contains('home__btn')) { 
    e.target.parentNode.classList.add('active__page');
    goToHomePage();
  }
}

function showLibrary() {
  refs.libraryBtn.disabled = true;
  refs.homePageBtn.disabled = false;
  refs.homePageBtn.parentNode.classList.remove('active__page');

  refs.form.classList.add('visually-hidden');
  refs.header.classList.add('library__header');

  refs.librarySwitcher.classList.remove('visually-hidden');
  refs.wachedBtn.classList.add('selected');
  refs.mainMarkup.innerHTML = '';

  onWatchedBtnClick();
}

function goToHomePage() {
  refs.homePageBtn.disabled = true;
  refs.libraryBtn.disabled = false;
  refs.libraryBtn.parentNode.classList.remove('active__page');

  refs.form.classList.remove('visually-hidden');
  refs.header.classList.remove('library__header');
  refs.librarySwitcher.classList.add('visually-hidden');

  refs.mainMarkup.innerHTML = '';
}
