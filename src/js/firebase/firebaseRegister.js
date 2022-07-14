import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from "../refs";
import { closeLoginModal } from './firebaseModals';

const auth = getAuth();
const onRegisterFormSubmit = async (event) => {
    event.preventDefault();

    // Getting credentials from the form inputs
    const {
        elements: { email, password, repeat }
    } = event.currentTarget;

    if (email.value === "" || password.value === "" || repeat.value === "") {
        if (window.location.hash === '#en') {
            Notify.failure('Please fill in all the fields!');
        };
        if (window.location.hash === '#uk') {
            Notify.failure('Будь ласка, заповніть всі поля!');
        };
        return;
    };

    const loginEmail = email.value;
    const loginPassword = password.value;
    const repeatPassword = repeat.value;    

    if (loginPassword === repeatPassword) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
            const user = userCredential.user.email;
            if (window.location.hash === '#en') {
                Notify.success(`Welcome, ${user}!
                Account successfully created.`);
            };
            if (window.location.hash === '#uk') {
                Notify.success(`Вітаю, ${user}!
                Аккаунт успішно створено.`);
            };
            
           closeLoginModal();

        } catch (error) {
            if (error.message === 'Firebase: Error (auth/invalid-email).') {
                if (window.location.hash === '#en') {
                    Notify.failure('Ivalid email. Please, try again!');
                };
                if (window.location.hash === '#uk') {
                    Notify.failure('Невалідний email. Будь ласка, спробуйте ще раз!');
                };

            } else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).')
            {   if (window.location.hash === '#en') {
                    Notify.failure('Password should be at least 6 characters');
                };
                if (window.location.hash === '#uk') {
                    Notify.failure('Пароль має містити принаймні 6 знаків');
                };

            } else if (error.message === 'Firebase: Error (auth/internal-error).') {
                if (window.location.hash === '#en') {
                    Notify.failure('Check if all fields are filled correctly.');
                };
                if (window.location.hash === '#uk') {
                    Notify.failure('Перевірте, чи всі поля заповнені коректно.');
                };
                
            } else if (error.message === 'Firebase: Error (auth/missing-email).') {
                if (window.location.hash === '#en') {
                    Notify.failure('Enter your email, please.');
                };
                if (window.location.hash === '#uk') {
                    Notify.failure('Введіть Ваш email, будь ласка.');
                };
                
            } else if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                if (window.location.hash === '#en') {
                    Notify.failure('This email already in use. Try another email.');
                };
                if (window.location.hash === '#uk') {
                    Notify.failure('Цей email вже використовується. Будь ласка, спробуйте інший.');
                };
                
            } else {
                if (window.location.hash === '#en') {
                    Notify.failure('Registration error:( Try again.');
                };
                if (window.location.hash === '#uk') {
                    Notify.failure('Помилка реєстрації :( Спробуйте ще раз.');
                };
            };
        }
    } else {
        if (window.location.hash === '#en') {
            Notify.failure('Passwords did not match. Try again.');
        };
        if (window.location.hash === '#uk') {
            Notify.failure('Паролі не співпадають. Спробуйте ще раз.');
        };
    };
        
};

refs.registerForm.addEventListener('submit', onRegisterFormSubmit)
    