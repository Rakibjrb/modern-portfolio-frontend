"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ChangePageButton from "@/components/shared/ChangePageButton";

const planets = [
  {
    name: "Skills",
    color: "bg-yellow-500/80",
    size: "w-20 h-20",
    radius: 0,
    duration: 0,
    path: "/skills",
    icon: "☀️",
  },
  {
    name: "Projects",
    color: "bg-red-500",
    size: "w-5 h-5",
    radius: 80,
    duration: 20,
    path: "/projects",
    icon: "🔴",
  },
  {
    name: "About Me",
    color: "bg-blue-400",
    size: "w-5 h-5",
    radius: 120,
    duration: 15,
    path: "/about",
    icon: "🌍",
  },
  {
    name: "Experience",
    color: "bg-orange-300/0",
    size: "w-5 h-5",
    radius: 180,
    duration: 30,
    path: "/experience",
    icon: "🪐",
  },
  {
    name: "Contact",
    color: "bg-purple-400",
    size: "w-5 h-5",
    radius: 240,
    duration: 40,
    path: "/contact",
    icon: "🌑",
  },
];

export default function ExploreSolarSystem() {
  const [asteroids, setAsteroids] = useState<
    {
      id: number;
      startTop: string;
      startLeft: string;
      size: string;
      duration: number;
      xTarget: number;
      yTarget: number;
      emoji: string;
    }[]
  >([]);

  useEffect(() => {
    const generatedAsteroids = [...Array(10)].map((_, i) => {
      const startTop = `${Math.random() * 40 + 80}%`;
      const startLeft = `${Math.random() * 60 - 20}%`;

      const xTarget = Math.random() * 500 + 900;
      const yTarget = -(Math.random() * 500 + 900);

      return {
        id: i,
        startTop,
        startLeft,
        size: `${Math.random() * 10 + 2}px`,
        duration: Math.random() * 20 + 20,
        xTarget,
        yTarget,
        emoji: "☄️",
      };
    });

    setAsteroids(generatedAsteroids);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-transparent p-6">
      <ChangePageButton text="Start Mission" destination="/about" />

      <main className="w-full h-[calc(100vh-100px)] flex items-center justify-center overflow-hidden font-sans">
        {/* flying Asteroids */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          {asteroids.map((ast) => (
            <motion.div
              key={ast.id}
              className="absolute flex items-center justify-center opacity-40 shadow-[0_0_15px_white]"
              style={{
                top: ast.startTop,
                left: ast.startLeft,
                width: ast.size,
                height: ast.size,
                fontSize: `${parseFloat(ast.size) * 4}px`,
              }}
              animate={{
                x: ast.xTarget,
                y: ast.yTarget,
              }}
              transition={{
                duration: ast.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span className="transform rotate-180">{ast.emoji}</span>
            </motion.div>
          ))}
        </div>

        {/* Solar System Center */}
        <div className="relative flex items-center justify-center">
          {planets.map((planet, index) => {
            if (index === 0) {
              return (
                <Link key={index} href={planet.path} className="z-50">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`${planet.size} ${planet.color} rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(234,179,8,0.4)] cursor-pointer relative group`}
                  >
                    <span className="text-5xl">{planet.icon}</span>
                    {/* Label */}
                    <span className="text-center absolute -bottom-8 text-white text-[10px] font-bold tracking-widest uppercase opacity-50 group-hover:opacity-100 bg-black/50 px-2 py-0.5 rounded transition-opacity whitespace-nowrap">
                      {planet.name}
                    </span>
                  </motion.div>
                </Link>
              );
            }

            return (
              <React.Fragment key={index}>
                {/* Orbit Line */}
                <div
                  className="absolute border border-slate-800 rounded-full z-0 pointer-events-none"
                  style={{
                    width: planet.radius * 2,
                    height: planet.radius * 2,
                  }}
                />

                {/* Rotating Container */}
                <motion.div
                  className="absolute flex items-center justify-center z-10 pointer-events-none"
                  style={{
                    width: planet.radius * 2,
                    height: planet.radius * 2,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: planet.duration,
                    ease: "linear",
                  }}
                >
                  {/* Actual Planet Container */}
                  <Link
                    href={planet.path}
                    className="pointer-events-auto absolute"
                    style={{
                      left: "100%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.4 }}
                      animate={{ rotate: -360 }}
                      transition={{
                        rotate: {
                          repeat: Infinity,
                          duration: planet.duration,
                          ease: "linear",
                        },
                        scale: { duration: 0.2 },
                      }}
                      className={`flex items-center justify-center ${planet.size} ${planet.color} rounded-full shadow-lg cursor-pointer group`}
                    >
                      <motion.span
                        animate={{ rotate: -360 }}
                        transition={{
                          rotate: {
                            repeat: Infinity,
                            duration: planet.duration,
                            ease: "linear",
                          },
                        }}
                        className={`${planet.name === "Experience" ? "text-6xl" : "text-3xl"}`}
                      >
                        {planet.icon}
                      </motion.span>

                      {/* Label */}
                      <span className="text-center absolute -bottom-8 text-white text-[10px] font-bold tracking-widest uppercase opacity-50 group-hover:opacity-100 px-2 py-0.5 rounded transition-opacity whitespace-nowrap">
                        {planet.name}
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>

        <div className="absolute bottom-8 text-slate-200 text-[10px] tracking-[0.3em] uppercase pointer-events-none">
          Explore the solar system
        </div>
      </main>
    </div>
  );
}
