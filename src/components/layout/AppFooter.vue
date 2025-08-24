<template>
  <footer class="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <span class="text-white font-bold text-sm">OR</span>
            </div>
            <span class="font-bold text-xl text-gray-900 dark:text-white">ORPulse</span>
          </div>
          <p class="text-gray-600 dark:text-gray-300 max-w-md">
            Simple, powerful tools that enhance your productivity. 
            Built for professionals who value clarity and efficiency.
          </p>
        </div>

        <!-- Applications -->
        <div>
          <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Applications</h4>
          <ul class="space-y-2">
            <li>
              <a 
                href="https://chronor.orpulse.app" 
                target="_blank"
                class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center"
              >
                Chronor
                <ExternalLink class="ml-1 h-3 w-3" />
              </a>
            </li>
            <li>
              <span class="text-gray-500 dark:text-gray-400">TimeLogger (Coming Soon)</span>
            </li>
            <li>
              <span class="text-gray-500 dark:text-gray-400">Project Hub (Coming Soon)</span>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
          <ul class="space-y-2">
            <li>
              <a 
                href="#about" 
                class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/Dr4culass7" 
                target="_blank"
                class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center"
              >
                GitHub
                <ExternalLink class="ml-1 h-3 w-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
        <p class="text-gray-600 dark:text-gray-300 text-sm">
          © {{ currentYear }} ORPulse. All rights reserved.
        </p>
        <p class="text-gray-600 dark:text-gray-300 text-sm mt-2 sm:mt-0">
          Built with ❤️ by the ORPulse team
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ExternalLink } from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())
</script>