"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Rocket = () => {
    return (
        <motion.div
            initial={{ opacity: 1, y: 400 }}
            animate={{ opacity: 1, y: -500 }}
            transition={{ duration: 2, delay: 1 }}
            className="w-full flex justify-center items-start h-[300px]"
        >
            <Image src="/rocket.gif" alt="Rocket" width={200} height={300} unoptimized={true} />
        </motion.div>
    )
}

export default Rocket;