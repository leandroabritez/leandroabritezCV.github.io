import React from 'react';
import { Code, Database, BarChart3, Cloud, Settings, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Lenguajes de Programación',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'Python', level: 95, details: 'Pandas, NumPy, Seaborn, Matplotlib, Scikit-learn, FastAPI, Streamlit' },
        { name: 'SQL', level: 98, details: 'Consultas complejas, optimización, procedimientos almacenados' },
        { name: 'HTML/CSS', level: 80, details: 'Desarrollo web básico y estilizado' }
      ]
    },
    {
      title: 'Bases de Datos',
      icon: Database,
      color: 'green',
      skills: [
        { name: 'SQL Server', level: 95, details: 'SSIS, administración, optimización' },
        { name: 'MySQL', level: 90, details: 'Diseño de esquemas, consultas avanzadas' },
        { name: 'Google Cloud SQL', level: 85, details: 'Configuración y gestión en la nube' },
        { name: 'Data Warehouse', level: 88, details: 'Diseño dimensional, ETL' },
        { name: 'Data Lake', level: 82, details: 'Arquitectura de datos moderna' },
        { name: 'NoSQL', level: 75, details: 'Bases de datos no relacionales' }
      ]
    },
    {
      title: 'BI & Visualización',
      icon: BarChart3,
      color: 'purple',
      skills: [
        { name: 'Power BI', level: 95, details: 'DAX, modelado de datos, dashboards' },
        { name: 'Tableau', level: 88, details: 'Visualizaciones avanzadas, storytelling' },
        { name: 'Qlik Sense', level: 92, details: 'Desarrollo de aplicaciones BI' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'orange',
      skills: [
        { name: 'Render', level: 80, details: 'Despliegue de aplicaciones' },
        { name: 'Docker', level: 75, details: 'Containerización básica' },
        { name: 'VirtualBox', level: 85, details: 'Virtualización y testing' },
        { name: 'PuTTY/FileZilla', level: 90, details: 'Administración remota' }
      ]
    },
    {
      title: 'Herramientas',
      icon: Settings,
      color: 'gray',
      skills: [
        { name: 'Git/GitHub', level: 88, details: 'Control de versiones, colaboración' },
        { name: 'VSCode', level: 95, details: 'Desarrollo y debugging' },
        { name: 'JIRA', level: 85, details: 'Gestión de proyectos ágiles' },
        { name: 'Trello', level: 90, details: 'Organización de tareas' }
      ]
    },
    {
      title: 'Metodologías',
      icon: Globe,
      color: 'pink',
      skills: [
        { name: 'ETL', level: 95, details: 'Extract, Transform, Load processes' },
        { name: 'EDA', level: 92, details: 'Exploratory Data Analysis' },
        { name: 'SSIS', level: 90, details: 'SQL Server Integration Services' },
        { name: 'Scrum', level: 85, details: 'Metodologías ágiles' }
      ]
    }
  ];

  const getColorClasses = (color: string, variant: 'bg' | 'text' | 'border') => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-800'
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-200 dark:border-green-800'
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-800'
      },
      orange: {
        bg: 'bg-orange-100 dark:bg-orange-900/30',
        text: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-200 dark:border-orange-800'
      },
      pink: {
        bg: 'bg-pink-100 dark:bg-pink-900/30',
        text: 'text-pink-600 dark:text-pink-400',
        border: 'border-pink-200 dark:border-pink-800'
      },
      gray: {
        bg: 'bg-gray-100 dark:bg-gray-700',
        text: 'text-gray-600 dark:text-gray-400',
        border: 'border-gray-200 dark:border-gray-600'
      }
    };
    return colorMap[color as keyof typeof colorMap][variant];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tecnologías y herramientas especializadas en Data Science y Business Intelligence
          </p>
        </div>

        {/* Idiomas */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              Idiomas
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Español</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Nativo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Inglés</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Intermedio (B1 - EF SET)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 ${getColorClasses(category.color, 'bg')} rounded-lg flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 ${getColorClasses(category.color, 'text')}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className={`text-sm font-bold ${getColorClasses(category.color, 'text')}`}>
                        {skill.level}%
                      </span>
                    </div>
                    {skill.details && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        {skill.details}
                      </p>
                    )}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r transition-all duration-1000 ease-out ${
                          category.color === 'blue' ? 'from-blue-500 to-blue-600' :
                          category.color === 'green' ? 'from-green-500 to-green-600' :
                          category.color === 'purple' ? 'from-purple-500 to-purple-600' :
                          category.color === 'orange' ? 'from-orange-500 to-orange-600' :
                          category.color === 'pink' ? 'from-pink-500 to-pink-600' :
                          'from-gray-500 to-gray-600'
                        }`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;