"use client";

import { motion } from "framer-motion";
import BackButton from "@/components/shared/BackButton";
import { User, Code, Zap, Cpu, Dumbbell, Terminal, CpuIcon, Flame, Mail, Gamepad2, Award } from "lucide-react";
import Image from "next/image";

const galleryImages = [
    {
        url: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=600&q=80",
        caption: "Full-Stack Development Workspace",
        tag: "Coding"
    },
    {
        url: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80",
        caption: "IoT Prototyping & Hardware Design",
        tag: "Hardware"
    },
    {
        url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
        caption: "Designing User-Centric Dashboards",
        tag: "UI/UX"
    },
    {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
        caption: "Cloud Systems & n8n Workflows",
        tag: "Automation"
    }
];

export default function About() {
    // English comments strictly added
    const stats = [
        { label: "Experience", value: "2+ Years", icon: <Zap size={16} /> },
        { label: "Tech Stack", value: "Next.js & MERN", icon: <Code size={16} /> },
        { label: "Projects", value: "30+ Completed", icon: <Terminal size={16} /> },
        { label: "Role", value: "Founding Member, NeexG Agency", icon: <Award size={16} /> },
    ];

    const highlights = [
        {
            title: "Web Architect",
            desc: "Building high-performance, full-stack digital structures using Next.js, React, TypeScript, and Tailwind CSS.",
            icon: <Code className="text-blue-400" />
        },
        {
            title: "Automation & Backend Specialist",
            desc: "Crafting scalable workflows with n8n, Node.js worker threads (MailOneApp), and backend microservices.",
            icon: <Cpu className="text-cyan-400" />
        },
        {
            title: "IoT & Embedded Systems",
            desc: "Designing smart IoT solutions like Firebase-connected smart fish breeders and nRF24L01 RC Flight controllers.",
            icon: <CpuIcon className="text-teal-400" />
        },
        {
            title: "Gaming & Fitness Enthusiast",
            desc: "Balancing code with physical performance via bodyweight routines, NFS, and competitive shooters.",
            icon: <Gamepad2 className="text-indigo-400" />
        },
    ];

    return (
        <main className="max-h-screen relative w-full text-white p-6 md:p-12 overflow-x-hidden overflow-y-auto font-sans">
            <div className="mb-12">
                <BackButton text="Go Back" />
            </div>

            {/* Background Nebula */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Side: Identity Card (4 Columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-4 lg:sticky lg:top-12"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500" />
                            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] text-center">

                                {/* Profile Image */}
                                <div className="w-[280px] h-[380px] mx-auto mb-6 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[2px]">
                                    <div className="w-full h-full bg-[#080808] rounded-3xl flex items-center justify-center overflow-hidden">
                                        <Image className="w-full h-full object-cover" src={"/my-pic.jpg"} width={280} height={380} alt="Rakibul Hassan" />
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold tracking-tight">Rakibul Hassan</h2>
                                <p className="text-blue-400 text-sm tracking-widest uppercase mt-2 font-medium">Full-Stack & Automation Architect</p>

                                <div className="grid grid-cols-1 gap-3 mt-8 text-left">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5">
                                            <div className="text-cyan-400">{stat.icon}</div>
                                            <div>
                                                <div className="text-xs text-slate-400">{stat.label}</div>
                                                <div className="text-sm font-semibold">{stat.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: The Log (8 Columns) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-8 space-y-12"
                    >
                        {/* Origin Story */}
                        <section>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
                                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 italic">Origin</span> Story
                            </h1>
                            <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed text-justify">
                                I am a Computer Science & Technology student at Bogura Polytechnic Institute, driven by the challenge of bridging software, hardware, and automation. As a founding member of NeexG Agency, I build scalable full-stack applications with Next.js, optimize background systems (like worker thread mailing tools), and design custom IoT hardware solutions—from automated fish breeding systems to long-range wireless controllers.
                            </p>
                        </section>

                        {/* Core Pillars / Highlights Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {highlights.map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group"
                                >
                                    <div className="w-12 h-12 mb-4 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-300 font-light leading-snug">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Philosophy Section */}
                        <div className="p-8 rounded-[2rem] bg-gradient-to-r from-blue-900/20 to-transparent border-l-4 border-blue-500">
                            <h4 className="text-xs uppercase tracking-[0.4em] text-blue-400 mb-4">Core Philosophy</h4>
                            <p className="text-xl italic font-light text-slate-200">
                                "Teach & Repeat" — Building intelligent systems through dashboards that learn user workflows once and execute them autonomously forever.
                            </p>
                        </div>
                    </motion.div>

                </div>

                {/* Workspace Gallery Section */}
                <section className="mt-20 border-t border-white/10 pt-16 pb-12">
                    <div className="flex flex-col mb-10">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter">
                            Workspace & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 italic">Labs</span>
                        </h2>
                        <p className="text-slate-400 mt-2 text-xs uppercase tracking-[0.3em]">A look behind the scenes of creation</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {galleryImages.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="relative h-64 rounded-3xl overflow-hidden border border-white/10 group cursor-pointer"
                            >
                                <img
                                    src={img.url}
                                    alt={img.caption}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400 mb-1.5">
                                        {img.tag}
                                    </span>
                                    <h4 className="text-sm font-bold text-white leading-snug">
                                        {img.caption}
                                    </h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}