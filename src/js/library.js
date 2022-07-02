import { refs }  from "./refs";


refs.header = document.querySelector("header");
refs.librarySwitcher = document.querySelector('.library__btn--wrapper');
refs.headerContainer = document.querySelector('header > .container');
refs.libraryBtn = document.querySelector(".nav-btn.library__btn");
refs.homePageBtn = document.querySelector(".nav-btn.home__btn");
refs.wachedBtn = document.querySelector(".wached");
refs.logoLink = document.querySelector('.logo-link');


refs.libraryBtn.disabled = false;
refs.homePageBtn.disabled = true;

refs.headerContainer.append(refs.librarySwitcher);

refs.libraryBtn.addEventListener('click', (e) => menuSwitcher(e));
refs.homePageBtn.addEventListener('click', (e) => menuSwitcher(e));
refs.logoLink.addEventListener('click', () => {
    refs.homePageBtn.parentNode.classList.add('active__page');
    goToHomePage();
})
//тут треба додати слухача на кнопку логін

function menuSwitcher(e) { 
    switch (e.target.innerText) { 
        case "HOME":
            e.target.parentNode.classList.add('active__page');
            goToHomePage();
            break;
        case "MY LIBRARY":
            e.target.parentNode.classList.add('active__page');
            showLibrary();
            break;
        //add case for login
    }
}

function showLibrary() { 
    refs.libraryBtn.disabled = true;
    refs.homePageBtn.disabled = false;
    refs.homePageBtn.parentNode.classList.remove('active__page');

    refs.form.classList.add('is-hiden');
    refs.header.classList.add('library__header');

    refs.librarySwitcher.classList.remove('is-hiden');
    refs.wachedBtn.classList.add('selected');
}


function goToHomePage() { 
    refs.homePageBtn.disabled = true;
    refs.libraryBtn.disabled = false;
    refs.libraryBtn.parentNode.classList.remove('active__page');
    
    refs.form.classList.remove('is-hiden');
    refs.header.classList.remove('library__header');
    refs.librarySwitcher.classList.add('is-hiden');
}