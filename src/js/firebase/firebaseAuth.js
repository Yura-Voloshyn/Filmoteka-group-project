import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from "../refs";

const auth = getAuth();
const onLoginFormSubmit = async (event) => {
    event.preventDefault();
    
    // Getting credentials from the form inputs
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        if (window.location.hash === '#en') {
            Notify.failure('Please fill in all the fields!');
        };
        if (window.location.hash === '#uk') {
            Notify.failure('Будь ласка, заповніть всі поля!');
        };
        return;
    }
    const loginEmail = email.value;
    const loginPassword = password.value;
   
    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        const user = userCredential.user.email;
        if (window.location.hash === '#en') {
        Notify.success(`You are logged in!
            Welcome back, ${user}!`);
        };
        if (window.location.hash === '#uk') {
            Notify.success(`Ви увійшли в аккаунт!
            З поверненням, ${user}!`);
        };

        refs.loginBackdrop.classList.toggle('is-hidden');

    } catch (error) {
        console.log(error.message);
        if (error.message === 'Firebase: Error (auth/invalid-email).') {
            if (window.location.hash === '#en') {
                Notify.failure('Ivalid email. Please, try again!');
            };
            if (window.location.hash === '#uk') {
                Notify.failure('Невалідний email. Будь ласка, спробуйте ще раз!');
            };

        } else if (error.message === 'Firebase: Error (auth/internal-error).') {
           if (window.location.hash === '#en') {
                Notify.failure('Check if all fields are filled correctly.');
            };
            if (window.location.hash === '#uk') {
                Notify.failure('Перевірте, чи всі поля заповнені коректно.');
            };
            
        } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
            if (window.location.hash === '#en') {
                Notify.failure('Wrong password. Please, try again!');
            };
            if (window.location.hash === '#uk') {
                Notify.failure('Неправильний пароль. Будь ласка, спробуйте ще раз!');
            };
            
        } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
            if (window.location.hash === '#en') {
                Notify.failure('User not found. Please, register first.');
            };
            if (window.location.hash === '#uk') {
                Notify.failure('Користувача не знайдено. Будь ласка, спочатку зареєструйтеся.');
            };
            
        } else {
            if (window.location.hash === '#en') {
                Notify.failure('Login error:( Try again!');
            };
            if (window.location.hash === '#uk') {
                Notify.failure('Помилка входу :( Спробуйте ще раз.');
            };
        };
    }; 
}; 

refs.loginForm.addEventListener('submit', onLoginFormSubmit);