import React from 'react';
import { Moon, Sun, Home, User, Briefcase, Code, FolderOpen, Mail } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'about', label: 'Acerca', icon: User },
    { id: 'experience', label: 'Experiencia', icon: Briefcase },
    { id: 'skills', label: 'Habilidades', icon: Code },
    { id: 'projects', label: 'Proyectos', icon: FolderOpen },
    { id: 'contact', label: 'Contacto', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mi Portfolio
            </div>
            <div className="hidden md:flex space-x-6">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === id
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon size={16} />
                  <span className="text-sm">{label}</span>
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;