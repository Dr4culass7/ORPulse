# ORPulse Landing Page V2

A modern, responsive landing page for the ORPulse productivity ecosystem built with Vue 3, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Vue 3 + TypeScript + Vite + Tailwind CSS
- **Responsive Design**: Mobile-first approach with perfect cross-device experience
- **Dark/Light Mode**: Theme toggle with persistent user preference
- **Fast Performance**: Optimized build with code splitting and compression
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Docker Ready**: Multi-stage Docker build for easy deployment

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue      # Navigation header with theme toggle
│   │   └── AppFooter.vue      # Site footer with links
│   ├── sections/
│   │   ├── HeroSection.vue    # Main hero section
│   │   ├── AboutSection.vue   # About ORPulse section
│   │   ├── ApplicationsSection.vue  # Apps showcase
│   │   ├── FeaturesSection.vue # Features highlight
│   │   └── ContactSection.vue # Contact and CTA section
├── types/
│   └── index.ts              # TypeScript type definitions
├── main.ts                   # Vue app entry point
└── style.css                 # Global styles and Tailwind imports
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🐳 Deployment

### Using Docker

```bash
# Build the image
docker build -t orpulse-landing-v2 .

# Run the container
docker run -p 80:80 orpulse-landing-v2
```

### Using Dokploy

The project is configured for Dokploy deployment with:
- **Dockerfile**: Multi-stage build with nginx
- **nginx.conf**: Optimized for SPA with security headers and caching
- **Domain setup**: Ready for orpulse.app with subdomain routing

## 🌐 Applications Showcase

The landing page features:

- **Chronor** (Live): Time management at chronor.orpulse.app
- **TimeLogger** (In Development): Professional time tracking solution
- **Project Hub** (Coming Soon): Project management platform

## 📱 Domain Structure

- **Main site**: orpulse.app
- **Applications**: *.orpulse.app subdomains
- **Example**: chronor.orpulse.app

## 🎨 Customization

### Adding New Applications

Edit `src/components/sections/ApplicationsSection.vue` and add your application card following the existing pattern.

### Theme Customization

Modify CSS variables in `src/style.css` to customize colors and design tokens.

## 🔧 Technical Details

- **Framework**: Vue 3 with Composition API
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide Vue for scalable vector icons
- **TypeScript**: Full type safety and IntelliSense

## 📄 License

This project is part of the ORPulse ecosystem. All rights reserved.

---

Built with ❤️ by the ORPulse team