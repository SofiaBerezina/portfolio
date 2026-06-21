import * as React from "react";
import {memo} from "react";

interface ISocialIconProps {
    children: React.ReactNode;
    label: string;
    href: string;
}

const SocialIcon = memo(({children, label, href,}: ISocialIconProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="
                relative z-20
                grid h-11 w-11 place-items-center
                text-gray-500
                transition
                hover:scale-110 hover:text-orange-500
            "
        >
            {children}
        </a>
    );
})

export default SocialIcon