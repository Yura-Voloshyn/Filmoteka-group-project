import { refs } from "./refs";
import { MovieApiService } from './MovieApiService';


refs.libraryBtn = document.querySelector(".nav-btn");
refs.library = document.querySelector('#library');
refs.header = document.querySelector("header");
refs.libraryHeader = document.querySelector('#library__header--tamplate');
refs.headerContainer = document.querySelector('header > .container');

console.log(refs.header);

// refs.libraryBtn.addEventListner('click', showLibrary);

function showLibraryHeader() { 
    //cleans header and add new header
    refs.form.classList.add('visually-hidden');
    refs.header.classList.add('library__header');
    refs.headerContainer.append(refs.libraryHeader.content.cloneNode(true));


    refs.mainMarkup.innerHTML = "";
    refs.mainMarkup.append(refs.library.content.cloneNode(true));


    //дістати з локал сторедж бібліотекку користувача
    // Джейсон парс і мепаємо розмітку

}
showLibraryHeader();
