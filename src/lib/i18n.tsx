import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, string>;
type Translations = Record<Lang, Dict>;

const translations: Translations = {
  es: {
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",

    "hero.role": "Desarrollador Web",
    "hero.tagline":
      "enfocado en crear soluciones eficientes y escalables. Me motiva la mejora continua y la optimización de procesos para ofrecer productos de calidad.",
    "hero.contact": "Contáctame",
    "hero.copy": "Copiar email",
    "hero.copied": "¡Copiado!",
    "hero.cv": "Descargar CV",

    "projects.title": "Proyecto destacado",
    "projects.visit": "Visitar web",
    "projects.challenges": "Descubre los retos superados",
    "projects.desc":
      "Plataforma SaaS de monitorización inteligente de inmuebles. Centraliza búsquedas en tiempo real desde múltiples portales (Idealista, Fotocasa, Pisos.com, Fondomio) y permite a asesores inmobiliarios captar clientes con datos limpios y estructurados.",
    "projects.modal.title": "Retos superados en PropTracker",
    "projects.modal.subtitle": "Desarrollo autónomo de extremo a extremo",
    "projects.ch.1": "Creación de API REST con FastAPI (Python).",
    "projects.ch.2": "Pruebas y validación de la API con Postman.",
    "projects.ch.3": "Desarrollo de robot scraper 24/7 en múltiples plataformas.",
    "projects.ch.4": "Despliegue del backend en producción con Railway.",
    "projects.ch.5": "Desarrollo autónomo completo del proyecto.",
    "projects.ch.6": "Diseño inicial mediante Wireframes en Miro.",
    "projects.ch.7": "Gestión de tareas colaborativas con Notion.",
    "projects.ch.8": "Implementación de filtros avanzados para los pisos.",
    "projects.ch.9":
      "Reducción de la velocidad de carga en un 60% optimizando consultas y scraping.",
    "projects.ch.10":
      "Reestructuración de bases de datos PostgreSQL con Supabase para escalar.",

    "exp.title": "Experiencia laboral",
    "exp.now": "Actualidad",
    "exp.previous": "Anterior",
    "exp.j1.period": "Enero 2025 — Actualidad",
    "exp.j1.role": "Cofundador / Desarrollador",
    "exp.j1.company": "PropTracker",
    "exp.j1.b1": "Diseñé y construí la arquitectura completa: backend en Python, REST APIs, frontend con React + TailwindCSS y base de datos PostgreSQL (Supabase).",
    "exp.j1.b2": "Desarrollé bots de scraping 24/7 monitorizando Idealista, Fotocasa, Pisos.com e Indomio en tiempo real.",
    "exp.j1.b3": "Desarrollé un sistema de puntuación de propiedades con IA, alertas automatizadas y notificaciones.",
    "exp.j1.b4": "Reduje los tiempos de carga un 60% mediante optimización de rendimiento.",
    "exp.j1.b5": "Construí un sistema multiusuario con roles, permisos y asignación de exclusividad por zona.",
    "exp.j2.period": "Julio 2025 — Actualidad",
    "exp.j2.role": "Asesor Educativo",
    "exp.j2.company": "ESSAE",
    "exp.j2.b1": "Gestión de procesos comerciales y captación de alumnos.",
    "exp.j2.b2": "Comunicación directa con clientes y asesoramiento personalizado.",
    "exp.j2.b3": "Habilidades de negociación y resolución de problemas.",
    "exp.j3.period": "Anterior",
    "exp.j3.role": "Gestión hipotecaria",
    "exp.j3.company": "Sector financiero",
    "exp.j3.b1": "Gestión de procesos hipotecarios y tasación.",
    "exp.j3.b2": "Abono y seguimiento de préstamos hipotecarios.",

    "skills.title": "Habilidades",
    "skills.languages": "Lenguajes",
    "skills.frameworks": "Frameworks & Librerías",
    "skills.databases": "Bases de datos",
    "skills.tools": "Otras herramientas",

    "about.title": "Sobre mí",
    "about.p1.a": "Desarrollador con formación en ",
    "about.p1.b": "Desarrollo de Aplicaciones Web (DAW)",
    "about.p1.c": " y especialización en ",
    "about.p1.d": "Inteligencia Artificial y Big Data",
    "about.p1.e": ".",
    "about.p2":
      "Experiencia construyendo aplicaciones con Python y React, incluyendo proyectos propios y una startup tecnológica. Me interesan las soluciones basadas en datos, la automatización y el Machine Learning.",
    "about.p3":
      "Mi trayectoria previa en el ámbito comercial me ha dado una visión orientada al cliente: traduzco necesidades reales en soluciones técnicas efectivas.",
    "about.education": "Formación",
    "about.languages": "Idiomas",
    "about.edu.1": "Programación en IA y Big Data (5G)",
    "about.edu.1.place": "Junta de Andalucía",
    "about.edu.2": "Desarrollo de Aplicaciones Web (DAW)",
    "about.edu.2.place": "Medac",
    "about.edu.3": "Certificados de lenguajes con proyectos",
    "about.edu.3.place": "Udemy",
    "about.lang.es": "Español",
    "about.lang.es.lvl": "Nativo",
    "about.lang.en": "Inglés",
    "about.lang.en.lvl": "Intermedio",

    "contact.title": "Hablemos",
    "contact.heading": "¿Tienes una idea o proyecto en mente?",
    "contact.sub":
      "Estoy disponible para nuevas colaboraciones y oportunidades. Escríbeme y respondo en menos de 24h.",
    "footer.built": "Construido con React + TanStack",

    "ui.close": "Cerrar",
    "ui.theme.light": "Modo claro",
    "ui.theme.dark": "Modo oscuro",
    "ui.lang.toggle": "Cambiar idioma",
  },
  en: {
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.contact": "Contact",

    "hero.role": "Web Developer",
    "hero.tagline":
      "focused on building efficient, scalable solutions. Driven by continuous improvement and process optimization to deliver quality products.",
    "hero.contact": "Get in touch",
    "hero.copy": "Copy email",
    "hero.copied": "Copied!",
    "hero.cv": "Download CV",

    "projects.title": "Featured project",
    "projects.visit": "Visit website",
    "projects.challenges": "See the challenges I solved",
    "projects.desc":
      "SaaS platform for smart real-estate monitoring. Centralizes real-time searches across multiple portals (Idealista, Fotocasa, Pisos.com, Fondomio) and helps real-estate advisors capture leads with clean, structured data.",
    "projects.modal.title": "Challenges solved on PropTracker",
    "projects.modal.subtitle": "End-to-end autonomous development",
    "projects.ch.1": "Built a REST API with FastAPI (Python).",
    "projects.ch.2": "API testing and validation with Postman.",
    "projects.ch.3": "Developed a 24/7 scraper bot across multiple platforms.",
    "projects.ch.4": "Deployed the backend to production on Railway.",
    "projects.ch.5": "Full autonomous development of the project.",
    "projects.ch.6": "Initial design through wireframes in Miro.",
    "projects.ch.7": "Collaborative task management with Notion.",
    "projects.ch.8": "Advanced filters for property listings.",
    "projects.ch.9": "Reduced load time by 60% optimizing queries and scraping.",
    "projects.ch.10": "Restructured PostgreSQL databases with Supabase to scale.",

    "exp.title": "Work experience",
    "exp.now": "Present",
    "exp.previous": "Previous",
    "exp.j1.period": "January 2025 — Present",
    "exp.j1.role": "Co-founder / Developer",
    "exp.j1.company": "PropTracker",
    "exp.j1.b1": "Designed and built the full architecture: Python backend, REST APIs, React + TailwindCSS frontend and PostgreSQL database (Supabase).",
    "exp.j1.b2": "Built 24/7 scraping bots monitoring Idealista, Fotocasa, Pisos.com and Indomio in real time.",
    "exp.j1.b3": "Developed an AI-powered property scoring system with automated alerts and notifications.",
    "exp.j1.b4": "Reduced page load times by 60% through performance optimization.",
    "exp.j1.b5": "Built a multi-user system with roles, permissions and zone-based exclusivity assignment.",
    "exp.j2.period": "July 2025 — Present",
    "exp.j2.role": "Educational Advisor",
    "exp.j2.company": "ESSAE",
    "exp.j2.b1": "Sales process management and student acquisition.",
    "exp.j2.b2": "Direct client communication and tailored advisory.",
    "exp.j2.b3": "Negotiation and problem-solving skills.",
    "exp.j3.period": "Previous",
    "exp.j3.role": "Mortgage management",
    "exp.j3.company": "Financial sector",
    "exp.j3.b1": "Mortgage process management and appraisal.",
    "exp.j3.b2": "Mortgage loan payments and follow-up.",

    "skills.title": "Skills",
    "skills.languages": "Languages",
    "skills.frameworks": "Frameworks & Libraries",
    "skills.databases": "Databases",
    "skills.tools": "Other tools",

    "about.title": "About me",
    "about.p1.a": "Developer trained in ",
    "about.p1.b": "Web Application Development (DAW)",
    "about.p1.c": " and specialized in ",
    "about.p1.d": "Artificial Intelligence and Big Data",
    "about.p1.e": ".",
    "about.p2":
      "Experience building apps with Python and React, including personal projects and a tech startup. Interested in data-driven solutions, automation and Machine Learning.",
    "about.p3":
      "My previous background in sales gave me a client-oriented mindset: I translate real needs into effective technical solutions.",
    "about.education": "Education",
    "about.languages": "Languages",
    "about.edu.1": "AI & Big Data Programming (5G)",
    "about.edu.1.place": "Junta de Andalucía",
    "about.edu.2": "Web Application Development (DAW)",
    "about.edu.2.place": "Medac",
    "about.edu.3": "Language certificates with projects",
    "about.edu.3.place": "Udemy",
    "about.lang.es": "Spanish",
    "about.lang.es.lvl": "Native",
    "about.lang.en": "English",
    "about.lang.en.lvl": "Intermediate",

    "contact.title": "Let's talk",
    "contact.heading": "Got an idea or a project in mind?",
    "contact.sub":
      "I'm open to new collaborations and opportunities. Drop me a line — I reply within 24h.",
    "footer.built": "Built with React + TanStack",

    "ui.close": "Close",
    "ui.theme.light": "Light mode",
    "ui.theme.dark": "Dark mode",
    "ui.lang.toggle": "Switch language",
  },
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored === "es" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", l);
      document.documentElement.lang = l;
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string) => translations[lang][key] ?? key;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
