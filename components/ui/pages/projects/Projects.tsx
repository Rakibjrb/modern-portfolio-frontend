"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import rawProjects from "@/public/projects.json";
import ChangePageButton from "@/components/shared/ChangePageButton";

const categoryStyles: Record<string, { color: string; icon: string }> = {
    mern: { color: "from-green-400 to-cyan-500", icon: "🌍" },
    frontend: { color: "from-purple-500 to-indigo-600", icon: "☄️" },
    unique: { color: "from-blue-500 to-purple-600", icon: "🛰️" },
    pending: { color: "from-amber-500 to-orange-600", icon: "🚀" },
};

const defaultGradients = [
    "from-green-400 to-cyan-500",
    "from-purple-500 to-indigo-600",
    "from-blue-500 to-purple-600",
    "from-pink-500 to-rose-600",
    "from-amber-500 to-orange-600",
    "from-cyan-500 to-blue-600",
];

const projects = rawProjects.map((project, idx) => {
    const categoryKey = (project.category || "").toLowerCase();
    const style = categoryStyles[categoryKey] || {
        color: defaultGradients[idx % defaultGradients.length],
        icon: "🪐",
    };

    return {
        id: project._id?.$oid || String(idx),
        title: project.project_name,
        desc: project.details,
        tech: (project.techstacks || []).map((t: string) => t.trim()).filter(Boolean),
        link: project.live_link,
        github: project.client_code,
        color: style.color,
        icon: style.icon,
        image: project.image,
    };
});

const ITEMS_PER_BATCH = 6;

export default function Projects() {
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_BATCH);
    const loaderRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLElement>(null);

    const hasMore = visibleCount < projects.length;
    const visibleProjects = projects.slice(0, visibleCount);

    useEffect(() => {
        if (!hasMore) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_BATCH, projects.length));
                }
            },
            {
                root: mainRef.current,
                rootMargin: "150px",
                threshold: 0.1,
            }
        );

        const currentLoader = loaderRef.current;
        if (currentLoader) {
            observer.observe(currentLoader);
        }

        return () => {
            if (currentLoader) {
                observer.unobserve(currentLoader);
            }
            observer.disconnect();
        };
    }, [hasMore, visibleCount]);

    return (
        <main
            ref={mainRef}
            className="relative h-screen w-full text-white p-6 overflow-x-hidden overflow-y-auto"
        >
            <ChangePageButton text="Contact Me" destination="/contact" />

            {/* Background Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 pt-32 lg:pt-24 pb-20">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter italic">
                        Projects <span className="text-slate-500 text-3xl md:text-5xl not-italic font-light">I've completed</span>
                    </h1>
                    <p className="text-slate-400 mt-4 tracking-[0.3em] uppercase text-xs">Featured work & Experiments</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {visibleProjects.map((project, idx) => (
                        <ProjectCard project={project} key={project.id || "Project-Card-" + idx} />
                    ))}
                </div>

                {/* Infinite Scroll Sentinel / Loader */}
                {hasMore && (
                    <div ref={loaderRef} className="flex justify-center items-center py-16">
                        <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-blue-500 animate-spin" />
                    </div>
                )}
            </div>
        </main>
    );
}

function ProjectCard({ project }: { project: { title: string, desc: string, tech: string[], link: string, github: string, color: string, icon: string, image: string } }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative flex flex-col h-full"
        >
            {/* The "Planet" Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-[2rem] opacity-10 group-hover:opacity-30 transition-opacity duration-500 blur-sm`} />

            {/* Glass Card */}
            <div className="relative flex flex-col h-full bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-md">

                {/* Project Image Banner */}
                <div className="relative h-60 w-full overflow-hidden border-b border-white/10">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-transparent" />

                    {/* Floating Planet/Category Icon */}
                    {project.tech.length > 0 && (
                        <span className="absolute top-4 right-4 bg-neutral-950/60 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-white flex items-center gap-1.5 shadow-lg">
                            <span className="text-sm">{project.icon}</span>
                            {project.tech[0]}
                        </span>
                    )}
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-grow p-6">
                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300 mb-2">
                        {project.title}
                    </h3>

                    <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light line-clamp-3">
                        {project.desc}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                        {project.tech.map((t, i) => (
                            <span key={i} className="text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300">
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 text-slate-400 transition-colors cursor-pointer"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 text-slate-400 transition-colors cursor-pointer"
                        >
                            <ExternalLink size={20} />
                        </a>
                        <div className="ml-auto text-slate-500 opacity-20 group-hover:opacity-80 transition-opacity">
                            <Folder size={18} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}