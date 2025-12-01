"use client";
import { useAmbience } from "@/context/AmbienceContext";

export default function ThemeWrapper({ children }) {
  const { ambience } = useAmbience();

  const isDarkMode = ambience === 'rain' || ambience === 'forest';

  return (
    <div className={`flex-1 flex flex-col transition-colors duration-700 ${isDarkMode ? "dark-ambience" : ""}`}>
      {children}
    </div>
  );
}