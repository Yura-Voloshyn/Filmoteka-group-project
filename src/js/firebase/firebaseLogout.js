import { getAuth, signOut } from "firebase/auth";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from "../refs";

const auth = getAuth();
const logOut = async (event) => {
  event.preventDefault();
    await signOut(auth);
    refs.logoutBtn.parentNode.classList.toggle('is-hidden');
    refs.openLoginBtn.parentNode.classList.toggle('is-hidden');
  Notify.info("You're successfully logged out.");
};

refs.logoutBtn.addEventListener('click', logOut);