import { refs } from './refs';
const toggler = document.querySelector('.toggler');
// console.log(toggler);

toggler.addEventListener('click', getCheckboxStatus);

export function getCheckboxStatus() {
  const chbox = document.querySelector('#checkbox');
  //   console.log(chbox.checked);
  //   //   console.log(chbox.checked);

  if ((chbox.checked ^= 1)) {
    document.querySelector('body').style.backgroundColor = 'black';
  } else {
    document.querySelector('body').style.backgroundColor = 'white';
  }
  //   console.log(chbox.checked, 'done');
}
