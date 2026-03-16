"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const blackHoleVariants = (pathname: string) => {
    switch (pathname) {
        case "/skills":
            return {
                blackHoleBG: "bg-yellow-500",
                eventHorizon1: "border-yellow-500/30",
                eventHorizon2: "border-yellow-400/40",
                ambientLight: "bg-yellow-600/10",
            }

        default:
            return {
                blackHoleBG: "bg-black",
                eventHorizon1: "border-blue-500/30",
                eventHorizon2: "border-cyan-400/40",
                ambientLight: "bg-blue-600/10",
            }
    }
}

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [stars, setStars] = useState<{ radius: number, angle: number, size: string, opacity: number, duration: number }[]>([]);

    const pathname = usePathname();

    useEffect(() => {
        const generateStars = [...Array(50)].map(() => ({
            radius: Math.random() * 800 + 100,
            angle: Math.random() * 360,
            size: `${Math.random() * 4 + 1}px`,
            opacity: Math.random() * 0.8 + 0.2,
            duration: Math.random() * 40 + 20,
        }));

        setStars(generateStars);
    }, []);
    return (
        <div className="relative main-layout">
            <div className="absolute top-0 left-0 w-full h-full z-50">
                {children}
            </div>

            <div className="absolute top-0 left-0 w-full h-full z-0">
                {/* Background Swirling Stars */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                    {stars.map((star, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white rounded-full"
                            style={{
                                width: star.size,
                                height: star.size,
                                opacity: star.opacity,
                            }}
                            initial={{ rotate: star.angle }}
                            animate={{ rotate: star.angle + 360 }} // ৩৬০ ডিগ্রি অনবরত ঘুরবে
                            transition={{
                                duration: star.duration,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <div
                                style={{ transform: `translate(${star.radius}px, 0)` }}
                                className="w-full h-full bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Black Hole Center (The Anchor) */}
                {pathname !== "/explore" && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
                    <div className={`relative w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] ${blackHoleVariants(pathname).blackHoleBG} rounded-full shadow-[0_0_80px_20px_rgba(59,130,246,0.4)] flex items-center justify-center`}>

                        {/* Event Horizon Layers */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className={`absolute w-[260px] h-[260px] lg:w-[400px] lg:h-[400px] rounded-full border-t-2 border-b-2 ${blackHoleVariants(pathname).eventHorizon1} blur-[2px]`}
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className={`absolute w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] rounded-full border-l-2 border-r-2 ${blackHoleVariants(pathname).eventHorizon2} blur-[1px]`}
                        />

                        {/* Blue Glow Ambient */}
                        <div className={`absolute w-full h-full ${blackHoleVariants(pathname).ambientLight} rounded-full blur-[100px]`} />
                    </div>
                </div>}
            </div>
        </div>
    );
}
