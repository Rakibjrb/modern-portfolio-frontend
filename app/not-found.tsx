"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    Rocket,
    ArrowLeft,
    Compass,
    AlertTriangle,
    Radio
} from "lucide-react";

export default function NotFoundPage() {
    const router = useRouter();
    const [stars, setStars] = useState<{ x: number; y: number; size: number; opacity: number; duration: number }[]>([]);
    const [asteroids, setAsteroids] = useState<{ id: number; top: string; left: string; size: string; duration: number; delay: number; xTarget: number; yTarget: number }[]>([]);
    const [telemetryLogs, setTelemetryLogs] = useState<string[]>([]);
    const [secondsDrifting, setSecondsDrifting] = useState(0);

    // Generate background stars and drifting asteroids
    useEffect(() => {
        const starCount = 60;
        const generatedStars = Array.from({ length: starCount }).map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 0.8,
            opacity: Math.random() * 0.7 + 0.3,
            duration: Math.random() * 3 + 2,
        }));
        setStars(generatedStars);

        const asteroidCount = 4;
        const generatedAsteroids = Array.from({ length: asteroidCount }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 15 - 10}%`,
            size: `${Math.random() * 12 + 6}px`,
            duration: Math.random() * 20 + 25,
            delay: Math.random() * 4,
            xTarget: Math.random() * 300 + 850,
            yTarget: -(Math.random() * 250 + 250),
        }));
        setAsteroids(generatedAsteroids);
    }, []);

    // Telemetry real-time log feed simulator
    const baseLogs = [
        "LOG-004: Nav link lost.",
        "LOG-081: Beacon coordinates out of range.",
        "ERR-404: Targeted sector collapsed into singularity.",
        "SYS-WARP: Fuel empty. Warp drive disabled.",
        "SYS-LIFE: Oxygen levels stabilized at 89%.",
        "COMMS: Signals failing to breach event horizon...",
        "TELEMETRY: Drifting in Sector-404 (Unknown Void).",
        "ERR-500: Dark matter core internal server error.",
        "SYS-GRAV: Artificial gravity reduced to 0.4g.",
        "LOG-102: Stellar radiation shielding at 74%.",
        "COMMS: Interstellar ping delayed by 4.2 light-years.",
        "WARN-301: Route permanently moved to Nebula-9.",
        "SYS-AI: Auto-pilot recalibrating trajectory...",
        "LOG-503: Hyperspace relay service unavailable.",
        "TELEMETRY: Quantum entanglements disrupted.",
        "ERR-403: Access denied to Dyson sphere gateway.",
        "SYS-COOL: Thruster temperature exceeding safety thresholds.",
        "LOG-200: Wormhole connection established successfully.",
        "COMMS: Incoming encrypted transmission from Deep Space.",
        "SYS-LIFE: Cryo-chamber diagnostics complete. All clear."
    ];

    useEffect(() => {
        setTelemetryLogs([baseLogs[0]]);
        const logInterval = setInterval(() => {
            setTelemetryLogs(prev => {
                if (prev.length < baseLogs.length) {
                    return [...prev, baseLogs[prev.length]];
                }
                return prev;
            });
        }, 2800);

        return () => clearInterval(logInterval);
    }, []);

    // Drift timer counter
    useEffect(() => {
        const driftTimer = setInterval(() => {
            setSecondsDrifting(prev => prev + 1);
        }, 1000);
        return () => clearInterval(driftTimer);
    }, []);

    const formatTime = (totalSeconds: number) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return [hours, minutes, seconds]
            .map(val => String(val).padStart(2, "0"))
            .join(":");
    };

    return (
        <div className="relative w-screen h-screen min-h-screen bg-[#020206] text-white flex flex-col justify-between p-6 md:p-10 overflow-hidden font-sans select-none">

            {/* 1. Ambient Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* 2. Swirling Stars Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {stars.map((star, idx) => (
                    <motion.div
                        key={idx}
                        className="absolute rounded-full bg-white"
                        style={{
                            top: `${star.y}%`,
                            left: `${star.x}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                        }}
                        animate={{
                            opacity: [star.opacity, star.opacity * 0.2, star.opacity],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* 3. Drifting Debris */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {asteroids.map((ast) => (
                    <motion.div
                        key={ast.id}
                        className="absolute text-xl opacity-25"
                        style={{
                            top: ast.top,
                            left: ast.left,
                        }}
                        animate={{
                            x: ast.xTarget,
                            y: ast.yTarget,
                            rotate: 360,
                        }}
                        transition={{
                            duration: ast.duration,
                            delay: ast.delay,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        ☄️
                    </motion.div>
                ))}
            </div>

            {/* 4. Event Horizon Singularity Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] z-0 pointer-events-none opacity-40">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-cyan-500/10 [mask-image:radial-gradient(circle_at_center,transparent_40%,black_100%)]"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 rounded-full border border-dashed border-indigo-500/20"
                />
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.03, 0.97, 1] }}
                    transition={{
                        rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute inset-16 rounded-full border-t border-b-2 border-indigo-500/40 bg-indigo-950/5 blur-[4px] shadow-[0_0_80px_rgba(99,102,241,0.25)]"
                />
                <div className="absolute inset-[37%] rounded-full bg-[#020206] shadow-[inset_0_0_30px_rgba(0,0,0,1),0_0_50px_rgba(6,182,212,0.1)]" />
            </div>

            {/* HUD Header */}
            <header className="z-10 w-full flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3 text-slate-500 font-mono text-[9px] sm:text-[10px] tracking-[0.25em]">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                        <Compass className="w-3.5 h-3.5 text-cyan-500/70" />
                    </motion.div>
                    <span className="hidden sm:inline">COSMIC TELEMETRY SYSTEM // RAKIB_PORTFOLIO</span>
                    <span className="sm:hidden">COSMIC TELEMETRY v4.0.4</span>
                </div>
                <div className="flex items-center gap-2 text-rose-500/80 font-mono text-[9px] sm:text-[10px] tracking-widest font-bold">
                    <AlertTriangle className="w-3 h-3 animate-pulse" />
                    <span>WARNING: EVENT_HORIZON_REACHED</span>
                </div>
            </header>

            {/* HUD Content Grid */}
            <main className="z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl w-full mx-auto my-auto py-6">

                {/* Left: Telemetry Panel */}
                <div className="col-span-1 lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full max-w-[360px] bg-black/40 border border-white/10 backdrop-blur-lg rounded-xl p-5 font-mono text-xs shadow-2xl relative overflow-hidden"
                    >
                        {/* HUD Status Header */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                            <div className="flex items-center gap-2 text-rose-500 font-bold tracking-widest text-[9px] uppercase animate-pulse">
                                <span className="w-2 h-2 rounded-full bg-rose-500" />
                                Emergency Protocol Active
                            </div>
                            <div className="text-[9px] text-slate-500">SYS.DIAG.v4.04</div>
                        </div>

                        {/* HUD Variables Grid */}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-slate-400 mb-4 border-b border-white/5 pb-4">
                            <div>
                                <span className="text-slate-600 block text-[8px] uppercase tracking-wider">Telemetry Unit</span>
                                <span className="text-slate-200">VOYAGER-IX</span>
                            </div>
                            <div>
                                <span className="text-slate-600 block text-[8px] uppercase tracking-wider">Sector Location</span>
                                <span className="text-cyan-400 font-bold">VOID_OUTER_EDGE</span>
                            </div>
                            <div>
                                <span className="text-slate-600 block text-[8px] uppercase tracking-wider">Local Velocity</span>
                                <span className="text-slate-200">0.00 km/s (Drift)</span>
                            </div>
                            <div>
                                <span className="text-slate-600 block text-[8px] uppercase tracking-wider">Warp Fuel</span>
                                <span className="text-rose-400 font-bold">0.0% (Warning)</span>
                            </div>
                        </div>

                        {/* Live Terminal Log Stream */}
                        <div className="space-y-1.5 h-[120px] overflow-hidden flex flex-col justify-end">
                            <AnimatePresence>
                                {telemetryLogs.slice(-5).map((log, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className={`flex items-start gap-2 leading-relaxed ${log.includes("ERR-404") ? "text-rose-400 font-semibold" :
                                            log.includes("SYS") ? "text-amber-400" : "text-slate-300"
                                            }`}
                                    >
                                        <span className="text-slate-600 select-none">&gt;</span>
                                        <span className="text-[11px]">{log}</span>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* HUD Footer status */}
                        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] text-slate-500">
                            <div className="flex items-center gap-1.5">
                                <Radio className="w-2.5 h-2.5 text-cyan-400 animate-pulse" />
                                <span>Pings: Timed Out</span>
                            </div>
                            <span>ONLINE: FALSE</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Main error message & control actions */}
                <div className="col-span-1 lg:col-span-7 order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center lg:items-start"
                    >
                        <div className="relative">
                            {/* Backlight Glow for the giant 404 */}
                            <div className="absolute inset-0 bg-cyan-500/5 blur-[70px] rounded-full pointer-events-none" />

                            <motion.h1
                                animate={{
                                    y: [0, -6, 0],
                                    textShadow: [
                                        "0 0 10px rgba(6,182,212,0.2)",
                                        "0 0 25px rgba(6,182,212,0.5)",
                                        "0 0 10px rgba(6,182,212,0.2)"
                                    ]
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="text-[96px] sm:text-[130px] lg:text-[160px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-300 tracking-tighter"
                            >
                                404
                            </motion.h1>
                        </div>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-base sm:text-lg lg:text-xl font-bold tracking-[0.3em] uppercase text-cyan-300/90 mt-1 mb-4"
                        >
                            COORDINATES UNRESOLVED
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-slate-400 font-light text-sm sm:text-base leading-relaxed max-w-md mb-8"
                        >
                            Your navigation systems have locked onto a non-existent sector. The coordinates have likely been swallowed by the gravitational singularity.
                        </motion.p>

                        {/* Action Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <Link
                                href="/explore"
                                className="group relative px-6 py-3.5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-semibold tracking-[0.2em] uppercase text-[10px] sm:text-xs transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <span>Warp to Solar System</span>
                                <Rocket className="w-3.5 h-3.5 text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </Link>

                            <button
                                onClick={() => router.back()}
                                className="group px-6 py-3.5 bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-full font-semibold tracking-[0.2em] uppercase text-[10px] sm:text-xs transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
                                <span>Retrace steps</span>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>

            </main>

            {/* HUD Footer Status Bar */}
            <footer className="z-10 w-full flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-4 text-slate-600 font-mono text-[8px] sm:text-[9px] tracking-widest gap-2">
                <div>DESIGNATION: NAV_LOST_IN_SPACE</div>
                <div className="hidden md:block">COORDINATES: UNRESOLVABLE_VOID_HEX</div>
                <div>DRIFT_DURATION: {formatTime(secondsDrifting)}</div>
            </footer>

        </div>
    );
}