import { refs }  from "./refs";
// import { MovieApiService } from './MovieApiService';


refs.header = document.querySelector("header");
refs.librarySwitcher = document.querySelector('.library__btn--wrapper');
refs.headerContainer = document.querySelector('header > .container');
refs.libraryBtn = document.querySelector(".nav-btn.library__btn");
refs.homePageBtn = document.querySelector(".nav-btn.home__btn");
refs.wachedBtn = document.querySelector(".wached");


refs.libraryBtn.disabled = false;
refs.homePageBtn.disabled = true;

refs.headerContainer.append(refs.librarySwitcher);

refs.libraryBtn.addEventListener('click', (e) => menuSwitcher(e));
refs.homePageBtn.addEventListener('click', (e) => menuSwitcher(e));
//тут треба додати слухача на кнопку логін

function menuSwitcher(e) { 
    switch (e.target.innerText) { 
        case "HOME":
            goToHomePage();
            break;
        case "MY LIBRARY":
            showLibrary();
            break;
        //add case for login
    }
}

function showLibrary() { 
    refs.libraryBtn.disabled = true;
    refs.homePageBtn.disabled = false;

    refs.form.classList.add('visually-hidden');
    refs.header.classList.add('library__header');

    refs.librarySwitcher.classList.remove('visually-hidden');
    refs.wachedBtn.classList.add('selected');

    // refs.mainMarkup.innerHTML = "";
    // refs.mainMarkup.append(refs.library.content.cloneNode(true));

    //дістати з локал сторедж бібліотекку користувача
    // Джейсон парс і мепаємо розмітку
}


function goToHomePage() { 
    refs.homePageBtn.disabled = true;
    refs.libraryBtn.disabled = false;
    
    refs.form.classList.remove('visually-hidden');
    refs.header.classList.remove('library__header');
    refs.librarySwitcher.classList.add('visually-hidden');
}