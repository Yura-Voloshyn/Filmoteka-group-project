import { getAuth, onAuthStateChanged } from "firebase/auth";
import { refs } from "../refs";

const auth = getAuth();
export const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.uid;
      // console.log(uid);
      refs.logoutBtn.parentNode.classList.toggle('is-hidden');
      refs.openLoginBtn.parentNode.classList.toggle('is-hidden');
    };
  });
};

monitorAuthState();