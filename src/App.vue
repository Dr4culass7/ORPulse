<template>
  <div class="dark min-h-screen flex flex-col bg-[#04040a] text-slate-100 font-sans relative overflow-hidden">
    <!-- Glowing Background Orbs -->
    <div class="glow-orb orb-blue absolute -top-40 -left-40 w-[600px] h-[600px]"></div>
    <div class="glow-orb orb-purple absolute top-[35%] -right-40 w-[700px] h-[700px]"></div>
    <div class="glow-orb orb-blue absolute -bottom-40 left-[15%] w-[600px] h-[600px]"></div>

    <transition name="fade" appear>
      <LoadingSpinner v-if="isInitialLoading" class="fixed inset-0 z-50 bg-[#04040a] flex items-center justify-center" />
    </transition>
    
    <div v-show="!isInitialLoading" class="flex-1 flex flex-col relative z-10">
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

const isInitialLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isInitialLoading.value = false
  }, 250)
})
</script>