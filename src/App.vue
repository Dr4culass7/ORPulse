<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900">
    <transition name="fade" appear>
      <LoadingSpinner v-if="isInitialLoading" class="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex items-center justify-center" />
    </transition>
    
    <NotFound v-if="!isInitialLoading && !isValidHash" @navigate-home="handleNavigateHome" />
    
    <div v-show="!isInitialLoading && isValidHash" class="animate-page-load">
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
    
    <!-- Back to Top Button -->
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ApplicationsSection from './components/sections/ApplicationsSection.vue'
import FeaturesSection from './components/sections/FeaturesSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import LoadingSpinner from './components/ui/LoadingSpinner.vue'
import BackToTop from './components/ui/BackToTop.vue'
import NotFound from './components/NotFound.vue'
import { useDark } from './composables/useDark'

// Initialize dark mode early
useDark()

const isInitialLoading = ref(true)
const currentHash = ref(window.location.hash)

const validHashes = ['', '#about', '#applications', '#features', '#contact']
const isValidHash = computed(() => {
  return validHashes.includes(currentHash.value)
})

const handleHashChange = () => {
  currentHash.value = window.location.hash
}

const handleNavigateHome = () => {
  currentHash.value = ''
}

onMounted(() => {
  setTimeout(() => {
    isInitialLoading.value = false
  }, 300)
  
  window.addEventListener('hashchange', handleHashChange)
})

watch(currentHash, () => {
  if (currentHash.value && !validHashes.includes(currentHash.value)) {
    // Invalid hash, but not empty
  }
})
</script>