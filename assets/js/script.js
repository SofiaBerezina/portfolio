'use strict';

// Функция для обновления активной кнопки языка
function updateActiveLanguageButton(lang) {
    const buttons = document.querySelectorAll('.sidebar-lang-switcher button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if ((lang === 'ru' && button.textContent === 'RU') ||
            (lang === 'en' && button.textContent === 'EN')) {
            button.classList.add('active');
        }
    });
}

// Функция переключения языка
function switchLanguage(lang) {
    localStorage.setItem('lang', lang);
    updateActiveLanguageButton(lang);

    if (lang === 'en') {
        // English translations
        document.querySelector('.name').textContent = 'Sofia Berezina';
        document.querySelector('.title').textContent = 'Web Developer';
        document.querySelector('[data-sidebar-btn] span').textContent = 'Contacts';

        // Navigation - update text AND data-page attributes
        const navLinks = document.querySelectorAll('.navbar-link');
        navLinks[0].textContent = 'About';
        navLinks[1].textContent = 'Resume';
        navLinks[2].textContent = 'Contact';

        // Update data-page attributes for articles
        document.querySelector('[data-page="обо мне"]').dataset.page = 'about';
        document.querySelector('[data-page="резюме"]').dataset.page = 'resume';
        document.querySelector('[data-page="контакты"]').dataset.page = 'contact';

        // Pages titles
        document.querySelector('.about .article-title').textContent = 'About Me';
        document.querySelector('.resume .article-title').textContent = 'Resume';
        document.querySelector('.contact .article-title').textContent = 'Contact';

        // About section
        document.querySelector('.service-title').textContent = 'Specialization';
        document.querySelectorAll('.service-item-title')[0].textContent = 'Frontend Development';
        document.querySelectorAll('.service-item-title')[1].textContent = 'Backend Development';
        document.querySelector('.links-title').textContent = 'My Resources';

        const linksSection = document.querySelectorAll('.resource-title');
        linksSection[1].textContent = 'Certificates';

        const linksText = document.querySelectorAll('.resource-text');
        linksText[0].textContent = 'My Projects & Code';
        linksText[1].textContent = 'Learning documents';

        // Service item texts
        document.querySelectorAll('.service-item-text')[0].textContent = 'HTML, CSS, SCSS, Bootstrap, JavaScript, adaptive layout';
        document.querySelectorAll('.service-item-text')[1].textContent = 'Python, Django Framework, SQL, Flask, API, DataBases';

        // Resume section
        document.querySelectorAll('.timeline .h3')[0].textContent = 'Education';
        document.querySelectorAll('.timeline .h3')[1].textContent = 'Experience';
        document.querySelector('.skills-title').textContent = 'My Skills';

        // Skills titles
        const skillTitles = document.querySelectorAll('.skills-item .h5');
        skillTitles[0].textContent = 'HTML/CSS/SCSS (Layout)';
        skillTitles[1].textContent = 'Python & Django';
        skillTitles[2].textContent = 'Data Analysis (Pandas, NumPy)';
        skillTitles[3].textContent = 'SQL & DataBases';
        skillTitles[4].textContent = 'JavaScript (In Progress)';
        skillTitles[5].textContent = 'Git & Team Work';
        skillTitles[6].textContent = 'Swift';

        // Contact section
        document.querySelector('.form-title').textContent = 'Contact Me';
        document.querySelector('.form-btn span').textContent = 'Send Message';

        // Form placeholders
        document.querySelector('input[name="fullname"]').placeholder = 'Full Name';
        document.querySelector('input[name="email"]').placeholder = 'Email Address';
        document.querySelector('textarea[name="message"]').placeholder = 'Your Message';

        // Contact info
        const contactTitles = document.querySelectorAll('.contact-title');
        contactTitles[0].textContent = 'Email';
        contactTitles[1].textContent = 'Phone';
        contactTitles[2].textContent = 'Birthday';
        contactTitles[3].textContent = 'Location';

        document.querySelector('.contact-birthday').innerHTML = '<time datetime="2004-10-23">October 23, 2004</time>';
        document.querySelector('.contact-address').innerHTML = '<address>Saint-Petersburg, Russia</address>';

        // About text
        document.querySelector('.about-text').innerHTML = `
             <p>
                Third-year ITMO University student actively developing in web development. 
                I'm particularly fascinated by the process of turning design mockups into 
                live, functional interfaces that real people see and use.
            </p>
            <p>
                Currently deepening my JavaScript knowledge and preparing to master React 
                and modern CSS frameworks. Alongside my studies, I practice by coding 
                layouts from Figma and developing my frontend skills.
            </p>
            <p>
                Seeking an internship or junior position in commercial development 
                where I can apply my knowledge and grow under the guidance of an experienced team.
            </p>
        `;

        // Update education and experience DATES
        const timelineDates = document.querySelectorAll('.timeline-list span');
        if (timelineDates[0]) timelineDates[0].textContent = '2019 — 2020';
        if (timelineDates[1]) timelineDates[1].textContent = '2020 — 2021';
        if (timelineDates[2]) timelineDates[2].textContent = '2025 (September)';
        if (timelineDates[3]) timelineDates[3].textContent = '2023 — Present';
        if (timelineDates[4]) timelineDates[4].textContent = '2025 (October)';

        // Update education and experience TEXTS
        const timelineTitles = document.querySelectorAll('.timeline-item-title');
        const timelineTexts = document.querySelectorAll('.timeline-text');

        if (timelineTitles[0]) timelineTitles[0].textContent = 'Yandex Lyceum, Python Programming Course';
        if (timelineTexts[0]) timelineTexts[0].textContent = 'Learning the basics of Python programming, solving algorithmic problems, developing first projects.';

        if (timelineTitles[1]) timelineTitles[1].textContent = 'Yandex Lyceum, Advanced Course';
        if (timelineTexts[1]) timelineTexts[1].textContent = 'In-depth study of Python, working with frameworks, web application development, database basics.';

        if (timelineTitles[2]) timelineTitles[2].textContent = 'Yandex Lyceum, Frontend Course';
        if (timelineTexts[2]) timelineTexts[2].textContent = 'Frontend Development in HTML, CSS (including grid and flex).';

        if (timelineTitles[3]) timelineTitles[3].textContent = 'ITMO University';
        if (timelineTexts[3]) timelineTexts[3].textContent = 'Faculty of Information Technology and Programming (Applied Informatics), "Mobile and Network Technologies" direction. Studying modern development technologies, algorithms and data structures. Studying: Python, data analysis, networks, databases, mobile development (Swift). Deepening in frontend development.';

        if (timelineTitles[4]) timelineTitles[4].textContent = 'Internship at Alfa-Bank';
        if (timelineTexts[4]) timelineTexts[4].textContent = 'Online internship in data analysis.';

    } else {
        // Russian (default)
        document.querySelector('.name').textContent = 'Березина Софья';
        document.querySelector('.title').textContent = 'Веб-разработчик';
        document.querySelector('[data-sidebar-btn] span').textContent = 'Контакты';

        // Navigation - update text AND data-page attributes
        const navLinks = document.querySelectorAll('.navbar-link');
        navLinks[0].textContent = 'Обо мне';
        navLinks[1].textContent = 'Резюме';
        navLinks[2].textContent = 'Контакты';

        // Update data-page attributes for articles
        document.querySelector('[data-page="about"]').dataset.page = 'обо мне';
        document.querySelector('[data-page="resume"]').dataset.page = 'резюме';
        document.querySelector('[data-page="contact"]').dataset.page = 'контакты';

        // Pages titles
        document.querySelector('.about .article-title').textContent = 'Обо мне';
        document.querySelector('.resume .article-title').textContent = 'Резюме';
        document.querySelector('.contact .article-title').textContent = 'Контакты';

        // About section
        document.querySelector('.service-title').textContent = 'Специализация';
        document.querySelectorAll('.service-item-title')[0].textContent = 'Фронтенд-разработка';
        document.querySelectorAll('.service-item-title')[1].textContent = 'Бэкенд-разработка';
        document.querySelector('.links-title').textContent = 'Мои Ресурсы';

        const linksSection = document.querySelectorAll('.resource-title');
        linksSection[1].textContent = 'Сертификаты';

        const linksText = document.querySelectorAll('.resource-text');
        linksText[0].textContent = 'Мои проекты и код';
        linksText[1].textContent = 'Документы об обучении';

        // Service item texts
        document.querySelectorAll('.service-item-text')[0].textContent = 'HTML, CSS, SCSS, Bootstrap, JavaScript, адаптивная верстка';
        document.querySelectorAll('.service-item-text')[1].textContent = 'Python, Django Framework, SQL, Flask, API, работа с базами данных';

        // Resume section
        document.querySelectorAll('.timeline .h3')[0].textContent = 'Образование';
        document.querySelectorAll('.timeline .h3')[1].textContent = 'Опыт';
        document.querySelector('.skills-title').textContent = 'Мои навыки';

        // Skills titles
        const skillTitles = document.querySelectorAll('.skills-item .h5');
        skillTitles[0].textContent = 'HTML/CSS/SCSS Верстка';
        skillTitles[1].textContent = 'Python & Django';
        skillTitles[2].textContent = 'Анализ Данных (Pandas, NumPy)';
        skillTitles[3].textContent = 'SQL & Базы Данных';
        skillTitles[4].textContent = 'JavaScript (В процессе)';
        skillTitles[5].textContent = 'Git & Работа В Команде';
        skillTitles[6].textContent = 'Swift';

        // Contact section
        document.querySelector('.form-title').textContent = 'Свяжитесь со мной';
        document.querySelector('.form-btn span').textContent = 'Отправить сообщение';

        // Form placeholders
        document.querySelector('input[name="fullname"]').placeholder = 'Ваше имя';
        document.querySelector('input[name="email"]').placeholder = 'Email адрес';
        document.querySelector('textarea[name="message"]').placeholder = 'Ваше сообщение';

        // Contact info
        const contactTitles = document.querySelectorAll('.contact-title');
        contactTitles[0].textContent = 'Почта';
        contactTitles[1].textContent = 'Телефон';
        contactTitles[2].textContent = 'Дата рождения';
        contactTitles[3].textContent = 'Местоположение';

        document.querySelector('.contact-birthday').innerHTML = '<time datetime="2004-10-23">23 октября, 2004</time>';
        document.querySelector('.contact-address').innerHTML = '<address>Санкт-Петербург, Россия</address>';

        // About text
        document.querySelector('.about-text').innerHTML = `
             <p>
                Студентка 3 курса ИТМО, активно развиваюсь в веб-разработке. 
                Особенно увлекает процесс превращения дизайн-макетов в живые, 
                функциональные интерфейсы, которые видят и используют реальные люди.
            </p>
            <p>
                В настоящее время углубленно изучаю JavaScript и готовлюсь к освоению React и современных CSS-фреймворков. 
                Параллельно с учебой занимаюсь практикой - верстаю макеты из Figma и развиваю навыки фронтенд-разработки.
            </p>
            <p>
                Ищу стажировку или junior-позицию в коммерческой разработке, 
                где смогу применять свои знания и расти под руководством опытной команды.
            </p>
        `;

        // Update education and experience DATES
        const timelineDates = document.querySelectorAll('.timeline-list span');
        if (timelineDates[0]) timelineDates[0].textContent = '2019 — 2020';
        if (timelineDates[1]) timelineDates[1].textContent = '2020 — 2021';
        if (timelineDates[2]) timelineDates[2].textContent = '2025 (сентябрь)';
        if (timelineDates[3]) timelineDates[3].textContent = '2023 — настоящее время';
        if (timelineDates[4]) timelineDates[4].textContent = '2025 (октябрь)';

        // Update education and experience TEXTS
        const timelineTitles = document.querySelectorAll('.timeline-item-title');
        const timelineTexts = document.querySelectorAll('.timeline-text');

        if (timelineTitles[0]) timelineTitles[0].textContent = 'Яндекс Лицей, курс программирования на Python';
        if (timelineTexts[0]) timelineTexts[0].textContent = 'Изучение основ программирования на Python, решение алгоритмических задач, разработка первых проектов.';

        if (timelineTitles[1]) timelineTitles[1].textContent = 'Яндекс Лицей, продвинутый курс';
        if (timelineTexts[1]) timelineTexts[1].textContent = 'Углубленное изучение Python, работа с фреймворками, разработка веб-приложений, основы баз данных.';

        if (timelineTitles[2]) timelineTitles[2].textContent = 'Яндекс Лицей, курс по фронтенду';
        if (timelineTexts[2]) timelineTexts[2].textContent = 'Изучение HTML и CSS (включая grid и flex).';

        if (timelineTitles[3]) timelineTitles[3].textContent = 'Университет ИТМО';
        if (timelineTexts[3]) timelineTexts[3].textContent = 'Факультет информационных технологий и программирования (прикладная информатика), направление "Мобильные и сетевые технологии". Изучение современных технологий разработки, алгоритмов и структур данных. Изучаю: Python, анализ данных, сети, базы данных, мобильную разработку (Swift). Углубляюсь во frontend-разработку.';

        if (timelineTitles[4]) timelineTitles[4].textContent = 'Практика в Альфа-Банк';
        if (timelineTexts[4]) timelineTexts[4].textContent = 'Онлайн-практика в области анализа данных.';
    }
}

