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
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.button>
    )
}