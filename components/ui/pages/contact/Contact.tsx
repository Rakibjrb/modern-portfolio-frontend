"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, CheckCircle2, AlertCircle, X, Loader2 } from "lucide-react";
import { Button } from "@/components/shared/Buttons";
import { submitContactForm } from "@/app/actions/contact";
import { useState } from "react";
import { IContacts, ISocialLink } from "@/types/about.interface";

interface FormErrors {
    name?: string[];
    email?: string[];
    message?: string[];
}

export default function DeepSpaceContactPage({ contactData }: { contactData: { contacts: IContacts, socialLinks: ISocialLink[] } }) {
    const [loading, setLoading] = useState<boolean>(false);
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [generalError, setGeneralError] = useState<string | null>(null);

    const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        setGeneralError(null);

        const formElement = e.currentTarget;
        const formData = new FormData(formElement);
        const result = await submitContactForm(formData);

        if (!result.success) {
            if ("errors" in result && result.errors) {
                setErrors(result.errors);
            } else if ("error" in result && result.error) {
                setGeneralError(result.error);
            }
        } else {
            formElement.reset();
            setShowSuccessModal(true);
        }

        setLoading(false);
    };

    return (
        <main className="relative min-h-screen w-full text-white p-6 md:p-10 overflow-x-hidden overflow-y-auto font-sans">
            {/* Background Radar / Orbit Animations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
                {[...Array(7)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            scale: [0.1, 0.4, 0.7, 1, 1.4, 1.7],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            delay: i * 1.2,
                            ease: "easeInOut",
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{
                            width: `${150 + i * 50}px`,
                            height: `${150 + i * 50}px`,
                            borderWidth: "2px",
                            borderColor: "rgba(59, 130, 246, 0.5)",
                            boxShadow: "0 0 20px 5px rgba(59, 130, 246, 0.3)",
                        }}
                    />
                ))}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col">
                <div className="mb-10 space-y-3">
                    <Button href="/">
                        <div className="relative z-10">
                            SINGULARITY
                            <span className="ml-2 text-md group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
                                🚀
                            </span>
                        </div>
                    </Button>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center grow">
                    {/* Left Side: Communication Base Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                            Get in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 drop-shadow-md">
                                Touch
                            </span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-xl font-light leading-relaxed">
                            Have a project in mind, need web architecture advice, or want to automate your business workflow? Send a message to start the conversation.
                        </p>

                        {/* Direct Contact Info */}
                        <div className="pt-8 space-y-6 max-w-sm">
                            <a
                                className="flex items-center gap-5 text-slate-300 hover:text-white transition-colors cursor-pointer group p-3 bg-white/5 border border-white/5 rounded-2xl hover:border-white/10 hover:shadow-xl"
                            >
                                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-all text-blue-400 group-hover:bg-blue-900/10">
                                    <Mail size={24} strokeWidth={1} />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Contact Base Email</div>
                                    <div className="text-lg font-medium tracking-tight">{contactData.contacts.email}</div>
                                </div>
                            </a>

                            {/* Socials */}
                            <div className="flex gap-4">
                                {contactData.socialLinks.map((social: ISocialLink, idx) => (
                                    <motion.a
                                        target="_blank"
                                        key={idx}
                                        href={social.url}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        className={`rounded-lg bg-white border border-white/10 flex items-center justify-center transition-all hover:border-white/20`}
                                    >
                                        <img className="rounded-lg" src={social.iconUrl} width={40} height={40} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Transmission Terminal Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Terminal Corner Sci-Fi Accents */}
                        <div className="absolute top-[-20px] left-[-20px] w-20 h-20 border-l-4 border-t-4 border-blue-500 rounded-tl-xl pointer-events-none" />
                        <div className="absolute bottom-[-20px] right-[-20px] w-20 h-20 border-r-4 border-b-4 border-cyan-400 rounded-br-xl pointer-events-none" />

                        <div className="absolute inset-0 bg-blue-500/15 blur-[100px] rounded-full pointer-events-none" />

                        <form
                            onSubmit={handleContactSubmit}
                            className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-[0_0_60px_rgba(59,130,246,0.2)]"
                        >
                            <h2 className="text-center text-xs uppercase tracking-[0.5em] text-slate-300 mb-8">
                                Transmission Terminal [T-419]
                            </h2>

                            {generalError && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-center gap-3"
                                >
                                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                                    <span>{generalError}</span>
                                </motion.div>
                            )}

                            <div className="space-y-6">
                                {/* Name Field */}
                                <div className="space-y-2">
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        placeholder="Enter Identity (Name)..."
                                        className={`w-full bg-black/30 border ${errors.name && errors.name.length > 0
                                            ? "border-rose-500/80 focus:border-rose-400"
                                            : "border-white/10 focus:border-blue-500/70"
                                            } rounded-full px-8 py-5 outline-none focus:bg-black/50 transition-all text-white text-lg font-light placeholder:text-slate-400`}
                                    />
                                    {errors.name && errors.name.length > 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 text-rose-400 text-xs px-4"
                                        >
                                            <AlertCircle size={14} className="shrink-0" />
                                            <span>{errors.name[0]}</span>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div className="space-y-2">
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="Set Frequency (email@cosmos.com)..."
                                        className={`w-full bg-black/30 border ${errors.email && errors.email.length > 0
                                            ? "border-rose-500/80 focus:border-rose-400"
                                            : "border-white/10 focus:border-cyan-400/70"
                                            } rounded-full px-8 py-5 outline-none focus:bg-black/50 transition-all text-white text-lg font-light placeholder:text-slate-400`}
                                    />
                                    {errors.email && errors.email.length > 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 text-rose-400 text-xs px-4"
                                        >
                                            <AlertCircle size={14} className="shrink-0" />
                                            <span>{errors.email[0]}</span>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div className="space-y-2">
                                    <textarea
                                        required
                                        rows={5}
                                        name="message"
                                        placeholder="Type Transmission Message..."
                                        className={`w-full bg-black/30 border ${errors.message && errors.message.length > 0
                                            ? "border-rose-500/80 focus:border-rose-400"
                                            : "border-white/10 focus:border-blue-500/70"
                                            } rounded-3xl px-8 py-6 outline-none focus:bg-black/50 transition-all text-white text-lg font-light placeholder:text-slate-400 resize-none`}
                                    />
                                    {errors.message && errors.message.length > 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 text-rose-400 text-xs px-4"
                                        >
                                            <AlertCircle size={14} className="shrink-0" />
                                            <span>{errors.message[0]}</span>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    whileHover={{ scale: loading ? 1 : 1.02 }}
                                    whileTap={{ scale: loading ? 1 : 0.98 }}
                                    animate={{
                                        backgroundColor: loading
                                            ? "rgba(30, 41, 59, 0.8)"
                                            : ["rgba(37, 99, 235, 1)", "rgba(6, 182, 212, 1)", "rgba(37, 99, 235, 1)"],
                                        boxShadow: loading
                                            ? "none"
                                            : [
                                                "0 0 15px rgba(37, 99, 235, 0.4)",
                                                "0 0 25px rgba(6, 182, 212, 0.6)",
                                                "0 0 15px rgba(37, 99, 235, 0.4)",
                                            ],
                                    }}
                                    transition={{
                                        backgroundColor: { repeat: Infinity, duration: 4 },
                                        boxShadow: { repeat: Infinity, duration: 2 },
                                    }}
                                    className="cursor-pointer w-full py-5 rounded-full font-extrabold tracking-[0.3em] uppercase text-xs flex items-center justify-center gap-3 text-white disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>
                                            Transmitting... <Loader2 className="w-4 h-4 animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            Transmit Signal <Send size={18} />
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Confirmation Modal */}
            <AnimatePresence>
                {showSuccessModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowSuccessModal(false)}
                            className="absolute inset-0 bg-black/70 backdrop-blur-md"
                        />

                        {/* Modal Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-md w-full bg-gradient-to-b from-slate-900/90 to-black/95 border border-cyan-500/40 p-8 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.35)] text-center overflow-hidden z-10"
                        >
                            {/* Sci-Fi Decorative Corner Accents */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-cyan-400 pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-blue-500 pointer-events-none" />

                            {/* Close Button */}
                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Success Icon */}
                            <div className="mx-auto w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                                <CheckCircle2 size={42} />
                            </div>

                            <h3 className="text-2xl font-black tracking-tight text-white mb-2">
                                Transmission Received!
                            </h3>

                            <p className="text-slate-300 text-sm leading-relaxed mb-8">
                                Your signal has traversed the deep space network and been logged successfully. We will calibrate our response and get back to you shortly.
                            </p>

                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="cursor-pointer w-full py-4 rounded-full font-bold tracking-[0.2em] uppercase text-xs bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
                            >
                                Acknowledge & Close
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}