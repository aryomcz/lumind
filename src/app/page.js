"use client";
import Link from "next/link";
import QuoteCard from "@/components/QuoteCard";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <header className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[var(--primary)]">MindEase</h1>
          <p className="text-gray-600 mt-2 max-w-lg">
            Your Mental Wellness Companion — track emotions and find calm.
          </p>
        </div>

        <DarkModeToggle />
      </header>

      <section className="bg-white rounded-xl p-8 shadow card-hover grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">Breathe. Track. Grow.</h2>
          <p className="text-gray-600 mt-3">
            MindEase helps students recognize emotions, reduce stress, and find support quickly.
          </p>

          <div className="mt-6 flex gap-4">
            <Link href="/mood" className="bg-[var(--primary)] text-white px-5 py-3 rounded-lg shadow hover:bg-[var(--primary-light)]">
              Track Mood
            </Link>

            <Link href="/breathing" className="border border-gray-200 px-5 py-3 rounded-lg">
              Breathing
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 bg-gradient-to-tr from-[var(--primary)]/40 to-[var(--primary-light)]/30 rounded-2xl flex items-center justify-center animate-hero">
            <div className="text-white text-center px-4">
              <p className="text-2xl font-semibold">Take a deep breath</p>
              <p className="mt-2 text-sm">A 1-minute exercise can help calm your mind.</p>
            </div>
          </div>
        </div>
      </section>

      <QuoteCard />

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
        <Feature icon="🙂" title="Mood Tracker" link="/mood" />
        <Feature icon="🌬️" title="Breathing" link="/breathing" />
        <Feature icon="📚" title="Articles" link="/articles" />
      </section>
    </div>
  );
}

function Feature({ icon, title, link }) {
  return (
    <Link href={link} className="p-6 bg-white rounded-xl shadow text-center hover:shadow-md transition">
      <p className="text-4xl">{icon}</p>
      <h3 className="font-semibold mt-3">{title}</h3>
    </Link>
  );
}
