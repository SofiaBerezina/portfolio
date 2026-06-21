export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    technologies: string[];
    link?: string;
    github?: string;
    featured?: boolean;
    status?: boolean;
    color?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Rallyn',
        description: 'SPA для поиска и организации совместного досуга. Полноценная авторизация, БД, управление состоянием.',
        image: '/img/rallyn.webp',
        date: '2026',
        technologies: ['React', 'TS', 'TailWind', 'TQ', 'FireBase'],
        link: 'https://rallyn.vercel.app/',
        github: 'https://github.com/SofiaBerezina/Rallyn.git',
        featured: true,
        status: true,
        color: '#6C63FF',
    },
    {
        id: 2,
        title: 'BUZZ Chat',
        description: 'Чат‑приложение с авторизацией и сообщениями. Использование стейт-менеджера',
        image: '/img/buzz-chat.webp',
        date: '2026',
        technologies: ['React', 'TS', 'Redux', 'RTK', 'SCSS'],
        link: '#',
        github: 'https://github.com/SofiaBerezina/buzz-chat.git',
        color: '#4A9EFF',
    },
    {
        id: 3,
        title: 'SkySense',
        description: 'Прогноз погоды с геолокацией, поиском по городам и адаптивным дизайном. Поддержка темной и светлой темы. Работа с API',
        image: '/img/skysense.webp',
        date: '2026',
        technologies: ['JS', 'OpenWeather API', 'SCSS'],
        link: 'https://sofiaberezina.github.io/WeatherApp/',
        github: 'https://github.com/SofiaBerezina/WeatherApp.git',
        status: true,
        color: '#FF9F43',
    },
    {
        id: 4,
        title: 'Интернет‑магазин техники',
        description: 'Каталог товаров, корзина, фильтрация, адаптивная вёрстка, избранное, маршрутизация.',
        image: '/img/audio-shop.webp',
        date: '2026',
        technologies: ['React', 'TS', 'SCSS'],
        link: 'https://sofiaberezina.github.io/audio-shop/',
        github: 'https://github.com/SofiaBerezina/audio-shop.git',
        status: true,
        color: '#2ECC71',
    },
];