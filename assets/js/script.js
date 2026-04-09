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
    if (titleEl) titleEl.textContent = lang === 'en' ? 'Frontend Developer' : 'Frontend-разработчик';
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
        const aboutPage = document.querySelector('[data-page="обо мне"], [data-page="about"]');
        const resumePage = document.querySelector('[data-page="резюме"], [data-page="resume"]');
        const contactPage = document.querySelector('[data-page="контакты"], [data-page="contact"]');

        if (aboutPage) aboutPage.dataset.page = 'about';
        if (resumePage) resumePage.dataset.page = 'resume';
        if (contactPage) contactPage.dataset.page = 'contact';
    } else {
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
    if (linksTitle) linksTitle.textContent = lang === 'en' ? 'My Resources' : 'Мои ресурсы';

    const resourceTitles = document.querySelectorAll('.resource-title');
    if (resourceTitles.length >= 2) {
        if (lang === 'en') {
            resourceTitles[0].textContent = 'GitHub';
            resourceTitles[1].textContent = 'Certificates';
        } else {
            resourceTitles[0].textContent = 'GitHub';
            resourceTitles[1].textContent = 'Сертификаты';
        }
    }

    const resourceTexts = document.querySelectorAll('.resource-text');
    if (resourceTexts.length >= 2) {
        if (lang === 'en') {
            resourceTexts[0].textContent = 'My Projects & Code';
            resourceTexts[1].textContent = 'Learning documents';
        } else {
            resourceTexts[0].textContent = 'Мои проекты и код';
            resourceTexts[1].textContent = 'Документы об обучении';
        }
    }

    const downloadLink = document.querySelector('.download-link');
    if (downloadLink) {
        if (lang === 'en') {
            downloadLink.textContent = 'Download resume';
        } else {
            downloadLink.textContent = 'Скачать резюме';
        }
    }

    // Service item texts
    const serviceItemTexts = document.querySelectorAll('.service-item-text');
    if (serviceItemTexts.length >= 2) {
        if (lang === 'en') {
            serviceItemTexts[0].textContent = 'JS(ES6+), TS, React, Angular, HTML5, CSS3, SCSS/SASS/LESS, adaptive layout, Figma, Bootstrap, Taiga UI';
            serviceItemTexts[1].textContent = 'Python, Django, DRF, SQL, PostgreSQL, Docker, Git, GitHub/GitLab';
        } else {
            serviceItemTexts[0].textContent = 'JS(ES6+), TS, React, Angular, HTML5, CSS3, SCSS/SASS/LESS, адаптивная верстка, Figma, Bootstrap, Taiga UI';
            serviceItemTexts[1].textContent = 'Python, Django, DRF, SQL, PostgreSQL, Docker, Git, GitHub/GitLab';
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

    // Skills titles (обновлено в соответствии с актуальными навыками)
    const skillTitles = document.querySelectorAll('.skills-item .h5');
    if (skillTitles.length >= 7) {
        if (lang === 'en') {
            skillTitles[0].textContent = 'JavaScript (ES6+) / TypeScript';
            skillTitles[1].textContent = 'React / Angular';
            skillTitles[2].textContent = 'HTML5/CSS3/SCSS (Adaptive Layout)';
            skillTitles[3].textContent = 'Python / Django / DRF';
            skillTitles[4].textContent = 'SQL / PostgreSQL';
            skillTitles[5].textContent = 'Git / GitHub / Docker';
            skillTitles[6].textContent = 'Figma / Bootstrap / Taiga UI';
        } else {
            skillTitles[0].textContent = 'JavaScript (ES6+) / TypeScript';
            skillTitles[1].textContent = 'React / Angular';
            skillTitles[2].textContent = 'HTML5/CSS3/SCSS (адаптивная верстка)';
            skillTitles[3].textContent = 'Python / Django / DRF';
            skillTitles[4].textContent = 'SQL / PostgreSQL';
            skillTitles[5].textContent = 'Git / GitHub / Docker';
            skillTitles[6].textContent = 'Figma / Bootstrap / Taiga UI';
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
        if (lang === 'en') {
            contactBirthday.innerHTML = '<time datetime="2004-10-23">October 23, 2004</time>';
        } else {
            contactBirthday.innerHTML = '<time datetime="2004-10-23">23 октября, 2004</time>';
        }
    }

    const contactAddress = document.querySelector('.contact-address');
    if (contactAddress) {
        if (lang === 'en') {
            contactAddress.innerHTML = '<address>Saint-Petersburg, Russia</address>';
        } else {
            contactAddress.innerHTML = '<address>Санкт-Петербург, Россия</address>';
        }
    }

    // About text (обновлено с учетом обучения в Т-Банке и NeoFlex)
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        if (lang === 'en') {
            aboutText.innerHTML = `<p>
                My name is Sofia Berezina, I am a 3rd year student at ITMO University, purposefully developing in frontend development.
                I am studying at the training centers of major companies T-Bank and NeoFlex in the frontend direction,
                where I am actively mastering React and modern JavaScript.
            </p>
            <p>
                I am passionate about turning design mockups into live, functional interfaces. I have experience in backend development with Python/Django,
                which helps me better understand client-server interaction.
            </p>
            <p>
                Looking for an internship or junior position in commercial development
                where I can apply my knowledge and grow under the guidance of an experienced team.
            </p>`;
        } else {
            aboutText.innerHTML = `<p>
                Меня зовут Березина Софья, я студентка 3 курса ИТМО, целенаправленно развиваюсь во фронтенд-разработке.
                Прохожу обучение в учебных центрах крупных компаний Т-Банка и NeoFlex по направлению фронтенд, где
                активно осваиваю React и современный JavaScript.
            </p>
            <p>
                Увлекаюсь превращением дизайн-макетов в живые, функциональные интерфейсы. Имею опыт
                бэкенд-разработки на Python/Django,
                что помогает глубже понимать клиент-серверное взаимодействие.
            </p>
            <p>
                Ищу стажировку или junior-позицию в коммерческой разработке,
                где смогу применять свои знания и расти под руководством опытной команды.
            </p>`;
        }
    }

    // Update education and experience texts (обновлено в соответствии с HTML)
    const timelineTitles = document.querySelectorAll('.timeline-item-title');
    const timelineDates = document.querySelectorAll('.timeline-list span');
    const timelineTexts = document.querySelectorAll('.timeline-text');

    if (timelineTitles.length >= 8 && timelineDates.length >= 8 && timelineTexts.length >= 8) {
        if (lang === 'en') {
            // Education (0-3)
            timelineTitles[0].textContent = 'Yandex Lyceum, Python Programming Course';
            timelineDates[0].textContent = '2019 — 2020';
            timelineTexts[0].textContent = 'Learning the basics of Python programming, solving algorithmic problems, developing first projects.';

            timelineTitles[1].textContent = 'Yandex Lyceum, Advanced Course';
            timelineDates[1].textContent = '2020 — 2021';
            timelineTexts[1].textContent = 'In-depth study of Python, working with frameworks, web application development, database basics.';

            timelineTitles[2].textContent = 'Yandex Lyceum, Frontend Course';
            timelineDates[2].textContent = '2025 (September)';
            timelineTexts[2].textContent = 'Learning React and Angular, working with components, hooks, state. Implemented a global chat project within the course.';

            timelineTitles[3].textContent = 'ITMO University';
            timelineDates[3].textContent = '2023 — 2027';
            timelineTexts[3].textContent = 'Faculty of Information Technology and Programming (Applied Informatics), "Mobile and Network Technologies" direction. Studying modern development technologies, algorithms and data structures.';

            // Experience (4-7)
            timelineTitles[4].textContent = 'Alfa-Bank — Online Practice';
            timelineDates[4].textContent = '2025 (October)';
            timelineTexts[4].textContent = 'Practice in the field of data analysis.';

            timelineTitles[5].textContent = 'T-Bank — Training Center (Frontend)';
            timelineDates[5].textContent = '2026 (February) — 2026 (May)';
            timelineTexts[5].textContent = 'Learning React and Angular, working with components, hooks, state. Implemented a global chat project within the course.';

            timelineTitles[6].textContent = 'VK — Online Practice "Development"';
            timelineDates[6].textContent = '2026 (February)';
            timelineTexts[6].textContent = 'Participation in the development of a user segmentation service. Working in a team on a business task, experience in designing segmentation logic, interacting with API.';

            timelineTitles[7].textContent = 'NeoFlex — Training Center (Frontend)';
            timelineDates[7].textContent = '2026 (February) — 2026 (May)';
            timelineTexts[7].textContent = 'In-depth study of modern JavaScript, TypeScript, React.';
        } else {
            // Education (0-3)
            timelineTitles[0].textContent = 'Яндекс Лицей, курс программирования на Python';
            timelineDates[0].textContent = '2019 — 2020';
            timelineTexts[0].textContent = 'Изучение основ программирования на Python, решение алгоритмических задач, разработка первых проектов.';

            timelineTitles[1].textContent = 'Яндекс Лицей, продвинутый курс';
            timelineDates[1].textContent = '2020 — 2021';
            timelineTexts[1].textContent = 'Углубленное изучение Python, работа с фреймворками, разработка веб-приложений, основы баз данных.';

            timelineTitles[2].textContent = 'Яндекс Лицей, курс по фронтенду';
            timelineDates[2].textContent = '2025 (сентябрь)';
            timelineTexts[2].textContent = 'Изучение React и Angular, работа с компонентами, хуками, состоянием. В рамках курса реализовала проект глобального чата.';

            timelineTitles[3].textContent = 'Университет ИТМО';
            timelineDates[3].textContent = '2023 — 2027';
            timelineTexts[3].textContent = 'Факультет информационных технологий и программирования (прикладная информатика), направление "Мобильные и сетевые технологии". Изучение современных технологий разработки, алгоритмов и структур данных.';

            // Experience (4-7)
            timelineTitles[4].textContent = 'Альфа-Банк — Онлайн-практика';
            timelineDates[4].textContent = '2025 (октябрь)';
            timelineTexts[4].textContent = 'Практика в области анализа данных.';

            timelineTitles[5].textContent = 'Т-Банк — Учебный центр (фронтенд)';
            timelineDates[5].textContent = '2026 (февраль) — 2026 (май)';
            timelineTexts[5].textContent = 'Изучение React и Angular, работа с компонентами, хуками, состоянием. В рамках курса реализовала проект глобального чата.';

            timelineTitles[6].textContent = 'VK — онлайн-практика по направлению "Разработка"';
            timelineDates[6].textContent = '2026 (февраль)';
            timelineTexts[6].textContent = 'Участие в разработке сервиса сегментирования пользователей. Работа в команде над бизнес-задачей, опыт проектирования логики сегментации, взаимодействие с API.';

            timelineTitles[7].textContent = 'NeoFlex — Учебный центр (фронтенд)';
            timelineDates[7].textContent = '2026 (февраль) — 2026 (май)';
            timelineTexts[7].textContent = 'Углубленное изучение современного JavaScript, TypeScript, React.';
        }
    }
}

// Улучшенная функция навигации
function initNavigation() {
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    navigationLinks.forEach(link => {
        link.addEventListener("click", function () {
            navigationLinks.forEach(l => l.classList.remove("active"));
            pages.forEach(p => p.classList.remove("active"));

            this.classList.add("active");

            const linkText = this.textContent.trim().toLowerCase();

            let targetPage = null;
            pages.forEach(page => {
                if (page.dataset.page === linkText) {
                    targetPage = page;
                }
            });

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

    formInputs.forEach(input => {
        input.addEventListener("input", function () {
            const isValid = form.checkValidity();
            formBtn.disabled = !isValid;
        });
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const savedLang = localStorage.getItem('lang') || 'ru';
        const sendingText = savedLang === 'en' ? 'Sending...' : 'Отправка...';
        const sentText = savedLang === 'en' ? 'Message sent!' : 'Сообщение отправлено!';
        const sendText = savedLang === 'en' ? 'Send Message' : 'Отправить сообщение';

        formBtn.innerHTML = `<ion-icon name="hourglass-outline"></ion-icon><span>${sendingText}</span>`;
        formBtn.disabled = true;

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
    initNavigation();
    initSidebar();
    initForm();

    const savedLang = localStorage.getItem('lang') || 'ru';
    updateActiveLanguageButton(savedLang);

    if (savedLang === 'en') {
        setTimeout(() => {
            switchLanguage('en');
        }, 50);
    }
});