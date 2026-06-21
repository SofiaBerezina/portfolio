import TitleH1 from "../../shared/ui/TitleH1/TitleH1.tsx";
import {PlaceholderCard, Stat} from "../../shared/ui";

export default function HeroSection() {
    return (
        <div className="px-10 py-0">

            <TitleH1 titlePart_1={'FRONTEND'} titlePart_2={'DEVELOPER'} />

            <p className="mt-6 max-w-2xl text-zinc-400">
                Прошла обучение на курсах Т-банка и Neoflex по фронтенду,
                где освоила современный стек и подходы к разработке
            </p>

            <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-3">
                <Stat value="+3" label="Лет опыта" />
                <Stat value="+4" label="Проектов" />
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                <PlaceholderCard
                    title="На данном этапе"
                    desc="Погружаюсь в современный фронтенд: изучаю архитектуру React-приложений, паттерны проектирования, оптимизацию производительности и работу с реальными данными."
                />
                <PlaceholderCard
                    title="Что я ищу"
                    desc="Возможность расти как разработчик, работать в сильной команде, создавать качественные интерфейсы и решать задачи, которые имеют реальную ценность для пользователей."
                />
            </div>
        </div>
    );
}