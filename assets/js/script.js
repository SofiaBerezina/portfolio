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

// Функция переключения языка с проверками существования элементов
function switchLanguage(lang) {
    localStorage.setItem('lang', lang);
    updateActiveLanguageButton(lang);

    const nameEl = document.querySelector('.name');
    const titleEl = document.querySelector('.title');
    const sidebarBtnSpan = document.querySelector('[data-sidebar-btn] span');

    if (nameEl) nameEl.textContent = lang === 'en' ? 'Sofia Berezina' : 'Березина Софья';
    if (titleEl) titleEl.textContent = lang === 'en' ? 'Web Developer' : 'Веб-разработчик';
    if (sidebarBtnSpan) sidebarBtnSpan.textContent = lang === 'en' ? 'Contacts' : 'Контакты';

    // Navigation - update text
    const navLinks = document.querySelectorAll('.navbar-link');
    if (navLinks.length >= 3) {
        if (lang === 'en') {
            navLinks[0].textContent = 'About';
            navLinks[1].textContent = 'Resume';
            navLinks[2].textContent = 'Contact';
        } else {
            navLinks[0].textContent = 'Обо мне';
            navLinks[1].textContent = 'Резюме';
            navLinks[2].textContent = 'Контакты';
        }
    }

    // Update data-page attributes for articles
    if (lang === 'en') {
        // English to Russian
        const aboutPage = document.querySelector('[data-page="обо мне"], [data-page="about"]');
        const resumePage = document.querySelector('[data-page="резюме"], [data-page="resume"]');
        const contactPage = document.querySelector('[data-page="контакты"], [data-page="contact"]');

        if (aboutPage) aboutPage.dataset.page = 'about';
        if (resumePage) resumePage.dataset.page = 'resume';
        if (contactPage) contactPage.dataset.page = 'contact';
    } else {
        // Russian to English
        const aboutPage = document.querySelector('[data-page="about"], [data-page="обо мне"]');
        const resumePage = document.querySelector('[data-page="resume"], [data-page="резюме"]');
        const contactPage = document.querySelector('[data-page="contact"], [data-page="контакты"]');

        if (aboutPage) aboutPage.dataset.page = 'обо мне';
        if (resumePage) resumePage.dataset.page = 'резюме';
        if (contactPage) contactPage.dataset.page = 'контакты';
    }

    // Pages titles
    const aboutTitle = document.querySelector('.about .article-title');
    const resumeTitle = document.querySelector('.resume .article-title');
    const contactTitle = document.querySelector('.contact .article-title');

    if (aboutTitle) aboutTitle.textContent = lang === 'en' ? 'About Me' : 'Обо мне';
    if (resumeTitle) resumeTitle.textContent = lang === 'en' ? 'Resume' : 'Резюме';
    if (contactTitle) contactTitle.textContent = lang === 'en' ? 'Contact' : 'Контакты';

    // About section
    const serviceTitle = document.querySelector('.service-title');
    if (serviceTitle) serviceTitle.textContent = lang === 'en' ? 'Specialization' : 'Специализация';

    const serviceItemTitles = document.querySelectorAll('.service-item-title');
    if (serviceItemTitles.length >= 2) {
        if (lang === 'en') {
            serviceItemTitles[0].textContent = 'Frontend Development';
            serviceItemTitles[1].textContent = 'Backend Development';
        } else {
            serviceItemTitles[0].textContent = 'Фронтенд-разработка';
            serviceItemTitles[1].textContent = 'Бэкенд-разработка';
        }
    }

    const linksTitle = document.querySelector('.links-title');
    if (linksTitle) linksTitle.textContent = lang === 'en' ? 'My Resources' : 'Мои Ресурсы';

    const linksSection = document.querySelectorAll('.resource-title');
    if (linksSection.length >= 2) {
        if (lang === 'en') {
            linksSection[1].textContent = 'Certificates';
        } else {
            linksSection[1].textContent = 'Сертификаты';
        }
    }

    const linksText = document.querySelectorAll('.resource-text');
    if (linksText.length >= 2) {
        if (lang === 'en') {
            linksText[0].textContent = 'My Projects & Code';
            linksText[1].textContent = 'Learning documents';
        } else {
            linksText[0].textContent = 'Мои проекты и код';
            linksText[1].textContent = 'Документы об обучении';
        }
    }

    // Service item texts
    const serviceItemTexts = document.querySelectorAll('.service-item-text');
    if (serviceItemTexts.length >= 2) {
        if (lang === 'en') {
            serviceItemTexts[0].textContent = 'HTML, CSS, SCSS, Bootstrap, JavaScript, adaptive layout';
            serviceItemTexts[1].textContent = 'Python, Django Framework, SQL, Flask, API, DataBases';
        } else {
            serviceItemTexts[0].textContent = 'HTML, CSS, SCSS, Bootstrap, JavaScript, адаптивная верстка';
            serviceItemTexts[1].textContent = 'Python, Django Framework, SQL, Flask, API, работа с базами данных';
        }
    }

    // Resume section
    const timelineHeaders = document.querySelectorAll('.timeline .h3');
    if (timelineHeaders.length >= 2) {
        if (lang === 'en') {
            timelineHeaders[0].textContent = 'Education';
            timelineHeaders[1].textContent = 'Experience';
        } else {
            timelineHeaders[0].textContent = 'Образование';
            timelineHeaders[1].textContent = 'Опыт';
        }
    }

    const skillsTitle = document.querySelector('.skills-title');
    if (skillsTitle) skillsTitle.textContent = lang === 'en' ? 'My Skills' : 'Мои навыки';

    // Skills titles
    const skillTitles = document.querySelectorAll('.skills-item .h5');
    if (skillTitles.length >= 7) {
        if (lang === 'en') {
            skillTitles[0].textContent = 'HTML/CSS/SCSS (Layout)';
            skillTitles[1].textContent = 'Python & Django';
            skillTitles[2].textContent = 'Data Analysis (Pandas, NumPy)';
            skillTitles[3].textContent = 'SQL & DataBases';
            skillTitles[4].textContent = 'JavaScript (In Progress)';
            skillTitles[5].textContent = 'Git & Team Work';
            skillTitles[6].textContent = 'Swift';
        } else {
            skillTitles[0].textContent = 'HTML/CSS/SCSS Верстка';
            skillTitles[1].textContent = 'Python & Django';
            skillTitles[2].textContent = 'Анализ Данных (Pandas, NumPy)';
            skillTitles[3].textContent = 'SQL & Базы Данных';
            skillTitles[4].textContent = 'JavaScript (В процессе)';
            skillTitles[5].textContent = 'Git & Работа В Команде';
            skillTitles[6].textContent = 'Swift';
        }
    }

    // Contact section
    const formTitle = document.querySelector('.form-title');
    if (formTitle) formTitle.textContent = lang === 'en' ? 'Contact Me' : 'Свяжитесь со мной';

    const formBtnSpan = document.querySelector('.form-btn span');
    if (formBtnSpan) formBtnSpan.textContent = lang === 'en' ? 'Send Message' : 'Отправить сообщение';

    // Form placeholders
    const nameInput = document.querySelector('input[name="fullname"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageTextarea = document.querySelector('textarea[name="message"]');

    if (nameInput) nameInput.placeholder = lang === 'en' ? 'Full Name' : 'Ваше имя';
    if (emailInput) emailInput.placeholder = lang === 'en' ? 'Email Address' : 'Email адрес';
    if (messageTextarea) messageTextarea.placeholder = lang === 'en' ? 'Your Message' : 'Ваше сообщение';

    // Contact info
    const contactTitles = document.querySelectorAll('.contact-title');
    if (contactTitles.length >= 4) {
        if (lang === 'en') {
            contactTitles[0].textContent = 'Email';
            contactTitles[1].textContent = 'Phone';
            contactTitles[2].textContent = 'Birthday';
            contactTitles[3].textContent = 'Location';
        } else {
            contactTitles[0].textContent = 'Почта';
            contactTitles[1].textContent = 'Телефон';
            contactTitles[2].textContent = 'Дата рождения';
            contactTitles[3].textContent = 'Местоположение';
        }
    }

    const contactBirthday = document.querySelector('.contact-birthday');
    if (contactBirthday) {
        contactBirthday.innerHTML = lang === 'en'
            ? '<time datetime="2004-10-23">October 23, 2004</time>'
            : '<time datetime="2004-10-23">23 октября, 2004</time>';
    }

    const contactAddress = document.querySelector('.contact-address');
    if (contactAddress) {
        contactAddress.innerHTML = lang === 'en'
            ? '<address>Saint-Petersburg, Russia</address>'
            : '<address>Санкт-Петербург, Россия</address>';
    }

    // About text
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        aboutText.innerHTML = lang === 'en'
            ? `<p>
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
            </p>`
            : `<p>
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
            </p>`;
    }

    // Update education and experience DATES
    const timelineDates = document.querySelectorAll('.timeline-list span');
    if (timelineDates.length >= 5) {
        if (lang === 'en') {
            if (timelineDates[0]) timelineDates[0].textContent = '2019 — 2020';
            if (timelineDates[1]) timelineDates[1].textContent = '2020 — 2021';
            if (timelineDates[2]) timelineDates[2].textContent = '2025 (September)';
            if (timelineDates[3]) timelineDates[3].textContent = '2023 — Present';
            if (timelineDates[4]) timelineDates[4].textContent = '2025 (October)';
        } else {
            if (timelineDates[0]) timelineDates[0].textContent = '2019 — 2020';
            if (timelineDates[1]) timelineDates[1].textContent = '2020 — 2021';
            if (timelineDates[2]) timelineDates[2].textContent = '2025 (сентябрь)';
            if (timelineDates[3]) timelineDates[3].textContent = '2023 — настоящее время';
            if (timelineDates[4]) timelineDates[4].textContent = '2025 (октябрь)';
        }
    }

    // Update education and experience TEXTS
    const timelineTitles = document.querySelectorAll('.timeline-item-title');
    const timelineTexts = document.querySelectorAll('.timeline-text');

    if (timelineTitles.length >= 5 && timelineTexts.length >= 5) {
        if (lang === 'en') {
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

            // Закрываем sidebar на мобильных устройствах
            const sidebar = document.querySelector("[data-sidebar]");
            if (sidebar && sidebar.classList.contains("active")) {
                sidebar.classList.remove("active");
            }

            window.scrollTo(0, 0);
        });
    });
}

