import React from 'react';
import { ExternalLink, Github, Calendar, Award, BarChart3, Database, Brain } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Sistema NPS - Grupo DASA',
      description: 'Sistema completo de medición NPS para evaluar satisfacción de pacientes y médicos. Automatización BI con integración de datos de encuestadora y CRM para generar insights accionables.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['SQL Server', 'SSIS', 'Qlik Sense', 'Python', 'CRM Integration'],
      category: 'Business Intelligence',
      date: '2024',
      isHighlighted: true,
      icon: Award
    },
    {
      title: 'Dashboard Ejecutivo - QServices',
      description: 'Desarrollo de dashboards interactivos en Qlik Sense para diferentes áreas del negocio (RRHH, Marketing, Gerencia) con automatización de reportes en Python.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Qlik Sense', 'Python', 'SQL Server', 'SSIS', 'ETL'],
      category: 'Data Visualization',
      date: '2024',
      isHighlighted: false,
      icon: BarChart3
    },
    {
      title: 'Análisis de Infracciones de Tránsito',
      description: 'Sistema de análisis de datos de multas vehiculares con generación de reportes automatizados y optimización del proceso de generación de infracciones.',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Power BI', 'SQL', 'Data Analysis', 'Pandas'],
      category: 'Data Analytics',
      date: '2023-2024',
      isHighlighted: false,
      icon: BarChart3
    },
    {
      title: 'ETL Automation Framework',
      description: 'Framework de automatización ETL para procesos de extracción, transformación y carga de datos con monitoreo y alertas automáticas.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['SSIS', 'SQL Server', 'Python', 'PowerShell', 'Automation'],
      category: 'Data Engineering',
      date: '2024',
      isHighlighted: false,
      icon: Database
    },
    {
      title: 'KPI Dashboard - Enercon',
      description: 'Sistema de seguimiento de KPIs para proyectos eléctricos de gran envergadura con análisis de rendimiento y alertas tempranas.',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Excel', 'VBA', 'SQL', 'Project Management', 'KPIs'],
      category: 'Project Analytics',
      date: '2019-2023',
      isHighlighted: false,
      icon: BarChart3
    },
    {
      title: 'Machine Learning Models',
      description: 'Desarrollo de modelos predictivos utilizando Scikit-learn para análisis de patrones y predicción de tendencias en datos empresariales.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      category: 'Machine Learning',
      date: '2023-2024',
      isHighlighted: false,
      icon: Brain
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos y Casos de Éxito
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Proyectos destacados en Data Science, Business Intelligence y análisis de datos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                project.isHighlighted 
                  ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800' 
                  : 'bg-gray-50 dark:bg-gray-800'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className={`px-3 py-1 text-white text-xs font-medium rounded-full ${
                    project.isHighlighted ? 'bg-blue-600' : 'bg-gray-600'
                  }`}>
                    {project.category}
                  </span>
                  {project.isHighlighted && (
                    <div className="p-1 bg-yellow-500 rounded-full">
                      <Award size={12} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <div className={`p-2 rounded-full ${
                    project.isHighlighted 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                  }`}>
                    <project.icon size={16} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 ${
                    project.isHighlighted 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                    <Calendar size={14} />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        project.isHighlighted
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.isHighlighted && (
                  <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <p className="text-blue-800 dark:text-blue-300 text-sm font-medium">
                      🏆 Proyecto destacado con impacto directo en la estrategia de marketing
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Educación */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Formación Académica
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Data Science</h4>
                  <p className="text-gray-600 dark:text-gray-300">Henry Bootcamp</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">2023-2024</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Ingeniería en Sonido</h4>
                  <p className="text-gray-600 dark:text-gray-300">UNTREF</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">2007-2016</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;