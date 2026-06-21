import {memo} from "react";

interface IPlaceholderCardProps {
    title: string;
    desc: string
}

const PlaceholderCard = memo(({title, desc}: IPlaceholderCardProps) => {
    return (
        <div
            className="h-[260px] rounded-2xl bg-neutral-100/60 dark:bg-neutral-900/50 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70 transition-colors duration-300 p-6 flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-100">
                    {title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {desc}
                </p>
            </div>
        </div>
    );
})

export default PlaceholderCard