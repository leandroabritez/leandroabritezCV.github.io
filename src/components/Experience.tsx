import React from 'react';
import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'BI Developer - Analista Programador BI ETL',
      company: 'QServices',
      client: 'GRUPO DASA (Laboratorios, hospitales y centros de diagnóstico)',
      location: 'Buenos Aires, Argentina',
      period: 'Ago. 2024 - Actualidad',
      description: 'Desarrollo y optimización de procesos ETL para el sector salud. Generación de reportes ejecutivos y creación de dashboards para distintas áreas del negocio.',
      achievements: [
        'Desarrollo e implementación de automatización BI de medición NPS para evaluar la satisfacción de pacientes y médicos',
        'Generación de reportes ejecutivos utilizando SQL Server Integration Services (SSIS)',
        'Creación de dashboards en Qlik Sense para RRHH, Marketing, Gerencia',
        'Automatización de reportes en Python'
      ],
      technologies: ['SQL Server', 'SSIS', 'Qlik Sense', 'Python', 'ETL'],
      isHighlighted: true
    },
    {
      title: 'Data Analyst',
      company: 'RdN',
      client: 'Servicios de administración de multas vehiculares',
      location: 'Buenos Aires, Argentina',
      period: 'Ago. 2023 - Jul. 2024',
      description: 'Análisis de datos de infracciones de tránsito y optimización del sistema de generación de multas.',
      achievements: [
        'Análisis de datos de infracciones de tránsito',
        'Generación de reportes con Python y PowerBI',
        'Optimización del sistema de generación de multas'
      ],
      technologies: ['Python', 'Power BI', 'SQL', 'Data Analysis'],
      isHighlighted: false
    },
    {
      title: 'Coordinador de Proyectos',
      company: 'Enercon',
      client: 'Ingeniería eléctrica para instalación y montaje de obras de gran envergadura',
      location: 'Buenos Aires, Argentina',
      period: 'Ago. 2019 - Jun. 2023',
      description: 'Gestión de proyectos eléctricos de gran envergadura con análisis de datos y seguimiento de KPIs.',
      achievements: [
        'Gestión de proyectos eléctricos',
        'Análisis de datos y actualización de KPIs',
        'Coordinación de equipos multidisciplinarios'
      ],
      technologies: ['Project Management', 'KPIs', 'Data Analysis'],
      isHighlighted: false
    },
    {
      title: 'Analista de Procesos',
      company: 'Nema Técnica',
      client: 'Ingeniería Eléctrica',
      location: 'Buenos Aires, Argentina',
      period: 'Abr. 2011 - Mar. 2014',
      description: 'Análisis de procesos y generación de reportes para optimización de operaciones.',
      achievements: [
        'ETL, reportes, tableros de comando',
        'Evaluación de operaciones',
        'Optimización de procesos'
      ],
      technologies: ['ETL', 'Reporting', 'Process Analysis'],
      isHighlighted: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mi trayectoria profesional en Data Science y Business Intelligence
          </p>
        </div>

        {/* Proyecto Destacado */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Proyecto Destacado
              </h3>
            </div>
            <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
              Sistema NPS para pacientes y médicos (QServices - Grupo DASA)
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Desarrollo e implementación de automatización BI de medición NPS para evaluar la satisfacción 
              de pacientes y médicos, integrando datos provistos por una encuestadora y CRM. Permitió al 
              equipo de marketing identificar oportunidades de mejora y diseñar acciones personalizadas 
              según el feedback recibido.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Business Intelligence', 'NPS', 'CRM Integration', 'Marketing Analytics', 'Automation'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start space-x-6 group"
              >
                {/* Timeline dot */}
                <div className={`hidden md:flex absolute left-6 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-125 transition-transform duration-300 z-10 ${
                  exp.isHighlighted ? 'bg-blue-600' : 'bg-gray-400'
                }`}></div>
                
                <div className="flex-1 md:ml-16">
                  <div className={`rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    exp.isHighlighted 
                      ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' 
                      : 'bg-gray-50 dark:bg-gray-800'
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 mb-2">
                          <span className="font-semibold text-blue-600 dark:text-blue-400">
                            {exp.company}
                          </span>
                        </div>
                        {exp.client && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                            Cliente: {exp.client}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col md:items-end space-y-1 mt-2 md:mt-0">
                        <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Logros principales:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex items-start">
                            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;