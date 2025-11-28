"use client";
import quotes from "@/data/quotes";

export default function QuoteCard() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="bg-white p-6 shadow rounded-xl text-center mt-8">
      <p className="text-[var(--primary)] italic text-lg">"{random}"</p>
    </div>
  );
}
