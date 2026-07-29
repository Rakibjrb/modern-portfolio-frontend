"use client";

import { Button } from "@/components/shared/Buttons";
import { motion } from "framer-motion";

export default function Hero() {

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 bg-transparent overflow-hidden">
            {/* Content Container */}
            <div className="max-w-5xl text-center z-10">
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-16"
                >
                    <Button href="/explore">
                        <span className="relative z-10 flex items-center gap-3">
                            CLICK & EXPLORE
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="inline-block"
                            >
                                🚀
                            </motion.span>
                        </span>
                    </Button>
                    <div className="mt-6 text-slate-300 text-[10px] tracking-widest animate-pulse uppercase">
                        Click to launch
                    </div>
                </motion.div>
            </div>
        </section>
    );
}