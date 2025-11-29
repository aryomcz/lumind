"use client";
import { useState } from "react";
import { Trash2, Wind, Sparkles } from "lucide-react";

export default function TheVoid() {
  const [text, setText] = useState("");
  const [isReleasing, setIsReleasing] = useState(false);
  const [message, setMessage] = useState("");

  const handleRelease = () => {
    if (!text) return;
    setIsReleasing(true);
    setTimeout(() => {
      setText("");
      setIsReleasing(false);
      setMessage("Emosimu telah dilepaskan ke semesta. Kamu aman sekarang.");
      setTimeout(() => setMessage(""), 3000);
    }, 2000);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto text-center">
      
      {/* Container Kaca Gelap (Diupdate agar lebih kontras) */}
      <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-8 rounded-[2.5rem] shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center transition-all">
        
        {/* Dekorasi Bintang (Diupdate warnanya) */}
        <div className="absolute top-10 left-10 text-indigo-400/50 animate-pulse"><Sparkles size={16}/></div>
        <div className="absolute bottom-20 right-10 text-teal-400/50 animate-pulse animation-delay-2000"><Sparkles size={20}/></div>

        {!message ? (
          <>
            <div className="mb-8 space-y-2">
               <h2 className="text-3xl font-black text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                 Tulis & Lepaskan
               </h2>
               <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                 Marah, kecewa, atau rahasia. Tuliskan semuanya di sini.
                 Saat kamu menekan tombol, tulisan ini akan dihancurkan dan hilang selamanya.
               </p>
            </div>

            <div className="relative w-full group">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Tumpahkan semuanya di sini..."
                className={`
                  w-full h-48 bg-slate-950/50 border border-slate-800 rounded-2xl p-6 
                  text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent
                  transition-all duration-[2000ms] ease-in-out resize-none shadow-inner
                  ${isReleasing ? "scale-0 opacity-0 rotate-[720deg] blur-xl translate-y-[-200px]" : "scale-100 opacity-100"}
                `}
                disabled={isReleasing}
              ></textarea>
              
              {isReleasing && (
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full blur-[60px] animate-ping opacity-30"></div>
                 </div>
              )}
            </div>

            <button
              onClick={handleRelease}
              disabled={!text || isReleasing}
              className={`
                mt-8 flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300
                ${!text 
                  ? "bg-slate-800/50 text-slate-600 cursor-not-allowed border border-slate-800" 
                  : "bg-gradient-to-r from-rose-600 to-purple-700 text-white hover:shadow-[0_0_20px_rgba(192,38,211,0.5)] hover:scale-105 border border-purple-500/50"
                }
              `}
            >
              {isReleasing ? (
                <>
                  <Wind className="animate-spin" size={24} /> Melepaskan...
                </>
              ) : (
                <>
                  <Trash2 size={24} /> Release & Let Go
                </>
              )}
            </button>
          </>
        ) : (
          // PESAN SETELAH RELEASE (Diupdate warnanya)
          <div className="animate-fade-in-up">
             <div className="w-24 h-24 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(16,185,129,0.2)] border border-emerald-500/20 animate-bounce-slow">
                <Wind size={48} />
             </div>
             <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-sm">Sudah Hilang.</h3>
             <p className="text-slate-300 leading-relaxed max-w-sm mx-auto text-lg">
               {message}
             </p>
             <button 
               onClick={() => setMessage("")}
               className="mt-10 px-6 py-2 rounded-full bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-sm font-medium border border-slate-700"
             >
               Tulis lagi
             </button>
          </div>
        )}

      </div>
    </div>
  );
}