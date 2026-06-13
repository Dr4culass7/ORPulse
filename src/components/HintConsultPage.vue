<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
    <!-- Hint Consult Header -->
    <header class="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/95 backdrop-blur">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center space-x-3 cursor-pointer" @click="navigate('/')">
            <div class="h-9 w-9 rounded-lg bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Activity class="text-white h-5 w-5" />
            </div>
            <div>
              <span class="font-bold text-xl tracking-tight text-slate-900 dark:text-white">Hint Consult</span>
            </div>
          </div>

          <nav class="hidden md:flex items-center space-x-8">
            <a href="#services" class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Services</a>
            <a href="#stakeholders" class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Who We Serve</a>
            <a href="#why-us" class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Why Choose Us</a>
            <a href="#process" class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Our Process</a>
            <a href="#sectors" class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Sectors</a>
          </nav>

          <div class="flex items-center space-x-3">
            <button @click="toggleDark()" class="rounded-lg p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Sun v-if="isDark" class="h-5 w-5" />
              <Moon v-else class="h-5 w-5" />
            </button>
            <a href="#enquire" class="btn-emerald hidden sm:inline-flex text-sm font-medium px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/10 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
              Book Discovery Call
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative py-24 md:py-32 overflow-hidden border-b border-slate-200 dark:border-slate-800">
      <div class="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-emerald-500/5 dark:bg-emerald-500/5 blur-3xl pointer-events-none"></div>
      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 rounded-full border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/40 px-4 py-1.5 mb-6 animate-fade-in">
            <span class="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Healthcare Digital Delivery Partner</span>
          </div>
          
          <h1 class="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-slate-900 dark:text-white">
            Digital projects in healthcare, delivered with <span class="text-emerald-600 dark:text-emerald-400">clinical rigor</span>.
          </h1>
          
          <p class="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            We help hospitals and healthcare organizations design the right digital roadmap, select the right vendors, govern projects with absolute control, and ensure safe clinical adoption after go-live.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#enquire" class="px-6 py-3.5 rounded-lg font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/10 hover:shadow-emerald-500/25 transition-all duration-300">
              Book a discovery call
            </a>
            <a href="#services" class="px-6 py-3.5 rounded-lg font-semibold border border-slate-300 dark:border-slate-700 bg-white/40 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              View services
            </a>
          </div>
          
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 font-medium uppercase tracking-wider">
            Built for institutional buyers: CIOs, CMIOs, PMO leaders, & clinical stakeholders
          </p>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-24 border-b border-slate-200 dark:border-slate-800">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">What We Do</h2>
          <p class="text-lg text-slate-600 dark:text-slate-400">Five connected services designed to support the complete lifecycle of healthcare digital projects.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <!-- Service 1 -->
          <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:shadow-xl transition-all duration-300">
            <div class="h-12 w-12 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mb-6">
              <Layers class="text-emerald-600 dark:text-emerald-400 h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold mb-4 text-slate-900 dark:text-white">Roadmap & Governance</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Define priorities, align stakeholders, and establish strategic decision-making structures for digital health programs.
            </p>
            <ul class="space-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-850 pt-4">
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Clear transformation roadmap</li>
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Governance model & steering cadence</li>
            </ul>
          </div>

          <!-- Service 2 -->
          <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:shadow-xl transition-all duration-300">
            <div class="h-12 w-12 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mb-6">
              <FileText class="text-emerald-600 dark:text-emerald-400 h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold mb-4 text-slate-900 dark:text-white">Vendor Evaluation & RFP</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Support procurement and clinical teams in selecting the right digital solutions with structured, objective matrices.
            </p>
            <ul class="space-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-850 pt-4">
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Requirement definition scoring matrix</li>
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Transparent, defensible selection</li>
            </ul>
          </div>

          <!-- Service 3 -->
          <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:shadow-xl transition-all duration-300">
            <div class="h-12 w-12 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mb-6">
              <CheckSquare class="text-emerald-600 dark:text-emerald-400 h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold mb-4 text-slate-900 dark:text-white">Project Management & QA</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Lead or support implementation delivery, coordinating quality checks and rigorous cutover go-live readiness.
            </p>
            <ul class="space-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-850 pt-4">
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Go-live readiness verification</li>
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> QA to reduce deployment risks</li>
            </ul>
          </div>

          <!-- Service 4 -->
          <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:shadow-xl transition-all duration-300">
            <div class="h-12 w-12 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mb-6">
              <Users class="text-emerald-600 dark:text-emerald-400 h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold mb-4 text-slate-900 dark:text-white">Clinical Workflow Adaptation</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Adapt digital tools to real clinical workflows and prepare frontline healthcare staff for safe end-user adoption.
            </p>
            <ul class="space-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-850 pt-4">
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Workflow gap identification</li>
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Role-based clinical training</li>
            </ul>
          </div>

          <!-- Service 5 -->
          <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:shadow-xl transition-all duration-300">
            <div class="h-12 w-12 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mb-6">
              <ShieldCheck class="text-emerald-600 dark:text-emerald-400 h-6 w-6" />
            </div>
            <h3 class="text-xl font-bold mb-4 text-slate-900 dark:text-white">Post-Go-Live Auditing</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Assess solution performance after launch, audit process compliance, and recommend optimizations for sustained value.
            </p>
            <ul class="space-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-850 pt-4">
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Operational process review</li>
              <li class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Compliance audit & remediation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Who We Serve Section -->
    <section id="stakeholders" class="py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Built for Healthcare Institutions</h2>
          <p class="text-lg text-slate-600 dark:text-slate-400">We work with organizations where digital change must be governed, adopted, and safe.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div class="p-6 border border-slate-100 dark:border-slate-800 rounded-lg bg-slate-50/50 dark:bg-slate-950/30 flex items-start gap-4">
            <span class="text-xl text-emerald-500 font-bold">✓</span>
            <div>
              <h4 class="font-bold text-slate-900 dark:text-white">Hospitals & Hospital Networks</h4>
              <p class="text-slate-600 dark:text-slate-400 text-sm mt-1">Multi-site alignment and clinical platform governance.</p>
            </div>
          </div>
          <div class="p-6 border border-slate-100 dark:border-slate-800 rounded-lg bg-slate-50/50 dark:bg-slate-950/30 flex items-start gap-4">
            <span class="text-xl text-emerald-500 font-bold">✓</span>
            <div>
              <h4 class="font-bold text-slate-900 dark:text-white">Public & Private Care Settings</h4>
              <p class="text-slate-600 dark:text-slate-400 text-sm mt-1">Tailored transformation roadway built on regional rules.</p>
            </div>
          </div>
          <div class="p-6 border border-slate-100 dark:border-slate-800 rounded-lg bg-slate-50/50 dark:bg-slate-950/30 flex items-start gap-4">
            <span class="text-xl text-emerald-500 font-bold">✓</span>
            <div>
              <h4 class="font-bold text-slate-900 dark:text-white">Clinical & Operational Leadership</h4>
              <p class="text-slate-600 dark:text-slate-400 text-sm mt-1">Facilitating cooperation between doctors and IT teams.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section id="why-us" class="py-24 border-b border-slate-200 dark:border-slate-800">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Why Choose Hint Consult</h2>
          <p class="text-lg text-slate-600 dark:text-slate-400">Strategic, practical, and designed for institutions that need measurable outcomes.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div class="flex gap-4">
            <div class="h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center flex-shrink-0">
              <Activity class="text-emerald-600 dark:text-emerald-400 h-5 w-5" />
            </div>
            <div>
              <h4 class="font-bold text-lg mb-2 text-slate-900 dark:text-white">Healthcare-First Approach</h4>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">We understand clinical realities, operational constraints, and workflow adoption risk. We speak the language of healthcare professionals.</p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center flex-shrink-0">
              <ShieldCheck class="text-emerald-600 dark:text-emerald-400 h-5 w-5" />
            </div>
            <div>
              <h4 class="font-bold text-lg mb-2 text-slate-900 dark:text-white">Vendor-Neutral Guidance</h4>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Our advice is based strictly on your institutional needs and operational workflows—never on vendor commissions or software sales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Process Section -->
    <section id="process" class="py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">How We Work</h2>
          <p class="text-lg text-slate-600 dark:text-slate-400">A clear, low-friction engagement model for complex healthcare programs.</p>
        </div>

        <div class="max-w-4xl mx-auto relative pl-8 border-l border-slate-200 dark:border-slate-850 space-y-12">
          <!-- Step 1 -->
          <div class="relative">
            <div class="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900"></div>
            <h4 class="font-bold text-lg text-slate-900 dark:text-white">1. Assess</h4>
            <p class="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">We review your current state, strategic clinical objectives, existing vendor stack, and operational constraints.</p>
          </div>
          <!-- Step 2 -->
          <div class="relative">
            <div class="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900"></div>
            <h4 class="font-bold text-lg text-slate-900 dark:text-white">2. Align</h4>
            <p class="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">We align clinical sponsors, operational leads, and IT departments on priorities, steering cadence, and scope.</p>
          </div>
          <!-- Step 3 -->
          <div class="relative">
            <div class="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900"></div>
            <h4 class="font-bold text-lg text-slate-900 dark:text-white">3. Design</h4>
            <p class="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">We build target roadmaps, objective evaluation models, RFP matrices, or workflow adaptation checklists.</p>
          </div>
          <!-- Step 4 -->
          <div class="relative">
            <div class="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900"></div>
            <h4 class="font-bold text-lg text-slate-900 dark:text-white">4. Deliver</h4>
            <p class="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">We support active project coordination, quality checking, user training, and cutover preparation.</p>
          </div>
          <!-- Step 5 -->
          <div class="relative">
            <div class="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900"></div>
            <h4 class="font-bold text-lg text-slate-900 dark:text-white">5. Stabilize</h4>
            <p class="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">Post-launch, we perform compliance reviews and optimization checks to ensure workflow continuity and clinical adoption.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sectors Section -->
    <section id="sectors" class="py-24 border-b border-slate-200 dark:border-slate-800">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Sectors We Support</h2>
          <p class="text-lg text-slate-600 dark:text-slate-400">Digital transformation support across care settings and clinical domains.</p>
        </div>

        <div class="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          <span class="px-4 py-2 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Acute Care & Hospital Operations</span>
          <span class="px-4 py-2 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Outpatient & Ambulatory Care</span>
          <span class="px-4 py-2 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Imaging & Diagnostics</span>
          <span class="px-4 py-2 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Laboratory Workflows</span>
          <span class="px-4 py-2 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Pharmacy & Medication Management</span>
          <span class="px-4 py-2 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">High-Dependency & Dialysis Services</span>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="enquire" class="py-24 bg-white dark:bg-slate-900">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">Ready to Move Your Project Forward?</h2>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Whether you need roadmap design, vendor scoring support, deployment QA, or a post-go-live clinical workflow audit, Hint Consult provides structured, objective oversight.
            </p>
            <div class="p-6 rounded-lg bg-emerald-50/50 dark:bg-slate-950/50 border border-emerald-100 dark:border-slate-800">
              <p class="text-sm font-medium text-emerald-800 dark:text-emerald-400">
                "We help healthcare institutions make digital change work in the real world—clinically, operationally, and sustainably."
              </p>
            </div>
          </div>

          <div class="p-8 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-950/30">
            <h3 class="font-bold text-xl mb-6 text-slate-900 dark:text-white">Schedule a Discovery Call</h3>
            <form @submit.prevent="handleSubmit">
              <div class="mb-4">
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Name</label>
                <input type="text" v-model="form.name" required class="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:border-emerald-500" placeholder="Dr. Pierre Dumont">
              </div>
              <div class="mb-4">
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Institutional Email</label>
                <input type="email" v-model="form.email" required class="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:border-emerald-500" placeholder="p.dumont@hospital.be">
              </div>
              <div class="mb-4">
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Institution Name</label>
                <input type="text" v-model="form.company" class="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:border-emerald-500" placeholder="CHUV Brussels">
              </div>
              <div class="mb-6">
                <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Project Brief</label>
                <textarea v-model="form.message" rows="3" class="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:border-emerald-500" placeholder="Describe the digital system or transformation goal..."></textarea>
              </div>
              
              <button type="submit" :disabled="formState.submitting" class="w-full py-3 rounded-lg font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all duration-300">
                <span v-if="!formState.submitting">Request Discovery Call</span>
                <span v-else>Sending...</span>
              </button>
            </form>
            <div v-if="formState.success" class="mt-4 text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              Inquiry submitted successfully! We will contact you soon.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400">
      <div class="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex items-center space-x-3">
          <div class="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center">
            <Activity class="text-white h-4.5 w-4.5" />
          </div>
          <span class="font-bold text-slate-900 dark:text-white">Hint Consult</span>
        </div>
        <p class="text-xs">© 2026 Hint Consult. Built and hosted in Belgium. GDPR compliant.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Activity, Layers, FileText, CheckSquare, Users, ShieldCheck, Sun, Moon } from 'lucide-vue-next'
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
