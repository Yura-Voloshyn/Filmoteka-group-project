import { refs } from './refs';

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

refs.modalBtn[0].addEventListener('click', switchModals);
refs.modalBtn[1].addEventListener('click', switchModals);
refs.openLoginBtn.addEventListener('click', openLoginModal);
refs.closeLoginBtn.addEventListener('click', closeLoginModal);
refs.loginBackdrop.addEventListener('click', onBackdropClick);
