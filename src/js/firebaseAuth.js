import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from "./refs";

const auth = getAuth();
const onFormSubmit = async (event) => {
    event.preventDefault();
    
    // Getting credentials from the form inputs
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        Notify.failure('Please fill in all the fields!');
        return;
    }
    const loginEmail = email.value;
    const loginPassword = password.value;
   
    // event.currentTarget.reset();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        
        const user = userCredential.user.email;
        Notify.success(`You are logged in! Welcome back, ${user}`);
        // await monitorAuthState();
        refs.loginBackdrop.classList.toggle('is-hidden');
        refs.logoutBtn.parentNode.classList.toggle('is-hidden');
        refs.openLoginBtn.parentNode.classList.toggle('is-hidden');

    } catch (error) {
        console.log(error.message);
        if (error.message === 'Firebase: Error (auth/invalid-email).') {
            Notify.failure('Ivalid email. Please, try again!');
        } else if (error.message === 'Firebase: Error (auth/internal-error).') {
            Notify.failure('Check if all fields are filled correctly.');
        } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
            Notify.failure('Wrong password. Please, try again!');
        } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
            Notify.failure('User not found. Please, register first.');
        } else Notify.failure('Login error:( Try again!');
    }; 
};

// const getInputValues = (event) => {
//     const {
//         elements: { email, password }
//     } = event.currentTarget;

//     if (email.value === "" || password.value === "") {
//         Notify.failure('Please fill in all the fields!');
//         return;
//     }

//     const loginEmail = email.value;
//     const loginPassword = password.value;
    
//     console.log(loginEmail, loginPassword);
//     event.currentTarget.reset();
// };


const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
    }
  });
};

const logOut = async (event) => {
  event.preventDefault();
    await signOut(auth);
    refs.logoutBtn.parentNode.classList.toggle('is-hidden');
    refs.openLoginBtn.parentNode.classList.toggle('is-hidden');
  Notify.info("You're successfully logged out.");
};

// function buttonToggle() {
//   refs.openLoginBtn.textContent.toLowerCase() === 'log in'
//     ? (refs.openLoginBtn.textContent = `Log Out`)
//     : (refs.openLoginBtn.textContent = `Log In`);
// }


refs.loginForm.addEventListener('submit', onFormSubmit);
refs.logoutBtn.addEventListener('click', logOut);