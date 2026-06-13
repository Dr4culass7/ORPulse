<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
    <div class="container relative z-10 mx-auto px-4 py-32 text-center lg:px-8">
      <div class="mx-auto max-w-5xl animate-page-load">
        <!-- Sovereign Tag (like Caduceus) -->
        <div class="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 mb-6">
          <span class="text-xs font-semibold uppercase tracking-wider text-blue-400">Open productivity ecosystem</span>
        </div>

        <!-- Main heading -->
        <div class="mb-8">
          <h1 class="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4 font-heading">
            <span class="bg-gradient-to-r from-white via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              ORPulse
            </span>
          </h1>
          <div class="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </div>
        
        <p class="mx-auto max-w-3xl text-xl sm:text-2xl text-slate-300 mb-12 leading-relaxed font-light">
          {{ t.hero.tagline }}
          <span class="text-slate-400 block mt-2 text-lg sm:text-xl">{{ t.hero.description }}</span>
        </p>
        
        <!-- CTA buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a 
            href="#applications"
            class="group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_30px_rgba(99,102,241,0.45)] hover:scale-105 inline-flex items-center justify-center"
          >
            {{ t.hero.exploreApps }}
            <ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a 
            href="https://chronor.orpulse.app"
            target="_blank"
            class="group border border-white/10 hover:border-white/20 bg-white/3 text-white hover:text-blue-400 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:bg-white/8 inline-flex items-center justify-center"
          >
            {{ t.hero.tryChronor }}
            <ExternalLink class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <!-- Feature highlights -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="flex flex-col items-center text-center p-6 rounded-xl border border-white/5 bg-[#0f0f1e]/20 glass-panel">
            <div class="h-14 w-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
              <Zap class="h-7 w-7 text-blue-400" />
            </div>
            <h3 class="font-semibold text-lg mb-2 text-white font-heading">{{ t.hero.lightningFast }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ t.hero.lightningFastDesc }}</p>
          </div>
          
          <div class="flex flex-col items-center text-center p-6 rounded-xl border border-white/5 bg-[#0f0f1e]/20 glass-panel">
            <div class="h-14 w-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
              <Shield class="h-7 w-7 text-indigo-400" />
            </div>
            <h3 class="font-semibold text-lg mb-2 text-white font-heading">{{ t.hero.secure }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ t.hero.secureDesc }}</p>
          </div>
          
          <div class="flex flex-col items-center text-center p-6 rounded-xl border border-white/5 bg-[#0f0f1e]/20 glass-panel">
            <div class="h-14 w-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
              <Sparkles class="h-7 w-7 text-blue-400" />
            </div>
            <h3 class="font-semibold text-lg mb-2 text-white font-heading">{{ t.hero.modernDesign }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ t.hero.modernDesignDesc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown class="h-6 w-6 text-slate-500" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, ExternalLink, Zap, Shield, Sparkles, ChevronDown } from 'lucide-vue-next'
import { useI18n } from '../../composables/useI18n'

const { t } = useI18n()
</script>