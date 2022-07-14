import {refs} from './refs';

export function renderPaginationWatchedBtn(e) {
    const per_page_max = e;
    let current_page = 1;


    function appendBtn(i, ellipsis) {
        const activeBtn = current_page === i;
        const button = document.createElement('button');
        button.classList.add('btn-pagination');
        if (ellipsis === true) {
            button.innerHTML = '...';
            button.disabled = true;
            refs.paginationWatched.append(button);
            return false;
        }
        if (activeBtn) {
            button.classList.add('active-btn-pagination');
        }
        button.disabled = activeBtn;
        button.innerHTML = i;
        button.addEventListener('click', () => {
            current_page = i;
            refs.paginationWatched.innerHTML = '';
            logic();
        });
        refs.paginationWatched.append(button);
    }
    logic();
    function logic() {
        
        if (per_page_max <= 2) {
            appendBtn(1);
            appendBtn(2);
            return;
        }
        if (per_page_max > 2 && per_page_max <= 3) {
            appendBtn(1);
            appendBtn(2);
            appendBtn(3);
            return;
        }
        if (per_page_max > 3) {
            for (let i = 1; i <= per_page_max; i += 1) {
                appendBtn(i);
            }
        }
       
    }
}
