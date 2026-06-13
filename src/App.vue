<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300">
    <transition name="fade" appear>
      <LoadingSpinner v-if="isInitialLoading" class="fixed inset-0 z-50 bg-white dark:bg-slate-950 flex items-center justify-center" />
    </transition>
    
    <div v-show="!isInitialLoading" class="flex-1 flex flex-col">
      <component :is="activePage" @navigate-home="handleNavigateHome" />
    </div>

    <!-- Back to Top Button -->
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import LoadingSpinner from './components/ui/LoadingSpinner.vue'
import BackToTop from './components/ui/BackToTop.vue'
import ORPulsePage from './components/ORPulsePage.vue'
import HintConsultPage from './components/HintConsultPage.vue'
import CaduceusPage from './components/CaduceusPage.vue'
import NotFound from './components/NotFound.vue'
import { useDark } from './composables/useDark'
import { currentPath, useRouter } from './composables/useRouter'

// Initialize dark mode
useDark()

const { navigate } = useRouter()
const isInitialLoading = ref(true)

const activePage = computed(() => {
  if (currentPath.value === '/' || currentPath.value === '') {
    return ORPulsePage
  } else if (currentPath.value === '/hint-consult') {
    return HintConsultPage
  } else if (currentPath.value === '/caduceus') {
    return CaduceusPage
  } else {
    return NotFound
  }
})

const handleNavigateHome = () => {
  navigate('/')
}

onMounted(() => {
  setTimeout(() => {
    isInitialLoading.value = false
  }, 300)
})
</script>