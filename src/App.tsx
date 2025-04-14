import { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';

// Data
const skills = [
  // Frontend
  { name: 'React & React Native', level: 85 },
  { name: 'Next JS', level: 88 },
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'HTML5', level: 85 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Bootstrap', level: 78 },
  { name: 'SCSS', level: 75 },
  { name: 'jQuery', level: 70 },
  { name: 'Next.js', level: 75 },
  { name: 'Figma', level: 70 },
  
  // Backend
  { name: 'Node.js & Express', level: 80 },
  { name: 'PHP', level: 75 },
  { name: 'Laravel', level: 72 },
  { name: 'Python', level: 68 },
  { name: 'Django', level: 65 },
  { name: 'Java', level: 60 },
  
  // Database & API
  { name: 'SQL', level: 78 },
  { name: 'MongoDB', level: 75 },
  { name: 'GraphQL & REST APIs', level: 78 },
  
  // DevOps & Architecture
  { name: 'AWS & Cloud Architecture', level: 70 },
  { name: 'DevOps & CI/CD', level: 65 },
  { name: 'System Design', level: 70 },
  
  // Soft Skills
  { name: 'Agile & Team Leadership', level: 75 },
];


const experiences = [
  {
    title: 'Software Engineer',
    company: 'Bisame Digital LTD',
    period: '2024 - Present',
    description: 'Led the development of enterprise-scale React applications, mentored junior developers, and implemented cloud-native solutions using AWS.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Msoft Ghana Limited',
    period: '2023 - 2025',
    description: 'Architected and built scalable microservices, implemented CI/CD pipelines, and managed a team of 5 developers.',
  },
  {
    title: 'Software Engineer',
    company: 'Fleet Labs',
    period: '2023 - 2025',
    description: 'Developed full-stack applications using React, Node.js, and PostgreSQL. Implemented real-time features using WebSocket.',
  },
];

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=500',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Healthcare App',
    description: 'Telemedicine platform enabling virtual consultations and medical record management.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500',
    tech: ['React Native', 'GraphQL', 'MongoDB'],
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'Real-time analytics dashboard with machine learning insights and predictive modeling.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500',
    tech: ['Next.js', 'Python', 'TensorFlow'],
  },
];

const services = [
  {
    title: 'Full Stack Development',
    desc: 'End-to-end development of scalable web applications using modern technologies and best practices.',
  },
  {
    title: 'Cloud Architecture',
    desc: 'Design and implementation of cloud-native solutions with focus on scalability and cost optimization.',
  },
  {
    title: 'Technical Consultation',
    desc: 'Expert advice on technology stack selection, system design, and architectural decisions.',
  },
  {
    title: 'Mobile Development',
    desc: 'Cross-platform mobile applications with seamless user experience and native performance.',
  },
  {
    title: 'Team Leadership',
    desc: 'Technical team management, mentoring, and establishing development processes.',
  },
  {
    title: 'Performance Optimization',
    desc: 'Optimization of web applications for maximum speed and efficiency.',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <ThemeToggle />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Render all section components */}
      <HomeSection isActive={activeTab === 'home'} />
      
      <AboutSection 
        isActive={activeTab === 'about'} 
        skills={skills} 
        experiences={experiences} 
      />
      
      <PortfolioSection 
        isActive={activeTab === 'portfolio'} 
        projects={projects} 
      />
      
      <ServicesSection 
        isActive={activeTab === 'services'} 
        services={services} 
      />
      
      <ContactSection isActive={activeTab === 'contact'} />
    </div>
  );
}

export default App;
