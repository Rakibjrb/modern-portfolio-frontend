"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const Button = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const router = useRouter();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => router.push(href)}
            className="cursor-pointer group relative px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-semibold tracking-[0.2em] uppercase text-xs transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
        >
            {children}
            {/* Button Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-md opacity-80 transition-opacity duration-500 animate-pulse" />
        </motion.button>
    )
}

const ButtonGhost = ({ href = "Ghost", children }: { href: string, children: React.ReactNode }) => {
    const router = useRouter();

    return (
        <motion.button whileHover={{ scale: 1.1 }} onClick={() => router.push(href)} className="cursor-pointer px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium tracking-wider shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/20 hover:border-white/40 transition-all duration-300 active:scale-95 flex items-center gap-2 group">
            {children}
        </motion.button>
    )
};

export default ButtonGhost;