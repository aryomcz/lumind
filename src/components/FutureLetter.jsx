"use client";
import { useState, useEffect } from "react";
import { Send, Lock, Clock, Calendar, Trash2, Key, X } from "lucide-react";

export default function FutureLetter() {
  const [message, setMessage] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [capsules, setCapsules] = useState([]);
  const [openedCapsule, setOpenedCapsule] = useState(null); 
  const [currentTime, setCurrentTime] = useState(new Date());

  // 1. Load Data & Jalankan Timer
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("time_capsules") || "[]");
    setCapsules(saved);

    // Timer untuk update waktu setiap detik (agar status terkunci/terbuka realtime)
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message || !openTime) return;

    const newCapsule = {
      id: Date.now(),
      message,
      openTime,
      lockedAt: new Date().toISOString(),
    };

    const updatedCapsules = [newCapsule, ...capsules];
    setCapsules(updatedCapsules);
    localStorage.setItem("time_capsules", JSON.stringify(updatedCapsules));
    setMessage("");
    setOpenTime("");
    alert("Surat berhasil dikunci!");
  };

  const handleDelete = (id) => {
    if(confirm("Hapus kapsul ini selamanya?")) {
        const updated = capsules.filter(c => c.id !== id);
        setCapsules(updated);
        localStorage.setItem("time_capsules", JSON.stringify(updated));
        if (openedCapsule?.id === id) setOpenedCapsule(null);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative">
      
      {/* --- POPUP BACA PESAN (Muncul jika ada kapsul yg dibuka) --- */}
      {openedCapsule && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-xl rounded-[2rem] border-2 border-indigo-100 p-8 shadow-2xl animate-popIn">
           <button 
             onClick={() => setOpenedCapsule(null)} 
             className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-rose-100 hover:text-rose-500 transition"
           >
             <X size={20}/>
           </button>
           
           <div className="text-center w-full">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                 <Key size={32}/>
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-2">Pesan Masa Lalu</h3>
              <p className="text-xs text-gray-400 mb-6 font-mono">
                 Ditulis pada: {new Date(openedCapsule.lockedAt).toLocaleString()}
              </p>
              
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 text-gray-700 text-lg font-medium italic leading-relaxed relative">
                 <span className="absolute -top-3 -left-2 text-4xl text-yellow-300">"</span>
                 {openedCapsule.message}
                 <span className="absolute -bottom-6 -right-2 text-4xl text-yellow-300">"</span>
              </div>

              <button 
                 onClick={() => handleDelete(openedCapsule.id)}
                 className="mt-8 text-rose-500 hover:text-rose-700 text-sm font-bold flex items-center justify-center gap-2 mx-auto"
              >
                 <Trash2 size={16}/> Buang Surat Ini
              </button>
           </div>
        </div>
      )}

      {/* FORMULIR */}
      <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Send size={20} className="text-rose-500"/> Tulis Pesan
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
             <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Pesan untuk masa depan..."
                rows="4"
                className="w-full p-4 rounded-2xl bg-white border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 outline-none text-gray-900 placeholder:text-gray-400 resize-none shadow-inner text-base"
             ></textarea>
          </div>

          <div>
             <label className="text-xs font-bold text-gray-600 ml-1 mb-1 block">Buka pada:</label>
             <input
                type="datetime-local"
                value={openTime}
                onChange={(e) => setOpenTime(e.target.value)}
                className="w-full p-3 rounded-xl bg-white border border-gray-300 focus:border-rose-500 text-gray-900 font-bold shadow-sm"
             />
          </div>

          <button
            type="submit"
            disabled={!message || !openTime}
            className={`w-full py-3 rounded-xl font-bold text-white shadow-md transition-all flex items-center justify-center gap-2
                ${!message || !openTime 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-rose-600 hover:bg-rose-700 hover:-translate-y-1"
                }
            `}
          >
            <Lock size={18} /> Kunci Pesan
          </button>
        </form>
      </div>

      {/* LIST KAPSUL */}
      <div className="bg-slate-900 text-white p-6 rounded-[2rem] shadow-lg min-h-[300px] border border-slate-700 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock size={20} className="text-teal-400"/> Kapsul Waktu ({capsules.length})
            </h3>
            <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                {capsules.length === 0 ? (
                    <div className="text-center py-10 text-slate-500 border-2 border-dashed border-slate-700 rounded-2xl">
                        <Lock size={32} className="mx-auto mb-2 opacity-50"/>
                        <p className="text-sm">Belum ada surat tersimpan.</p>
                    </div>
                ) : (
                    capsules.map((cap) => {
                        const unlockDate = new Date(cap.openTime);
                        const isUnlocked = currentTime >= unlockDate;

                        return (
                            <div key={cap.id} className={`p-4 rounded-xl border flex justify-between items-center group transition-all duration-300 ${isUnlocked ? "bg-teal-900/30 border-teal-500/50 hover:bg-teal-900/50" : "bg-slate-800 border-slate-700"}`}>
                                <div>
                                    <div className={`text-xs font-bold mb-1 flex items-center gap-1 ${isUnlocked ? "text-teal-300" : "text-gray-500"}`}>
                                        {isUnlocked ? <Key size={12}/> : <Lock size={12}/>}
                                        {isUnlocked ? "SIAP DIBUKA!" : "TERKUNCI SAMPAI:"}
                                    </div>
                                    <div className="text-sm font-medium text-white">
                                        {unlockDate.toLocaleString('id-ID', { 
                                            day: 'numeric', month: 'short', year: 'numeric', 
                                            hour: '2-digit', minute: '2-digit' 
                                        })}
                                    </div>
                                </div>
                                
                                {isUnlocked ? (
                                    <button 
                                        onClick={() => setOpenedCapsule(cap)}
                                        className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold text-xs rounded-lg shadow-lg shadow-teal-500/20 transition-all animate-pulse"
                                    >
                                        BUKA
                                    </button>
                                ) : (
                                    <button onClick={() => handleDelete(cap.id)} className="p-2 text-slate-500 hover:text-rose-500 transition-colors" title="Batalkan/Buang">
                                        <Trash2 size={16}/>
                                    </button>
                                )}
                            </div>
                        );
                    })
                )}
            </div>
         </div>
      </div>
    </div>
  );
}