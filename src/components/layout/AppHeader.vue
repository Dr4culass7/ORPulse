<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-205/30 dark:border-gray-800/80 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md transition-colors duration-300">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <a href="#top" class="flex items-center space-x-3 cursor-pointer">
          <div class="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
            <span class="text-white font-bold text-sm">OR</span>
          </div>
          <span class="font-bold text-xl text-gray-900 dark:text-white tracking-tight">ORPulse</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <!-- Main Ecosystem Links -->
          <a href="#about" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {{ t.nav.about }}
          </a>
          <a href="#applications" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {{ t.nav.applications }}
          </a>
          <a href="#features" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {{ t.nav.features }}
          </a>

          <span class="h-4 w-[1px] bg-gray-200 dark:bg-gray-800"></span>

          <!-- Sub-Projects Redirection Links -->
          <a 
            href="https://hintconsult.orpulse.app" 
            class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Hint Consult
          </a>
          
          <a 
            href="https://caduceus.orpulse.app" 
            class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            Caduceus Agent
          </a>
        </nav>

        <!-- Toolbars -->
        <div class="flex items-center space-x-2">
          <!-- Language Toggle -->
          <button
            @click="toggleLanguage"
            class="rounded-lg px-2.5 py-1.5 text-xs font-semibold text-gray-600 dark:text-gray-450 hover:bg-gray-100 dark:hover:bg-gray-850 hover:text-gray-900 dark:hover:text-white transition-all duration-200 flex items-center gap-1 border border-gray-200/50 dark:border-gray-800/40"
            aria-label="Toggle language"
          >
            <Languages class="h-3.5 w-3.5" />
            <span>{{ currentLanguage.toUpperCase() }}</span>
          </button>
          
          <button
            @click="toggleDark()"
            class="rounded-lg p-2 text-gray-500 dark:text-gray-450 hover:bg-gray-100 dark:hover:bg-gray-850 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
            aria-label="Toggle theme"
          >
            <Sun v-if="isDark" class="h-5 w-5" />
            <Moon v-else class="h-5 w-5" />
          </button>

          <button
            @click="toggleMobileMenu"
            class="md:hidden rounded-lg p-2 text-gray-500 dark:text-gray-450 hover:bg-gray-100 dark:hover:bg-gray-850 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu v-if="!isMobileMenuOpen" class="h-5 w-5" />
            <X v-else class="h-5 w-5" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-100 dark:border-gray-850 py-4 animate-fade-in">
        <nav class="flex flex-col space-y-3">
          <a href="#about" @click="closeMobileMenu" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
            {{ t.nav.about }}
          </a>
          <a href="#applications" @click="closeMobileMenu" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
            {{ t.nav.applications }}
          </a>
          <a href="#features" @click="closeMobileMenu" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
            {{ t.nav.features }}
          </a>

          <span class="h-[1px] w-full bg-gray-100 dark:bg-gray-850 my-2 block"></span>

          <a href="https://hintconsult.orpulse.app" @click="closeMobileMenu" class="text-left text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-emerald-500 transition-colors">
            Hint Consult
          </a>
          
          <a href="https://caduceus.orpulse.app" @click="closeMobileMenu" class="text-left text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-cyan-500 transition-colors">
            Caduceus Agent
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Sun, Moon, Menu, X, Languages } from 'lucide-vue-next'
import { useI18n } from '../../composables/useI18n'
import { useDark } from '../../composables/useDark'

const { t, currentLanguage, setLanguage, initLanguage } = useI18n()
const { isDark, toggleDark } = useDark()

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleLanguage = () => {
  setLanguage(currentLanguage.value === 'en' ? 'fr' : 'en')
}

onMounted(() => {
  initLanguage()
})
</script>