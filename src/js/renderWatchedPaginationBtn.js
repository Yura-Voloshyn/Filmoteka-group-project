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
        appendBtn(1);
        if (per_page_max === 2) {
            appendBtn(2);
            return;
        }
        if (per_page_max > 2 && per_page_max <= 3) {
            appendBtn(2);
            appendBtn(3);
            return;
        }
        if (per_page_max > 3 && per_page_max < 7) {
            for (let i = 2; i <= per_page_max; i += 1) {
                appendBtn(i);
            }
            return;
        }
    if (per_page_max < 8) {
      for (let i = 2; i <= per_page_max; i++) {
        appendBtn(i);
      }
      return;
    }
    if (current_page < 6) {
      appendBtn(2);
      appendBtn(3);
      appendBtn(4);
      appendBtn(5);
      appendBtn(6);
      appendBtn(7);
      appendBtn(current_page, true);
    } else if (current_page <= per_page_max - 5) {
      appendBtn(current_page, true);
      appendBtn(current_page - 2);
      appendBtn(current_page - 1);
      appendBtn(current_page);
      appendBtn(current_page + 1);
      appendBtn(current_page + 2);
      appendBtn(current_page, true);
    } else {
      appendBtn(current_page, true);
      appendBtn(per_page_max - 6);
      appendBtn(per_page_max - 5);
      appendBtn(per_page_max - 4);
      appendBtn(per_page_max - 3);
      appendBtn(per_page_max - 2);
      appendBtn(per_page_max - 1);
    }
    appendBtn(per_page_max);
    }
}
