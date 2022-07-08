import { refs } from './refs';
import MovieApiService from './MovieApiService';
import { loadAnimationAction } from './renderTrendingPage';

const movieApiService = new MovieApiService();


refs.queueBtn.addEventListener('click', onQueueBtnClick)

function onQueueBtnClick(e) {
    e.preventDefault()
    const queueMovieId = JSON.parse(localStorage.getItem('queue'));
    console.log(queueMovieId);
    const queueData = await movieApiService.getMovieById
}