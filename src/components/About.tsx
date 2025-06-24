import React from 'react';
import { Database, BarChart3, Brain, Headphones } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Database,
      title: 'ETL & Bases de Datos',
      description: 'SQL Server, MySQL, procesos ETL'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Power BI, Tableau, Qlik Sense'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Python, Scikit-learn, análisis predictivo'
    },
    {
      icon: Headphones,
      title: 'Ingeniería en Sonido',
      description: 'Formación técnica multidisciplinaria'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Acerca de Mí
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Data Scientist con formación en ingeniería y experiencia en coordinación de proyectos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Combino habilidades de planificación y comunicación con conocimientos técnicos avanzados 
              para organizar flujos de trabajo efectivos. Domino SQL para procesos ETL y gestión de 
              bases de datos, y utilizo Python para análisis exploratorios, generación de reportes 
              y desarrollo de modelos.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              En visualización de datos, trabajo con Power BI, Tableau y Qlik Sense para crear 
              dashboards que transforman información compleja para ayudar a resolver problemas de negocio. 
              Mi experiencia en Business Intelligence, machine learning y metodologías ágiles me permite 
              colaborar eficientemente en equipos multidisciplinarios y optimizar procesos.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Busco seguir creciendo profesionalmente en entornos donde pueda aportar valor mediante 
              el análisis de datos y la automatización de soluciones.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Python', 'SQL', 'Power BI', 'Tableau', 'Qlik Sense', 'Machine Learning', 'ETL', 'SSIS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;