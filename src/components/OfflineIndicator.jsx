"use client";
import { useState, useEffect } from "react";
import { WifiOff, X } from "lucide-react";

export default function OfflineIndicator() {
  const [isOffline, setIsOffline] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Cek status awal
    if (typeof window !== "undefined") {
      setIsOffline(!navigator.onLine);
    }

    // Event Listener untuk mendeteksi putus/nyambung internet
    const handleOffline = () => {
      setIsOffline(true);
      setShow(true);
    };

    const handleOnline = () => {
      setIsOffline(false);
      setShow(false);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (!isOffline || !show) return null;

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] animate-fade-in-up">
      <div className="bg-slate-900/90 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-slate-700">
        <WifiOff size={20} className="text-rose-400 animate-pulse" />
        <div className="flex flex-col">
          <span className="text-sm font-bold">Kamu sedang Offline</span>
          <span className="text-[10px] text-slate-400">Fitur utama tetap bisa digunakan.</span>
        </div>
        <button 
          onClick={() => setShow(false)}
          className="ml-2 p-1 bg-white/10 rounded-full hover:bg-white/20 transition"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}