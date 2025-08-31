<template>
  <div class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
    <div class="text-center max-w-2xl">
      <div class="mb-8">
        <div class="text-9xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          404
        </div>
      </div>
      
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {{ t.notFound.title }}
      </h1>
      
      <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
        {{ t.notFound.description }}
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="goHome"
          class="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center justify-center"
        >
          <Home class="mr-2 h-5 w-5" />
          {{ t.notFound.goHome }}
        </button>
        
        <button
          @click="goBack"
          class="group border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 inline-flex items-center justify-center"
        >
          <ArrowLeft class="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
          {{ t.notFound.goBack }}
        </button>
      </div>
      
      <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          {{ t.notFound.interested }}
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a 
            href="#applications"
            @click="handleNavigation"
            class="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {{ t.notFound.ourApps }}
          </a>
          <span class="text-gray-400">•</span>
          <a 
            href="#about"
            @click="handleNavigation"
            class="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {{ t.notFound.aboutUs }}
          </a>
          <span class="text-gray-400">•</span>
          <a 
            href="#contact"
            @click="handleNavigation"
            class="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {{ t.notFound.contactUs }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Home, ArrowLeft } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const emit = defineEmits(['navigate-home'])

const goHome = () => {
  emit('navigate-home')
  window.location.hash = ''
}

const goBack = () => {
  window.history.back()
}

const handleNavigation = () => {
  emit('navigate-home')
}
</script>