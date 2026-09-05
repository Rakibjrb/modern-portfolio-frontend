"use client"

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
const BackButton = () => {
    const router = useRouter();

    return (
        <motion.button whileHover={{ scale: 1.1 }} onClick={() => router.back()} className="cursor-pointer px-2 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium tracking-wider shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/20 hover:border-white/40 transition-all duration-300 active:scale-95 flex items-center gap-2 group">
            <ChevronLeft className="text-xl" />
        </motion.button>
    )
};

export default BackButton;