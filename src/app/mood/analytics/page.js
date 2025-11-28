"use client";
import { useEffect, useState } from "react";
import PieChart from "@/components/PieChart";

export default function MoodAnalytics() {
    const [moods, setMoods] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("moods") || "[]");
        setMoods(saved.reverse());
    }, []);

    const counts = { Happy: 0, Neutral: 0, Sad: 0, Stressed: 0, Angry: 0 };
    moods.forEach((m) => (counts[m.mood] = (counts[m.mood] || 0) + 1));

    const data = [
        { label: "Happy", value: counts.Happy, color: "#34D399" },
        { label: "Neutral", value: counts.Neutral, color: "#FBBF24" },
        { label: "Sad", value: counts.Sad, color: "#60A5FA" },
        { label: "Stressed", value: counts.Stressed, color: "#FB7185" },
        { label: "Angry", value: counts.Angry, color: "#F97316" },
    ];

    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-[var(--primary)] mb-4">
                Mood Analytics
            </h1>

            <p className="text-gray-600 mb-6">
                Understand your emotional patterns over time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* PIE CHART CARD */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="font-semibold mb-3">Distribution</h3>
                    <div className="flex items-center gap-6">
                        <PieChart data={data} size={180} />

                        <div>
                            {data.map((d) => (
                                <div key={d.label} className="flex items-center gap-3 mb-2">
                                    <span
                                        className="w-3 h-3 rounded-full"
                                        style={{ background: d.color }}
                                    ></span>
                                    <span className="text-sm">
                                        {d.label} — {d.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* TREND + LOGS */}
                <div className="bg-white p-6 rounded-xl shadow md:col-span-2">
                    <h3 className="font-semibold mb-3">7-Day Trend (recent entries)</h3>

                    <div className="flex gap-3 h-40 items-end">
                        {moods.length === 0 ? (
                            <p className="text-gray-500">No data yet.</p>
                        ) : (
                            moods.slice(0, 7).map((m, i) => (
                                <div
                                    key={i}
                                    className="flex-1 bg-[var(--primary)]/30 rounded"
                                    style={{
                                        height: `${(Math.min(5, Math.floor(Math.random() * 5) + 1)) * 16
                                            }%`,
                                    }}
                                    title={`${m.mood} — ${new Date(
                                        m.date
                                    ).toLocaleDateString()}`}
                                ></div>
                            ))
                        )}
                    </div>

                    <div className="mt-6">
                        <h4 className="font-semibold">Recent Logs</h4>

                        {moods.length === 0 ? (
                            <p className="text-gray-500">No mood history yet.</p>
                        ) : (
                            <ul className="mt-3 space-y-2">
                                {moods.slice(0, 6).map((it, idx) => (
                                    <li key={idx} className="flex justify-between">
                                        <span>{new Date(it.date).toLocaleString()}</span>
                                        <span>{it.mood}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
