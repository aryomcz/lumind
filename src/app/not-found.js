"use client";
import Link from "next/link";
import { Home, MapPinOff } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-black flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      
      {/* Background Stars */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>
      
      {/* Visual */}
      <div className="relative z-10 mb-8 animate-bounce-slow">
        <div className="w-40 h-40 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
           <MapPinOff size={64} className="text-indigo-300" />
        </div>
      </div>

      <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-4">
        404
      </h1>
      
      <h2 className="text-2xl font-bold text-white mb-4">
        Oops! Kamu tersesat di The Void.
      </h2>
      
      <p className="text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
        Halaman yang kamu cari tidak ditemukan atau sudah menghilang menjadi debu bintang.
      </p>

      <Link 
        href="/" 
        className="px-8 py-4 bg-white text-indigo-900 rounded-full font-bold shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all flex items-center gap-2"
      >
        <Home size={20} /> Kembali ke Base
      </Link>

    </div>
  );
}