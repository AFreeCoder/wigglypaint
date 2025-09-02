"use client";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  const [availableSections, setAvailableSections] = React.useState<string[]>([]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  React.useEffect(() => {
    const checkAvailableSections = () => {
      const sections = ["popular-games", "variant-grid", "how-to-play", "faq", "hero"];
      const existing = sections.filter((id) => document.getElementById(id) !== null);
      setAvailableSections(existing);
    };

    checkAvailableSections();
    const observer = new MutationObserver(checkAvailableSections);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const renderNavLink = (sectionId: string, label: string) => {
    if (!availableSections.includes(sectionId)) return null;
    return (
      <button
        key={sectionId}
        onClick={() => scrollToSection(sectionId)}
        className="text-text hover:text-brand transition-colors font-medium"
      >
        {label}
      </button>
    );
  };

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-text hover:text-brand transition-colors">
              WigglyPaint
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {renderNavLink("popular-games", "Popular Games")}
            {renderNavLink("variant-grid", "Variants")}
            {renderNavLink("how-to-play", "How to Play")}
            {renderNavLink("faq", "FAQ")}
            <Link href="/games" className="text-text hover:text-brand transition-colors font-medium">
              All Games
            </Link>
            <Link href="/" className="text-text hover:text-brand transition-colors font-medium">
              Home
            </Link>
            <button
              onClick={() => {
                if (availableSections.includes("hero")) {
                  scrollToSection("hero");
                } else {
                  window.location.href = "/";
                }
              }}
              className="bg-brand text-brand-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

