import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  position: 'center-top',
  timeout: 3000,
  distance: '15px',

  width: '320px',
  fontSize: '14px',
  cssAnimationStyle: 'from-top',
  cssAnimationDuration: 600,

  failure: {
    background: '#11ffee00',
    textColor: '#FF6B08',
    notiflixIconColor: 'rgba(200,0,0,0.4)',
  },
  success: {
    background: '#11ffee00',
    textColor: '#32c682',
    notiflixIconColor: 'rgba(50,200,130,0.4)',
  },
});

// Notify.failure({
//   background: '#FF6B08',
// });
