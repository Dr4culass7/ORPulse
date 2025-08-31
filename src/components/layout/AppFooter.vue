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
            {{ t.footer.description }}
          </p>
        </div>

        <!-- Applications -->
        <div>
          <h4 class="font-semibold text-gray-900 dark:text-white mb-4">{{ t.footer.applications }}</h4>
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
              <span class="text-gray-500 dark:text-gray-400">TimeLogger ({{ t.footer.comingSoon }})</span>
            </li>
            <li>
              <span class="text-gray-500 dark:text-gray-400">Project Hub ({{ t.footer.comingSoon }})</span>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-semibold text-gray-900 dark:text-white mb-4">{{ t.footer.company }}</h4>
          <ul class="space-y-2">
            <li>
              <a 
                href="#about" 
                class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {{ t.footer.about }}
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {{ t.footer.contact }}
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

      <!-- Social Media Links -->
      <div class="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
        <div class="flex items-center justify-center space-x-4 mb-6">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.href"
            :target="social.href !== '#' ? '_blank' : undefined"
            :aria-label="social.label"
            class="group relative p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            :title="social.href === '#' ? 'Coming Soon' : social.label"
          >
            <component :is="social.icon" class="h-5 w-5" />
            <span 
              v-if="social.href === '#'" 
              class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
            >
              Coming Soon
            </span>
          </a>
        </div>
        
        <div class="flex flex-col sm:flex-row justify-between items-center">
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            © {{ currentYear }} ORPulse. {{ t.footer.rights }}
          </p>
          <p class="text-gray-600 dark:text-gray-300 text-sm mt-2 sm:mt-0">
            {{ t.footer.builtWith }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ExternalLink, Twitter, Linkedin, Github, Instagram, Facebook } from 'lucide-vue-next'
import { useI18n } from '../../composables/useI18n'

const { t } = useI18n()
const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  { icon: Twitter, name: 'Twitter', href: '#', label: 'Follow us on Twitter' },
  { icon: Linkedin, name: 'LinkedIn', href: '#', label: 'Connect on LinkedIn' },
  { icon: Github, name: 'GitHub', href: 'https://github.com/Dr4culass7', label: 'View our GitHub' },
  { icon: Instagram, name: 'Instagram', href: '#', label: 'Follow on Instagram' },
  { icon: Facebook, name: 'Facebook', href: '#', label: 'Like us on Facebook' }
]
</script>