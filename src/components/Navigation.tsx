import { useState, useEffect } from 'react';
import { 
  FaHouse, 
  FaUser, 
  FaBriefcase, 
  FaWrench, 
  FaEnvelope, 
  FaXmark, 
  FaBars 
} from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { id: 'home', label: 'Home', icon: FaHouse },
  { id: 'about', label: 'About', icon: FaUser },
  { id: 'portfolio', label: 'Portfolio', icon: FaBriefcase },
  { id: 'services', label: 'Services', icon: FaWrench },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
];

export default function Navigation({ 
  activeTab, 
  setActiveTab 
}: { 
  activeTab: string; 
  setActiveTab: (tab: string) => void 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  // Track scroll position to show/hide mobile menu button
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setShowFloatingButton(position > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when a tab is selected
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Vertical Sidebar */}
      <motion.nav 
        className="hidden lg:flex flex-col fixed right-8 top-1/2 -translate-y-1/2 space-y-5 z-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <motion.div
              key={tab.id}
              className="relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 rounded-full transition-all duration-300 shadow-md ${
                  isActive
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                    : 'bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
                }`}
                aria-label={tab.label}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : ''}`} />
              </button>
              
              {/* Label tooltip */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-white dark:bg-dark-800 text-gray-800 dark:text-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium">
                  {tab.label}
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-0 transform translate-x-1/2 rotate-45 w-2 h-2 bg-white dark:bg-dark-800"></div>
              </div>
            </motion.div>
          );
        })}
      </motion.nav>

      {/* Tablet Navigation - Horizontal Top Bar */}
      <motion.nav 
        className="hidden md:flex lg:hidden fixed top-0 left-0 right-0 bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-md z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center items-center w-full py-3 px-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center mx-4 transition-all duration-300 ${
                  isActive
                    ? 'text-primary-500 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : ''}`} />
                <span className={`text-xs mt-1 font-medium ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                  {tab.label}
                </span>
                {isActive && (
                  <motion.div 
                    className="h-0.5 w-full mt-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                    layoutId="activeTabIndicator"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Navigation - Bottom Bar */}
      <motion.nav 
        className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-lg z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-around items-center p-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'text-primary-500 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : ''}`} />
                <span className={`text-[10px] mt-1 font-medium ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                  {tab.label}
                </span>
                {isActive && (
                  <motion.div 
                    className="h-0.5 w-full mt-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                    layoutId="mobileActiveTabIndicator"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Floating Menu Button (appears on scroll) */}
      <AnimatePresence>
        {showFloatingButton && (
          <motion.button
            className="md:hidden fixed bottom-20 right-4 z-50 p-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex flex-col items-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, staggerChildren: 0.1 }}
            >
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`flex items-center text-xl font-medium px-8 py-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                        : 'bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {tab.label}
                  </motion.button>
                );
              })}
            </motion.div>
            
            <motion.button
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <FaXmark className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
