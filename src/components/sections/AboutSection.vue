<template>
  <section id="about" class="py-24 lg:py-32 bg-transparent border-b border-white/5">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <!-- Section header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 mb-6">
            <span class="text-sm font-medium text-blue-400">{{ t.about.badge }}</span>
          </div>
          
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-white font-heading">
            {{ t.about.title }}
          </h2>
          
          <p class="text-xl text-slate-350 max-w-2xl mx-auto leading-relaxed">
            {{ t.about.description }}
          </p>
        </div>

        <!-- Content grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left content -->
          <div class="space-y-8">
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-white font-heading">{{ t.about.visionTitle }}</h3>
              <p class="text-slate-400 leading-relaxed">
                {{ t.about.visionDesc }}
              </p>
            </div>

            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-white font-heading">{{ t.about.differenceTitle }}</h3>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <CheckCircle class="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span class="text-slate-300">
                    <strong class="text-white">{{ t.about.unifiedExp }}:</strong> {{ t.about.unifiedExpDesc }}
                  </span>
                </li>
                <li class="flex items-start gap-3">
                  <CheckCircle class="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span class="text-slate-300">
                    <strong class="text-white">{{ t.about.privacyFirst }}:</strong> {{ t.about.privacyFirstDesc }}
                  </span>
                </li>
                <li class="flex items-start gap-3">
                  <CheckCircle class="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span class="text-slate-300">
                    <strong class="text-white">{{ t.about.innovation }}:</strong> {{ t.about.innovationDesc }}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right visual -->
          <div class="relative">
            <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f1e]/40 p-8 glass-panel">
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-4">
                  <div class="h-18 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-inner">
                    <Clock class="h-8 w-8 text-blue-400" />
                  </div>
                  <div class="h-18 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shadow-inner">
                    <BarChart3 class="h-7 w-7 text-indigo-400" />
                  </div>
                </div>
                <div class="space-y-4">
                  <div class="h-18 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shadow-inner">
                    <Users class="h-7 w-7 text-indigo-400" />
                  </div>
                  <div class="h-18 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-inner">
                    <Rocket class="h-8 w-8 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center p-8 rounded-xl border border-white/5 bg-[#0f0f1e]/10 glass-panel">
          <div>
            <div class="text-3xl font-bold text-blue-400 mb-2 font-heading">3+</div>
            <div class="text-slate-400 text-sm font-medium">{{ t.about.applicationsCount }}</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-indigo-400 mb-2 font-heading">100%</div>
            <div class="text-slate-400 text-sm font-medium">{{ t.about.openSource }}</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-blue-400 mb-2 font-heading">24/7</div>
            <div class="text-slate-400 text-sm font-medium">{{ t.about.available }}</div>
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