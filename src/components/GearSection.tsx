"use client";

import { useState } from "react";

type GearCategory = "camera" | "lenses" | "audio" | "lighting" | "support";

interface GearItem {
  name: string;
  category: GearCategory;
  icon: "camera" | "lens-wide" | "lens-tele" | "case" | "mic-wireless" | "mic-xlr" | "tripod" | "light-small" | "light-rgb";
  specs: { label: string; value: string }[];
  highlight?: string;
}

const gearData: GearItem[] = [
  {
    name: "Nikon D5600",
    category: "camera",
    icon: "camera",
    highlight: "24.2MP DX-Format CMOS",
    specs: [
      { label: "SENSOR", value: "24.2 MP" },
      { label: "ISO", value: "100-25600" },
      { label: "AF POINTS", value: "39" },
      { label: "BURST", value: "5 fps" },
      { label: "VIDEO", value: "1080/60p" },
      { label: "PROCESSOR", value: "EXPEED 4" },
    ],
  },
  {
    name: "AF-P DX 18-55mm VR",
    category: "lenses",
    icon: "lens-wide",
    highlight: "Versatile Kit Lens",
    specs: [
      { label: "APERTURE", value: "f/3.5-5.6" },
      { label: "FOCAL", value: "27-82.5mm eq" },
      { label: "VR", value: "4 stops" },
      { label: "MIN FOCUS", value: "0.25m" },
      { label: "ELEMENTS", value: "12 in 9" },
      { label: "WEIGHT", value: "205g" },
    ],
  },
  {
    name: "AF-P DX 70-300mm VR",
    category: "lenses",
    icon: "lens-tele",
    highlight: "Telephoto Reach",
    specs: [
      { label: "APERTURE", value: "f/4.5-6.3" },
      { label: "FOCAL", value: "105-450mm eq" },
      { label: "VR", value: "4 stops" },
      { label: "BLADES", value: "7 rounded" },
      { label: "ELEMENTS", value: "14 in 10" },
      { label: "WEIGHT", value: "415g" },
    ],
  },
  {
    name: "NANUK 935",
    category: "support",
    icon: "case",
    highlight: "IP67 Waterproof Case",
    specs: [
      { label: "EXTERIOR", value: '22" x 14" x 9"' },
      { label: "INTERIOR", value: '20.5" x 11.3"' },
      { label: "RATING", value: "IP67 / MIL-SPEC" },
      { label: "WEIGHT", value: "5 kg" },
      { label: "WHEELS", value: "Yes" },
      { label: "WARRANTY", value: "Lifetime" },
    ],
  },
  {
    name: "7RYMS iRay DW20",
    category: "audio",
    icon: "mic-wireless",
    highlight: "Dual Wireless System",
    specs: [
      { label: "RANGE", value: "100m / 328ft" },
      { label: "SAMPLE", value: "48kHz/16bit" },
      { label: "LATENCY", value: "<20ms" },
      { label: "BATTERY", value: "6 hours" },
      { label: "FREQ", value: "2.4GHz" },
      { label: "CHANNELS", value: "Dual TX" },
    ],
  },
  {
    name: "Maono XLR Mics",
    category: "audio",
    icon: "mic-xlr",
    highlight: "Studio Wired Audio",
    specs: [
      { label: "TYPE", value: "Dynamic XLR" },
      { label: "PATTERN", value: "Cardioid" },
      { label: "FREQ", value: "40Hz-16kHz" },
      { label: "SPL MAX", value: "130 dB" },
      { label: "BIT DEPTH", value: "24-bit" },
      { label: "SAMPLE", value: "48kHz" },
    ],
  },
  {
    name: 'K&F Concept 86.6" Tripod',
    category: "support",
    icon: "tripod",
    highlight: "Light Stand",
    specs: [
      { label: "MAX HEIGHT", value: '86.6" / 220cm' },
      { label: "MIN HEIGHT", value: '23.6" / 63cm' },
      { label: "LOAD", value: "8.8 lbs" },
      { label: "WEIGHT", value: "1.95 lbs" },
      { label: "MATERIAL", value: "Aluminum" },
      { label: "THREAD", value: '1/4"' },
    ],
  },
  {
    name: "ULANZI LED Light",
    category: "lighting",
    icon: "light-small",
    highlight: "IP68 Waterproof",
    specs: [
      { label: "OUTPUT", value: "1000 LUX @0.5m" },
      { label: "TEMP", value: "5500K" },
      { label: "CRI", value: "95+" },
      { label: "BATTERY", value: "800mAh" },
      { label: "DEPTH", value: "32ft / 10m" },
      { label: "FILTERS", value: "8 gels" },
    ],
  },
  {
    name: "Pixel G1s RGB",
    category: "lighting",
    icon: "light-rgb",
    highlight: "Full RGB Control",
    specs: [
      { label: "OUTPUT", value: "1500 LUX @0.5m" },
      { label: "TEMP", value: "2500-8500K" },
      { label: "CRI", value: "97+" },
      { label: "BATTERY", value: "150 min" },
      { label: "COLORS", value: "36,000" },
      { label: "EFFECTS", value: "10 modes" },
    ],
  },
];

