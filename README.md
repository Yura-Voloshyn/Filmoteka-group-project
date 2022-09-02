Work of the Weekend team on the project:

Serhii Smaga, scrum master. Was responsible for the development of the modal window when clicking on the movie card, rendering and writing the modal styles (the markup is written in js, that is, the modal does not physically interact with the click on the movie card). Fetch a movie by the ID of the movie itself for rendering the modal and fetch a request to the server for the video/trailer of the corresponding movie. The logic of dynamically changing the buttons that are responsible for adding and removing from the library (both in the modal window and the library itself). Working with local storage (adding and removing a movie object when interacting with the add/remove buttons from the library). Developed the logic of translation by the data key of attributes of tags of static data (which were translated manually by assigning the data attribute to the necessary tags). Extremely clean, logical and understandable code that reads like a book (for this, a special thanks).

Olena Lotos, developer. Was responsible for the rendering of the "students" modal window in the footer of the project. I want to note the creative approach to the problem not only from the design side but also from the technical side, because the problem could be solved by writing the markup for each user in html (having a whole bunch of code), but Olena went the other way and created one markup card and a separate JS class with necessary information on the team members, and from there took the data for the rendering of each member's card. Was engaged in the translation of her modal window (which also takes data from a separate object and substitutes them dynamically). Super responsible and despite technical problems (the translation and verification took place blindly due to a local host error), she did not stop the development of her part.

Iryna Shashko, developer. Responsible for all pagination in the project, without using an additional library. For the main page (trends and search), worked out a fetch request and in relation to it developed the logic for displaying pagination and the number of pages, on the library page - data about the number of movies was obtained from the local storage and based on this, the number of pages was rendered. Quite a difficult job, which Ira did very well without involving other developers in this process. Separately, I would like to note that the development of pagination took place in separate branches and sometimes in separate repositories in order not to break the code of other developers, and before merging with the main branch, the work of the site as a whole was checked in great detail.

Yulia Pakhachuk, developer. The library was responsible for the rendering of the page, for the logic of turning on/off the "viewed" and "queue" buttons. Installed the listeners (EventListener) very nicely and clearly and wrote the logic of their work, which greatly simplified the collaboration with other developers' functionality that is related to the functionality developed by Yulia. Very creatively approached the "plug" in the library (until the films are added to the watched or in the queue), creating an animated clock that corresponds to the real time of the user, which is the most important thing - the clock is written by hand in pure JS without the use of additional libraries. I would also like to note that Yulia never stayed away from other functionality and helped the team with ideas for solving certain issues or the logic of the application's operation. Has a very clear understanding of how algorithms work and the logic of how code works in general.

Anna Shumakova, developer. Responsible for user registration/authentication through the Firebase library. A completely new library with extremely large and complex functionality. I will note right away that the assigned task was completed on a five-point scale with a 5+. She approached the given task very responsibly, familiarized herself with and in detail (as much as possible during the project) analyzed the documentation of the Firebase library and its functionality in general. Very correctly, succinctly and, most importantly, in terms of the style of the site, the modal authorization window was created with its functionality as a whole. Helped other developers (who needed help) during the project. Anya can easily understand the written functions of other developers by writing the code as "you".

Andriy Timoshkin, developer. Was responsible for scrolling and everything related to it throughout the entire adaptive layout of the project. Developed and wrote the animation logic that is shown after making a request to the server (fetch) while waiting for a response and disappears when the desired response is received, and if something is wrong with the request, the animation does not stop and the console receives an error value. I would like to note a very creative approach to work, which only complements good knowledge of the technical part of development. He made extraordinary efforts in analyzing errors, bugs and finding non-working product functionality, but Andriy not only found them, but also looked for solutions to these problems and errors.

Yuriy Voloshyn, team-lead. I was responsible for organizing the basic settings of the project for the most convenient development process for the team. Setting up the repository and working with it. I understood the documentation and logic of the movie library in order to help the team when needed. Developed and wrote the logic of the dark/light theme by adding/taking the value stored in the local storage. Monitored and resolved conflicts (if any) during the merger


Робота команди Weekend над проєктом:

---