// Улучшенная функция навигации
function initNavigation() {
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    navigationLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Удаляем активный класс со всех ссылок и страниц
            navigationLinks.forEach(l => l.classList.remove("active"));
            pages.forEach(p => p.classList.remove("active"));

            // Добавляем активный класс к нажатой ссылке
            this.classList.add("active");

            // Находим и активируем соответствующую страницу
            const linkText = this.textContent.trim().toLowerCase();

            // Ищем страницу по data-page атрибуту
            let targetPage = null;
            pages.forEach(page => {
                if (page.dataset.page === linkText) {
                    targetPage = page;
                }
            });

            // Альтернативный поиск если точное совпадение не найдено
            if (!targetPage) {
                if (linkText === 'about' || linkText === 'обо мне') {
                    targetPage = document.querySelector('[data-page="about"], [data-page="обо мне"]');
                } else if (linkText === 'resume' || linkText === 'резюме') {
                    targetPage = document.querySelector('[data-page="resume"], [data-page="резюме"]');
                } else if (linkText === 'contact' || linkText === 'контакты') {
                    targetPage = document.querySelector('[data-page="contact"], [data-page="контакты"]');
                }
            }

            if (targetPage) {
                targetPage.classList.add("active");
            }

            window.scrollTo(0, 0);
        });
    });
}

