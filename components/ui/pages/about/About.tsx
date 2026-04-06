"use client";

import { motion } from "framer-motion";
import BackButton from "@/components/shared/BackButton";
import { User, Code, Zap, Cpu, Dumbbell } from "lucide-react";
import Image from "next/image";

export default function About() {
    const stats = [
        { label: "Voyage", value: "2+ Years", icon: <Zap size={16} /> },
        { label: "Systems", value: "MERN Stack", icon: <Code size={16} /> },
        { label: "Systems", value: "30+ Projects Completed", icon: <Code size={16} /> },
    ];

    const highlights = [
        { title: "Web Architect", desc: "Building high-performance digital structures with Next.js & React.", icon: <Code className="text-blue-400" /> },
        { title: "Automation Engineer", desc: "Crafting seamless workflows with n8n and Python scripts or JavaScript.", icon: <Cpu className="text-cyan-400" /> },
        { title: "Fitness Enthusiast", desc: "Maintaining peak physical form with bodyweight routines.", icon: <Dumbbell className="text-teal-400" /> },
    ];

    return (
        <main className="relative h-screen w-full text-white p-6 md:p-12 overflow-x-hidden font-sans">
            <div className="mb-12">
                <BackButton />
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
                                {/* Profile Placeholder / Image */}
                                <div className="w-[280px] h-[380px] mx-auto mb-6 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[2px]">
                                    <div className="w-full h-full bg-[#080808] rounded-3xl flex items-center justify-center overflow-hidden">
                                        <Image className="w-full h-full" src={"/my-pic.jpg"} width={200} height={300} alt="Rakibul Hasan Picture" />
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold tracking-tight">Rakibul Hasan</h2>
                                <p className="text-blue-400 text-sm tracking-widest uppercase mt-2 font-medium">Digital Explorer</p>

                                <div className="grid grid-cols-1 gap-3 mt-8 text-left">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5">
                                            <div className="text-cyan-400">{stat.icon}</div>
                                            <div>
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
                        <section>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
                                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 italic">Origin</span> Story
                            </h1>
                            <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed text-justify">
                                I am a passionate Computer Science & Technology student at Bogura Polytechnic Institute, currently pursuing my Diploma in Engineering. As a Web Developer and Automation Enthusiast, I specialize in building scalable digital solutions and optimizing workflows using n8n. My universe revolves around exploring emerging technologies and transforming complex problems into seamless, automated experiences. I don't just write code; I architect efficiency.
                            </p>
                        </section>

                        {/* Highlights Grid */}
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

                        {/* Mission Statement */}
                        <div className="p-8 rounded-[2rem] bg-gradient-to-r from-blue-900/20 to-transparent border-l-4 border-blue-500">
                            <h4 className="text-xs uppercase tracking-[0.4em] text-blue-400 mb-4">Current Objective</h4>
                            <p className="text-xl italic font-light text-slate-200">
                                Simplifying everyday human problems through automation and architecting a perfect bridge between hardware and software.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </main>
    );
}