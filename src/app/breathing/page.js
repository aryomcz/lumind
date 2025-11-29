"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Play, Square, RotateCcw, Wind, ArrowLeft } from "lucide-react";

export default function Breathing() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState("Ready"); // Ready, Inhale, Hold, Exhale
  const [timeLeft, setTimeLeft] = useState(60); 
  const [isFinished, setIsFinished] = useState(false);
  
  const timerRef = useRef(null);

  // LOGIKA NAPAS (4-4-4)
  useEffect(() => {
    let phaseTimer;
    if (isActive) {
      if (phase === "Inhale") {
        phaseTimer = setTimeout(() => setPhase("Hold"), 4000);
      } else if (phase === "Hold") {
        phaseTimer = setTimeout(() => setPhase("Exhale"), 4000);
      } else if (phase === "Exhale") {
        phaseTimer = setTimeout(() => setPhase("Inhale"), 4000);
      }
    }
    return () => clearTimeout(phaseTimer);
  }, [phase, isActive]);

  // LOGIKA TIMER
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setIsFinished(true);
      setPhase("Ready");
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive, timeLeft]);

  // BUTTON ACTIONS
  const startSession = () => {
    if (timeLeft === 0) setTimeLeft(60);
    setIsActive(true);
    setIsFinished(false);
    setPhase("Inhale");
  };

  const stopSession = () => {
    setIsActive(false);
    setPhase("Ready");
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const resetSession = () => {
    stopSession();
    setTimeLeft(60);
    setIsFinished(false);
  };

  // KONFIGURASI VISUAL (Warna & Teks)
  // Perhatikan penambahan 'shadow-[...]' untuk efek neon glow
  const getPhaseConfig = () => {
    switch (phase) {
      case "Inhale":
        return { 
          text: "INHALE", 
          subtext: "Tarik napas panjang dari hidung...", 
          // Warna Teal Terang + Glow
          color: "bg-teal-400 text-teal-50 shadow-[0_0_60px_-10px_rgba(45,212,191,0.6)]", 
          scale: "scale-150",
          ring: "border-teal-200"
        };
      case "Hold":
        return { 
          text: "HOLD", 
          subtext: "Tahan napas sejenak...", 
          // Warna Indigo + Glow
          color: "bg-indigo-500 text-indigo-50 shadow-[0_0_60px_-10px_rgba(99,102,241,0.6)]", 
          scale: "scale-150", // Tetap besar
          ring: "border-indigo-300"
        };
      case "Exhale":
        return { 
          text: "EXHALE", 
          subtext: "Hembuskan perlahan lewat mulut...", 
          // Warna Rose/Pink + Glow
          color: "bg-rose-400 text-rose-50 shadow-[0_0_60px_-10px_rgba(251,113,133,0.6)]", 
          scale: "scale-100", // Mengecil
          ring: "border-rose-200"
        };
      default: // Ready
        return { 
          text: "READY?", 
          subtext: "Tekan tombol Play untuk mulai.", 
          color: "bg-white text-gray-500 shadow-xl", 
          scale: "scale-100",
          ring: "border-white"
        };
    }
  };

  const config = getPhaseConfig();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-teal-50 animate-gradient flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Ornaments (Sama dengan Home) */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Navigasi Kecil di Atas */}
      <div className="absolute top-24 left-6 z-20">
         <Link href="/" className="flex items-center text-gray-500 hover:text-teal-600 font-bold transition-colors bg-white/40 backdrop-blur px-4 py-2 rounded-full border border-white/50">
            <ArrowLeft size={18} className="mr-2"/> Home
         </Link>
      </div>

      {/* CONTAINER UTAMA */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6">
        
        {/* HEADER TEXT */}
        <div className="text-center mb-12 h-24 flex flex-col justify-end">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight text-glow transition-all duration-500">
             Breathing Space
          </h1>
          <p className="text-lg text-gray-500 mt-2 font-medium min-h-[2rem] transition-all duration-500 animate-fade-in-up">
              {config.subtext}
          </p>
        </div>

        {/* VISUALISASI LINGKARAN */}
        <div className="relative flex items-center justify-center w-80 h-80 mb-16">
          
          {/* Ring Luar (Indikator Batas) */}
          <div className="absolute w-72 h-72 rounded-full border-2 border-dashed border-gray-300/50"></div>

          {/* Efek Ripple di Belakang (Hanya muncul saat aktif) */}
          {isActive && (
             <div className={`absolute w-64 h-64 rounded-full opacity-20 animate-ping ${phase === 'Inhale' ? 'bg-teal-400' : 'bg-rose-400'}`}></div>
          )}

          {/* LINGKARAN UTAMA (Bernapas) */}
          {/* duration-[4000ms] harus SAMA dengan timer logika napas */}
          <div 
            className={`
              relative z-20 flex flex-col items-center justify-center
              w-48 h-48 rounded-full border-4
              transition-all duration-[4000ms] ease-in-out
              ${config.color} ${config.scale} ${config.ring}
            `}
          >
            <span className="text-2xl font-black tracking-[0.2em] drop-shadow-sm transition-all duration-500">
                {config.text}
            </span>
            {phase !== "Ready" && <Wind className="mt-2 opacity-70 animate-bounce" size={24} />}
          </div>
        </div>

        {/* CONTROLS (Glass Panel) */}
        {!isFinished ? (
          <div className="glass-panel px-8 py-5 rounded-full flex items-center gap-8 animate-fade-in-up hover-3d">
            
            <button 
                onClick={resetSession} 
                className="p-3 text-gray-400 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all"
                title="Reset Timer"
            >
               <RotateCcw size={22} />
            </button>

            <button 
              onClick={isActive ? stopSession : startSession}
              className={`
                 w-16 h-16 flex items-center justify-center rounded-full text-white shadow-lg shadow-black/10 transition-transform hover:scale-110 active:scale-95
                 ${isActive ? "bg-amber-400 hover:bg-amber-500" : "bg-gray-900 hover:bg-black"}
              `}
            >
              {isActive ? <Square fill="currentColor" size={24} /> : <Play fill="currentColor" size={28} className="ml-1"/>}
            </button>

            <div className="w-16 text-center">
               <span className="text-2xl font-mono font-bold text-gray-600">
                 00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
               </span>
            </div>

          </div>
        ) : (
          // LAYAR SELESAI
          <div className="glass-panel p-8 rounded-[2.5rem] text-center animate-fade-in-up w-full max-w-sm border-2 border-white">
             <div className="inline-block p-4 bg-teal-100 text-teal-600 rounded-full mb-4 animate-bounce">
                <Wind size={32}/>
             </div>
             <h2 className="text-3xl font-black text-gray-800 mb-2">Great Job!</h2>
             <p className="text-gray-600 mb-6 text-sm">Pikiranmu sekarang lebih jernih.</p>
             
             <div className="flex flex-col gap-3">
               <button onClick={resetSession} className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition">
                 Ulangi Sesi
               </button>
               <Link href="/mood" className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg shadow-teal-200 transition">
                 Cek Mood Saya
               </Link>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}