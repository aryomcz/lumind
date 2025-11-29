"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, Wind, Smile, BookOpen, Heart, Sun, CloudRain } from "lucide-react";

// Import Components (Pastikan nama filenya sesuai huruf besar/kecil!)
import QuoteCard from "@/components/QuoteCard"; 
import PopItGame from "@/components/PopItGame";
import SleepCalculator from "@/components/SleepCalculator";
import GroundingExercise from "@/components/GroundingExercise";
import FutureLetter from "@/components/FutureLetter";
import WellnessBuddy from "@/components/WellnessBuddy";
import WelcomeModal from "@/components/WelcomeModal";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [greeting, setGreeting] = useState("Hello");

  // Logic Sapaan
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Selamat Pagi");
    else if (hour < 18) setGreeting("Selamat Siang");
    else setGreeting("Selamat Malam");
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-teal-50 animate-gradient overflow-hidden relative text-gray-800">
      
      {/* --- MODAL ONBOARDING (Muncul jika belum ada nama) --- */}
      <WelcomeModal onNameSubmit={setUserName} />

      {/* BACKGROUND DECORATION (Parallax Blobs) */}
      <div className="fixed top-0 -left-20 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
      <div className="fixed top-20 -right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="fixed -bottom-20 left-1/2 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10">
        
        {/* ================= HERO SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          
          {/* Kiri: Teks */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur border border-white/50 shadow-sm text-indigo-600 text-sm font-bold mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              Your Safe Space is Here
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight">
              {userName ? (
                <>
                  {greeting}, <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
                    {userName}.
                  </span>
                </>
              ) : (
                <>
                  Don't Just Survive, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
                    Thrive & Breathe.
                  </span>
                </>
              )}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {userName 
                ? `Semoga harimu menyenangkan. Apa yang ingin kamu lakukan untuk merawat dirimu hari ini?`
                : "MindEase membantu kamu mengenali emosi, mengurangi stres, dan menemukan ketenangan dalam hitungan menit."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <Link href="/mood" className="flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-2xl font-bold shadow-lg shadow-teal-200 hover:bg-teal-700 hover:-translate-y-1 transition-all duration-300">
                <Smile size={20} />
                Cek Mood
              </Link>
              <Link href="/breathing" className="flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur text-gray-700 border border-white rounded-2xl font-bold shadow-sm hover:bg-white hover:text-teal-600 transition-all duration-300">
                <Wind size={20} />
                Latihan Napas
              </Link>
            </div>
          </div>

          {/* Kanan: Visual Breathing */}
          <div className="relative flex justify-center items-center h-[400px] animate-fade-in-up" style={{ animationDelay: '200ms' }}>
             <div className="absolute w-72 h-72 bg-teal-200/40 rounded-full animate-breathe blur-xl"></div>
             <div className="absolute w-56 h-56 bg-purple-200/40 rounded-full animate-breathe animation-delay-2000 blur-lg"></div>
             <div className="relative z-20 bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50 text-center max-w-xs transform hover:scale-105 transition duration-500">
               <div className="bg-gradient-to-tr from-rose-100 to-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
                  <Heart className="text-rose-500 fill-rose-500 animate-pulse" size={32} />
               </div>
               <h3 className="text-xl font-bold text-gray-800">
                 {userName ? `You matter, ${userName}.` : "You matter."}
               </h3>
               <p className="text-gray-500 mt-2 text-sm">Ambil napas dalam-dalam, dan hembuskan perlahan.</p>
               <div className="mt-6">
                 <div className="flex justify-between text-xs text-gray-400 mb-1 font-semibold">
                   <span>Stress Level</span>
                   <span className="text-teal-600">Reducing...</span>
                 </div>
                 <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                   <div className="bg-gradient-to-r from-teal-400 to-indigo-400 h-2 rounded-full w-[60%] animate-pulse"></div>
                 </div>
               </div>
             </div>
             
             {/* Floating Icons */}
             <div className="absolute top-10 right-10 bg-white/80 backdrop-blur p-3 rounded-2xl shadow-lg animate-bounce duration-[3000ms] text-orange-400">
                 <Sun size={24} fill="currentColor" />
             </div>
             <div className="absolute bottom-10 left-10 bg-white/80 backdrop-blur p-3 rounded-2xl shadow-lg animate-bounce duration-[4000ms] text-blue-400">
                 <CloudRain size={24} fill="currentColor" />
             </div>
          </div>
        </section>

        {/* ================= SECTION 2: WELLNESS BUDDY (QUABBLE) ================= */}
        <section className="mb-24 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="bg-indigo-600 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-500">
            
            {/* Dekorasi Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400 opacity-20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Teks */}
              <div className="text-center lg:text-left">
                 <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                   Jaga Kesehatanmu,<br/> Bahagiakan Temanmu!
                 </h2>
                 <p className="text-indigo-100 text-lg mb-8 leading-relaxed max-w-lg">
                   Sama seperti Quabble, di MindEase kamu punya teman setia. Selesaikan target harianmu untuk melihatnya bahagia. Merawat diri sendiri jadi lebih seru!
                 </p>
                 <div className="inline-flex gap-2 bg-white/20 backdrop-blur px-5 py-3 rounded-xl text-sm font-bold border border-white/10 hover:bg-white/30 transition cursor-default">
                    🐣 Virtual Companion Active
                 </div>
              </div>

              {/* Komponen Wellness Buddy */}
              <div className="flex justify-center">
                 <WellnessBuddy />
              </div>

            </div>
          </div>
        </section>

        {/* ================= SECTION 3: CORE FEATURES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <FeatureCard 
            icon={<Smile className="w-8 h-8 text-teal-500" />} 
            title="Mood Tracker" 
            desc="Catat emosi harianmu dan lihat grafik perkembangan mentalmu."
            link="/mood"
            color="hover:border-teal-400"
          />
          <FeatureCard 
            icon={<Wind className="w-8 h-8 text-indigo-500" />} 
            title="Breathing" 
            desc="Panduan visual pernapasan untuk redakan cemas seketika."
            link="/breathing"
            color="hover:border-indigo-400"
          />
          <FeatureCard 
            icon={<BookOpen className="w-8 h-8 text-rose-500" />} 
            title="Articles" 
            desc="Tips psikologi praktis untuk hadapi hari-hari berat."
            link="/articles"
            color="hover:border-rose-400"
          />
        </div>

        {/* ================= SECTION 4: GROUNDING (ANTI-ANXIETY) ================= */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 transition-transform hover:scale-[1.02] duration-500">
            <GroundingExercise />
          </div>
          <div className="order-2 space-y-6 animate-fade-in-up pl-0 lg:pl-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
               🧠 Anti-Anxiety Tool
            </div>
            <h2 className="text-4xl font-black text-gray-800 leading-tight">
              Meredakan Cemas<br/> dalam <span className="text-purple-600">5 Langkah.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Saat panik menyerang, otak kita kehilangan fokus. Teknik <strong>5-4-3-2-1</strong> memaksa otak untuk kembali ke realita (grounding) dengan mengaktifkan kelima panca indera secara berurutan.
            </p>
            <div className="p-6 bg-white/60 border border-purple-100 rounded-2xl text-gray-500 italic shadow-sm">
              "Teknik ini adalah pertolongan pertama psikologis yang paling mudah dan efektif dilakukan di mana saja."
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: FUN ZONE (POP-IT) ================= */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right order-2 lg:order-1 animate-fade-in-up pr-0 lg:pr-10">
             <h2 className="text-4xl font-black text-gray-800 mb-6">
               Butuh Istirahat Kilat?
             </h2>
             <p className="text-gray-600 text-lg mb-8 leading-relaxed">
               Kadang yang kamu butuhkan hanyalah pengalihan sederhana. Mainkan game Pop-It ini sepuasnya, rasakan sensasi 'ceklik' yang menenangkan tanpa harus beli mainan plastik.
             </p>
             <div className="inline-block px-5 py-3 bg-teal-100 text-teal-700 rounded-xl text-sm font-bold shadow-sm">
               🍬 Stress Relief Toy
             </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
             <PopItGame />
          </div>
        </section>

        {/* ================= SECTION 6: SLEEP CALCULATOR ================= */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
               🌙 Better Sleep
            </div>
            <h2 className="text-4xl font-black text-gray-800 leading-tight">
              Stop Begadang,<br/> Bangun Lebih Segar.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Tidur bukan cuma soal durasi, tapi soal timing. Gunakan kalkulator ini untuk menemukan waktu tidur yang pas agar kamu tidak bangun dengan kepala pusing (Sleep Inertia).
            </p>
            <ul className="space-y-3 mt-4 text-gray-700 font-medium">
              <li className="flex items-center gap-3">
                <span className="bg-green-100 text-green-600 p-1 rounded-full text-xs">✓</span>
                Menghindari bangun di tengah Deep Sleep
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-green-100 text-green-600 p-1 rounded-full text-xs">✓</span>
                Memaksimalkan pemulihan otak (90 min cycle)
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <SleepCalculator />
          </div>
        </section>

        {/* ================= SECTION 7: TIME CAPSULE ================= */}
        <section className="mb-24 animate-fade-in-up">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-black text-gray-800 mb-2">Message to Future Self</h2>
             <p className="text-gray-500">Tulis harapanmu hari ini, baca saat kamu membutuhkannya nanti.</p>
          </div>
          <FutureLetter />
        </section>

        {/* ================= QUOTE SECTION ================= */}
        <div className="mb-10">
          <QuoteCard />
        </div>

      </div>
    </main>
  );
}

// COMPONENT: Feature Card (Reusable)
function FeatureCard({ icon, title, desc, link, color }) {
  return (
    <Link 
      href={link} 
      className={`group bg-white/70 backdrop-blur-md p-8 rounded-[2rem] shadow-sm border-2 border-transparent ${color} hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
    >
      <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{desc}</p>
      
      <div className="flex items-center text-sm font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
        Coba Sekarang <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
      
      {/* Dekorasi Background Card */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl"></div>
    </Link>
  );
}