"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Rocket, GraduationCap, School, Workflow } from "lucide-react";
import BackButton from "@/components/shared/BackButton";

const experiences = [
    {
        type: "work",
        company: "NeexG Agency",
        role: "Senior Executive, Developer Team",
        period: "March 2026 - Present",
        desc: "Leading web development and automation projects. Specialized in building bulk mailing systems and custom business workflows.",
        points: ["Next.js & Node.js integration", "Client management"],
        icon: <Rocket className="text-blue-400" />
    },
    {
        type: "work",
        company: "NeexG Agency",
        role: "n8n Automation Expert",
        period: "2025 - 2026",
        desc: "Designed and deployed complex autonomous workflows using n8n to connect various SaaS platforms and automate repetitive business processes.",
        points: [
            "Custom API & Webhook Integration",
            "Multi-node Workflow Architecture",
            "Data Transformation & Error Handling"
        ],
        icon: <Workflow className="text-cyan-400" />
    }
];

const education = [
    {
        type: "edu",
        institution: "Bogura Polytechnic Institute",
        degree: "Diploma in Engineering",
        department: "Computer Science & Technology",
        period: "2023 - Present",
        desc: "Focusing on CST core subjects like Data Structures, Algorithms, and System Design.",
        icon: <GraduationCap className="text-purple-400" />
    },
    {
        type: "edu",
        institution: "Kella High School",
        degree: "SSC (Science)",
        period: "Passed 2023",
        desc: "Developed early interest in science and technology from the secondary level.",
        icon: <School className="text-emerald-400" />
    }
];

export default function MissionLogPage() {
    return (
        <main className="relative h-screen w-full text-white p-6 md:p-12 overflow-x-hidden overflow-y-scroll">
            <div className="mb-12"><BackButton text="Go Back" /></div>

            {/* Background Decor */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter italic">
                        Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 not-italic">Logs</span>
                    </h1>
                    <p className="text-slate-400 mt-4 tracking-[0.3em] text-sm">Professional & academic Foundations</p>
                </motion.div>

                {/* --- Work Experience Section --- */}
                <section className="mb-20">
                    <h2 className="text-xs uppercase tracking-[0.4em] text-blue-400 mb-10 flex items-center gap-4">
                        <span className="w-10 h-[1px] bg-blue-400/30" /> Professional Experience
                    </h2>

                    <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
                        {experiences.map((exp, idx) => (
                            <TimelineCard key={idx} data={exp} />
                        ))}
                    </div>
                </section>

                {/* --- Education Section --- */}
                <section>
                    <h2 className="text-xs uppercase tracking-[0.4em] text-purple-400 mb-10 flex items-center gap-4">
                        <span className="w-10 h-[1px] bg-purple-400/30" /> Academic Foundations
                    </h2>

                    <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
                        {education.map((edu, idx) => (
                            <TimelineCard key={idx} data={edu} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

// Reusable Timeline Card Component
function TimelineCard({ data }: { data: any }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
        >
            {/* Timeline Dot with Icon */}
            <div className={`absolute -left-[53px] md:-left-[69px] top-0 w-10 h-10 bg-[#080808] border-2 ${data.type === 'work' ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]'} rounded-full flex items-center justify-center z-20`}>
                {data.icon}
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all group">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                        <h3 className="text-xl md:text-3xl font-bold group-hover:text-blue-400 transition-colors tracking-tight">
                            {data.role || data.degree}
                        </h3>
                        <p className="text-slate-400 font-medium text-md md:text-lg mt-1">
                            {data.company || data.institution} {data.department ? `| ${data.department}` : ""}
                        </p>
                    </div>
                    <div className="text-slate-500 text-[10px] bg-white/5 px-4 py-1.5 rounded-full border border-white/5 tracking-widest uppercase">
                        {data.period}
                    </div>
                </div>

                <p className="text-slate-200 font-light leading-relaxed text-lg mb-4">
                    {data.desc}
                </p>

                {data.points && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {data.points.map((point: string, i: number) => (
                            <div key={i} className="flex items-center gap-2 text-md md:text-lg text-slate-400">
                                <CheckCircle2 size={12} className="text-cyan-500" />
                                {point}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}