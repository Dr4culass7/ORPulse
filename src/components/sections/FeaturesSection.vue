<template>
  <section id="features" class="py-24 lg:py-32 bg-transparent border-b border-white/5">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section header -->
      <div class="mx-auto max-w-3xl text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-white font-heading">
          {{ t.features.title }}
        </h2>
        <p class="text-xl text-slate-350 leading-relaxed">
          {{ t.features.description }}
        </p>
      </div>
      
      <!-- Features grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Lightning Fast -->
        <div class="group text-center p-8 border border-white/5 rounded-xl hover:border-blue-500/30 transition-all duration-300 bg-[#0f0f1e]/20 glass-panel">
          <div class="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors duration-300 mb-6">
            <Zap class="h-8 w-8 text-blue-400" />
          </div>
          <h3 class="text-xl font-bold mb-4 text-white font-heading">{{ t.features.lightningFast }}</h3>
          <p class="text-slate-405 leading-relaxed text-sm">
            {{ t.features.lightningFastDesc }}
          </p>
        </div>
        
        <!-- Secure & Private -->
        <div class="group text-center p-8 border border-white/5 rounded-xl hover:border-indigo-500/30 transition-all duration-300 bg-[#0f0f1e]/20 glass-panel">
          <div class="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors duration-300 mb-6">
            <Shield class="h-8 w-8 text-indigo-400" />
          </div>
          <h3 class="text-xl font-bold mb-4 text-white font-heading">{{ t.features.securePrivate }}</h3>
          <p class="text-slate-405 leading-relaxed text-sm">
            {{ t.features.securePrivateDesc }}
          </p>
        </div>
        
        <!-- Always Improving -->
        <div class="group text-center p-8 border border-white/5 rounded-xl hover:border-blue-500/30 transition-all duration-300 bg-[#0f0f1e]/20 glass-panel">
          <div class="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors duration-300 mb-6">
            <Rocket class="h-8 w-8 text-blue-400" />
          </div>
          <h3 class="text-xl font-bold mb-4 text-white font-heading">{{ t.features.alwaysImproving }}</h3>
          <p class="text-slate-405 leading-relaxed text-sm">
            {{ t.features.alwaysImprovingDesc }}
          </p>
        </div>
        
        <!-- Cross-Platform -->
        <div class="group text-center p-8 border border-white/5 rounded-xl hover:border-indigo-500/30 transition-all duration-300 bg-[#0f0f1e]/20 glass-panel">
          <div class="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors duration-300 mb-6">
            <Smartphone class="h-8 w-8 text-indigo-400" />
          </div>
          <h3 class="text-xl font-bold mb-4 text-white font-heading">{{ t.features.crossPlatform }}</h3>
          <p class="text-slate-405 leading-relaxed text-sm">
            {{ t.features.crossPlatformDesc }}
          </p>
        </div>
        
        <!-- Intuitive Design -->
        <div class="group text-center p-8 border border-white/5 rounded-xl hover:border-blue-500/30 transition-all duration-300 bg-[#0f0f1e]/20 glass-panel">
          <div class="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors duration-300 mb-6">
            <Palette class="h-8 w-8 text-blue-400" />
          </div>
          <h3 class="text-xl font-bold mb-4 text-white font-heading">{{ t.features.beautifulDesign }}</h3>
          <p class="text-slate-405 leading-relaxed text-sm">
            {{ t.features.beautifulDesignDesc }}
          </p>
        </div>
        
        <!-- Scalable -->
        <div class="group text-center p-8 border border-white/5 rounded-xl hover:border-indigo-500/30 transition-all duration-300 bg-[#0f0f1e]/20 glass-panel">
          <div class="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors duration-300 mb-6">
            <TrendingUp class="h-8 w-8 text-indigo-400" />
          </div>
          <h3 class="text-xl font-bold mb-4 text-white font-heading">{{ t.features.powerfulTools }}</h3>
          <p class="text-slate-405 leading-relaxed text-sm">
            {{ t.features.powerfulToolsDesc }}
          </p>
        </div>
      </div>

      <!-- Statistics -->
      <div class="mt-20 rounded-2xl border border-white/10 bg-[#0f0f1e]/30 p-8 glass-panel">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl font-bold text-blue-400 mb-2 font-heading">99.9%</div>
            <div class="text-slate-400 text-sm">{{ t.features.uptime }}</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-indigo-400 mb-2 font-heading">&lt;100ms</div>
            <div class="text-slate-400 text-sm">{{ t.features.responseTime }}</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-blue-400 mb-2 font-heading">24/7</div>
            <div class="text-slate-400 text-sm">{{ t.features.support }}</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-indigo-400 mb-2 font-heading">ISO</div>
            <div class="text-slate-400 text-sm">{{ t.features.certified }}</div>
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