<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900">
    <AppHeader />
    
    <main class="flex-1">
      <HeroSection />
      <AboutSection />
      <ApplicationsSection />
      <FeaturesSection />
      <ContactSection />
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ApplicationsSection from './components/sections/ApplicationsSection.vue'
import FeaturesSection from './components/sections/FeaturesSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>