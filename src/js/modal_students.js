import { studentsDataEn, studentsDataUk } from './students_arr';
import { refs } from './refs';
import 'simplelightbox/dist/simple-lightbox.min.css';
import confetti from 'canvas-confetti';

let defaultHash = location.hash === '#en' || location.hash === ''
let studentItems;

if (defaultHash) {
  studentItems = studentsDataEn
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
};

if (location.hash === '#uk') {
  studentItems = studentsDataUk
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
};

const renderModal = document.querySelector('.team-items');

const openLink = () => {
  renderModal.innerHTML = '';
  refs.listStudents.insertAdjacentHTML('afterbegin', studentItems);
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
};

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeModalStud();
  }
};

function showConfetti() {
  confetti.create(document.getElementById('canvas'), {
    resize: true,
    useWorker: true,
  })({ particleCount: 100, spread: 160, zIndex: 2021 });
};
