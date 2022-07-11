import { refs } from './refs';

window.addEventListener('load', windowLoad);

export function windowLoad() {
  const toggler = document.querySelector('.toggler');
  const themeBtn = document.querySelector('.theme-btn');
  const htmlBlock = document.documentElement;
  const saveUserTheme = localStorage.getItem('user-theme');
  //   console.log(htmlBlock);
  let userTheme;
  if (window.matchMedia) {
    userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'light'
      : 'dark';
  }
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', e => {
      !saveUserTheme ? changeTheme() : null;
    });

  if (themeBtn) {
    themeBtn.addEventListener('click', function (e) {
      changeTheme(true);
    });
  }

  function setThemeClass() {
    if (saveUserTheme) {
      htmlBlock.classList.add(saveUserTheme);
    } else {
      htmlBlock.classList.add(userTheme);
    }
  }
  setThemeClass();

  function changeTheme(saveTheme = false) {
    let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
    let newTheme;
    if (currentTheme === 'light') {
      newTheme = 'dark';
    } else if (currentTheme === 'dark') {
      newTheme = 'light';
    }
    htmlBlock.classList.remove(currentTheme);
    htmlBlock.classList.add(newTheme);
    saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
  }
}

// toggler.addEventListener('click', e => {
//   console.log('clk');
// });

//   function getCheckboxStatus() {
//   const chbox = document.querySelector('#checkbox');
//   //   console.log(chbox.checked);
//   //   //   console.log(chbox.checked);

//   if ((chbox.checked ^= 1)) {
//     document.querySelector('body').style.backgroundColor = 'black';
//     document.querySelector('.footer').style.backgroundColor = 'black';
//   } else {
//     document.querySelector('body').style.backgroundColor = '';
//     document.querySelector('.footer').style.backgroundColor = '';
//   }
//   //   console.log(chbox.checked, 'done');
// }
