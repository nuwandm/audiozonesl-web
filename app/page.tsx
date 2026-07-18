"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Mail } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";

const ParticleField = dynamic(() => import("@/components/ParticleField"), { ssr: false });
const AudioVisualizer = dynamic(() => import("@/components/AudioVisualizer"), { ssr: false });

function WhatsAppIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    href: "https://web.facebook.com/audiozonesl?mibextid=ZbWKwL",
    label: "Facebook",
    icon: ({ size }: { size: number }) => <Facebook size={size} strokeWidth={1.5} />,
    color: "hover:text-blue-400 hover:border-blue-400/30",
    glow: "hover:shadow-[0_0_18px_rgba(96,165,250,0.4)]",
  },
  {
    href: "https://chat.whatsapp.com/JWTj5x7bOlfEEmaVfY6MJd",
    label: "WhatsApp Community",
    icon: ({ size }: { size: number }) => <WhatsAppIcon size={size} />,
    color: "hover:text-green-400 hover:border-green-400/30",
    glow: "hover:shadow-[0_0_18px_rgba(74,222,128,0.4)]",
  },
  {
    href: "mailto:teamaudiozone@gmail.com",
    label: "Email",
    icon: ({ size }: { size: number }) => <Mail size={size} strokeWidth={1.5} />,
    color: "hover:text-cyan-300 hover:border-cyan-300/30",
    glow: "hover:shadow-[0_0_18px_rgba(103,232,249,0.4)]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(0,100,160,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0,184,148,0.12) 0%, transparent 60%), #060d1a",
        }}
      />

      <ParticleField />

      {/* Scan line overlay */}
      <div className="scan-effect fixed inset-0 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full px-5 sm:px-8 py-6 sm:py-16 md:py-20 gap-6 sm:gap-10 md:gap-14 max-w-screen-md mx-auto">

        {/* Logo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex flex-col items-center gap-2 sm:gap-3"
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)" }}
            />
            <Image
              src="/templogo.png"
              alt="AudioZoneSL"
              width={240}
              height={240}
              className="relative drop-shadow-[0_0_30px_rgba(0,212,255,0.4)] w-20 h-20 sm:w-36 sm:h-36 md:w-56 md:h-56"
              priority
            />
          </div>

          <div className="text-center px-2">
            <h1
              className="font-display text-2xl sm:text-3xl md:text-5xl font-black tracking-widest text-gradient-shimmer uppercase"
              style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: "0.12em" }}
            >
              AudioZoneSL
            </h1>
            <p className="mt-1 text-[10px] sm:text-xs md:text-sm tracking-[0.3em] uppercase text-cyan-400/60 font-medium">
              Where The Community Begins
            </p>
          </div>
        </motion.div>

        {/* Audio Visualizer */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="w-full max-w-xs sm:max-w-md md:max-w-xl h-12 sm:h-16 md:h-20"
        >
          <AudioVisualizer barCount={36} />
        </motion.div>

        {/* Tagline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="text-center max-w-xs sm:max-w-sm md:max-w-lg px-2"
        >
          <p className="text-xs sm:text-sm md:text-base text-white/50 leading-relaxed">
            Professional mixing, mastering, sound design, and music production.
            Connect with audio engineers, producers, and artists across Sri Lanka.
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="flex flex-col items-center gap-4 sm:gap-6 w-full"
        >
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-cyan-400/50 font-medium">
            Launching In
          </p>
          <CountdownTimer />
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="flex flex-col items-center gap-3 sm:gap-4"
        >
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/30 font-medium">
            Connect With Us
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon, color, glow }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`glass rounded-xl p-3 sm:p-3.5 text-white/40 transition-all duration-300 ${color} ${glow} hover:-translate-y-1 active:scale-95`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4 sm:gap-5 w-full max-w-xs sm:w-auto sm:max-w-none">
            {/* WhatsApp Inquiries */}
            <div className="flex flex-col items-center gap-1.5 w-full sm:w-auto">
              <span className="text-[10px] tracking-[0.2em] uppercase text-cyan-400/70 font-semibold">Inquiries</span>
            <a
              href="https://wa.me/94710958090"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 px-5 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, rgba(37,211,102,0.15) 0%, rgba(37,211,102,0.05) 100%)",
                border: "1px solid rgba(37,211,102,0.35)",
                boxShadow: "0 0 20px rgba(37,211,102,0.15)",
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" style={{ background: "linear-gradient(135deg, rgba(37,211,102,0.25) 0%, rgba(37,211,102,0.1) 100%)", boxShadow: "0 0 30px rgba(37,211,102,0.4)" }} />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="relative flex items-center gap-2 text-green-400 group-hover:text-white transition-colors duration-300">
                <WhatsAppIcon size={16} />
                +94 71 095 8090
              </span>
            </a>
            </div>

            {/* Join WhatsApp Group */}
            <div className="flex flex-col items-center gap-1.5 w-full sm:w-auto">
              <span className="text-[10px] tracking-[0.2em] uppercase text-green-400/70 font-semibold">Community</span>
              <a
                href="https://chat.whatsapp.com/JWTj5x7bOlfEEmaVfY6MJd"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
                style={{
                  background: "linear-gradient(135deg, rgba(37,211,102,0.9) 0%, rgba(18,140,60,0.9) 100%)",
                  boxShadow: "0 0 25px rgba(37,211,102,0.35)",
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" style={{ background: "linear-gradient(135deg, rgba(37,211,102,1) 0%, rgba(18,140,60,1) 100%)", boxShadow: "0 0 40px rgba(37,211,102,0.6)" }} />
                <span className="relative flex items-center gap-2 text-white">
                  <WhatsAppIcon size={16} />
                  Join Our Group
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
          className="text-[10px] sm:text-xs text-white/20 text-center pb-2"
        >
          &copy; {new Date().getFullYear()} AudioZoneSL. All rights reserved.
        </motion.p>
      </div>
    </main>
  );
}
