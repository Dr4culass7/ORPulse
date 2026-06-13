<template>
  <footer class="border-t border-gray-250/30 dark:border-gray-800/80 bg-white dark:bg-gray-950 transition-colors duration-300">
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
          <p class="text-gray-600 dark:text-gray-400 max-w-md text-sm leading-relaxed">
            {{ t.footer.description }}
          </p>
        </div>

        <!-- Ecosystem Sites -->
        <div>
          <h4 class="font-semibold text-gray-950 dark:text-white mb-4 text-sm uppercase tracking-wider">Ecosystem Projects</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <button 
                @click="navigate('/')"
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                ORPulse Home
              </button>
            </li>
            <li>
              <button 
                @click="navigate('/hint-consult')"
                class="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                Hint Consult
              </button>
            </li>
            <li>
              <button 
                @click="navigate('/caduceus')"
                class="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                Caduceus Agent
              </button>
            </li>
          </ul>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-semibold text-gray-950 dark:text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a 
                href="https://github.com/Dr4culass7" 
                target="_blank"
                class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center"
              >
                GitHub Profile
                <ExternalLink class="ml-1 h-3 w-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Social Media & Copyright -->
      <div class="border-t border-gray-150/30 dark:border-gray-850 mt-8 pt-8">
        <div class="flex items-center justify-center space-x-4 mb-6">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.href"
            :target="social.href !== '#' ? '_blank' : undefined"
            :aria-label="social.label"
            class="group relative p-2 rounded-lg text-gray-500 dark:text-gray-450 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-850 transition-all duration-300"
            :title="social.href === '#' ? 'Coming Soon' : social.label"
          >
            <component :is="social.icon" class="h-5 w-5" />
            <span 
              v-if="social.href === '#'" 
              class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
            >
              Coming Soon
            </span>
          </a>
        </div>
        
        <div class="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-450">
          <p>
            © {{ currentYear }} ORPulse. {{ t.footer.rights }}
          </p>
          <p class="mt-2 sm:mt-0">
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
import { useRouter } from '../../composables/useRouter'

const { t } = useI18n()
const { navigate } = useRouter()
const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  { icon: Twitter, name: 'Twitter', href: '#', label: 'Follow us on Twitter' },
  { icon: Linkedin, name: 'LinkedIn', href: '#', label: 'Connect on LinkedIn' },
  { icon: Github, name: 'GitHub', href: 'https://github.com/Dr4culass7', label: 'View our GitHub' },
  { icon: Instagram, name: 'Instagram', href: '#', label: 'Follow on Instagram' },
  { icon: Facebook, name: 'Facebook', href: '#', label: 'Like us on Facebook' }
]
</script>