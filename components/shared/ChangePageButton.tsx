"use client"

import BackButton from "./BackButton";
import { Button } from "./Buttons";
import { motion } from 'framer-motion';

export default function ChangePageButton({ text, destination }: { text: string, destination?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: 2 }}
            className="w-full fixed top-6 left-0 px-4 z-[100] pointer-events-auto space-y-3 flex items-start justify-between">
            <div className="pt-1">
                <BackButton />
            </div>
            <Button href={destination ? destination : "/"}>
                {text}
                <span className="ml-2 text-md group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
                    🚀
                </span>
            </Button>
        </motion.div>
    );
}