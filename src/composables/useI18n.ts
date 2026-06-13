import { ref, computed } from 'vue'

export type Language = 'en' | 'fr' | 'nl'

const translations = {
  en: {
    // Header
    nav: {
      about: 'About',
      applications: 'Applications',
      features: 'Features',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      tagline: 'The productivity ecosystem that adapts to your workflow.',
      description: 'Discover powerful applications designed to enhance efficiency and streamline your professional life.',
      exploreApps: 'Explore Applications',
      tryChronor: 'Try Chronor',
      lightningFast: 'Lightning Fast',
      lightningFastDesc: 'Optimized for speed and performance',
      modernDesign: 'Modern Design',
      modernDesignDesc: 'Beautiful, intuitive interfaces',
      secure: 'Secure',
      secureDesc: 'Your data, always protected'
    },
    // About Section
    about: {
      badge: 'About ORPulse',
      title: 'Productivity Redefined',
      description: 'ORPulse is more than a collection of tools—it\'s a complete ecosystem designed to seamlessly integrate into your professional workflow.',
      visionTitle: 'Our Vision',
      visionDesc: 'We believe productivity tools should be intuitive, powerful, and beautiful. Every application in the ORPulse ecosystem is crafted with attention to detail and user experience, ensuring that technology enhances rather than complicates your work.',
      differenceTitle: 'What Makes Us Different',
      unifiedExp: 'Unified Experience',
      unifiedExpDesc: 'All applications share consistent design and functionality',
      privacyFirst: 'Privacy-First',
      privacyFirstDesc: 'Your data stays yours, with transparent policies and secure infrastructure',
      innovation: 'Continuous Innovation',
      innovationDesc: 'Regular updates driven by user feedback and emerging needs',
      applicationsCount: 'Applications',
      openSource: 'Open Source',
      available: 'Available'
    },
    // Applications Section
    applications: {
      badge: 'Our Applications',
      title: 'Powerful Tools for Every Need',
      description: 'Explore our growing suite of applications, each designed to solve specific productivity challenges with elegant, modern solutions.',
      chronorDesc: 'Advanced time management with intelligent scheduling, task tracking, and productivity analytics to optimize your workflow and maximize efficiency.',
      timeLoggerDesc: 'Professional time tracking solution with attendance management, compliance reporting, and advanced workforce analytics for businesses.',
      projectHubDesc: 'Comprehensive project management platform with team collaboration, resource planning, and real-time progress tracking for organizations.',
      live: 'Live',
      inDevelopment: 'In Development',
      comingSoon: 'Coming Soon',
      visitChronor: 'Visit Chronor',
      // Features
      timeTracking: 'Time Tracking & Analytics',
      intelligentScheduling: 'Intelligent Scheduling',
      productivityInsights: 'Productivity Insights',
      attendanceManagement: 'Attendance Management',
      complianceReporting: 'Compliance Reporting',
      workforceAnalytics: 'Workforce Analytics',
      teamCollaboration: 'Team Collaboration',
      resourcePlanning: 'Resource Planning',
      progressTracking: 'Real-time Progress Tracking',
      ctaTitle: 'Have an idea for a new application?',
      ctaDesc: 'We\'re constantly expanding the ORPulse ecosystem. Share your ideas and help us build the tools that will shape the future of productivity.',
      getInTouch: 'Get in Touch'
    },
    // Features Section
    features: {
      title: 'Why Choose ORPulse',
      description: 'Built with modern technology and designed for real-world productivity challenges',
      lightningFast: 'Lightning Fast',
      lightningFastDesc: 'Optimized performance with sub-second load times and instant responses. Built on modern web technologies for maximum speed.',
      securePrivate: 'Secure & Private',
      securePrivateDesc: 'Enterprise-grade security with privacy-first design principles. Your data is protected with industry-standard encryption.',
      alwaysImproving: 'Always Improving',
      alwaysImprovingDesc: 'Regular updates and new features driven by user feedback and the latest technological innovations.',
      crossPlatform: 'Cross-Platform',
      crossPlatformDesc: 'Native experience across all devices and operating systems with perfect synchronization.',
      beautifulDesign: 'Beautiful Design',
      beautifulDesignDesc: 'Thoughtfully crafted interfaces that blend functionality with aesthetic excellence.',
      powerfulTools: 'Powerful Tools',
      powerfulToolsDesc: 'Advanced features and integrations that grow with your needs and workflow.',
      uptime: 'Uptime',
      responseTime: 'Response Time',
      support: 'Support',
      certified: 'Certified'
    },
    // Contact Section
    contact: {
      badge: 'Get in Touch',
      title: 'Let\'s Build Together',
      description: 'Have ideas for new applications? Found a bug? Want to collaborate? We\'d love to hear from you and grow the ORPulse ecosystem together.',
      githubDesc: 'Explore our open-source projects, report issues, or contribute to the codebase.',
      visitRepo: 'Visit Repository',
      emailDesc: 'Reach out directly for partnerships, feedback, or technical support.',
      featureTitle: 'Have a Feature Request?',
      featureDesc: 'Your feedback drives our development. Whether it\'s a new application idea, feature enhancement, or improvement suggestion, we want to hear it.',
      submitFeedback: 'Submit Feedback',
      viewSource: 'View Source Code'
    },
    // Footer
    footer: {
      description: 'Simple, powerful tools that enhance your productivity. Built for professionals who value clarity and efficiency.',
      applications: 'Applications',
      company: 'Company',
      about: 'About',
      contact: 'Contact',
      comingSoon: 'Coming Soon',
      rights: 'All rights reserved.',
      builtWith: 'Built with ❤️ by the ORPulse team'
    },
    // 404 Page
    notFound: {
      title: 'Page Not Found',
      description: 'Oops! The page you\'re looking for doesn\'t exist. It might have been moved or deleted.',
      goHome: 'Go Home',
      goBack: 'Go Back',
      interested: 'You might be interested in:',
      ourApps: 'Our Applications',
      aboutUs: 'About ORPulse',
      contactUs: 'Contact Us'
    }
  },
  fr: {
    // Header
    nav: {
      about: 'À propos',
      applications: 'Applications',
      features: 'Fonctionnalités',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      tagline: 'L\'écosystème de productivité qui s\'adapte à votre flux de travail.',
      description: 'Découvrez des applications puissantes conçues pour améliorer l\'efficacité et rationaliser votre vie professionnelle.',
      exploreApps: 'Explorer les Applications',
      tryChronor: 'Essayer Chronor',
      lightningFast: 'Ultra Rapide',
      lightningFastDesc: 'Optimisé pour la vitesse et la performance',
      modernDesign: 'Design Moderne',
      modernDesignDesc: 'Interfaces belles et intuitives',
      secure: 'Sécurisé',
      secureDesc: 'Vos données, toujours protégées'
    },
    // About Section
    about: {
      badge: 'À propos d\'ORPulse',
      title: 'Productivity Redefined',
      description: 'ORPulse est plus qu\'une collection d\'outils—c\'est un écosystème complet conçu pour s\'intégrer parfaitement dans votre flux de travail professionnel.',
      visionTitle: 'Notre Vision',
      visionDesc: 'Nous croyons que les outils de productivité doivent être intuitifs, puissants et beaux. Chaque application de l\'écosystème ORPulse est conçue avec une attention aux détails et à l\'expérience utilisateur, garantissant que la technologie améliore plutôt que complique votre travail.',
      differenceTitle: 'Ce qui nous rend différents',
      unifiedExp: 'Expérience Unifiée',
      unifiedExpDesc: 'Toutes les applications partagent un design et une fonctionnalité cohérents',
      privacyFirst: 'Confidentialité',
      privacyFirstDesc: 'Vos données restent les vôtres, avec des politiques transparentes et une infrastructure sécurisée',
      innovation: 'Innovation',
      innovationDesc: 'Mises à jour régulières basées sur les commentaires des utilisateurs et les besoins émergents',
      applicationsCount: 'Applications',
      openSource: 'Open Source',
      available: 'Disponible'
    },
    // Applications Section
    applications: {
      badge: 'Nos Applications',
      title: 'Des Outils Puissants pour Chaque Besoin',
      description: 'Explorez notre suite croissante d\'applications, chacune conçue pour résoudre des défis de productivité spécifiques avec des solutions élégantes et modernes.',
      chronorDesc: 'Gestion avancée du temps avec planification intelligente, suivi des tâches et analyses de productivité pour optimiser votre flux de travail.',
      timeLoggerDesc: 'Solution professionnelle de suivi du temps avec gestion des présences, rapports de conformité et analyses avancées pour les entreprises.',
      projectHubDesc: 'Plateforme complète de gestion de projet avec collaboration d\'équipe, planification des ressources et suivi des progrès en temps réel.',
      live: 'En ligne',
      inDevelopment: 'En développement',
      comingSoon: 'Bientôt disponible',
      visitChronor: 'Visiter Chronor',
      // Features
      timeTracking: 'Suivi du Temps et Analyses',
      intelligentScheduling: 'Planification Intelligente',
      productivityInsights: 'Insights de Productivité',
      attendanceManagement: 'Gestion des Présences',
      complianceReporting: 'Rapports de Conformité',
      workforceAnalytics: 'Analyses de Main-d\'œuvre',
      teamCollaboration: 'Collaboration d\'Équipe',
      resourcePlanning: 'Planification des Ressources',
      progressTracking: 'Suivi des Progrès en Temps Réel',
      ctaTitle: 'Vous avez une idée pour une nouvelle application?',
      ctaDesc: 'Nous élargissons constamment l\'écosystème ORPulse. Partagez vos idées et aidez-nous à créer les outils qui façonneront l\'avenir de la productivité.',
      getInTouch: 'Nous Contacter'
    },
    // Features Section
    features: {
      title: 'Pourquoi Choisir ORPulse',
      description: 'Construit avec une technologie moderne et conçu pour les défis de productivité du monde réel',
      lightningFast: 'Ultra Rapide',
      lightningFastDesc: 'Performance optimisée avec des temps de chargement inférieurs à une seconde et des réponses instantanées. Construit sur des technologies web modernes pour une vitesse maximale.',
      securePrivate: 'Sécurisé et Privé',
      securePrivateDesc: 'Sécurité de niveau entreprise avec des principes de conception axés sur la confidentialité. Vos données sont protégées par un cryptage standard de l\'industrie.',
      alwaysImproving: 'Toujours en Amélioration',
      alwaysImprovingDesc: 'Mises à jour régulières et nouvelles fonctionnalités basées sur les commentaires des utilisateurs et les dernières innovations technologiques.',
      crossPlatform: 'Multi-plateforme',
      crossPlatformDesc: 'Expérience native sur tous les appareils et systèmes d\'exploitation avec une synchronisation parfaite.',
      beautifulDesign: 'Design élégant',
      beautifulDesignDesc: 'Interfaces soigneusement conçues qui allient fonctionnalité et excellence esthétique.',
      powerfulTools: 'Outils Puissants',
      powerfulToolsDesc: 'Fonctionnalités avancées et intégrations qui évoluent avec vos besoins et votre flux de travail.',
      uptime: 'Disponibilité',
      responseTime: 'Temps de Réponse',
      support: 'Support',
      certified: 'Certifié'
    },
    // Contact Section
    contact: {
      badge: 'Contactez-nous',
      title: 'Construisons Ensemble',
      description: 'Vous avez des idées pour de nouvelles applications? Trouvé un bug? Envie de collaborer? Nous aimerions vous entendre et développer l\'écosystème ORPulse ensemble.',
      githubDesc: 'Explorez nos projets open source, signalez des problèmes ou contribuez au code.',
      visitRepo: 'Visiter le Repository',
      emailDesc: 'Contactez-nous directement pour des partenariats, des commentaires ou du support technique.',
      featureTitle: 'Vous avez une Demande de Fonctionnalité?',
      featureDesc: 'Vos commentaires guident notre développement. Qu\'il s\'agisse d\'une idée de nouvelle application, d\'une amélioration de fonctionnalité ou d\'une suggestion d\'amélioration, nous voulons l\'entendre.',
      submitFeedback: 'Soumettre des Commentaires',
      viewSource: 'Voir le Code Source'
    },
    // Footer
    footer: {
      description: 'Des outils simples et puissants qui améliorent votre productivité. Conçu pour les professionnels qui valorisent la clarté et l\'efficacité.',
      applications: 'Applications',
      company: 'Entreprise',
      about: 'À propos',
      contact: 'Contact',
      comingSoon: 'Bientôt disponible',
      rights: 'Tous droits réservés.',
      builtWith: 'Fait avec ❤️ par l\'équipe ORPulse'
    },
    // 404 Page
    notFound: {
      title: 'Page Non Trouvée',
      description: 'Oups! La page que vous recherchez n\'existe pas. Elle a peut-être été déplacée ou supprimée.',
      goHome: 'Retour à l\'accueil',
      goBack: 'Retour',
      interested: 'Vous pourriez être intéressé par:',
      ourApps: 'Nos Applications',
      aboutUs: 'À propos d\'ORPulse',
      contactUs: 'Nous Contacter'
    }
  },
  nl: {
    // Header
    nav: {
      about: 'Over',
      applications: 'Applicaties',
      features: 'Functies',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      tagline: 'Het productiviteitsecosysteem dat zich aanpast aan uw workflow.',
      description: 'Ontdek krachtige applicaties die zijn ontworpen om de efficiëntie te verbeteren en uw professionele leven te stroomlijnen.',
      exploreApps: 'Ontdek Applicaties',
      tryChronor: 'Probeer Chronor',
      lightningFast: 'Bliksemsnel',
      lightningFastDesc: 'Geoptimaliseerd voor snelheid en prestaties',
      modernDesign: 'Modern Ontwerp',
      modernDesignDesc: 'Mooie, intuïtieve interfaces',
      secure: 'Veilig',
      secureDesc: 'Uw gegevens, altijd beschermd'
    },
    // About Section
    about: {
      badge: 'Over ORPulse',
      title: 'Productiviteit Hergedefinieerd',
      description: 'ORPulse is meer dan een verzameling tools—het is een compleet ecosysteem dat naadloos integreert in uw professionele workflow.',
      visionTitle: 'Onze Visie',
      visionDesc: 'Wij geloven dat productiviteitstools intuïtief, krachtig en mooi moeten zijn. Elke applicatie in het ORPulse-ecosysteem is met aandacht voor detail en gebruikerservaring gemaakt, zodat technologie uw werk vergemakkelijkt in plaats van bemoeilijkt.',
      differenceTitle: 'Wat Ons Verschillend Maakt',
      unifiedExp: 'Eenduidige Ervaring',
      unifiedExpDesc: 'Alle applicaties delen een consistent ontwerp en functionaliteit',
      privacyFirst: 'Privacy Eerst',
      privacyFirstDesc: 'Uw gegevens blijven van u, met een transparant beleid en een veilige infrastructuur',
      innovation: 'Voortdurende Innovatie',
      innovationDesc: 'Regelmatige updates op basis van feedback van gebruikers en nieuwe behoeften',
      applicationsCount: 'Applicaties',
      openSource: 'Open Source',
      available: 'Beschikbaar'
    },
    // Applications Section
    applications: {
      badge: 'Onze Applicaties',
      title: 'Krachtige Tools voor Elke Behoefte',
      description: 'Ontdek onze groeiende suite van applicaties, elk ontworpen om specifieke productiviteitsuitdagingen op te lossen met elegante, moderne oplossingen.',
      chronorDesc: 'Geavanceerd tijdbeheer met intelligente planning, taakregistratie en productiviteitsanalyses om uw workflow te optimaliseren en de efficiëntie te maximiseren.',
      timeLoggerDesc: 'Professionele tijdregistratie-oplossing met aanwezigheidsregistratie, nalevingsrapportage en geavanceerde personeelsanalyses voor bedrijven.',
      projectHubDesc: 'Uitgebreid projectbeheerplatform met teamsamenwerking, resourceplanning en realtime voortgangsregistratie voor organisaties.',
      live: 'Live',
      inDevelopment: 'In Ontwikkeling',
      comingSoon: 'Binnenkort Beschikbaar',
      visitChronor: 'Bezoek Chronor',
      timeTracking: 'Tijdregistratie & Analyses',
      intelligentScheduling: 'Intelligente Planning',
      productivityInsights: 'Productiviteitsinzichten',
      attendanceManagement: 'Aanwezigheidsbeheer',
      complianceReporting: 'Nalevingsrapportage',
      workforceAnalytics: 'Personeelsanalyses',
      teamCollaboration: 'Teamsamenwerking',
      resourcePlanning: 'Resourceplanning',
      progressTracking: 'Realtime Voortgangsregistratie',
      ctaTitle: 'Heeft u een idee voor een nieuwe applicatie?',
      ctaDesc: 'We breiden het ORPulse-ecosysteem voortdurend uit. Deel uw ideeën en help ons de tools te bouwen die de toekomst van productiviteit vormgeven.',
      getInTouch: 'Neem Contact Op'
    },
    // Features Section
    features: {
      title: 'Waarom Kiezen voor ORPulse',
      description: 'Gebouwd met moderne technologie en ontworpen voor real-world productiviteitsuitdagingen',
      lightningFast: 'Bliksemsnel',
      lightningFastDesc: 'Geoptimaliseerde prestaties met laadtijden van minder dan een seconde en directe reacties. Gebouwd op moderne webtechnologieën voor maximale snelheid.',
      securePrivate: 'Veilig & Privé',
      securePrivateDesc: 'Beveiliging op enterpriseniveau met privacy-first ontwerpprincipes. Uw gegevens zijn beschermd met industriestandaard encryptie.',
      alwaysImproving: 'Altijd Verbeterend',
      alwaysImprovingDesc: 'Regelmatige updates en nieuwe functies op basis van feedback van gebruikers en de nieuwste technologische innovaties.',
      crossPlatform: 'Cross-platform',
      crossPlatformDesc: 'Native ervaring op alle apparaten en besturingssystemen met perfecte synchronisatie.',
      beautifulDesign: 'Mooi Ontwerp',
      beautifulDesignDesc: 'Doordacht ontworpen interfaces die functionaliteit combineren met esthetische uitmuntendheid.',
      powerfulTools: 'Krachtige Tools',
      powerfulToolsDesc: 'Geavanceerde functies en integraties die meegroeien met uw behoeften en workflow.',
      uptime: 'Uptime',
      responseTime: 'Responstijd',
      support: 'Ondersteuning',
      certified: 'Gecertificeerd'
    },
    // Contact Section
    contact: {
      badge: 'Neem Contact Op',
      title: 'Laten we Samen Bouwen',
      description: 'Heeft u ideeën voor nieuwe applicaties? Een bug gevonden? Wilt u samenwerken? We horen graag van u om het ORPulse-ecosysteem samen te laten groeien.',
      githubDesc: 'Ontdek onze open-source projecten, rapporteer problemen of draag bij aan de codebase.',
      visitRepo: 'Bezoek Repository',
      emailDesc: 'Neem rechtstreeks contact op voor partnerschappen, feedback of technische ondersteuning.',
      featureTitle: 'Heeft u een Functieverzoek?',
      featureDesc: 'Uw feedback stimuleert onze ontwikkeling. Of het nu gaat om een nieuw applicatie-idee, een functieverbetering of een verbetersuggestie, we horen het graag.',
      submitFeedback: 'Feedback Indienen',
      viewSource: 'Broncode Bekijken'
    },
    // Footer
    footer: {
      description: 'Eenvoudige, krachtige tools die uw productiviteit verhogen. Gebouwd voor professionals die waarde hechten aan duidelijkheid en efficiëntie.',
      applications: 'Applicaties',
      company: 'Bedrijf',
      about: 'Over',
      contact: 'Contact',
      comingSoon: 'Binnenkort beschikbaar',
      rights: 'Alle rechten voorbehouden.',
      builtWith: 'Gemaakt met ❤️ door het ORPulse-team'
    },
    // 404 Page
    notFound: {
      title: 'Pagina Niet Gevonden',
      description: 'Oeps! De pagina die u zoekt bestaat niet. Deze is mogelijk verplaatst of verwijderd.',
      goHome: 'Ga naar Home',
      goBack: 'Ga Terug',
      interested: 'U bent misschien geïnteresseerd in:',
      ourApps: 'Onze Applicaties',
      aboutUs: 'Over ORPulse',
      contactUs: 'Neem Contact Met Ons Op'
    }
  }
}

const currentLanguage = ref<Language>('en')

export function useI18n() {
  const t = computed(() => translations[currentLanguage.value])
  
  const setLanguage = (lang: Language) => {
    currentLanguage.value = lang
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
  }
  
  const initLanguage = () => {
    const savedLang = localStorage.getItem('language') as Language
    const browserLang = navigator.language.substring(0, 2) as Language
    
    if (savedLang && (savedLang === 'en' || savedLang === 'fr' || savedLang === 'nl')) {
      currentLanguage.value = savedLang
    } else if (browserLang === 'fr') {
      currentLanguage.value = 'fr'
    } else if (browserLang === 'nl') {
      currentLanguage.value = 'nl'
    } else {
      currentLanguage.value = 'en'
    }
    
    document.documentElement.lang = currentLanguage.value
  }
  
  return {
    t,
    currentLanguage,
    setLanguage,
    initLanguage
  }
}