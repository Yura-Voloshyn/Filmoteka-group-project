import { studentsDataEn, studentsDataUk } from './students_arr';
import { refs } from './refs';
// import { languageTranslate } from './language/language-translate-static';
import { modalTranslate } from './language/translateOnLangChange';
import { studName } from './language/language-translate-static';
import { possition } from './language/language-translate-static';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import confetti from 'canvas-confetti';

if (window.location.hash === '#en') {
  refs.selectLang.value = 'en';
} else if (window.location.hash === '#uk') {
  refs.selectLang.value = 'uk';
}
const lang = refs.selectLang.value;

if (location.hash === '#en') {
  let studentItemsEn = studentsDataEn
    .map(({ photo_url, name, githab, possition }) => {
      return `
  <li class='team'>
  <div class='card__tumb team__tumb'>
    <img data-lang="studName" class='card__image team__image' src='${photo_url}' alt='${name}' />
  </div>
  <a href='${githab}' class='ref'>
  <div class='ref__cover'>
  <span class='ref__icon'></span>
  <h3 data-lang="studName" class='ref__title'>${name}</h3>
  
   </div>
  </a>
<p data-lang="possition" class='ref__pos'>${possition}</p>
</li>
`;
    })
    .join('');
}
if (location.hash === '#en') {
  let studentItemsUk = studentsDataUk
    .map(({ photo_url, name, githab, possition }) => {
      return `
  <li class='team'>
  <div class='card__tumb team__tumb'>
    <img data-lang="studName" class='card__image team__image' src='${photo_url}' alt='${name}' />
  </div>
  <a href='${githab}' class='ref'>
  <div class='ref__cover'>
  <span class='ref__icon'></span>
  <h3 data-lang="studName" class='ref__title'>${name}</h3>
  
   </div>
  </a>
<p data-lang="possition" class='ref__pos'>${possition}</p>
</li>
`;
    })
    .join('');
  return studentItemsUk;
}

const lnk = document.querySelector('.footer-link');
const renderModal = document.querySelector('.team-items');

const openLink = () => {
  renderModal.innerHTML = '';
  modalTranslate();
  modalTranslateName();
  modalTranslatePos();
  refs.listStudents.insertAdjacentHTML('afterbegin', studentItemsUk);
  window.addEventListener('keydown', onKeyPress);
  refs.backdropStEl.classList.remove('is-hidden');
  showConfetti();
};

const closeModalStud = () => {
  refs.backdropStEl.classList.add('is-hidden');
  window.removeEventListener('keydown', onKeyPress);
};

const closeModalStudX = () => {
  refs.backdropStEl.classList.add('is-hidden');
  window.removeEventListener('keydown', onKeyPress);
};

refs.linkToDev.addEventListener('click', openLink);
refs.closeModalBtn.addEventListener('click', closeModalStud);
refs.closeModalBtnX.addEventListener('click', closeModalStudX);
refs.backdropStEl.addEventListener('click', onBackdropClick);

function onKeyPress(event) {
  if (event.code === 'Escape') {
    closeModalStud();
  }
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeModalStud();
  }
}

function showConfetti() {
  confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
  })({ particleCount: 100, spread: 160, zIndex: 2021 });
}

function modalTranslateName() {
  document.querySelectorAll('[data-lang]').forEach(el => {
    for (const key in studName) {
      if (key === el.dataset.lang) {
        el.textContent =
          location.hash === '#uk' ? studName[key].uk : studName[key].en;
      }
    }
  });
}

function modalTranslatePos() {
  document.querySelectorAll('[data-lang]').forEach(el => {
    for (const key in possition) {
      if (key === el.dataset.lang) {
        el.textContent =
          location.hash === '#uk' ? possition[key].uk : possition[key].en;
      }
    }
  });
}

// import { studentsData } from './students_arr';

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import confetti from 'canvas-confetti';

// // import studentsTemplate from '../templates/modal_students.hbs';
// // import { refs } from './refs';

// const backdropStEl = document.querySelector('.backdrop--students');
// const listStudents = document.querySelector('.team-items');
// const linkToDev = document.getElementById('openModalLink');
// const closeModalBtn = document.getElementById('closeModalStBtn');
// const closeModalBtnX = document.getElementById('closeModalStBtnX');

// // const studentItems = studentsData.map(studentsTemplate).join(' ');
// const studentItems = studentsData
//   .map(({ photo_url, name, githab, possition }) => {
//     return `
//   <li class='team'>
//   <div class='card__tumb team__tumb'>
//     <img class='card__image team__image' src='${photo_url}' alt='${name}' />
//   </div>
//   <a href='${githab}' class='ref'>
//   <div class='ref__cover'>
//   <span class='ref__icon'></span>
//   <h3 class='ref__title'>${name}</h3>

//    </div>
//   </a>
// <p class='ref__pos'>${possition}</p>
// </li>
// `;
//   })
//   .join('');

// //   new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt"});
// // console.log(studentItems);
// const lnk = document.querySelector('.footer-link');
// const renderModal = document.querySelector('.team-items');

// const openLink = () => {
//   renderModal.innerHTML = '';
//   listStudents.insertAdjacentHTML('afterbegin', studentItems);
//   window.addEventListener('keydown', onKeyPress);
//   backdropStEl.classList.remove('is-hidden');
//   showConfetti();
// };

// const closeModalStud = () => {
//   backdropStEl.classList.add('is-hidden');
//   window.removeEventListener('keydown', onKeyPress);

// };

// const closeModalStudX = () => {
//   backdropStEl.classList.add('is-hidden');
//   window.removeEventListener('keydown', onKeyPress);

// };

// linkToDev.addEventListener('click', openLink);
// closeModalBtn.addEventListener('click', closeModalStud);
// closeModalBtnX.addEventListener('click', closeModalStudX);
// backdropStEl.addEventListener('click', onBackdropClick);

// function onKeyPress(event) {
//   if (event.code === 'Escape') {
//     closeModalStud();

//   }
// }

// function onBackdropClick(event) {
//   if (event.target === event.currentTarget) {
//     closeModalStud();

//   }
// }

// function showConfetti() {
//   confetti.create(document.getElementById('canvas'), {
//     resize: true,
//     useWorker: true,
//   })({ particleCount: 100, spread: 160, zIndex: 2021 });
// }