// Переменные sidebar
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Функционал toggle для sidebar на мобильных устройствах
if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });
}

// Переменные формы
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Добавляем события на все поля формы
if (formInputs.length > 0) {
    for (let i = 0; i < formInputs.length; i++) {
        formInputs[i].addEventListener("input", function () {
            // Проверяем валидность формы
            if (form.checkValidity()) {
                formBtn.removeAttribute("disabled");
            } else {
                formBtn.setAttribute("disabled", "");
            }
        });
    }
}

// Замени текущую валидацию на эту версию
function initForm() {
    const form = document.querySelector("[data-form]");
    const formInputs = document.querySelectorAll("[data-form-input]");
    const formBtn = document.querySelector("[data-form-btn]");

    // Валидация формы
    formInputs.forEach(input => {
        input.addEventListener("input", function () {
            const isValid = form.checkValidity();
            formBtn.disabled = !isValid;
        });
    });

    // Обработка отправки с визуальной обратной связью
    form.addEventListener("submit", function(e) {
        // Форма отправится автоматически через Formspree
        // Мы только меняем состояние кнопки
        formBtn.innerHTML = '<ion-icon name="hourglass-outline"></ion-icon><span>Отправка...</span>';
        formBtn.disabled = true;

        // Через 3 секунды возвращаем исходное состояние
        setTimeout(() => {
            formBtn.innerHTML = '<ion-icon name="paper-plane"></ion-icon><span>Сообщение отправлено!</span>';
            setTimeout(() => {
                formBtn.innerHTML = '<ion-icon name="paper-plane"></ion-icon><span>Отправить сообщение</span>';
                formBtn.disabled = false;
                form.reset();
            }, 2000);
        }, 3000);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initForm();
});

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', function () {
    // Инициализация навигации
    initNavigation();

    // Восстанавливаем язык из localStorage
    const savedLang = localStorage.getItem('lang') || 'ru';
    updateActiveLanguageButton(savedLang);

    // Если сохранен английский, применяем перевод
    if (savedLang === 'en') {
        switchLanguage('en');
    }
});