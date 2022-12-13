import React, { useEffect, useRef, useState } from "react";

interface FadeInSectionProps {
  children?: React.ReactNode;
}

// adapted from https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
export const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    const current = domRef.current;
    if (!current) return;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
      {children}
    </div>
  );
};
