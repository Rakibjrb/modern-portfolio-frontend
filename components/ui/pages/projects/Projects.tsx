"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Compass, Sparkles, RefreshCw } from "lucide-react";
import { APIResponse } from "@/types/api.response.types";
import { IProject } from "@/types/projects.interface";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProjectsSkeleton from "@/app/(main-layout)/projects/ProjectsSkeleton";

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

// this is main project show component
export default function Projects({ projectsData: initialProjects }: { projectsData: IProject[] }) {
    const [projects, setProjects] = useState<IProject[]>(initialProjects);
    const [page, setPage] = useState<number>(2);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const observerRef = useRef<HTMLDivElement | null>(null);

    // Function to fetch more projects
    const loadMoreProjects = useCallback(async () => {
        if (loading || !hasMore) return;

        setLoading(true);

        try {
            const res = await fetch(`/api/projects?page=${page}&limit=9`); // used nextjs rewrite function

            if (!res.ok) {
                throw new Error("Failed to fetch more projects");
            }

            const newData: APIResponse = await res.json();

            if (!newData || newData.data.length === 0) {
                setHasMore(false);
            } else {
                setProjects((prev) => [...prev, ...newData.data as IProject[]]);
                setPage((prevPage) => prevPage + 1);
            }
        } catch (error) {
            console.error("Error loading more projects:", error);
        } finally {
            setLoading(false);
        }
    }, [page, loading, hasMore]);

    // Setup Intersection Observer
    useEffect(() => {
        const target = observerRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    loadMoreProjects();
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(target);

        return () => {
            if (target) observer.unobserve(target);
        };
    }, [loadMoreProjects, hasMore, loading]);

    const allProjects = projects.map((project: IProject, idx: number) => {
        const categoryKey = (project.category || "").toLowerCase();
        const style = categoryStyles[categoryKey] || {
            color: defaultGradients[idx % defaultGradients.length],
            icon: "🪐",
        };

        return {
            id: project._id || String(idx),
            title: project.title,
            desc: project.shortDescription,
            tech: (project.technologies || []).map((t: string) => t.trim()).filter(Boolean),
            link: project.url.live,
            github: project.url.githubClient,
            color: style.color,
            icon: style.icon,
            image: project.thumbnail,
        };
    });

    if (!allProjects || allProjects.length === 0) {
        return <NoProjectFound />;
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {allProjects.map((project, idx: number) => (
                    <ProjectCard project={project} key={project.id || "Project-Card-" + idx} />
                ))}

                {/* Target element for Intersection Observer */}
                {loading && <ProjectsSkeleton />}
                <div ref={observerRef} className="h-auto w-full mt-10"></div>
            </div>

            {!hasMore && (
                <p className="text-center text-slate-500 my-8 text-sm">
                    No more projects to load.
                </p>
            )}
        </div>
    );
}

// this is project card component
function ProjectCard({
    project,
}: {
    project: {
        id?: string;
        title: string;
        desc?: string;
        tech: string[];
        link: string;
        github?: string;
        color: string;
        icon: string;
        image: string;
    };
}) {
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
                    <Image
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        width={500}
                        height={500}
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-transparent" />

                    {/* Floating Planet/Category Icon */}
                    {project.tech.length > 0 && (
                        <span className="absolute top-4 right-4 bg-neutral-950/60 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-white flex items-center gap-1.5 shadow-lg uppercase">
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
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 text-slate-400 transition-colors cursor-pointer"
                        >
                            <ExternalLink size={20} />
                        </a>
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 text-slate-400 transition-colors cursor-pointer"
                            >
                                <Github size={20} />
                            </a>
                        )}
                        <div className="ml-auto text-slate-500 opacity-20 group-hover:opacity-80 transition-opacity">
                            <Folder size={18} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// this is project not found card component
function NoProjectFound() {
    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative col-span-full w-full py-5 px-6 flex flex-col items-center justify-center text-center"
        >
            {/* Ambient Background Glow */}
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-purple-600/20 via-blue-500/15 to-transparent blur-3xl -z-10 pointer-events-none" />

            {/* Glass Container */}
            <div className="relative max-w-lg w-full bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Decorative border highlight */}
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                {/* Floating Cosmic Icon */}
                <div className="relative mx-auto w-24 h-24 mb-6 flex items-center justify-center">
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 rounded-full border border-purple-500/30 animate-ping opacity-25" />
                    <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-white/10 backdrop-blur-md" />

                    <motion.div
                        animate={{ y: [-4, 4, -4], rotate: [0, 5, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="relative text-cyan-400"
                    >
                        <Compass className="w-10 h-10 text-cyan-400 stroke-[1.5]" />
                    </motion.div>

                    <div className="absolute -top-1 -right-1">
                        <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-slate-400 uppercase mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Sector Empty
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                    No Projects Discovered Yet
                </h3>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm mx-auto font-light">
                    The radar is currently scanning for new transmissions. Check back soon or explore other coordinates.
                </p>

                {/* Action CTA */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                        onClick={() => router.refresh()}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-xs font-medium uppercase tracking-wider text-slate-300 transition-all duration-300 cursor-pointer"
                    >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Re-scan Radar
                    </button>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-xs font-medium uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                    >
                        Initiate Contact
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};