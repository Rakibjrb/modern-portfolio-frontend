"use client";

import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import BackButton from "@/components/shared/BackButton";
import { Button } from "@/components/shared/Buttons";

export default function DeepSpaceContactPage() {
    return (
        <main className="relative h-screen w-full text-white p-6 md:p-10 overflow-x-hidden overflow-x-hidden overflow-y-auto font-sans">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
                {[...Array(7)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            scale: [0.1, 0.4, 0.7, 1, 1.4, 1.7]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            delay: i * 1.2,
                            ease: "easeInOut",
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{
                            width: `${150 + i * 50}px`,
                            height: `${150 + i * 50}px`,
                            borderWidth: '2px',
                            borderColor: 'rgba(59, 130, 246, 0.5)',
                            boxShadow: '0 0 20px 5px rgba(59, 130, 246, 0.3)',
                        }}
                    />
                ))}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col">
                <div className="mb-10 space-y-3">
                    <Button href="/">
                        SINGULARITY
                        <span className="ml-2 text-md group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
                            🚀
                        </span>
                    </Button>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center grow">

                    {/* Left Side: Communication Base Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                            Get in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 drop-shadow-md">
                                Touch
                            </span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-xl font-light leading-relaxed">
                            Have a project in mind, need web architecture advice, or want to automate your business workflow? Send a message to start the conversation.
                        </p>

                        {/* Direct Contact Info */}
                        <div className="pt-8 space-y-6 max-w-sm">
                            <a href="mailto:contact@rakibul.com" className="flex items-center gap-5 text-slate-300 hover:text-white transition-colors cursor-pointer group p-3 bg-white/5 border border-white/5 rounded-2xl hover:border-white/10 hover:shadow-xl">
                                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-all text-blue-400 group-hover:bg-blue-900/10">
                                    <Mail size={24} strokeWidth={1} />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Contact Base</div>
                                    <div className="text-lg font-medium tracking-tight">rakibul572157@gmail.com</div>
                                </div>
                            </a>

                            {/* Socials */}
                            <div className="flex gap-4">
                                {[
                                    { icon: <Github />, link: "https://github.com/rakibjrb", color: "hover:bg-slate-800" },
                                    { icon: <Linkedin />, link: "https://linkedin.com/in/rakibul-dev19", color: "hover:bg-blue-950" },
                                ].map((social, idx) => (
                                    <motion.a
                                        target="_blank"
                                        key={idx}
                                        href={social.link}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all ${social.color} hover:border-white/20`}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* --- ৩. Transmission Terminal (REDESIGNED) --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Terminal Corner Lines for added Sci-Fi touch */}
                        <div className="absolute top-[-20px] left-[-20px] w-20 h-20 border-l-4 border-t-4 border-blue-500 rounded-tl-xl pointer-events-none" />
                        <div className="absolute bottom-[-20px] right-[-20px] w-20 h-20 border-r-4 border-b-4 border-cyan-400 rounded-br-xl pointer-events-none" />

                        <div className="absolute inset-0 bg-blue-500/15 blur-[100px] rounded-full pointer-events-none" />

                        <form className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-12 rounded-[2rem] shadow-[0_0_60px_rgba(59,130,246,0.2)]">
                            <h2 className="text-center text-xs uppercase tracking-[0.5em] text-slate-300 mb-12">Transmission Terminal [T-419]</h2>

                            <div className="space-y-8">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Enter Identity (Name)..."
                                        className="w-full bg-black/30 border border-white/10 rounded-full px-8 py-5 outline-none focus:border-blue-500/70 focus:bg-black/50 transition-all text-white text-lg font-light placeholder:text-slate-400"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        placeholder="Set Frequency (email@cosmos.com)..."
                                        className="w-full bg-black/30 border border-white/10 rounded-full px-8 py-5 outline-none focus:border-cyan-400/70 focus:bg-black/50 transition-all text-white text-lg font-light placeholder:text-slate-400"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        rows={5}
                                        placeholder="Type Transmission Message..."
                                        className="w-full bg-black/30 border border-white/10 rounded-3xl px-8 py-6 outline-none focus:border-blue-500/70 focus:bg-black/50 transition-all text-white text-lg font-light placeholder:text-slate-400 resize-none"
                                    />
                                </div>

                                {/* --- ৪. Redesigned Initiate Button --- */}
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    animate={{
                                        backgroundColor: ['rgba(37, 99, 235, 1)', 'rgba(6, 182, 212, 1)', 'rgba(37, 99, 235, 1)'],
                                        boxShadow: ['0 0 15px rgba(37, 99, 235, 0.4)', '0 0 25px rgba(6, 182, 212, 0.6)', '0 0 15px rgba(37, 99, 235, 0.4)']
                                    }}
                                    transition={{
                                        backgroundColor: { repeat: Infinity, duration: 4 },
                                        boxShadow: { repeat: Infinity, duration: 2 }
                                    }}
                                    className="cursor-pointer w-full py-5 rounded-full font-extrabold tracking-[0.3em] uppercase text-xs flex items-center justify-center gap-3 text-white"
                                >
                                    Transmit Signal <Send size={18} />
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </main>
    );
}