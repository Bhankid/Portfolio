import React, { useEffect, useRef, useState } from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
  delay?: number;
  color: string;
}

export default function SkillBar({ skill, level, delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={skillRef} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm font-medium">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 ease-out ${
            isVisible ? 'animate-progress' : 'w-0'
          }`}
          style={{ '--progress': `${level}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}