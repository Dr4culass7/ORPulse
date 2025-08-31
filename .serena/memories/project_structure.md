# ORPulse Project Structure

## Directory Layout
```
/
├── src/                      # Source code
│   ├── components/          # Vue components
│   │   ├── layout/         # Header and Footer
│   │   └── sections/       # Page sections
│   ├── types/              # TypeScript definitions
│   ├── main.ts             # App entry point
│   ├── App.vue             # Root component
│   └── style.css           # Global styles
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── Dockerfile              # Docker deployment
└── nginx.conf              # Nginx server config
```

## Component Architecture
- **App.vue**: Root component that assembles all sections
- **Layout Components**: AppHeader (navigation + theme toggle), AppFooter
- **Section Components**: HeroSection, AboutSection, ApplicationsSection, FeaturesSection, ContactSection
- Each component is self-contained with template, script, and scoped styles