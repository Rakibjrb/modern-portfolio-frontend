"use client";

import Rocket from "@/components/ui/Rocket";
import { motion } from "framer-motion";

const ChangePage = ({ children, destination }: { children: React.ReactNode, destination?: string }) => {
    return (
        <>
            <Rocket destination={destination} />

            <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: -300 }}
                transition={{ duration: 2, delay: 2 }}
            >
                {children}
            </motion.div>
        </>
    )
}

export default ChangePage;