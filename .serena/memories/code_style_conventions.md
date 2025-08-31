# ORPulse Code Style and Conventions

## Vue 3 Conventions
- Uses Composition API with `<script setup>` syntax
- Single File Components (SFC) with .vue extension
- Template-Script-Style order in components
- TypeScript with `lang="ts"` attribute

## Naming Conventions
- **Components**: PascalCase (e.g., AppHeader.vue, HeroSection.vue)
- **Files/Folders**: kebab-case for directories, PascalCase for Vue components
- **Props/Variables**: camelCase
- **CSS Classes**: Tailwind utility classes, kebab-case for custom

## Component Structure
```vue
<template>
  <!-- HTML template -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// Component logic
</script>
```

## Styling
- Tailwind CSS utility-first approach
- Dark mode support with `dark:` prefix
- Responsive design with breakpoint prefixes (sm:, md:, lg:)
- Hover states with `hover:` prefix
- Transitions with `transition-all duration-300`

## TypeScript
- Strict type checking enabled
- Interfaces defined in src/types/index.ts
- Props typed inline or with interfaces