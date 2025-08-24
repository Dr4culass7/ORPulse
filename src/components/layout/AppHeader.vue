<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <div class="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <span class="text-white font-bold text-sm">OR</span>
            </div>
            <span class="font-bold text-xl text-gray-900 dark:text-white">ORPulse</span>
          </div>
        </div>

        <nav class="hidden md:flex items-center space-x-6">
          <a 
            href="#about" 
            class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            About
          </a>
          <a 
            href="#applications" 
            class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Applications
          </a>
          <a 
            href="#features" 
            class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Features
          </a>
          <a 
            href="#contact" 
            class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>

        <div class="flex items-center space-x-4">
          <button
            @click="toggleTheme"
            class="rounded-lg p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            <Sun v-if="isDark" class="h-5 w-5" />
            <Moon v-else class="h-5 w-5" />
          </button>

          <button
            @click="toggleMobileMenu"
            class="md:hidden rounded-lg p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu v-if="!isMobileMenuOpen" class="h-5 w-5" />
            <X v-else class="h-5 w-5" />
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
        <nav class="flex flex-col space-y-3">
          <a 
            href="#about" 
            @click="closeMobileMenu"
            class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            About
          </a>
          <a 
            href="#applications" 
            @click="closeMobileMenu"
            class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Applications
          </a>
          <a 
            href="#features" 
            @click="closeMobileMenu"
            class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Features
          </a>
          <a 
            href="#contact" 
            @click="closeMobileMenu"
            class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Sun, Moon, Menu, X } from 'lucide-vue-next'

const isDark = ref(false)
const isMobileMenuOpen = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>