function GearIcon({ type, className = "" }: { type: GearItem["icon"]; className?: string }) {
  const baseClass = `${className} transition-all duration-500`;

  switch (type) {
    case "camera":
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Camera body */}
          <rect x="15" y="35" width="90" height="60" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* Viewfinder hump */}
          <path d="M35 35 L35 25 L55 25 L55 35" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* Lens mount */}
          <circle cx="60" cy="65" r="22" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="60" cy="65" r="16" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="60" cy="65" r="8" stroke="var(--orange)" strokeWidth="2" fill="none" />
          {/* Mode dial */}
          <rect x="75" y="28" width="20" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          {/* Grip texture */}
          <line x1="20" y1="45" x2="20" y2="85" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <line x1="24" y1="45" x2="24" y2="85" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <line x1="28" y1="45" x2="28" y2="85" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case "lens-wide":
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Lens barrel */}
          <ellipse cx="60" cy="60" rx="35" ry="35" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="60" cy="60" rx="28" ry="28" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <ellipse cx="60" cy="60" rx="20" ry="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <ellipse cx="60" cy="60" rx="12" ry="12" stroke="var(--orange)" strokeWidth="2" fill="none" />
          <circle cx="60" cy="60" r="4" fill="var(--orange)" opacity="0.6" />
          {/* Focus ring marks */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1={60 + 32 * Math.cos((angle * Math.PI) / 180)}
              y1={60 + 32 * Math.sin((angle * Math.PI) / 180)}
              x2={60 + 38 * Math.cos((angle * Math.PI) / 180)}
              y2={60 + 38 * Math.sin((angle * Math.PI) / 180)}
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.5"
            />
          ))}
          {/* 18-55 label */}
          <text x="60" y="105" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="monospace" opacity="0.6">18-55mm</text>
        </svg>
      );
    case "lens-tele":
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Extended barrel */}
          <rect x="25" y="40" width="70" height="40" rx="20" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="90" cy="60" rx="18" ry="18" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="90" cy="60" rx="12" ry="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <ellipse cx="90" cy="60" rx="6" ry="6" stroke="var(--orange)" strokeWidth="2" fill="none" />
          {/* Mount end */}
          <ellipse cx="30" cy="60" rx="15" ry="18" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* Zoom ring */}
          <rect x="45" y="38" width="25" height="44" rx="4" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
          {/* 70-300 label */}
          <text x="60" y="105" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="monospace" opacity="0.6">70-300mm</text>
        </svg>
      );
    case "case":
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Case body */}
          <rect x="15" y="30" width="90" height="55" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* Lid line */}
          <line x1="15" y1="45" x2="105" y2="45" stroke="currentColor" strokeWidth="1.5" />
          {/* Latches */}
          <rect x="30" y="42" width="12" height="6" rx="1" stroke="var(--orange)" strokeWidth="1.5" fill="none" />
          <rect x="78" y="42" width="12" height="6" rx="1" stroke="var(--orange)" strokeWidth="1.5" fill="none" />
          {/* Handle */}
          <path d="M45 30 L45 22 L75 22 L75 30" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* Wheels */}
          <circle cx="30" cy="90" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="90" cy="90" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          {/* Pressure valve */}
          <circle cx="95" cy="55" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      );
    case "mic-wireless":
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Transmitter 1 */}
          <rect x="20" y="35" width="25" height="50" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="32" cy="50" r="6" stroke="var(--orange)" strokeWidth="1.5" fill="none" />
          <rect x="26" y="65" width="12" height="3" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="26" y="72" width="12" height="3" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
          {/* Transmitter 2 */}
          <rect x="75" y="35" width="25" height="50" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="87" cy="50" r="6" stroke="var(--orange)" strokeWidth="1.5" fill="none" />
          <rect x="81" y="65" width="12" height="3" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="81" y="72" width="12" height="3" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
          {/* Wireless signals */}
          <path d="M50 45 Q60 40 70 45" stroke="var(--orange)" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M52 52 Q60 48 68 52" stroke="var(--orange)" strokeWidth="1.5" fill="none" opacity="0.4" />
          <path d="M54 59 Q60 56 66 59" stroke="var(--orange)" strokeWidth="1.5" fill="none" opacity="0.2" />
          {/* 2.4GHz label */}
          <text x="60" y="105" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="monospace" opacity="0.6">2.4GHz</text>
        </svg>
      );
    case "mic-xlr":
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Microphone body */}
          <rect x="50" y="20" width="20" height="60" rx="10" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* Grille */}
          <ellipse cx="60" cy="35" rx="8" ry="12" stroke="var(--orange)" strokeWidth="1.5" fill="none" />
          <line x1="52" y1="30" x2="68" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="52" y1="35" x2="68" y2="35" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="52" y1="40" x2="68" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          {/* XLR connector */}
          <rect x="52" y="80" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="56" cy="90" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="64" cy="90" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="60" cy="95" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
          {/* Stand mount */}
          <path d="M45 70 L60 75 L75 70" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "tripod":
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Head */}
          <rect x="50" y="20" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="60" cy="27" r="4" stroke="var(--orange)" strokeWidth="1.5" fill="none" />
          {/* Center column */}
          <rect x="57" y="35" width="6" height="30" stroke="currentColor" strokeWidth="1.5" fill="none" />
          {/* Legs */}
          <line x1="60" y1="65" x2="25" y2="100" stroke="currentColor" strokeWidth="2" />
          <line x1="60" y1="65" x2="60" y2="100" stroke="currentColor" strokeWidth="2" />
          <line x1="60" y1="65" x2="95" y2="100" stroke="currentColor" strokeWidth="2" />
          {/* Leg locks */}
          <rect x="35" y="75" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="56" y="78" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="77" y="75" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
          {/* Feet */}
          <circle cx="25" cy="100" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="60" cy="100" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="95" cy="100" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "light-small":
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Light body */}
          <rect x="35" y="40" width="50" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* LED panel */}
          <rect x="40" y="45" width="40" height="25" rx="2" stroke="var(--orange)" strokeWidth="1.5" fill="none" />
          {/* LED dots */}
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2, 3, 4].map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={47 + col * 8}
                cy={51 + row * 6}
                r="1.5"
                fill="var(--orange)"
                opacity={0.3 + row * 0.15}
              />
            ))
          )}
          {/* Controls */}
          <circle cx="50" cy="75" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="70" cy="75" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
          {/* Cold shoe mount */}
          <rect x="52" y="35" width="16" height="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          {/* IP68 badge */}
          <text x="60" y="105" textAnchor="middle" fill="var(--orange)" fontSize="10" fontFamily="monospace" opacity="0.8">IP68</text>
        </svg>
      );
    case "light-rgb":
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Light body */}
          <rect x="30" y="35" width="60" height="50" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* RGB LED panel with gradient effect */}
          <defs>
            <linearGradient id="rgbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b00" />
              <stop offset="33%" stopColor="#ff0066" />
              <stop offset="66%" stopColor="#6600ff" />
              <stop offset="100%" stopColor="#00ffcc" />
            </linearGradient>
          </defs>
          <rect x="35" y="40" width="50" height="30" rx="2" stroke="url(#rgbGradient)" strokeWidth="2" fill="none" />
          {/* RGB glow effect */}
          <rect x="38" y="43" width="44" height="24" rx="1" fill="var(--orange)" opacity="0.15" />
          {/* Control dial */}
          <circle cx="60" cy="78" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="60" y1="73" x2="60" y2="76" stroke="var(--orange)" strokeWidth="1.5" />
          {/* Display */}
          <rect x="40" y="73" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="68" y="73" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
          {/* Cold shoe mount */}
          <rect x="52" y="30" width="16" height="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          {/* RGB label */}
          <text x="60" y="105" textAnchor="middle" fill="var(--orange)" fontSize="10" fontFamily="monospace" opacity="0.8">RGB</text>
        </svg>
      );
    default:
      return null;
  }
}

