<template>
  <section id="contact" class="py-24 lg:py-32 bg-transparent border-b border-white/5">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <!-- Section header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 mb-6">
            <span class="text-sm font-medium text-blue-400">{{ t.contact.badge }}</span>
          </div>
          
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-white font-heading">
            {{ t.contact.title }}
          </h2>
          
          <p class="text-xl text-slate-350 max-w-2xl mx-auto leading-relaxed">
            {{ t.contact.description }}
          </p>
        </div>

        <!-- Contact grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <!-- GitHub -->
          <a 
            href="https://github.com/Dr4culass7"
            target="_blank"
            class="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0f0f1e]/20 p-8 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 glass-panel"
          >
            <div class="flex items-start gap-4">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 group-hover:bg-blue-500/10 transition-colors duration-300">
                <Github class="h-7 w-7 text-slate-300 group-hover:text-blue-400" />
              </div>
              
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300 font-heading">
                  GitHub
                </h3>
                <p class="text-slate-400 mb-3 text-sm leading-relaxed">
                  {{ t.contact.githubDesc }}
                </p>
                <div class="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span class="text-sm font-medium">{{ t.contact.visitRepo }}</span>
                  <ExternalLink class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          </a>

          <!-- Email -->
          <div class="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0f0f1e]/20 p-8 transition-all duration-300 hover:border-indigo-500/40 hover:-translate-y-1 glass-panel">
            <div class="flex items-start gap-4">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 group-hover:bg-indigo-500/10 transition-colors duration-300">
                <Mail class="h-7 w-7 text-slate-300 group-hover:text-indigo-400" />
              </div>
              
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors duration-300 font-heading">
                  Email
                </h3>
                <p class="text-slate-400 mb-3 text-sm leading-relaxed">
                  {{ t.contact.emailDesc }}
                </p>
                <div class="inline-flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  <span class="text-sm font-medium">contact@orpulse.app</span>
                  <Copy class="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature request CTA -->
        <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f0f1e]/30 p-8 text-center glass-panel">
          <div class="flex justify-center mb-6">
            <div class="h-16 w-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Lightbulb class="h-8 w-8 text-blue-400" />
            </div>
          </div>
          
          <h3 class="text-2xl font-bold mb-4 text-white font-heading">{{ t.contact.featureTitle }}</h3>
          <p class="text-slate-400 mb-6 max-w-2xl mx-auto leading-relaxed">
            {{ t.contact.featureDesc }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/Dr4culass7/ORPulse/issues"
              target="_blank"
              class="group bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.25)] hover:shadow-[0_0_25px_rgba(99,102,241,0.45)] hover:scale-105 inline-flex items-center justify-center"
            >
              <MessageCircle class="mr-2 h-5 w-5" />
              {{ t.contact.submitFeedback }}
              <ExternalLink class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            
            <a 
              href="https://github.com/Dr4culass7"
              target="_blank"
              class="group border border-white/10 hover:border-white/20 bg-white/3 text-white hover:text-blue-400 px-6 py-3 font-medium rounded-lg transition-all duration-300 hover:bg-white/8 inline-flex items-center justify-center"
            >
              <Code class="mr-2 h-5 w-5" />
              {{ t.contact.viewSource }}
              <ExternalLink class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  Github, 
  Mail, 
  Copy, 
  Lightbulb, 
  MessageCircle, 
  Code, 
  ExternalLink 
} from 'lucide-vue-next'
import { useI18n } from '../../composables/useI18n'

const { t } = useI18n()
</script>