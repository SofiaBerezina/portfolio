import {memo} from "react";

interface IStatProps {
    value: string;
    label: string
}

const Stat = memo(({value, label}: IStatProps) => {
    return (
        <div>
            <div className="text-6xl font-extrabold dark:text-white text-black">
                {value}
            </div>
            <div className="mt-2 text-sm uppercase tracking-wide text-zinc-500">
                {label}
            </div>
        </div>
    )
})

export default Stat