const categories: { id: GearCategory; label: string; icon: React.ReactNode }[] = [
  {
    id: "camera",
    label: "Camera",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "lenses",
    label: "Lenses",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    id: "audio",
    label: "Audio",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    id: "lighting",
    label: "Lighting",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: "support",
    label: "Support",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

function ViewfinderCorners() {
  return (
    <>
      {/* Top-left corner bracket */}
      <div className="absolute top-3 left-3 w-8 h-8 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-orange/70" />
        <div className="absolute top-0 left-0 h-full w-[2px] bg-orange/70" />
      </div>
      {/* Top-right corner bracket */}
      <div className="absolute top-3 right-3 w-8 h-8 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-[2px] bg-orange/70" />
        <div className="absolute top-0 right-0 h-full w-[2px] bg-orange/70" />
      </div>
      {/* Bottom-left corner bracket */}
      <div className="absolute bottom-3 left-3 w-8 h-8 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange/70" />
        <div className="absolute bottom-0 left-0 h-full w-[2px] bg-orange/70" />
      </div>
      {/* Bottom-right corner bracket */}
      <div className="absolute bottom-3 right-3 w-8 h-8 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-orange/70" />
        <div className="absolute bottom-0 right-0 h-full w-[2px] bg-orange/70" />
      </div>
    </>
  );
}

function GearCard({ item, index }: { item: GearItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-surface border border-border hover:border-orange/50 transition-all duration-500 overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Viewfinder overlay frame */}
      <ViewfinderCorners />

      {/* Icon container with viewfinder effect */}
      <div className="relative aspect-square bg-gradient-to-br from-surface-elevated to-surface overflow-hidden">
        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />


        {/* Gear icon */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <GearIcon
            type={item.icon}
            className={`w-full h-full text-muted/70 group-hover:text-foreground transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
          />
        </div>

        {/* Exposure info overlay - top */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-3 text-[10px] font-mono text-muted/50 pointer-events-none">
          <span className="tracking-wider">AF</span>
          <span className="w-1 h-1 bg-orange rounded-full animate-pulse" />
          <span className="tracking-wider">●REC</span>
        </div>

        {/* F-stop / focal length readout - bottom */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-mono text-orange/70 tracking-widest pointer-events-none">
          {item.category === "lenses" && item.specs[0]?.value}
          {item.category === "camera" && item.specs[0]?.value}
          {item.category === "lighting" && item.specs[1]?.value}
          {item.category === "audio" && item.specs[4]?.value}
          {item.category === "support" && item.specs[0]?.value}
        </div>

        {/* Grid overlay on hover */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            opacity: isHovered ? 0.1 : 0,
            backgroundImage: `
              linear-gradient(to right, var(--orange) 1px, transparent 1px),
              linear-gradient(to bottom, var(--orange) 1px, transparent 1px)
            `,
            backgroundSize: "33.33% 33.33%",
          }}
        />
      </div>

      {/* Info section */}
      <div className="p-5 relative">
        {/* Highlight badge */}
        {item.highlight && (
          <div className="absolute -top-3 left-5 px-2 py-0.5 bg-orange text-[10px] font-mono uppercase tracking-wider text-white">
            {item.highlight}
          </div>
        )}

        <h3 className="text-lg font-display text-foreground mb-4 group-hover:text-orange transition-colors duration-300 mt-1">
          {item.name}
        </h3>

        {/* Specs grid with viewfinder styling */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {item.specs.map((spec, i) => (
            <div key={spec.label} className="flex flex-col">
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted/60">
                {spec.label}
              </span>
              <span
                className="text-xs font-mono text-foreground/90 transition-colors duration-300"
                style={{
                  transitionDelay: isHovered ? `${i * 50}ms` : "0ms",
                  color: isHovered ? "var(--orange)" : undefined
                }}
              >
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom edge glow on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange to-transparent transition-opacity duration-500"
        style={{ opacity: isHovered ? 1 : 0 }}
      />
    </div>
  );
}

export function GearSection() {
  const [activeCategory, setActiveCategory] = useState<GearCategory | "all">("all");

  const filteredGear = activeCategory === "all"
    ? gearData
    : gearData.filter((item) => item.category === activeCategory);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle viewfinder vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.3) 100%)",
        }}
      />

      {/* Corner frame decorations for the whole section */}
      <div className="absolute top-8 left-8 w-20 h-20 pointer-events-none hidden lg:block">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-orange/30" />
        <div className="absolute top-0 left-0 h-full w-[1px] bg-orange/30" />
        <div className="absolute top-2 left-2 text-[8px] font-mono text-orange/40 tracking-widest">001</div>
      </div>
      <div className="absolute top-8 right-8 w-20 h-20 pointer-events-none hidden lg:block">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-orange/30" />
        <div className="absolute top-0 right-0 h-full w-[1px] bg-orange/30" />
      </div>
      <div className="absolute bottom-8 left-8 w-20 h-20 pointer-events-none hidden lg:block">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-orange/30" />
        <div className="absolute bottom-0 left-0 h-full w-[1px] bg-orange/30" />
      </div>
      <div className="absolute bottom-8 right-8 w-20 h-20 pointer-events-none hidden lg:block">
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-orange/30" />
        <div className="absolute bottom-0 right-0 h-full w-[1px] bg-orange/30" />
        <div className="absolute bottom-2 right-2 text-[8px] font-mono text-orange/40 tracking-widest">REC●</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-orange/50" />
            <span className="text-sm uppercase tracking-[0.3em] text-orange font-mono">Equipment</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-orange/50" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display text-foreground mb-6">
            GEAR I USE
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-2">
            The tools behind the vision. Each piece carefully chosen to capture moments with precision.
          </p>
          {/* Viewfinder-style subtext */}
          <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-muted/50 mt-4">
            <span>ISO AUTO</span>
            <span className="w-1 h-1 bg-orange/50 rounded-full" />
            <span>f/2.8</span>
            <span className="w-1 h-1 bg-orange/50 rounded-full" />
            <span>1/250</span>
            <span className="w-1 h-1 bg-orange/50 rounded-full" />
            <span>AWB</span>
          </div>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 text-sm font-mono uppercase tracking-wider transition-all duration-300 border ${
              activeCategory === "all"
                ? "bg-orange text-white border-orange"
                : "bg-transparent text-muted border-border hover:border-orange/50 hover:text-orange"
            }`}
          >
            All Gear
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm font-mono uppercase tracking-wider transition-all duration-300 border flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-orange text-white border-orange"
                  : "bg-transparent text-muted border-border hover:border-orange/50 hover:text-orange"
              }`}
            >
              {cat.icon}
              <span className="hidden sm:inline">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Gear grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGear.map((item, index) => (
            <GearCard key={item.name} item={item} index={index} />
          ))}
        </div>

        {/* Bottom viewfinder readout */}
        <div className="mt-16 flex items-center justify-center gap-6 text-[10px] font-mono text-muted/40">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 border border-current" />
            SINGLE SHOT
          </span>
          <span>|</span>
          <span>{gearData.length} ITEMS</span>
          <span>|</span>
          <span className="flex items-center gap-2">
            MATRIX
            <span className="w-2 h-2 bg-orange/40" />
          </span>
        </div>
      </div>
    </section>
  );
}
