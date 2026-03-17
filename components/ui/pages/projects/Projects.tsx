"use client";

import { motion } from "framer-motion";
import BackButton from "@/components/shared/BackButton";
import { ExternalLink, Github, Folder } from "lucide-react";
import Pagination from "@/components/shared/Pagination";

const projects = [
    {
        title: "Eco Tracker",
        desc: "A smart system to monitor environmental changes using IoT.",
        tech: ["React", "Node.js", "Arduino"],
        link: "#",
        github: "#",
        color: "from-green-400 to-cyan-500",
        icon: "🌍"
    },
    {
        title: "Astro Flow",
        desc: "Automation workflow manager inspired by n8n architecture.",
        tech: ["Next.js", "TypeScript", "n8n"],
        link: "#",
        github: "#",
        color: "from-purple-500 to-indigo-600",
        icon: "☄️"
    },
    {
        title: "Galaxy Chat",
        desc: "Real-time communication app with end-to-end encryption.",
        tech: ["Socket.io", "React", "Firebase"],
        link: "#",
        github: "#",
        color: "from-blue-500 to-purple-600",
        icon: "🛰️"
    },
    {
        title: "Eco Tracker",
        desc: "A smart system to monitor environmental changes using IoT.",
        tech: ["React", "Node.js", "Arduino"],
        link: "#",
        github: "#",
        color: "from-green-400 to-cyan-500",
        icon: "🌍"
    },
    {
        title: "Astro Flow",
        desc: "Automation workflow manager inspired by n8n architecture.",
        tech: ["Next.js", "TypeScript", "n8n"],
        link: "#",
        github: "#",
        color: "from-purple-500 to-indigo-600",
        icon: "☄️"
    },
    {
        title: "Galaxy Chat",
        desc: "Real-time communication app with end-to-end encryption.",
        tech: ["Socket.io", "React", "Firebase"],
        link: "#",
        github: "#",
        color: "from-blue-500 to-purple-600",
        icon: "🛰️"
    },
    {
        title: "Astro Flow",
        desc: "Automation workflow manager inspired by n8n architecture.",
        tech: ["Next.js", "TypeScript", "n8n"],
        link: "#",
        github: "#",
        color: "from-purple-500 to-indigo-600",
        icon: "☄️"
    },
    {
        title: "Galaxy Chat",
        desc: "Real-time communication app with end-to-end encryption.",
        tech: ["Socket.io", "React", "Firebase"],
        link: "#",
        github: "#",
        color: "from-blue-500 to-purple-600",
        icon: "🛰️"
    }
];

export default function Projects() {
    return (
        <main className="relative h-screen w-full bg-[#f5000057] text-white p-6 overflow-x-hidden overflow-y-auto">

            {/* Background Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-16">
                    <BackButton text="Back to Orbit" />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter italic">
                        Discovery <span className="text-slate-500 text-3xl md:text-5xl not-italic font-light">Logs</span>
                    </h1>
                    <p className="text-slate-400 mt-4 tracking-[0.3em] uppercase text-xs">Major planetary projects</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            {/* The "Planet" Glow Effect */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-[2rem] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                            {/* Glass Card */}
                            <div className="relative h-full bg-white/5 border border-white/10 p-8 rounded-[2rem] overflow-hidden">
                                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                                    {project.desc}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Links */}
                                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                    <a href={project.github} className="hover:text-white text-slate-500 transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.link} className="hover:text-white text-slate-500 transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                    <div className="ml-auto opacity-20 group-hover:opacity-100 transition-opacity">
                                        <Folder size={18} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Pagination currentPage={1} totalPages={10} onPageChange={(pageNumber) => console.log(pageNumber)} />
            </div>
        </main>
    );
}