"use client";

import { motion } from "framer-motion";
import BackButton from "@/components/shared/BackButton";
import { useEffect, useState } from "react";
import {
    Atom,
    Wind,
    Code2,
    Layers,
    Database,
    Terminal,
    Github,
    Cpu,
    Workflow,
    Flame,
    Framer
} from "lucide-react";

const skillsData = [
    { name: "React", icon: <Atom size={20} />, color: "from-blue-400 to-cyan-400" },
    { name: "Next.js", icon: <span className="font-bold text-sm">N</span>, color: "from-slate-100 to-slate-400" },
    { name: "Tailwind", icon: <Wind size={20} />, color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", icon: <Code2 size={20} />, color: "from-blue-600 to-blue-400" },
    { name: "Node.js", icon: <Layers size={20} />, color: "from-green-500 to-emerald-400" },
    { name: "MongoDB", icon: <Database size={20} />, color: "from-green-600 to-lime-500" },
    { name: "Express", icon: <Terminal size={20} />, color: "from-slate-400 to-slate-600" },
    { name: "Git", icon: <Github size={20} />, color: "from-orange-500 to-red-500" },
    { name: "Github", icon: <Github size={20} />, color: "from-slate-300 to-slate-500" },
    { name: "Arduino", icon: <Cpu size={20} />, color: "from-teal-400 to-emerald-500" },
    { name: "n8n", icon: <Workflow size={20} />, color: "from-red-400 to-pink-500" },
    { name: "Firebase", icon: <Flame size={20} />, color: "from-yellow-400 to-orange-500" },
    { name: "Framer", icon: <Framer size={20} />, color: "from-purple-500 to-pink-500" },
];

export default function SkillsUniversePage() {
    const [swirlingSkills, setSwirlingSkills] = useState<any[]>([]);

    useEffect(() => {
        const generatedSkills = skillsData.map((skill, i) => ({
            ...skill,
            id: i,
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            scale: Math.random() * 0.3 + 0.8,
            duration: Math.random() * 20 + 20,
            xValues: [0, Math.random() * 400 - 200, Math.random() * 400 - 200, 0],
            yValues: [0, Math.random() * 400 - 200, Math.random() * 400 - 200, 0],
        }));

        setSwirlingSkills(generatedSkills);
    }, []);

    return (
        <main className="relative min-h-screen w-full text-white overflow-hidden p-6 font-sans">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none z-0" />
            <div className="fixed top-8 left-8 z-50 pointer-events-auto">
                <BackButton text="Back to Orbit" />
            </div>

            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                {swirlingSkills.map((skill) => (
                    <motion.div
                        key={skill.id}
                        className="absolute pointer-events-auto"
                        style={{
                            top: skill.top,
                            left: skill.left,
                            scale: skill.scale,
                        }}
                        animate={{
                            x: skill.xValues,
                            y: skill.yValues,
                        }}
                        transition={{
                            duration: skill.duration,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        whileHover={{
                            scale: 1.3,
                            zIndex: 100,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <div className="relative group cursor-grab active:cursor-grabbing">
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300" />

                            <div className="relative flex items-center gap-3 px-6 py-3 whitespace-nowrap">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${skill.color} p-[1px] flex items-center justify-center`}>
                                    <div className="w-full h-full bg-black/80 rounded-full flex items-center justify-center text-white">
                                        {skill.icon}
                                    </div>
                                </div>
                                <span className="text-lg font-medium tracking-tight text-slate-100">{skill.name}</span>
                            </div>

                            <div className={`absolute -z-10 inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full`} />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 pointer-events-none">
                <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter text-yellow-400">
                    MY<br />SKILLS
                </h1>
                <p className="text-slate-300 tracking-[0.5em] uppercase text-xs mt-4">The forces of sun</p>
            </div> */}
        </main>
    );
}