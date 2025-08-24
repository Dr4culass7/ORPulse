<template>
  <section id="applications" class="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-gray-900">
    <div class="container relative z-10 mx-auto px-4 lg:px-8">
      <!-- Section header -->
      <div class="mx-auto max-w-3xl text-center mb-20">
        <div class="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 mb-6">
          <span class="text-sm font-medium text-blue-600 dark:text-blue-400">Our Applications</span>
        </div>
        
        <h2 class="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
          Powerful Tools for Every Need
        </h2>
        
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Explore our growing suite of applications, each designed to solve 
          specific productivity challenges with elegant, modern solutions.
        </p>
      </div>
      
      <!-- Applications grid -->
      <div class="mx-auto max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Chronor - Live Application -->
        <div class="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-2xl hover:-translate-y-2">
          <div class="relative p-8">
            <div class="flex items-center justify-between mb-6">
              <div class="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-all duration-300">
                <Clock class="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              
              <span class="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-600">
                Live
              </span>
            </div>
            
            <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              Chronor
            </h3>
            
            <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Advanced time management with intelligent scheduling, task tracking, 
              and productivity analytics to optimize your workflow and maximize efficiency.
            </p>
            
            <div class="space-y-3 mb-8">
              <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle class="mr-3 h-4 w-4 text-green-500 flex-shrink-0" />
                Time Tracking & Analytics
              </div>
              <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle class="mr-3 h-4 w-4 text-green-500 flex-shrink-0" />
                Intelligent Scheduling
              </div>
              <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle class="mr-3 h-4 w-4 text-green-500 flex-shrink-0" />
                Productivity Insights
              </div>
            </div>
            
            <a 
              href="https://chronor.orpulse.app"
              target="_blank"
              class="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center group"
            >
              Visit Chronor
              <ExternalLink class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
        
        <!-- TimeLogger - Based on existing project -->
        <div class="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-2xl hover:-translate-y-2">
          <div class="relative p-8">
            <div class="flex items-center justify-between mb-6">
              <div class="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-all duration-300">
                <Timer class="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              
              <span class="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-600">
                In Development
              </span>
            </div>
            
            <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              TimeLogger
            </h3>
            
            <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Professional time tracking solution with attendance management, 
              compliance reporting, and advanced workforce analytics for businesses.
            </p>
            
            <div class="space-y-3 mb-8">
              <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle class="mr-3 h-4 w-4 text-blue-500 flex-shrink-0" />
                Attendance Management
              </div>
              <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle class="mr-3 h-4 w-4 text-blue-500 flex-shrink-0" />
                Compliance Reporting
              </div>
              <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle class="mr-3 h-4 w-4 text-blue-500 flex-shrink-0" />
                Workforce Analytics
              </div>
            </div>
            
            <button 
              class="w-full bg-blue-500/10 border border-blue-500/20 text-blue-600 font-medium py-3 px-6 rounded-lg cursor-default"
            >
              Coming Soon
            </button>
          </div>
        </div>
        
        <!-- Project Hub - Future Application -->
        <div class="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-2xl hover:-translate-y-2">
          <div class="relative p-8">
            <div class="flex items-center justify-between mb-6">
              <div class="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-all duration-300">
                <FolderKanban class="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              
              <span class="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-600">
                Coming Soon
              </span>
            </div>
            
            <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              Project Hub
            </h3>
            
            <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Comprehensive project management platform for teams and individuals. 
              Organize tasks, collaborate seamlessly, and track progress with precision.
            </p>
            
            <div class="space-y-3 mb-8">
              <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle class="mr-3 h-4 w-4 text-orange-500 flex-shrink-0" />
                Team Collaboration
              </div>
              <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle class="mr-3 h-4 w-4 text-orange-500 flex-shrink-0" />
                Task Management
              </div>
              <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <CheckCircle class="mr-3 h-4 w-4 text-orange-500 flex-shrink-0" />
                Progress Tracking
              </div>
            </div>
            
            <button 
              disabled 
              class="w-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 font-medium py-3 px-6 rounded-lg cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
      
      <!-- Call to action -->
      <div class="mx-auto mt-20 max-w-3xl text-center">
        <div class="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 p-8">
          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Have an idea for a new application?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            We're constantly expanding the ORPulse ecosystem. Share your ideas and help us 
            build the tools that will shape the future of productivity.
          </p>
          <a 
            href="#contact"
            class="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 inline-flex items-center"
          >
            <MessageCircle class="mr-2 h-5 w-5" />
            Get in Touch
            <ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  Clock, 
  Timer,
  CheckCircle, 
  FolderKanban, 
  ExternalLink, 
  MessageCircle, 
  ArrowRight 
} from 'lucide-vue-next'
</script>