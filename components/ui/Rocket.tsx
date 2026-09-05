"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Rocket = ({ destination = "The Mission" }: { destination?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 1, y: 500 }}
            animate={{ opacity: 1, y: -500 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full h-[300px] flex justify-center items-start"
        >
            <Image className="w-auto h-auto" src="/rocket.gif" alt="Rocket" width={200} height={280} unoptimized={true} loading="eager" />

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white text-xl font-bold text-center">Travelling to {destination}...</div>
        </motion.div>
    )
}

export default Rocket;