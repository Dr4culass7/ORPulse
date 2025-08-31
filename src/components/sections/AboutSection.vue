<template>
  <section id="about" class="py-24 lg:py-32 bg-gray-50 dark:bg-gray-800/50">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <!-- Section header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 mb-6">
            <span class="text-sm font-medium text-blue-600 dark:text-blue-400">{{ t.about.badge }}</span>
          </div>
          
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
            {{ t.about.title }}
          </h2>
          
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {{ t.about.description }}
          </p>
        </div>

        <!-- Content grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left content -->
          <div class="space-y-6">
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t.about.visionTitle }}</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ t.about.visionDesc }}
              </p>
            </div>

            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t.about.differenceTitle }}</h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <CheckCircle class="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-600 dark:text-gray-300">
                    <strong class="text-gray-900 dark:text-white">{{ t.about.unifiedExp }}:</strong> {{ t.about.unifiedExpDesc }}
                  </span>
                </li>
                <li class="flex items-start gap-3">
                  <CheckCircle class="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-600 dark:text-gray-300">
                    <strong class="text-gray-900 dark:text-white">{{ t.about.privacyFirst }}:</strong> {{ t.about.privacyFirstDesc }}
                  </span>
                </li>
                <li class="flex items-start gap-3">
                  <CheckCircle class="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-600 dark:text-gray-300">
                    <strong class="text-gray-900 dark:text-white">{{ t.about.innovation }}:</strong> {{ t.about.innovationDesc }}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right visual -->
          <div class="relative">
            <div class="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 p-8">
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-4">
                  <div class="h-18 rounded-lg bg-blue-200 dark:bg-blue-800/50 flex items-center justify-center">
                    <Clock class="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div class="h-18 rounded-lg bg-purple-200 dark:bg-purple-800/50 flex items-center justify-center">
                    <BarChart3 class="h-7 w-7 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div class="space-y-4">
                  <div class="h-18 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Users class="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div class="h-18 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Rocket class="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
            <div class="text-gray-600 dark:text-gray-300">{{ t.about.applicationsCount }}</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
            <div class="text-gray-600 dark:text-gray-300">{{ t.about.openSource }}</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
            <div class="text-gray-600 dark:text-gray-300">{{ t.about.available }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircle, Clock, BarChart3, Users, Rocket } from 'lucide-vue-next'
import { useI18n } from '../../composables/useI18n'

const { t } = useI18n()
</script>