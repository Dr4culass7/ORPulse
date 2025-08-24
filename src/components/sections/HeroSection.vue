<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
    <!-- Background gradients -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
    
    <div class="container relative z-10 mx-auto px-4 py-32 text-center lg:px-8">
      <div class="mx-auto max-w-5xl">
        <!-- Main heading -->
        <div class="mb-8">
          <h1 class="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span class="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              ORPulse
            </span>
          </h1>
          <div class="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <p class="mx-auto max-w-3xl text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          The productivity ecosystem that adapts to your workflow. 
          Discover powerful applications designed to enhance efficiency 
          and streamline your professional life.
        </p>
        
        <!-- CTA buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a 
            href="#applications"
            class="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 inline-flex items-center justify-center"
          >
            Explore Applications
            <ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a 
            href="https://chronor.orpulse.app"
            target="_blank"
            class="group border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 inline-flex items-center justify-center"
          >
            Try Chronor
            <ExternalLink class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <!-- Feature highlights -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="flex flex-col items-center text-center">
            <div class="h-16 w-16 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
              <Zap class="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Lightning Fast</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">Optimized for speed and performance</p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="h-16 w-16 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
              <Shield class="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 class="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Secure & Private</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">Privacy-first design principles</p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="h-16 w-16 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
              <Sparkles class="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 class="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Always Improving</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">Regular updates and new features</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown class="h-6 w-6 text-gray-400 dark:text-gray-500" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, ExternalLink, Zap, Shield, Sparkles, ChevronDown } from 'lucide-vue-next'
</script>