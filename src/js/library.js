import { refs } from "./refs";
import { MovieApiService } from './MovieApiService';


refs.libraryBtn = document.querySelector(".nav-btn");
refs.library = document.querySelector('#library');
refs.header = document.querySelector("header");
refs.libraryHeader = document.querySelector('#library__header--tamplate');
console.log(refs.header);

// refs.libraryBtn.addEventListner('click', showLibrary);

function showLibrary() { 
    //cleans header and add new header
    refs.header.innerHTML = "";
    refs.header.append(refs.libraryHeader.content.cloneNode(true));

    refs.mainMarkup.innerHTML = "";
    refs.mainMarkup.append(refs.library.content.cloneNode(true));
    //дістати з локал сторедж бібліотекку користувача
    // Джейсон парс і мепаємо розмітку

}
showLibrary();
