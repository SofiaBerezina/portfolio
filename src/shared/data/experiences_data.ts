export interface Experience {
    id: number;
    company: string;
    icon: string;
    location: string;
    date: string;
    position: string;
    description: string[];
}

export const experiences = [
    {
        id: 1,
        company: 'Яндекс-Лицей, курс промышленного программирования',
        icon: 'yandex.svg',
        location: 'Очно',
        date: '2021',
        position: 'WEB-разработчик (обучение)',
        description: [
            'Углубленное изучение Python алгоритмов, разработка первых проектов.',
            'Работа с фреймворками, разработка веб-приложений, основы баз данных',
            'Работа с Flask, SQLAlchemy',
        ],
    },
    {
        id: 2,
        company: 'Университет ИТМО',
        icon: 'itmo.svg',
        location: 'Санкт-Петербург, Россия',
        date: '2023 – 2027',
        position: 'Студент 4 курса бакалавриата',
        description: [
            'Факультет ИТ и программирования, направление «Мобильные и сетевые технологии»',
            'Изучение алгоритмов, структур данных, современных технологий разработки',
            'Углублённое изучение WEB/Mobile-разработки',
        ],
    },
    {
        id: 3,
        company: 'VK Education',
        icon: 'vk.svg',
        location: 'Онлайн',
        date: '2025',
        position: 'Разработчик (обучение)',
        description: [
            'Участие в разработке сервиса сегментирования пользователей',
            'Работа в команде над бизнес-задачей, опыт проектирования логики сегментации, взаимодействие с API.',
        ],
    },
    {
        id: 4,
        company: 'УЦ Т‑Банка',
        icon: 'tbank.svg',
        location: 'Онлайн',
        date: '2026',
        position: 'Фронтенд-разработчик (обучение)',
        description: [
            'Углублённое изучение JavaScript, TypeScript, React',
            'Знакомство с Angular, Redux, MobX',
            'Работа с состоянием, маршрутизацией, хуками',
            'Реализация проекта Rallyn под руководством ментора',
        ],
    },
    {
        id: 5,
        company: 'УЦ NeoFlex',
        icon: 'neoflex.svg',
        location: 'Онлайн',
        date: '2026',
        position: 'Фронтенд-разработчик (обучение)',
        description: [
            'Изучение React, JavaScript, TypeScript, компонентов, UX',
            'Работа с хуками, состоянием, маршрутизацией',
            'Реализация проектов в рамках курса',
        ],
    },
];