"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ChangePageButton from "@/components/shared/ChangePageButton";
import { ISkill } from "@/types/about.interface";

export default function SkillsUniversePage({ skills }: { skills: ISkill[] }) {
    const [swirlingSkills, setSwirlingSkills] = useState<any[]>([]);

    useEffect(() => {
        const generatedSkills = skills.map((skill, i) => ({
            ...skill,
            id: i,
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            duration: Math.random() * 20 + 20,
            xValues: [0, Math.random() * 400 - 200, Math.random() * 400 - 200, 0],
            yValues: [0, Math.random() * 400 - 200, Math.random() * 400 - 200, 0],
            color: "from-green-500 to-emerald-400"
        }));

        setSwirlingSkills(generatedSkills);
    }, []);

    return (
        <main className="relative min-h-screen w-full text-white overflow-hidden p-6 font-sans">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none z-0" />
            <ChangePageButton text="Planet Projects" destination="/projects" />

            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                {swirlingSkills.map((skill) => (
                    <motion.div
                        key={skill.id}
                        className="absolute pointer-events-auto"
                        style={{
                            top: skill.top,
                            left: skill.left,
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
                    >
                        <div className="relative group cursor-grab active:cursor-grabbing border border-white/50 rounded-full">
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300" />

                            <div className="relative flex items-center gap-3 px-5 py-3 whitespace-nowrap">
                                <div className={`w-10 h-10 rounded-full bg-white/90 p-[1px] flex items-center justify-center`}>
                                    <img src={skill.iconUrl} alt={skill.name} className="w-full h-full rounded-full" />
                                </div>
                                <span className="text-lg font-medium tracking-tight text-slate-100">{skill.name}</span>
                            </div>

                            <div className={`absolute -z-10 inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full`} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}