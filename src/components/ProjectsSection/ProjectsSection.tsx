import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { projects } from '../../shared/data/projects_data.ts';
import TitleH1 from '../../shared/ui/TitleH1/TitleH1.tsx';

interface ProjectsSectionProps {
    animated?: boolean;
}

export default function ProjectsSection({ animated = false }: ProjectsSectionProps) {
    return (
        <div className="px-4 sm:px-6 md:px-10 py-0">
            <TitleH1 titlePart_1={'RECENT'} titlePart_2={'PROJECTS'} />

            <div className="mt-6 space-y-2">
                {projects.map((project, index) => {
                    const Card = animated ? motion.div : 'div';
                    const cardProps = animated ? {
                        initial: { opacity: 0, x: -20 },
                        whileInView: { opacity: 1, x: 0 },
                        viewport: { once: true },
                        transition: { delay: index * 0.08, duration: 0.4 },
                    } : {};

                    return (
                        <Card
                            key={project.id}
                            {...cardProps}
                            className="
                                group flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8
                                rounded-2xl
                                bg-neutral-100/60 dark:bg-neutral-900/50
                                hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70
                                transition-colors duration-300
                                p-4 sm:p-6
                            "
                        >
                            {/* Верхняя часть: изображение + текст */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                                {/* Изображение — сверху на мобилках, слева на десктопе */}
                                <div className="w-full sm:w-20 h-48 sm:h-20 shrink-0 overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800">
                                    <img
                                        src={project.image || '/placeholder-project.jpg'}
                                        alt={project.title}
                                        width={320}
                                        height={192}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Текст */}
                                <div className="flex flex-col flex-1">
                                    <h3 className="text-xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">
                                        {project.title}
                                    </h3>

                                    <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-300 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                                        <span>{project.date || '2024'}</span>

                                        {project.status && (
                                            <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-600 dark:text-green-400">
                                                Active
                                            </span>
                                        )}

                                        {project.featured && (
                                            <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-xs text-purple-600 dark:text-purple-400">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Кнопки действий — снизу на мобилках, справа на десктопе */}
                            <div className="flex flex-row md:flex-col items-center gap-3 pt-2 md:pt-1 w-full md:w-auto justify-start md:justify-center">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="opacity-60 hover:opacity-100 transition p-2"
                                        aria-label="GitHub"
                                    >
                                        <SiGithub className="h-5 w-5" />
                                    </a>
                                )}

                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="View project"
                                        className="
                                            text-orange-500
                                            transition-transform duration-300
                                            group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12
                                            p-2
                                        "
                                    >
                                        <ArrowUpRight className="h-6 w-6" strokeWidth={2.5} />
                                    </a>
                                )}
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}