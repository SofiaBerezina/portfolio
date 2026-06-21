import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './index.scss';
import {ExperienceSection, Footer, Header, HeroSection, ProfileCard, ProjectsSection, ToolsSection} from "./components";

function App() {
    useEffect(() => {
        document.body.classList.add('dark');
        return () => {
            document.body.classList.remove('dark');
        };
    }, []);

    return (
        <>
            <Header />
            <main className="pt-34 min-h-screen font-sans bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid grid-cols-1 gap-14 lg:grid-cols-[380px_1fr]">

                        <aside className="lg:sticky lg:top-24 lg:self-start">
                            <ProfileCard />
                        </aside>

                        <div className="space-y-10 pb-16">
                            <AnimatePresence>
                                <section id="home" className="scroll-mt-28" key="home" >
                                    <HeroSection />
                                </section>

                                <section id="projects" className="scroll-mt-28" key="projects">
                                    <ProjectsSection animated />
                                </section>

                                <section id="experience" className="scroll-mt-28" key="experience">
                                    <ExperienceSection animated />
                                </section>

                                <section id="tools" className="scroll-mt-28" key="tools">
                                    <ToolsSection animated />
                                </section>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;