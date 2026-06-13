<template>
  <div class="animate-page-load flex-1 flex flex-col">
    <AppHeader />
    <main class="flex-1 bg-mesh-orpulse">
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
import AppHeader from './layout/AppHeader.vue'
import AppFooter from './layout/AppFooter.vue'
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import ApplicationsSection from './sections/ApplicationsSection.vue'
import FeaturesSection from './sections/FeaturesSection.vue'
import ContactSection from './sections/ContactSection.vue'
</script>
