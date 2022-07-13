import { refs } from '../refs';

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

refs.modalBtn[0].addEventListener('click', switchModals);
refs.modalBtn[1].addEventListener('click', switchModals);
refs.openLoginBtn.addEventListener('click', openLoginModal);
refs.closeLoginBtn.addEventListener('click', closeLoginModal);
refs.loginBackdrop.addEventListener('click', onBackdropClick);



// KEYS FOR LOGIN TRANSLATION

// emailPlaceholder: {
//     en: 'Email',
//     uk: 'Введіть Email',
//   },
// passwordPlaceholder: {
//   en: 'Password',
//   uk: 'Введіть Пароль',
// },
// repeatPlaceholder: {
//   en: 'Repeat Password',
//   uk: 'Повторіть Пароль',
// },
// registerBtn: {
//   en: 'Register',
//   uk: 'Реєстрація',
// },
// loginBtn: {
//   en: 'Login',
//   uk: 'Увійти',
// },
// account: {
//   en: 'Have an account?',
//   uk: 'Вже є аккаунт?',
// },
// noAccount: {
//   en: 'Don`t have an account?',
//   uk: 'Немає облікового запису?',
// },

