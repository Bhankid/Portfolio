import { useEffect, useRef, useState } from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
  delay?: number;
  color: string;
}

export default function SkillBar({ skill, level, delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
    <div 
      ref={skillRef} 
      className="mb-6 transform transition-all duration-300 ease-in-out hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between mb-2">
        <span className={`text-sm font-medium transition-all duration-300 ${isHovered ? 'text-primary-500' : ''}`}>
          {skill}
        </span>
        <span className={`text-sm font-medium transition-all duration-300 ${isHovered ? 'text-accent-500' : ''}`}>
          {level}%
        </span>
      </div>
      <div className={`h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-md shadow-primary-400/30' : ''}`}>
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${
            isHovered 
              ? 'bg-gradient-to-r from-primary-400 to-accent-400 animate-pulse' 
              : 'bg-gradient-to-r from-primary-500 to-accent-500'
          }`}
          style={{ 
            width: isVisible ? `${level}%` : '0%',
            animationDuration: isHovered ? '2s' : '0s'
          }}
        />
      </div>
    </div>
  );
}