// Функционал sidebar
function initSidebar() {
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");

    if (sidebarBtn && sidebar) {
        sidebarBtn.addEventListener("click", function () {
            sidebar.classList.toggle("active");
        });
    }
}

// Функция инициализации формы
function initForm() {
    const form = document.querySelector("[data-form]");
    const formInputs = document.querySelectorAll("[data-form-input]");
    const formBtn = document.querySelector("[data-form-btn]");

    if (!form || !formBtn) return;

    // Валидация формы
    formInputs.forEach(input => {
        input.addEventListener("input", function () {
            const isValid = form.checkValidity();
            formBtn.disabled = !isValid;
        });
    });

    // Обработка отправки с визуальной обратной связью
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Предотвращаем стандартную отправку

        // Форма отправится автоматически через Formspree
        // Мы только меняем состояние кнопки
        const savedLang = localStorage.getItem('lang') || 'ru';
        const sendingText = savedLang === 'en' ? 'Sending...' : 'Отправка...';
        const sentText = savedLang === 'en' ? 'Message sent!' : 'Сообщение отправлено!';
        const sendText = savedLang === 'en' ? 'Send Message' : 'Отправить сообщение';

        formBtn.innerHTML = `<ion-icon name="hourglass-outline"></ion-icon><span>${sendingText}</span>`;
        formBtn.disabled = true;

        // Через 3 секунды возвращаем исходное состояние
        setTimeout(() => {
            formBtn.innerHTML = `<ion-icon name="paper-plane"></ion-icon><span>${sentText}</span>`;
            setTimeout(() => {
                formBtn.innerHTML = `<ion-icon name="paper-plane"></ion-icon><span>${sendText}</span>`;
                formBtn.disabled = false;
                form.reset();
            }, 2000);
        }, 3000);
    });
}

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', function () {
    // Инициализация навигации
    initNavigation();

    // Инициализация sidebar
    initSidebar();

    // Инициализация формы
    initForm();

    // Восстанавливаем язык из localStorage
    const savedLang = localStorage.getItem('lang') || 'ru';
    updateActiveLanguageButton(savedLang);

    // Если сохранен английский, применяем перевод с небольшой задержкой
    if (savedLang === 'en') {
        setTimeout(() => {
            switchLanguage('en');
        }, 50);
    }
});