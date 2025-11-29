"use client";
import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

export default function StreakCounter() {
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedMoods = JSON.parse(localStorage.getItem("moods") || "[]");
    
    if (savedMoods.length === 0) {
      setStreak(0);
      setLoading(false);
      return;
    }

    const uniqueDates = [
      ...new Set(savedMoods.map((m) => new Date(m.date).toISOString().split("T")[0])),
    ].sort((a, b) => new Date(b) - new Date(a));

    let currentStreak = 0;
    const today = new Date().toISOString().split("T")[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

    if (uniqueDates[0] === today || uniqueDates[0] === yesterday) {
      currentStreak = 1;
      for (let i = 0; i < uniqueDates.length - 1; i++) {
        const curr = new Date(uniqueDates[i]);
        const prev = new Date(uniqueDates[i + 1]);
        const diffDays = Math.ceil(Math.abs(curr - prev) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) currentStreak++;
        else break;
      }
    }

    setStreak(currentStreak);
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <div 
      // STYLE BARU: Glassmorphism + Border Halus
      className="flex items-center gap-2 px-3 py-1.5 bg-white/60 backdrop-blur-md border border-white/50 rounded-full shadow-sm cursor-help group transition-all duration-300 hover:bg-white hover:shadow-md"
      title={`Streak: ${streak} hari`}
    >
      <div className={`p-1.5 rounded-full transition-colors ${streak > 0 ? "bg-orange-100 text-orange-500" : "bg-gray-100 text-gray-400"}`}>
        <Flame 
            size={16} 
            fill={streak > 0 ? "currentColor" : "none"}
            className={streak > 0 ? "animate-pulse" : ""} 
        />
      </div>
      <span className={`text-sm font-bold ${streak > 0 ? "text-orange-600" : "text-gray-500"}`}>
        {streak}
      </span>
    </div>
  );
}