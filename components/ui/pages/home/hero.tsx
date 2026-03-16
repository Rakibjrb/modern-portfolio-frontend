"use client";

import { Button } from "@/components/shared/Buttons";
import { motion } from "framer-motion";

export default function Hero() {

    return (
        <section className="min-h-screen flex items-center justify-center px-6 bg-[#050505] overflow-hidden">
            <div className="max-w-5xl text-center z-10">
                {/* Greeting */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-1.5 text-xl md:text-2xl font-medium tracking-wider text-slate-300"
                >
                    Hi there! <div className="animate-bounce inline-block">👋</div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-3xl leading-tight text-slate-400 max-w-2xl mx-auto my-6 font-light"
                >
                    Welcome to my Portfolio
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-6xl md:text-8xl lg:text-[110px] font-extrabold tracking-tighter text-white"
                >
                    {"I'm"}{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 drop-shadow-sm">
                        Rakibul Hasan
                    </span>
                </motion.h1>

                {/* Glassy Universe Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-16"
                >
                    <Button href="/explore">
                        <span className="relative z-10 flex items-center gap-3">
                            Explore My Universe
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="inline-block"
                            >
                                🚀
                            </motion.span>
                        </span>
                    </Button>

                    {/* Hint text */}
                    <div className="mt-6 text-slate-300 text-[10px] tracking-widest animate-pulse uppercase">
                        Click to launch
                    </div>
                </motion.div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
                <div className="relative w-[250px] h-[250px] bg-black rounded-full shadow-[0_0_80px_20px_rgba(59,130,246,0.4)] flex items-center justify-center">

                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[400px] h-[400px] rounded-full border-t-2 border-b-2 border-blue-500/30 blur-[2px]"
                    />

                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[320px] h-[320px] rounded-full border-l-2 border-r-2 border-cyan-400/40 blur-[1px]"
                    />

                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <div
                                className="w-1 h-1 bg-white rounded-full absolute"
                                style={{
                                    top: '0%',
                                    left: '50%',
                                    boxShadow: '0 0 10px 2px white'
                                }}
                            />
                        </motion.div>
                    ))}

                    <div className="absolute w-full h-full bg-blue-600/10 rounded-full blur-[100px]" />
                </div>
            </div>
        </section>
    );
}