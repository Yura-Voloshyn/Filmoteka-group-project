import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from "../refs";

const auth = getAuth();
const onRegisterFormSubmit = async (event) => {
    event.preventDefault();

    // Getting credentials from the form inputs
    const {
        elements: { email, password, repeat }
    } = event.currentTarget;

    if (email.value === "" || password.value === "" || repeat.value === "") {
        Notify.failure('Please fill in all the fields!');
        return;
    }

    const loginEmail = email.value;
    const loginPassword = password.value;
    const repeatPassword = repeat.value;    

    if (loginPassword === repeatPassword) {
        try {
        const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
            
            const user = userCredential.user.email;
            Notify.success(`Welcome, ${user}! Account successfully created.`);
            refs.loginBackdrop.classList.toggle('is-hidden');

        } catch (error) {
            if (error.message === 'Firebase: Error (auth/invalid-email).') {
                Notify.failure('Ivalid email. Please, try again!');
            } else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).')
            {   Notify.failure('Password should be at least 6 characters');
            } else if (error.message === 'Firebase: Error (auth/internal-error).') {
                Notify.failure('Check if all fields are filled correctly');
            } else if (error.message === 'Firebase: Error (auth/missing-email).') {
                Notify.failure('Enter your email, please.');
            } else if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                Notify.failure('This email already in use. Try another email.');
            } else {
                Notify.failure('Registration error:( Try again');
            }
        }
  } else Notify.failure('Passwords did not match. Try again');
};

refs.registerForm.addEventListener('submit', onRegisterFormSubmit)
    