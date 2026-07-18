"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LAUNCH_DATE = new Date("2026-08-30T11:00:00+05:30");

function calculateTimeLeft(): TimeLeft {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

interface UnitBlockProps {
  value: number;
  label: string;
}

function UnitBlock({ value, label }: UnitBlockProps) {
  const [prev, setPrev] = useState(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlip(true);
      const t = setTimeout(() => {
        setPrev(value);
        setFlip(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative glass-strong rounded-2xl w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center overflow-hidden"
        style={{
          boxShadow: "0 0 30px rgba(0,212,255,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: "linear-gradient(180deg, rgba(0,212,255,0.3) 0%, transparent 100%)",
          }}
        />
        <span
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient transition-all duration-300"
          style={{
            transform: flip ? "translateY(-8px)" : "translateY(0)",
            opacity: flip ? 0.3 : 1,
          }}
        >
          {pad(value)}
        </span>
        <div
          className="absolute left-0 right-0"
          style={{
            top: "50%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)",
          }}
        />
      </div>
      <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-cyan-400/70">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    const id = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 justify-center opacity-0">
        <UnitBlock value={0} label="Days" />
        <Separator />
        <UnitBlock value={0} label="Hours" />
        <Separator />
        <UnitBlock value={0} label="Minutes" />
        <Separator />
        <UnitBlock value={0} label="Seconds" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 sm:gap-6 md:gap-8 justify-center">
      <UnitBlock value={timeLeft.days} label="Days" />
      <Separator />
      <UnitBlock value={timeLeft.hours} label="Hours" />
      <Separator />
      <UnitBlock value={timeLeft.minutes} label="Minutes" />
      <Separator />
      <UnitBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

function Separator() {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <div
        className="w-1.5 h-1.5 rounded-full bg-cyan-400"
        style={{ boxShadow: "0 0 8px #00d4ff" }}
      />
      <div
        className="w-1.5 h-1.5 rounded-full bg-cyan-400"
        style={{ boxShadow: "0 0 8px #00d4ff" }}
      />
    </div>
  );
}
