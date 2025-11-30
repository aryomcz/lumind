"use client";
import { useState, useEffect, useRef } from "react";
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
  { text: "Stop letting your thoughts control you.", author: "Dan Millman" }
];

export default function QuoteCard() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Swipe
  const onTouchStart = (e) => (touchStartX.current = e.changedTouches[0].clientX);
  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchEndX.current - touchStartX.current;
    if (diff > 100) prevQuote();
    if (diff < -100) nextQuote();
  };

  // TYPEWRITER EFFECT (SAFE VERSION — NO UNDEFINED)
  useEffect(() => {
    const quote = quotesData[quoteIndex].text;
    let i = 0;

    setDisplayedText("");

    const typer = setInterval(() => {
      i++;
      setDisplayedText(quote.substring(0, i)); // aman 100%
      if (i >= quote.length) clearInterval(typer);
    }, 30);

    return () => clearInterval(typer);
  }, [quoteIndex]);

  const nextQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setQuoteIndex((quoteIndex + 1) % quotesData.length);
      setIsAnimating(false);
    }, 180);
  };

  const prevQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setQuoteIndex(quoteIndex === 0 ? quotesData.length - 1 : quoteIndex - 1);
      setIsAnimating(false);
    }, 180);
  };

  const current = quotesData[quoteIndex];

  return (
    <div
      className="relative group cursor-pointer select-none"
      onClick={nextQuote}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Floating sparkles */}
      <div className="absolute -top-3 right-6 text-teal-400 text-xl animate-ping opacity-40">✦</div>
      <div className="absolute bottom-3 -left-3 text-purple-300 animate-float opacity-50">✧</div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-indigo-400 opacity-20 blur-xl rounded-3xl group-hover:opacity-30 transition-all"></div>

      {/* Card */}
      <div
        className={`relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center 
        transition-all duration-300 overflow-hidden
        ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
      >
        {/* Decorative quote icon */}
        <div className="absolute top-4 left-6 text-indigo-100 opacity-50 pointer-events-none">
          <Quote className="transform -scale-x-100 w-12 h-12 md:w-20 md:h-20" />
        </div>

        {/* QUOTE */}
        <p className="text-xl md:text-3xl font-serif italic !text-gray-900 leading-relaxed mb-4">
          “{displayedText}”
        </p>

        {/* AUTHOR */}
        <div className="flex items-center justify-center gap-3">
          <span className="w-6 h-[2px] md:w-10 bg-teal-400 rounded-full"></span>
          <p className="text-xs md:text-sm font-bold !text-gray-500 uppercase tracking-widest">
            {current.author}
          </p>
          <span className="w-6 h-[2px] md:w-10 bg-teal-400 rounded-full"></span>
        </div>

        {/* Hint */}
        <p className="text-gray-400 text-xs mt-5 md:hidden italic">
          Swipe untuk ganti quote →
        </p>
      </div>
    </div>
  );
}
