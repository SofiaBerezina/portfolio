import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import TitleH1 from "../../shared/ui/TitleH1/TitleH1.tsx";
import { experiences } from "../../shared/data/experiences_data.ts";

interface ExperienceSectionProps {
    animated?: boolean;
}

const ExperienceSection = ({ animated = false }: ExperienceSectionProps) => {
    return (
        <div className="px-10 py-0">
            <TitleH1 titlePart_1={'COURSES &'} titlePart_2={'EXPERIENCE'} />

            <div className="space-y-6 mt-6">
                {experiences.map((exp, index) => {
                    const Card = animated ? motion.div : 'div';
                    const cardProps = animated ? {
                        initial: { opacity: 0, x: -20 },
                        whileInView: { opacity: 1, x: 0 },
                        viewport: { once: true },
                        transition: { delay: index * 0.1, duration: 0.5 },
                    } : {};

                    return (
                        <Card
                            key={exp.id}
                            {...cardProps}
                            className="rounded-2xl p-6 transition-all duration-300 hover:shadow-xl dark:bg-neutral-900/50 bg-neutral-100/60 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-800"
                        >
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 overflow-hidden flex-shrink-0"
                                    >
                                        <img
                                            src={`/icons/${exp.icon}`}
                                            alt={exp.company}
                                            className="w-6 h-6 object-contain"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold dark:text-white text-black">
                                            {exp.company}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                                            <MapPin size={14} />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-neutral-200 dark:bg-neutral-800 px-3 py-1 rounded-full">
                                    <Calendar size={14} />
                                    <span>{exp.date}</span>
                                </div>
                            </div>

                            <p className="text-sm font-semibold text-purple-500 dark:text-purple-400 mb-3">
                                {exp.position}
                            </p>

                            <ul className="space-y-2">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                                        <span className="text-purple-500 mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default ExperienceSection;