"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Maximize2, Sparkles, X } from "lucide-react";
import ScrollToTop from "@/components/shared/ScrollToTop";

const blackHoleVariants = (pathname: string) => {
  switch (pathname) {
    case "/skills":
      return {
        blackHoleBG: "bg-yellow-500",
        eventHorizon1: "border-yellow-500/30",
        eventHorizon2: "border-yellow-400/40",
        ambientLight: "bg-yellow-600/10",
      };

    case "/projects":
      return {
        blackHoleBG: "bg-red-500",
        eventHorizon1: "border-red-500/30",
        eventHorizon2: "border-red-400/40",
        ambientLight: "bg-red-600/10",
      };

    case "/about":
      return {
        blackHoleBG: "bg-blue-900",
        eventHorizon1: "border-blue-500/30",
        eventHorizon2: "border-blue-400/40",
        ambientLight: "bg-blue-800/10",
      };

    case "/experience":
      return {
        blackHoleBG: "bg-[#F9B266]",
        eventHorizon1: "border-[#F9B266]/30",
        eventHorizon2: "border-[#F9B266]/40",
        ambientLight: "bg-[#F9B266]/10",
      };

    default:
      return {
        blackHoleBG: "bg-black",
        eventHorizon1: "border-white/100",
        eventHorizon2: "border-white/100",
        ambientLight: "bg-blue-500/0",
      };
  }
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [stars, setStars] = useState<
    {
      radius: number;
      angle: number;
      size: string;
      opacity: number;
      duration: number;
    }[]
  >([]);

  const pathname = usePathname();

  useEffect(() => {
    const generateStars = [...Array(30)].map(() => ({
      radius: Math.random() * 600 + 150,
      angle: Math.random() * 360,
      size: `${Math.random() * 4 + 1}px`,
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 40 + 50,
    }));

    setStars(generateStars);
  }, []);

  return (
    <div className="relative main-layout">
      <div className="absolute top-0 left-0 w-full h-full z-50">
        {children}
        <ScrollToTop />

        {/* request full screen alert modal */}
        <FullscreenAlertModal />
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* Background Swirling Stars */}
        {pathname !== "/contact" && (
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            {stars.map((star, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full animate-pulse"
                style={{
                  width: star.size,
                  height: star.size,
                  opacity: star.opacity,
                }}
                initial={{ rotate: star.angle }}
                animate={{ rotate: star.angle + 360 }}
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
        )}

        {/* Black Hole Center (The Anchor) */}
        {pathname !== "/explore" && pathname !== "/contact" && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <div
              className={`relative w-[200px] h-[200px] lg:w-[200px] lg:h-[200px] ${blackHoleVariants(pathname).blackHoleBG} rounded-full shadow-[0_0_80px_20px_rgba(0,0,155,0.1)] flex items-center justify-center`}
            >
              {/* Event Horizon Layers */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className={`absolute w-[260px] h-[260px] lg:w-[400px] lg:h-[400px] rounded-full border-t-1 border-b-1 ${blackHoleVariants(pathname).eventHorizon1} blur-[3px]`}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className={`absolute w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] rounded-full border-l-[0.5px] border-r-[0.5px] ${blackHoleVariants(pathname).eventHorizon2} blur-[3px]`}
              />

              {/* Blue Glow Ambient */}
              <div
                className={`absolute w-full h-full ${blackHoleVariants(pathname).ambientLight} rounded-full blur-[100px]`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function FullscreenAlertModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const syncFullscreenState = () => {
      // Show modal whenever the browser is not in fullscreen mode
      setIsOpen(!document.fullscreenElement);
    };

    syncFullscreenState();
    document.addEventListener("fullscreenchange", syncFullscreenState);

    return () => {
      document.removeEventListener("fullscreenchange", syncFullscreenState);
    };
  }, []);

  const handleEnterFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      }
      setIsOpen(false);
    } catch (err) {
      console.error("Failed to enter fullscreen:", err);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-neutral-950/30 backdrop-blur-xs"
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-[300px] overflow-hidden rounded-3xl border border-white/15 bg-neutral-900/90 py-10 px-7 text-white shadow-2xl backdrop-blur-2xl"
          >
            {/* Background Ambient Glows */}
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="z-[9999] absolute top-5 right-5 cursor-pointer text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6 text-2xl" />
            </button>

            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              {/* Glowing Icon Badge */}
              <div
                onClick={handleEnterFullscreen}
                className="cursor-pointer relative flex items-center justify-center w-16 h-16 rounded-2xl hover:shadow-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-white/15 shadow-inner"
              >
                <Maximize2 className="w-8 h-8 text-cyan-400 animate-pulse" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
              </div>
              {/* Title & Description */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
                  <Sparkles className="w-3 h-3" />
                  Immersive Experience
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Fullscreen Mode
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed font-light max-w-sm">
                  (Recomended)
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
