"use client";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const quotesData = [
  { text: "It is okay to rest.", author: "Unknown" },
  { text: "Take it one step at a time.", author: "Martin Luther King Jr." },
  { text: "Your mental health matters.", author: "Self Care" },
  { text: "Breathe. You are doing enough.", author: "Daily Reminder" },
  { text: "Healing is not linear.", author: "Trauma Support" },
  { text: "You are stronger than you think.", author: "A.A. Milne" },
  { text: "Small progress is still progress.", author: "Motivation" },
  { text: "Tough times never last, but tough people do.", author: "Robert H. Schuller" },
  { text: "Be gentle with yourself.", author: "Unknown" },
  { text: "You don’t have to control your thoughts. You just have to stop letting them control you.", author: "Dan Millman" }
];

export default function QuoteCard() {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const randomizeQuote = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * quotesData.length);
      } while (currentQuote && quotesData[newIndex].text === currentQuote.text && quotesData.length > 1);
      
      setCurrentQuote(quotesData[newIndex]);
      setIsAnimating(false);
    }, 500); 
  };

  useEffect(() => {
    randomizeQuote();
    const intervalId = setInterval(() => {
      randomizeQuote();
    }, 30000); 
    return () => clearInterval(intervalId);
  }, []);

  if (!currentQuote) {
    return <div className="bg-white p-8 rounded-3xl h-40 animate-pulse shadow-sm border border-gray-100"></div>;
  }

  return (
    <div className="relative group cursor-default">
      {/* Efek Layer Belakang */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-indigo-500 rounded-3xl transform rotate-1 opacity-20 group-hover:rotate-2 transition-transform duration-500"></div>

      {/* Kartu Utama - Padding Responsive (p-6 di HP, p-12 di Laptop) */}
      <div className="relative bg-white p-6 md:p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center transition-all hover:-translate-y-1 overflow-hidden">
        
        {/* Ikon Kutipan Besar (Hiasan) - Ukuran Responsive */}
        <div className="absolute top-2 left-4 md:top-6 md:left-8 text-indigo-100 opacity-50">
          <Quote className="transform -scale-x-100 w-12 h-12 md:w-20 md:h-20" />
        </div>

        {/* Konten Teks */}
        <div className={`transition-all duration-500 ease-in-out z-10 ${isAnimating ? "opacity-0 translate-y-4 blur-sm" : "opacity-100 translate-y-0 blur-0"}`}>
          
          {/* Teks Quote - Ukuran Responsive (text-lg di HP, text-3xl di Laptop) */}
          <p className="text-lg md:text-3xl font-serif italic !text-gray-900 leading-relaxed mb-4 md:mb-6 relative">
            "{currentQuote.text}"
          </p>
          
          <div className="flex items-center justify-center gap-3">
            <span className="w-4 h-[2px] md:w-8 bg-teal-400 rounded-full"></span>
            <p className="text-xs md:text-sm font-bold !text-gray-500 uppercase tracking-widest">
              {currentQuote.author}
            </p>
            <span className="w-4 h-[2px] md:w-8 bg-teal-400 rounded-full"></span>
          </div>

        </div>

      </div>
    </div>
  );
}