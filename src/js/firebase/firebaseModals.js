import { refs } from '../refs';
import { modalTranslate } from '../language/translateOnLangChange';
import { languageTranslate } from '../language/language-translate-static';

const switchModals = () => {
  refs.loginForm.classList.toggle('is-hidden');
  refs.registerForm.classList.toggle('is-hidden');
};

const openLoginModal = () => {
  refs.loginBackdrop.classList.toggle('is-hidden');
  window.addEventListener('keydown', onEscPress);
};

const closeLoginModal = () => {
  refs.loginBackdrop.classList.toggle('is-hidden');
  window.removeEventListener('keydown', onEscPress);
};

const onEscPress = (event) => {
  if (event.code === 'Escape') {
    closeLoginModal();
  }
};

const onBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    closeLoginModal();
  }
};

const buttonToggle = () => {
  refs.openLoginBtn.textContent.toLowerCase() === 'log in'
    ? (refs.openLoginBtn.textContent = `Log Out`)
    : (refs.openLoginBtn.textContent = `Log In`);
};

//Translation

switch (window.location.hash) {
  case ('#en' || ''):
    document.querySelectorAll("input[data-lang='emailPlaceholder']").placeholder = languageTranslate.emailPlaceholder.en;
    document.querySelectorAll("input[data-lang='passwordPlaceholder']").placeholder = languageTranslate.passwordPlaceholder.en;
    document.querySelector("input[data-lang='repeatPlaceholder']").placeholder = languageTranslate.repeatPlaceholder.en;

    break;
  case '#uk':
    document.querySelectorAll("input[data-lang='emailPlaceholder']")[0].placeholder = languageTranslate.emailPlaceholder.uk;
    document.querySelectorAll("input[data-lang='passwordPlaceholder']")[0].placeholder = languageTranslate.passwordPlaceholder.uk;
    document.querySelectorAll("input[data-lang='emailPlaceholder']")[1].placeholder = languageTranslate.emailPlaceholder.uk;
    document.querySelectorAll("input[data-lang='passwordPlaceholder']")[1].placeholder = languageTranslate.passwordPlaceholder.uk;
    document.querySelector("input[data-lang='repeatPlaceholder']").placeholder = languageTranslate.repeatPlaceholder.uk;

    break;
};

modalTranslate();

refs.modalBtn[0].addEventListener('click', switchModals);
refs.modalBtn[1].addEventListener('click', switchModals);
refs.openLoginBtn.addEventListener('click', openLoginModal);
refs.closeLoginBtn.addEventListener('click', closeLoginModal);
refs.loginBackdrop.addEventListener('click', onBackdropClick);
