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
    <nav className="sticky top-0 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="pixel-card px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="pixel-title text-base text-text hover:text-brand">
            WigglyPaint
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {renderNavLink("popular-games", "Popular Games")}
            {renderNavLink("variant-grid", "Variants")}
            {renderNavLink("how-to-play", "How to Play")}
            {renderNavLink("faq", "FAQ")}
            <Link href="/games" className="text-text hover:text-brand font-medium">All Games</Link>
            <Link href="/" className="text-text hover:text-brand font-medium">Home</Link>
            <button
              onClick={() => {
                if (availableSections.includes("hero")) scrollToSection("hero");
                else window.location.href = "/";
              }}
              className="pixel-button"
            >Play Now</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
