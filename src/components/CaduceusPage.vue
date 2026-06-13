<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-hidden select-none selection:bg-cyan-500/25">
    <!-- Glowing background elements -->
    <div class="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none"></div>
    <div class="absolute top-[400px] -right-[100px] w-[550px] h-[550px] rounded-full bg-fuchsia-500/5 blur-[130px] pointer-events-none"></div>

    <!-- Header -->
    <header class="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div class="container mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-3 cursor-pointer" @click="navigate('/')">
          <div class="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center font-mono font-bold text-lg text-white shadow-lg shadow-cyan-500/25">
            C
          </div>
          <span class="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Caduceus</span>
        </div>

        <nav class="hidden md:flex items-center space-x-8">
          <a href="#features" class="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">Features</a>
          <a href="#interactive-demo" class="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">Demo</a>
          <a href="#details" class="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">Specs</a>
        </nav>

        <div class="flex items-center space-x-4">
          <button @click="toggleDark()" class="rounded-lg p-2 text-slate-400 hover:bg-white/5 transition-colors">
            <Sun v-if="isDark" class="h-5 w-5" />
            <Moon v-else class="h-5 w-5" />
          </button>
          <a href="#enquire" class="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
            Request Appliance
          </a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="container mx-auto px-6 pt-24 pb-16 text-center max-w-4xl relative z-10">
      <div class="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-4 py-1.5 mb-8">
        <span class="text-xs font-semibold uppercase tracking-wider text-cyan-400">Sovereign On-Premises AI Appliance</span>
      </div>

      <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05] bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
        Sovereign AI for Your Business Knowledge
      </h1>

      <p class="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
        A fully sandboxed, GDPR-compliant AI agent that plugs into your existing Slack, Teams, Confluence, and SharePoint channels. Hosted securely inside your physical infrastructure.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#enquire" class="px-6 py-3.5 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 hover:shadow-xl hover:shadow-cyan-400/35 hover:-translate-y-0.5 transition-all duration-300">
          Enquire for Deployment
        </a>
        <a href="#features" class="px-6 py-3.5 rounded-lg font-semibold border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/30 hover:-translate-y-0.5 transition-all duration-300">
          Explore Features
        </a>
      </div>

      <div class="mt-8 flex justify-center items-center gap-6 text-slate-500 text-xs font-medium uppercase tracking-wider">
        <span>No Inbound Port Forwarding</span>
        <span class="h-1.5 w-1.5 rounded-full bg-slate-700"></span>
        <span>GDPR Sovereign</span>
        <span class="h-1.5 w-1.5 rounded-full bg-slate-700"></span>
        <span>Read-Only KMS Enforced</span>
      </div>
    </section>

    <!-- Interactive Mockup Section -->
    <section id="interactive-demo" class="container mx-auto px-6 py-12 flex justify-center relative z-10">
      <div class="w-full max-w-4xl rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl overflow-hidden">
        <!-- Window Chrome -->
        <div class="bg-black/30 px-6 py-3 border-b border-white/5 flex items-center gap-2">
          <span class="h-3 w-3 rounded-full bg-rose-500/80"></span>
          <span class="h-3 w-3 rounded-full bg-amber-500/80"></span>
          <span class="h-3 w-3 rounded-full bg-emerald-500/80"></span>
          <span class="text-xs font-mono text-slate-500 ml-auto mr-auto">Slack Workplace Integration Mockup</span>
        </div>

        <!-- Chat Area -->
        <div class="p-6 space-y-6">
          <div class="flex gap-4">
            <div class="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">
              AD
            </div>
            <div>
              <div class="flex items-baseline gap-2">
                <span class="font-bold text-sm text-white">Alex Dumont</span>
                <span class="text-[10px] text-slate-500">14:15</span>
              </div>
              <p class="text-sm text-slate-300 mt-1">@Hermes, read the project status table from our Confluence page 'Project Alpha' and generate an Excel spreadsheet summarizing the remaining budget.</p>
            </div>
          </div>

          <div class="flex gap-4 border-l border-cyan-500/20 pl-4 py-2 bg-cyan-950/5 rounded-r-lg">
            <div class="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center font-bold text-white text-sm">
              C
            </div>
            <div class="flex-1">
              <div class="flex items-baseline gap-2">
                <span class="font-bold text-sm text-white">Caduceus Agent</span>
                <span class="text-[9px] font-bold bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded uppercase">Bot</span>
                <span class="text-[10px] text-slate-500">14:16</span>
              </div>
              <div class="text-sm text-slate-300 mt-2 space-y-3">
                <p>Accessing Confluence API (Read-Only mode)...</p>
                <div class="inline-flex items-center gap-2 py-1 px-3 rounded bg-black/40 border-l-2 border-cyan-400 text-xs font-mono text-cyan-400">
                  <span class="h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
                  Executing sandboxed Python script to generate Excel brief...
                </div>
                <p>I have compiled the data and generated the Excel spreadsheet. It has been successfully uploaded to your corporate SharePoint folder. You can download it directly using the link below:</p>
                <a href="#" class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400 hover:border-cyan-400/30 text-xs transition-colors">
                  📁 project_alpha_budget_summary.xlsx
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Features Grid -->
    <section id="features" class="container mx-auto px-6 py-24 relative z-10">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Engineered for European Corporate Privacy</h2>
        <p class="text-slate-400">We deploy a physical edge appliance on your premises, giving your company private AI capabilities without cloud compliance risk.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div class="p-8 rounded-xl border border-white/5 bg-slate-900/20 hover:border-cyan-500/30 hover:bg-slate-900/40 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300">
          <div class="text-3xl mb-6">🔒</div>
          <h3 class="font-bold text-lg mb-3 text-white">Sovereign & Localized</h3>
          <p class="text-sm text-slate-400 leading-relaxed">Hosted entirely on-premises using dedicated hardware (Raspberry Pi 5 + NVMe SSD). All memory states, conversation history, and databases stay physically inside your office.</p>
        </div>

        <div class="p-8 rounded-xl border border-white/5 bg-slate-900/20 hover:border-cyan-500/30 hover:bg-slate-900/40 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300">
          <div class="text-3xl mb-6">🛡️</div>
          <h3 class="font-bold text-lg mb-3 text-white">Read-Only Security</h3>
          <p class="text-sm text-slate-400 leading-relaxed">Data integrity is enforced at the credential tier. Your Confluence and SharePoint integrations are strictly read-only, making database deletion or modification impossible.</p>
        </div>

        <div class="p-8 rounded-xl border border-white/5 bg-slate-900/20 hover:border-cyan-500/30 hover:bg-slate-900/40 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300">
          <div class="text-3xl mb-6">🌐</div>
          <h3 class="font-bold text-lg mb-3 text-white">No Port Forwarding</h3>
          <p class="text-sm text-slate-400 leading-relaxed">Traverses strict corporate firewalls using outbound WebSockets. No inbound open ports, public static IPs, or complex IT security audits required.</p>
        </div>

        <div class="p-8 rounded-xl border border-white/5 bg-slate-900/20 hover:border-cyan-500/30 hover:bg-slate-900/40 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300">
          <div class="text-3xl mb-6">📦</div>
          <h3 class="font-bold text-lg mb-3 text-white">Sandboxed Interpreter</h3>
          <p class="text-sm text-slate-400 leading-relaxed">When the agent writes and executes code to perform tasks (like drawing charts or merging documents), the code runs inside an isolated, unprivileged Docker container.</p>
        </div>

        <div class="p-8 rounded-xl border border-white/5 bg-slate-900/20 hover:border-cyan-500/30 hover:bg-slate-900/40 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300">
          <div class="text-3xl mb-6">💬</div>
          <h3 class="font-bold text-lg mb-3 text-white">Multi-Channel Connectors</h3>
          <p class="text-sm text-slate-400 leading-relaxed">Interact with your agent using your team's usual tools: Slack, Microsoft Teams, Discord, Telegram, or WhatsApp Business.</p>
        </div>

        <div class="p-8 rounded-xl border border-white/5 bg-slate-900/20 hover:border-cyan-500/30 hover:bg-slate-900/40 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300">
          <div class="text-3xl mb-6">💰</div>
          <h3 class="font-bold text-lg mb-3 text-white">Zero Token Markup</h3>
          <p class="text-sm text-slate-400 leading-relaxed">You pay your inference token costs (Anthropic/OpenAI) directly to the providers. We manage the setup and maintenance without pocketing margins on your API calls.</p>
        </div>
      </div>
    </section>

    <!-- Enquiry Form Section -->
    <section id="enquire" class="container mx-auto px-6 py-24 relative z-10 border-t border-white/5">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">Get Caduceus for Your Enterprise</h2>
          <p class="text-slate-400 leading-relaxed mb-8">
            Announce your interest to deploy a managed on-premises AI appliance. Fill out the form, and our integration engineers will contact you to map out your infrastructure needs.
          </p>

          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="text-cyan-400 font-bold">✓</span>
              <span class="text-slate-300 text-sm">€2,700 average setup fee including physical edge hardware.</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-cyan-400 font-bold">✓</span>
              <span class="text-slate-300 text-sm">€200/month flat service maintenance, security patches, and backups.</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-cyan-400 font-bold">✓</span>
              <span class="text-slate-300 text-sm">Tailscale remote link for instant troubleshooting.</span>
            </div>
          </div>
        </div>

        <div class="p-8 rounded-2xl border border-white/5 bg-slate-900/30 backdrop-blur-md">
          <h3 class="font-bold text-lg mb-6 text-white">Request More Information</h3>
          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
              <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">Your Name</label>
              <input type="text" v-model="form.name" required class="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-slate-950 focus:outline-none focus:border-cyan-400 text-white placeholder-slate-600 text-sm" placeholder="Alex Dumont">
            </div>
            <div class="mb-4">
              <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">Business Email</label>
              <input type="email" v-model="form.email" required class="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-slate-950 focus:outline-none focus:border-cyan-400 text-white placeholder-slate-600 text-sm" placeholder="alex@company.be">
            </div>
            <div class="mb-4">
              <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">Company Name</label>
              <input type="text" v-model="form.company" class="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-slate-950 focus:outline-none focus:border-cyan-400 text-white placeholder-slate-600 text-sm" placeholder="Sovereign Tech S.A.">
            </div>
            <div class="mb-6">
              <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">Your Use Case</label>
              <textarea v-model="form.message" rows="3" class="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-slate-950 focus:outline-none focus:border-cyan-400 text-white placeholder-slate-600 text-sm" placeholder="Briefly describe what communication tools (Slack/Teams) and document stores your team uses."></textarea>
            </div>

            <button type="submit" :disabled="formState.submitting" class="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 shadow-md transition-all duration-300">
              <span v-if="!formState.submitting">Send Enquiry</span>
              <span v-else>Sending...</span>
            </button>
          </form>
          <div v-if="formState.success" class="mt-4 text-center text-sm font-semibold text-cyan-400">
            Enquiry submitted successfully! We will contact you soon.
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 border-t border-white/5 text-slate-500 text-xs">
      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex items-center space-x-3">
          <div class="h-7 w-7 rounded bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center font-bold text-white">C</div>
          <span class="font-bold text-white">Caduceus Tech</span>
        </div>
        <p>© 2026 Caduceus. Built and hosted in Belgium. GDPR compliant.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'
import { useDark } from '../composables/useDark'
import { useRouter } from '../composables/useRouter'

const { isDark, toggleDark } = useDark()
const { navigate } = useRouter()

const form = ref({
  name: '',
  email: '',
  company: '',
  message: ''
})

const formState = ref({
  submitting: false,
  success: false
})

const handleSubmit = () => {
  formState.value.submitting = true
  setTimeout(() => {
    formState.value.submitting = false
    formState.value.success = true
    form.value = { name: '', email: '', company: '', message: '' }
  }, 1000)
}
</script>
