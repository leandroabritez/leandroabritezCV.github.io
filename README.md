# CV Interactivo - Leandro Britez

Portfolio personal profesional de Leandro Britez - Data Scientist especializado en Business Intelligence, ETL y análisis de datos.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Modo Oscuro/Claro**: Tema switcheable con transiciones suaves
- **Animaciones Suaves**: Microinteracciones y animaciones elegantes
- **Navegación Inteligente**: Scroll suave y indicador de sección activa
- **Formulario de Contacto**: Sistema de contacto funcional
- **Optimizado para SEO**: Meta tags y estructura semántica
- **Performance**: Carga rápida y optimizada

## 🛠️ Tecnologías Utilizadas

- **React 18** con TypeScript
- **Tailwind CSS** para estilos
- **Lucide React** para iconos
- **Vite** como bundler
- **GitHub Pages** para hosting

## 📦 Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/leandrobritez/leandrobritez.github.io.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🔧 Personalización

### 1. Información Personal
La información está actualizada con los datos de Leandro Britez:

- **Nombre**: Leandro Britez
- **Título**: Data Scientist | Data Analytics | Sound Engineer
- **Ubicación**: Buenos Aires, Argentina
- **Contacto**: +54 9 11 6451-3492 | leandroabritez@gmail.com
- **Redes**: LinkedIn y GitHub

### 2. Experiencia Profesional
- BI Developer en QServices (Grupo DASA) - Actual
- Data Analyst en RdN - 2023-2024
- Coordinador de Proyectos en Enercon - 2019-2023
- Analista de Procesos en Nema Técnica - 2011-2014

### 3. Habilidades Técnicas
- **Lenguajes**: Python, SQL, HTML/CSS
- **Bases de Datos**: SQL Server, MySQL, Google Cloud SQL, Data Warehouse
- **BI/Visualización**: Power BI, Tableau, Qlik Sense
- **Herramientas**: Git, GitHub, Docker, VSCode, JIRA, Trello
- **Cloud/DevOps**: Render, VirtualBox, PuTTY, FileZilla
- **Metodologías**: ETL, EDA, SSIS, Scrum

### 4. Formación
- Data Science - Henry Bootcamp (2023-2024)
- Ingeniería en Sonido - UNTREF (2007-2016)

## 🚀 Despliegue en GitHub Pages

### Configuración del Repositorio
1. Crea un repositorio llamado `leandrobritez.github.io`
2. Sube todos los archivos del proyecto
3. Ve a Settings > Pages
4. Selecciona la rama main como fuente
5. Tu sitio estará disponible en `https://leandrobritez.github.io`

### Método Automático con GitHub Actions
Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 📱 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección hero con info personal
│   ├── About.tsx       # Acerca de mí
│   ├── Experience.tsx  # Experiencia profesional
│   ├── Skills.tsx      # Habilidades técnicas
│   ├── Projects.tsx    # Proyectos destacados
│   ├── Contact.tsx     # Formulario de contacto
│   └── Footer.tsx      # Pie de página
├── App.tsx             # Componente principal
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales
```

## 🎯 Proyectos Destacados

### Sistema NPS - Grupo DASA
Desarrollo e implementación de automatización BI de medición NPS para evaluar la satisfacción de pacientes y médicos, integrando datos provistos por una encuestadora y CRM.

### Dashboard Ejecutivo - QServices
Desarrollo de dashboards interactivos en Qlik Sense para diferentes áreas del negocio con automatización de reportes en Python.

### Análisis de Infracciones de Tránsito
Sistema de análisis de datos de multas vehiculares con generación de reportes automatizados.

## 📈 Performance y SEO

- ✅ Lighthouse Score: 90+
- ✅ Core Web Vitals optimizados
- ✅ Meta tags completos para Data Scientist
- ✅ Estructura semántica
- ✅ Imágenes optimizadas
- ✅ Lazy loading implementado

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**Leandro Britez**
- GitHub: [@leandrobritez](https://github.com/leandrobritez)
- LinkedIn: [leandrobritez](https://linkedin.com/in/leandrobritez)
- Email: leandroabritez@gmail.com
- Teléfono: +54 9 11 6451-3492
- Ubicación: Buenos Aires, Argentina

---

⭐ ¡No olvides dar una estrella al proyecto si te fue útil!