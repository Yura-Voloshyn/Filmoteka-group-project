import { studentsData } from './students_arr';


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// import studentsTemplate from '../templates/modal_students.hbs';
// import refs from './variables';
// const {
//   backdropStEl,
//   listStudents,
//   linkToDev,
//   closeModalBtn,
//   ...rest
// } = refs;

const backdropStEl = document.querySelector('.backdrop--students');
const listStudents = document.querySelector('.team-items');
const linkToDev = document.getElementById('openModalLink');
const closeModalBtn = document.getElementById('closeModalStBtn');

// const studentItems = studentsData.map(studentsTemplate).join(' ');
const studentItems = studentsData
  .map(({ photo_url, name, githab, possition }) => {
    return `
  <li class='team'>
  <div class='card__tumb team__tumb'>
    <img class='card__image team__image' src='${photo_url}' alt='${name}' />
  </div>
  <a href='${githab}' class='ref'>
  <div class='ref__cover'>
  <span class='ref__icon'></span>
  <h3 class='ref__title'>${name}</h3>
   </div>
  </a>
   <p class='ref__pos'>${possition}</p>
</li>
`;
  })
  .join('');

//   new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt"});
// console.log(studentItems);


listStudents.insertAdjacentHTML('afterbegin', studentItems);

const openLink = () => {
  window.addEventListener('keydown', onKeyPress);
  backdropStEl.classList.remove('is-hidden');
};

const closeModalStud = () => {
  backdropStEl.classList.add('is-hidden');
  window.removeEventListener('keydown', onKeyPress);
};

linkToDev.addEventListener('click', openLink);
closeModalBtn.addEventListener('click', closeModalStud);
backdropStEl.addEventListener('click', onBackdropClick);

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


