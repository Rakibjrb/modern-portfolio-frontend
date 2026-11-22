"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Calendar,
  Layers,
  Sparkles,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";
import { IProject } from "@/types/projects.interface";
import MarkdownDescription from "./MarkdownDescription";

const categoryStyles: Record<
  string,
  { color: string; icon: string; label: string }
> = {
  mern: {
    color: "from-green-400 to-cyan-500",
    icon: "🌍",
    label: "MERN Stack",
  },
  frontend: {
    color: "from-purple-500 to-indigo-600",
    icon: "☄️",
    label: "Frontend",
  },
  unique: {
    color: "from-blue-500 to-purple-600",
    icon: "🛰️",
    label: "Featured",
  },
  pending: {
    color: "from-amber-500 to-orange-600",
    icon: "🚀",
    label: "In Progress",
  },
};

const DetailsPageComponent = ({ project }: { project: IProject }) => {
  const categoryKey = (project.category || "").toLowerCase();
  const categoryInfo = categoryStyles[categoryKey] || {
    color: "from-blue-500 to-purple-600",
    icon: "🪐",
    label: project.category || "Project",
  };

  // Combine thumbnail and additional images, removing duplicates
  const allImages = Array.from(
    new Set([project.thumbnail, ...(project.images || [])].filter(Boolean)),
  );

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentImage = allImages[activeImageIdx] || project.thumbnail;

  const nextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setActiveImageIdx(
      (prev) => (prev - 1 + allImages.length) % allImages.length,
    );
  };

  const formattedDate = project.createdAt
    ? new Date(project.createdAt).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <div className="space-y-12">
      {/* Back button breadcrumb link */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>
      </motion.div>

      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-md border border-white/15 text-white`}
          >
            <span>{categoryInfo.icon}</span>
            <span>{categoryInfo.label}</span>
          </span>

          {project.featured && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/15 border border-amber-500/30 text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              Featured
            </span>
          )}

          {formattedDate && (
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              {formattedDate}
            </span>
          )}
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          {project.title}
        </h1>

        {project.shortDescription && (
          <p className="text-lg sm:text-xl text-slate-300 font-light max-w-4xl leading-relaxed">
            {project.shortDescription}
          </p>
        )}

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.url?.live && (
            <a
              href={project.url.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-white text-neutral-950 hover:bg-slate-200 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/20 active:scale-95"
            >
              <span>Live Preview</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {(project.url.githubClient || project.url.githubServer)?.includes(
            "private-repo",
          ) ? (
            <div className="text-xs font-semibold text-gray-300">
              Project Repository is Private
            </div>
          ) : (
            <>
              {project.url.githubClient === project.url.githubServer ? (
                <a
                  href={project.url.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-300 active:scale-95"
                >
                  <Github className="w-4 h-4" />
                  <span>Client Code</span>
                </a>
              ) : (
                <>
                  <a
                    href={project.url.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-300 active:scale-95"
                  >
                    <Github className="w-4 h-4" />
                    <span>Client Code</span>
                  </a>
                  <a
                    href={project.url.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-300 active:scale-95"
                  >
                    <Github className="w-4 h-4" />
                    <span>Server Code</span>
                  </a>
                </>
              )}
            </>
          )}
        </div>
      </motion.div>

      {/* Main Image Showcase */}
      {currentImage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="relative group rounded-3xl overflow-hidden border border-white/15 bg-neutral-950/60 shadow-2xl backdrop-blur-md">
            {/* Aspect container */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900/50">
              <Image
                src={currentImage}
                alt={`${project.title} screenshot`}
                fill
                priority
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Expand / Lightbox button */}
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                aria-label="View full size image"
                className="cursor-pointer absolute top-4 right-4 p-2.5 rounded-full bg-neutral-950/70 hover:bg-neutral-900 border border-white/20 text-white backdrop-blur-md transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-105"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Slider Arrows (if multiple images) */}
              {allImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-neutral-950/70 hover:bg-neutral-900 border border-white/20 text-white backdrop-blur-md transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next image"
                    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-neutral-950/70 hover:bg-neutral-900 border border-white/20 text-white backdrop-blur-md transition-all duration-200 opacity-80 hover:opacity-100 hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Thumbnails row */}
          {allImages.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    activeImageIdx === idx
                      ? "border-blue-500 scale-105 shadow-md shadow-blue-500/20"
                      : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Preview ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* Grid: Overview/Details & Tech Stack Side Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content (2 cols) */}
        <div className="lg:col-span-2 space-y-8">
          {/* About Project */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-4"
          >
            <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-blue-400">#</span> About The Project
            </h2>
            <MarkdownDescription
              content={project.fullDescription || project.shortDescription}
            />
          </motion.section>
        </div>

        {/* Sidebar Info (1 col) */}
        <div className="space-y-6">
          {/* Technologies Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-4"
          >
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              Technologies Used
            </h3>

            {project.technologies && project.technologies.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-slate-200 text-xs font-medium tracking-wide uppercase hover:bg-white/15 hover:border-blue-400/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500">Not specified</p>
            )}
          </motion.div>

          {/* Quick Info & Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-4 text-sm"
          >
            <h3 className="text-lg font-semibold text-white">
              Project Details
            </h3>

            <div className="divide-y divide-white/10 space-y-3">
              <div className="flex justify-between items-center pt-2">
                <span className="text-slate-400">Category</span>
                <span className="text-white font-medium capitalize">
                  {project.category || "General"}
                </span>
              </div>

              {formattedDate && (
                <div className="flex justify-between items-center pt-3">
                  <span className="text-slate-400">Date</span>
                  <span className="text-white font-medium">
                    {formattedDate}
                  </span>
                </div>
              )}

              {/* <div className="flex justify-between items-center pt-3">
                <span className="text-slate-400">Status</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Completed
                </span>
              </div> */}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              {project.url?.live && project.url.live !== "#" && (
                <a
                  href={project.url.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-blue-600/30 active:scale-98"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {/* {project.url?.githubClient &&
                project.url.githubClient !== "#" && (
                  <a
                    href={project.url.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium text-sm transition-all duration-200 active:scale-98"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repository</span>
                  </a>
                )} */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="cursor-pointer absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              aria-label="Close full view"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="relative max-w-6xl w-full max-h-[85vh] h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImage}
                alt={`${project.title} full view`}
                fill
                className="object-contain"
                sizes="(max-width: 1400px) 100vw, 1400px"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DetailsPageComponent;
