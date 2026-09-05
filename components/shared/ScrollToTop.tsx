"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    const getScrollTarget = useCallback((): HTMLElement | Window => {
        const scrollable = document.querySelector<HTMLElement>(
            "main.overflow-y-auto, main.overflow-y-scroll, div.overflow-y-auto, div.overflow-y-scroll"
        );
        return scrollable || window;
    }, []);

    useEffect(() => {
        setIsVisible(false);

        const checkScroll = () => {
            const target = getScrollTarget();
            let scrollTop = 0;

            if (target instanceof HTMLElement) {
                scrollTop = target.scrollTop;
            } else {
                scrollTop = window.scrollY || document.documentElement.scrollTop;
            }

            setIsVisible(scrollTop > 300);
        };

        const target = getScrollTarget();
        window.addEventListener("scroll", checkScroll, { passive: true });

        if (target instanceof HTMLElement) {
            target.addEventListener("scroll", checkScroll, { passive: true });
        }

        // Check scroll periodically or after layout updates
        const intervalId = setInterval(checkScroll, 400);

        return () => {
            window.removeEventListener("scroll", checkScroll);
            if (target instanceof HTMLElement) {
                target.removeEventListener("scroll", checkScroll);
            }
            clearInterval(intervalId);
        };
    }, [pathname, getScrollTarget]);

    const scrollToTop = () => {
        const target = getScrollTarget();

        if (target instanceof HTMLElement) {
            target.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed bottom-8 right-8 z-[90]"
                >
                    <button
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        className="group relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer focus:outline-none"
                    >
                        {/* Outer Cosmic Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-md opacity-100 transition-opacity duration-500 animate-pulse" />

                        {/* Glass Button Surface */}
                        <div className="relative flex items-center justify-center w-full h-full rounded-full border border-white/20 backdrop-blur-xl border-cyan-400/60 bg-neutral-900/90 shadow-2xl transition-all duration-300">
                            {/* Orbiting Radar ring effect */}
                            <div className="absolute inset-0 rounded-full border border-cyan-400/20 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

                            <ChevronUp className="w-5 h-5 text-slate-200 group-hover:text-cyan-300 group-hover:-translate-y-0.5 transition-all duration-300 stroke-[2.2]" />
                        </div>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
