import { refs }  from "./refs";
// import { MovieApiService } from './MovieApiService';


refs.library = document.querySelector('#library');
refs.header = document.querySelector("header");
refs.libraryHeader = document.querySelector('#library__header--tamplate');
refs.headerContainer = document.querySelector('header > .container');
refs.libraryBtn = document.querySelector(".nav-btn.library__btn");
refs.homePageBtn = document.querySelector(".nav-btn.home__btn");


refs.libraryBtn.disabled = false;

refs.libraryBtn.addEventListener('click', showLibrary);

function showLibrary() { 
    refs.libraryBtn.disabled = true;

    //cleans header and add new header
    refs.form.classList.add('visually-hidden');
    refs.header.classList.add('library__header');

    refs.headerContainer.append(refs.libraryHeader.content.cloneNode(true));
    refs.wachedBtn = document.querySelector(".wached");
    refs.wachedBtn.classList.add('selected');



    // refs.mainMarkup.innerHTML = "";
    // refs.mainMarkup.append(refs.library.content.cloneNode(true));


    //дістати з локал сторедж бібліотекку користувача
    // Джейсон парс і мепаємо розмітку

}

refs.homePageBtn.addEventListener('click', goToHomePage);

function goToHomePage() { 
    refs.form.classList.remove('visually-hidden');
    refs.header.classList.remove('library__header');
    refs.librarySwitch = document.querySelector(".library__btn--wrapper");
    refs.librarySwitch.classList.add('visually-hidden')

}