import React from 'react';
import { Heart, Database } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-400">Hecho con</span>
            <Heart className="w-5 h-5 text-red-500 animate-pulse" />
            <span className="text-gray-400">y</span>
            <Database className="w-5 h-5 text-blue-400" />
            <span className="text-gray-400">por Leandro Britez</span>
          </div>
          
          <p className="text-gray-400 mb-6">
            Data Scientist especializado en Business Intelligence y análisis de datos
          </p>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Leandro Britez. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;