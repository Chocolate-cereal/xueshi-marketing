"use client";

import { useEffect } from "react";

export function SiteMotion() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.siteMotionReady = "true";

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    nodes.forEach((node, index) => {
      node.style.setProperty(
        "--site-reveal-delay",
        index < 5 ? String(index * 55) + "ms" : "0ms",
      );
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => {
        node.dataset.revealVisible = "true";
      });
      return;
    }

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => {
        node.dataset.revealVisible = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target as HTMLElement;
          node.dataset.revealVisible = "true";
          observer.unobserve(node);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return null;
}
