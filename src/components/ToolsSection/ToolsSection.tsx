import { motion } from 'framer-motion';
import TitleH1 from "../../shared/ui/TitleH1/TitleH1.tsx";
import {tools} from "../../shared/data/tools_data.ts";

interface ToolsSectionProps {
    animated?: boolean;
}

export default function ToolsSection({ animated = false }: ToolsSectionProps) {
    return (
        <div className="px-10 py-0">

            <TitleH1 titlePart_1={'TOOLS &'} titlePart_2={'SKILLS'} />

            <div className="flex flex-wrap gap-3 mt-6">
                {tools.map((tool, index) => {
                    const Badge = animated ? motion.span : 'span';
                    const badgeProps = animated ? {
                        initial: { opacity: 0, scale: 0.9 },
                        whileInView: { opacity: 1, scale: 1 },
                        viewport: { once: true },
                        transition: { delay: index * 0.02, duration: 0.3 },
                    } : {};

                    return (
                        <Badge
                            key={tool.id}
                            {...badgeProps}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/50 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70"
                        >
                            <tool.icon className="w-4 h-4" style={{ color: tool.color }} />
                            <span className="dark:text-white text-black">{tool.name}</span>
                        </Badge>
                    );
                })}
            </div>
        </div>
    );
}