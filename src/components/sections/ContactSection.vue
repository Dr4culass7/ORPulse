<template>
  <section id="contact" class="py-24 lg:py-32 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <!-- Section header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 mb-6">
            <span class="text-sm font-medium text-blue-600 dark:text-blue-400">Get in Touch</span>
          </div>
          
          <h2 class="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
            Let's Build Together
          </h2>
          
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have ideas for new applications? Found a bug? Want to collaborate? 
            We'd love to hear from you and grow the ORPulse ecosystem together.
          </p>
        </div>

        <!-- Contact grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <!-- GitHub -->
          <a 
            href="https://github.com/Dr4culass7"
            target="_blank"
            class="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:-translate-y-1"
          >
            <div class="flex items-start gap-4">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                <Github class="h-7 w-7 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
              </div>
              
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  GitHub
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-3">
                  Explore our open-source projects, report issues, or contribute to the codebase.
                </p>
                <div class="inline-flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                  <span class="text-sm font-medium">Visit Repository</span>
                  <ExternalLink class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          </a>

          <!-- Email -->
          <div class="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg hover:-translate-y-1">
            <div class="flex items-start gap-4">
              <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors duration-300">
                <Mail class="h-7 w-7 text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
              </div>
              
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  Email
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-3">
                  Reach out directly for partnerships, feedback, or technical support.
                </p>
                <div class="inline-flex items-center text-purple-600 dark:text-purple-400 group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors">
                  <span class="text-sm font-medium">contact@orpulse.app</span>
                  <Copy class="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature request CTA -->
        <div class="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 p-8 text-center">
          <div class="flex justify-center mb-6">
            <div class="h-16 w-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
              <Lightbulb class="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          
          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Have a Feature Request?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Your feedback drives our development. Whether it's a new application idea, 
            feature enhancement, or improvement suggestion, we want to hear it.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/Dr4culass7/ORPulse/issues"
              target="_blank"
              class="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 inline-flex items-center justify-center"
            >
              <MessageCircle class="mr-2 h-5 w-5" />
              Submit Feedback
              <ExternalLink class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            
            <a 
              href="https://github.com/Dr4culass7"
              target="_blank"
              class="group border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 font-medium rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 inline-flex items-center justify-center"
            >
              <Code class="mr-2 h-5 w-5" />
              View Source Code
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
</script>