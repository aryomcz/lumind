"use client";
import moods from "@/data/moods";
import { saveMood } from "@/utils/storage";

export default function MoodPage() {
    const selectMood = (m) => {
        saveMood(m);
        alert(`Mood "${m.label}" saved!`);
    };

    return (
        <div className="px-6 py-10 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-primary mb-8">
                Track Your Mood
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {moods.map((m) => (
                    <button
                        key={m.id}
                        onClick={() => selectMood(m)}
                        className="bg-white p-6 rounded-xl shadow hover:shadow-md text-center transition"
                    >
                        <p className="text-5xl">{m.icon}</p>
                        <p className="mt-3 font-medium">{m.label}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}
