<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300">
    <transition name="fade" appear>
      <LoadingSpinner v-if="isInitialLoading" class="fixed inset-0 z-50 bg-white dark:bg-slate-950 flex items-center justify-center" />
    </transition>
    
    <div v-show="!isInitialLoading" class="flex-1 flex flex-col">
      <ORPulsePage />
    </div>

    <!-- Back to Top Button -->
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LoadingSpinner from './components/ui/LoadingSpinner.vue'
import BackToTop from './components/ui/BackToTop.vue'
import ORPulsePage from './components/ORPulsePage.vue'
import { useDark } from './composables/useDark'

// Initialize dark mode
useDark()

const isInitialLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isInitialLoading.value = false
  }, 250)
})
</script>