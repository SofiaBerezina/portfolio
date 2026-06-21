import {memo} from 'react'

interface ITitleH1Props {
    titlePart_1: string;
    titlePart_2: string;
}

const TitleH1 = memo(({titlePart_1, titlePart_2}: ITitleH1Props) => {
    return (
        <h1 className="font-black leading-[0.9] tracking-tight">
                <span className="block text-[clamp(3.5rem,7vw,7rem)] dark:text-white text-black">
                    {titlePart_1}
                </span>
            <span className="block text-[clamp(3.5rem,7vw,7rem)] text-zinc-500/50">
                    {titlePart_2}
                </span>
        </h1>
    );
});

export default TitleH1