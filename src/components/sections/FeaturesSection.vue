<template>
  <section id="features" class="py-24 lg:py-32 bg-gray-50 dark:bg-gray-800/50">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section header -->
      <div class="mx-auto max-w-3xl text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
          {{ t.features.title }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {{ t.features.description }}
        </p>
      </div>
      
      <!-- Features grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Lightning Fast -->
        <div class="group text-center p-8 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
          <div class="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300 mb-6">
            <Zap class="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">{{ t.features.lightningFast }}</h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t.features.lightningFastDesc }}
          </p>
        </div>
        
        <!-- Secure & Private -->
        <div class="group text-center p-8 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
          <div class="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors duration-300 mb-6">
            <Shield class="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">{{ t.features.securePrivate }}</h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t.features.securePrivateDesc }}
          </p>
        </div>
        
        <!-- Always Improving -->
        <div class="group text-center p-8 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
          <div class="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300 mb-6">
            <Rocket class="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">{{ t.features.alwaysImproving }}</h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t.features.alwaysImprovingDesc }}
          </p>
        </div>
        
        <!-- Cross-Platform -->
        <div class="group text-center p-8 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
          <div class="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors duration-300 mb-6">
            <Smartphone class="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">{{ t.features.crossPlatform }}</h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t.features.crossPlatformDesc }}
          </p>
        </div>
        
        <!-- Intuitive Design -->
        <div class="group text-center p-8 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
          <div class="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300 mb-6">
            <Palette class="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">{{ t.features.beautifulDesign }}</h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t.features.beautifulDesignDesc }}
          </p>
        </div>
        
        <!-- Scalable -->
        <div class="group text-center p-8 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
          <div class="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors duration-300 mb-6">
            <TrendingUp class="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 class="text-xl font-bold mb-4 text-gray-900 dark:text-white">{{ t.features.powerfulTools }}</h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t.features.powerfulToolsDesc }}
          </p>
        </div>
      </div>

      <!-- Statistics -->
      <div class="mt-20 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 p-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
            <div class="text-gray-600 dark:text-gray-300 text-sm">{{ t.features.uptime }}</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">&lt;100ms</div>
            <div class="text-gray-600 dark:text-gray-300 text-sm">{{ t.features.responseTime }}</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
            <div class="text-gray-600 dark:text-gray-300 text-sm">{{ t.features.support }}</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">ISO</div>
            <div class="text-gray-600 dark:text-gray-300 text-sm">{{ t.features.certified }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  Zap, 
  Shield, 
  Rocket, 
  Smartphone, 
  Palette, 
  TrendingUp 
} from 'lucide-vue-next'
import { useI18n } from '../../composables/useI18n'

const { t } = useI18n()
</script>