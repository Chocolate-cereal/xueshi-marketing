"use client";

import { useEffect } from "react";

export function CaseStudyMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-case-study-motion]");
    if (!root) return;

    const sections = Array.from(root.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement && child.tagName === "SECTION",
    );

    root.dataset.motionReady = "true";
    sections[0]?.setAttribute("data-revealed", "true");

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      sections.forEach((section) => section.setAttribute("data-revealed", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    sections.slice(1).forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
