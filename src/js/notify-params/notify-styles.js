import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  position: 'center-top',
  timeout: 3000,
  distance: '15px',

  width: '300px',
  fontSize: '12px',
  cssAnimationStyle: 'from-top',
  cssAnimationDuration: 600,

  failure: {
    background: 'rgba(0,0,0,0.7)',
    textColor: '#FF6B08',
    notiflixIconColor: 'rgba(200,0,0,0.4)',
  },
  success: {
    background: 'rgba(0,0,0,0.7)',
    textColor: '#32c682',
    notiflixIconColor: 'rgba(50,200,130,0.4)',
  },
});

// Notify.failure({
//   background: '#FF6B08',
// });
