"use client";
import React from "react";

export default function ThemeToggleBar() {
  const [currentTheme, setCurrentTheme] = React.useState<"A" | "B" | "C" | "D" | "E" | "Pixel">("A");

  React.useEffect(() => {
    try {
      const saved = (localStorage.getItem("theme") as "A" | "B" | "C" | "D" | "E" | "Pixel" | null);
      if (saved && ["A", "B", "C", "D", "E", "Pixel"].includes(saved)) {
        setCurrentTheme(saved);
        document.documentElement.setAttribute("data-theme", saved);
      }
    } catch {}
  }, []);

  const apply = (key: "A" | "B" | "C" | "D" | "E" | "Pixel") => {
    document.documentElement.setAttribute("data-theme", key);
    setCurrentTheme(key);
    try {
      localStorage.setItem("theme", key);
    } catch {}
  };

  const themeColors: Record<string, string> = {
    A: "bg-green-500",
    B: "bg-blue-500",
    C: "bg-purple-500",
    D: "bg-amber-500",
    E: "bg-pink-500",
    Pixel: "bg-emerald-600",
  };

  return (
    <div className="fixed bottom-3 right-3 bg-card rounded-xl shadow-lg p-2 border border-border z-50">
      <div className="flex gap-2">
        {(["A", "B", "C", "D", "E", "Pixel"] as const).map((k) => (
          <button
            key={k}
            onClick={() => apply(k)}
            className={`w-8 h-8 rounded-full font-bold text-white text-sm transition-all duration-200 ${
              themeColors[k]
            } ${currentTheme === k ? "ring-2 ring-offset-2 ring-gray-400 scale-110" : "hover:scale-105"}`}
            title={`Theme ${k}`}
          >
            {k === 'Pixel' ? 'P' : k}
          </button>
        ))}
      </div>
    </div>
  );
}