Сергій Смага, scrum master. Відповідав за розробку модального вікна при кліку на
карточку фільму, рендер і написання стилів модалки(розмітка написана в js, тобто
до кліку на карточку фільму модалки фізично не інує). Фетч фільму по ІД самого
фільму для рендеру модалки і фетч запит на сервер для відео/трейлера
відповідного фільму. Логіка динамічної зміни кнопок які відповідають за
додавання і видалення з бібліотеки(як в модальному вікні так і самій
бібліотеці). Робота з local storage (додавання і видалення об`єкту фільму при
взаємодії з кнопками додати/видалити з бібліотеки). Розробив логіку перекладу по
ключу data атрибутів тегів статичних даних(які перекладали в ручну присвоївши
data атрибут потрібним тегам). Надзвичайно чистий, логічний і зрозумілий код,
який читається наче книга(за це окрема подяка).

---

Олена Лотос, розробник. Відповідала за рендер модального вікна "студенти" у
футері проєкту. Хочу відзначити творчий підхід до задачі не тільки зі сторони
дизайну але й з технічної сторони, бо задачу можна було вирішити написавши
розмітку кожного користувача в html(маючи цілу купу коду), але Олена пішла іншим
шляхом і створила одну карточку розмітки і окремий JS клас з потрібною
інформацією по учасниках команди, і звідти брала дані для рендеру картки кожного
учасника. Займалась перекладом свого модального вікна (який також бере дані з
окремого об`єкту і підставляє їх динамічно). Супер відповідальна і незважаючи на
технічні проблеми (переклад і перевірка відбувалась всліпу через помилку local
host) не зупиняла розробку своєї частини.

---

Ірина Шашко, розробник. Відповідала за всю пагінацію на проєкті, без
використання додаткової бібліотеки. Для головної сторінки (тренди і пошук)
опрацьовувала фетч запит і відносно нього розробила логіку відображення
пагінації і кількості сторінок, на сторінці бібліотека - дані про кількість
фільмів діставала з локального сховища і на основі цього рендерила кількість
сторінок. Досить складна робота, з якою Іра справилась дуже добре і при цьому не
залучала інших розробників до цього процесу. Окремо відзначу те що розробка
пагінації відбувалась в окремих гілках а інколи і в окремих репозиторіях щоб не
зламати код інших розробників і перед тим як зливати з основною гілкою дуже
детально перевірялась на роботу сайту в цілому.

---

Юлія Пахачук, розробник. Відповідала за рендер сторінки бібліотека, за логіку
вмикання/вимикання кнопок "переглянуті" і "черга". Дуже гарно і чітко проставила
слухачів (EventListener) і написала логіку їх роботи, чим дуже спростила
колаборацію з іншим функціоналом розробників який пов`язаний з функціоналом
розробленим Юлією. Дуже креативно підійшла до "заглушки" у бібліотеці (поки
фльми не додані до переглянутих або у черзі), створивши анімований годинник який
відповідає реальному часу користувача, що саме головне - годинник написаний в
ручну на чистому JS без використання додаткових бібліотек. Відзначу також що Юля
ніколи не залишалась осторонь іншого функціоналу і допомагала команді ідеями по
вирішенню тих чи інший питань або логіки роботи додатку. Має дуже чітке
розуміння роботи алгоритмів і логіки роботи коду загалом.

---

Анна Шумакова, розробник. Відповідала за реєстрацію/автентифікацію користувача
через бібліотеку Firebase. Абсолютно нова бібліотека з надзвичайно великим і
складним функціоналом. Відразу відзначу, що поставлене завдання по п`ятибальній
шкалі виконано на 5+. Дуже відповідально підійшла до поставленої задачі,
ознайомилась і детально (на скільки це було можливо за час проєкту) розібрала
документацію бібліотеки Firebase і її функціонал загалом. Дуже коректно,
лаконічно і головне по стилю сайту зверстала модальне вікно авторизації з його
функціоналом в цілому. Допомагала під час проєкту іншим розробникам (кому
потрібна була допомога). З написанням коду Аня на "ти" і так само легко може
розібратись у написаних функціях інших розробників.

---

Андрій Тімошкін, розробник. Відповідав за скрол і все що з ним пов`язано по всій
адаптивній верстці проєкту. Розробив і написав логіку анімації яка показується
зробивши запит на сервер (фетч) поки чекає відповідь і зникає при отриманні
потрібної відповіді, а якщо з запитом щось не так анімація не зупиняється і в
консоль приходить значення помилки. Відзначу дуже креативний підхід до роботи,
який тільки доповнює хороші знання технічної частини розробки. Приклав
надзвичайних зусиль у розборі помилок, багів і пошуку непрацюючого функціоналу
продукту, але Андрій не просто їх знаходив, а й шукав вирішення цих проблем і
помилок.

---

Волошин Юрій, team-lead. Відповідав за організацію базових налаштувань проєкту
для якомога зручнішого процесу розробки для команди. Налаштування репозиторію і
роботи з ним. Розібрався з документацією і логікою роботи бібліотеки фільмів для
того щоб допомогти команді в разі потреби. Розробив і написав логіку роботи
темної/світлої теми додаючи/взявши значення яке зберігається в локальному
сховищі. Контролював та вирішував конфлікти(якщо такі були) під час злиття.
Запропонував логіку переключання мови, яку команда підхопила і активно
використала у своїх частинах коду. Допомагав команді з технічною частиною роботи
репозиторію, редактора коду, локал хоста.

---

Додаток розроблено з любов`ю. Weekend team ♥
