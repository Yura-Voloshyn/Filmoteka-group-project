import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  position: 'center-top',
  timeout: 2000,
  distance: '65px',

  width: '320px',
  fontSize: '12px',
  cssAnimationStyle: 'from-top',
  cssAnimationDuration: 600,

  failure: {
    background: '#FF6B08',
  },
});

// Notify.failure({
//   background: '#FF6B08',
// });
