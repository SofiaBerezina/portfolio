import profileImage from '../../assets/my-avatar.webp';
import {
    Globe,
    Download,
    FileBadgeIcon
} from "lucide-react";
import { SiGithub, SiTelegram } from 'react-icons/si';
import { SocialIcon } from "../../shared/ui";

const socials = [
    { label: "GitHub", href: "https://github.com/SofiaBerezina", icon: SiGithub },
    { label: "Telegram", href: "https://t.me/berfos_k", icon: SiTelegram },
    { label: "Portfolio", href: "https://devakshay.vercel.app/home", icon: Globe },
    { label: "Certificates", href: "https://drive.google.com/drive/folders/1NGmxUuSyxs8oVUBHsZLzIlqurwOLATJO?usp=sharing", icon: FileBadgeIcon },
];

function ProfileCard() {

    return (
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full border-[4px] border-dashed border-orange-300 opacity-90" />

            <div className="p-7">
                <div className="rounded-3xl bg-white p-4">
                    <div className="aspect-square overflow-hidden rounded-3xl">
                        <div className="transition-all duration-300">
                            <img
                                src={profileImage}
                                width={400}
                                height={400}
                                className="h-full w-full object-cover grayscale-[90%] hover:grayscale-0 transition-all duration-700"
                                alt="Моё фото"
                            />
                        </div>
                    </div>
                </div>

                <h2 className="mt-7 text-center text-4xl font-black tracking-tight text-zinc-900">
                    Березина Софья
                </h2>

                <p className="mt-6 text-center text-lg leading-snug text-zinc-500">
                    Меня зовут Березина Софья, я студентка 4 курса ИТМО, факультет прикладной информатики. Я
                    занимаюсь фронтенд-разработкой.
                </p>

                <div className="mt-6 flex justify-center">
                    <a
                        href="/resume.pdf"
                        download="Resume_Sofia_Berezina.pdf"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <Download size={18} />
                        Скачать резюме
                    </a>
                </div>

                <div className="mt-8 flex items-center justify-center gap-6">
                    {socials.map(({ label, href, icon: Icon }) => (
                        <SocialIcon key={label} label={label} href={href}>
                            <Icon size={32} />
                        </SocialIcon>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;