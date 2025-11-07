<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
  >
    <!-- Navigation -->
    <nav
      class="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800"
    >
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold text-white">
            SVA <span class="text-blue-400">Physical AI Lab</span>
          </div>
          <div class="hidden md:flex space-x-6">
            <a
              href="#about"
              class="text-gray-300 hover:text-blue-400 transition"
              >About</a
            >
            <a
              href="#students"
              class="text-gray-300 hover:text-blue-400 transition"
              >Students</a
            >
            <a
              href="#partners"
              class="text-gray-300 hover:text-blue-400 transition"
              >Partners</a
            >
            <a
              href="#focus"
              class="text-gray-300 hover:text-blue-400 transition"
              >Focus Areas</a
            >
            <a
              href="#events"
              class="text-gray-300 hover:text-blue-400 transition"
              >Events</a
            >
            <a
              href="#contact"
              class="text-gray-300 hover:text-blue-400 transition"
              >Contact</a
            >
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-6">
      <div class="container mx-auto">
        <div class="text-center mb-12">
          <h1
            class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            SVA Physical AI Lab
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 italic">
            Where visual effects meet embodied intelligence.
          </p>
        </div>

        <!-- Hero Image -->
        <div class="max-w-6xl mx-auto">
          <div
            class="relative overflow-hidden rounded-2xl border border-blue-500/30 shadow-2xl"
          >
            <img
              src="/hero-image.jpg"
              alt="Artists and robots collaborating through simulation - SVA students working with humanoid robots in Omniverse"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-6 bg-gray-900/50">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl font-bold text-white mb-8 text-center">
          About the Lab
        </h2>
        <div class="prose prose-invert prose-lg max-w-none">
          <p class="text-gray-300 text-lg leading-relaxed mb-6">
            The <strong class="text-white">SVA Physical AI Lab</strong> brings
            together artists, technologists, and researchers to explore the
            frontier where
            <strong class="text-blue-400"
              >3D design, simulation, and artificial intelligence</strong
            >
            converge.
          </p>
          <p class="text-gray-300 text-lg leading-relaxed mb-6">
            We create the
            <strong class="text-white">worlds, data, and behaviors</strong> that
            teach robots — advancing <em class="text-blue-300">Sim2Real</em>,
            where skills learned in simulation transfer to the real world.
          </p>
          <div
            class="mt-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center gap-6"
          >
            <img
              src="/michael-gold.jpg"
              alt="Michael Gold - Director of SVA Physical AI Lab"
              class="w-24 h-24 rounded-full object-cover border-2 border-blue-400"
            />
            <div>
              <p class="text-gray-300">
                <strong class="text-white"
                  >Directed by
                  <a
                    href="https://mike.gold"
                    class="text-blue-400 hover:text-blue-300 transition"
                    >Michael Gold</a
                  ></strong
                ><br />
                MFA Computer Arts Faculty, School of Visual Arts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Students Section -->
    <section id="students" class="py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2
            class="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3"
          >
            <i class="pi pi-graduation-cap text-blue-400"></i>
            For Students
          </h2>
          <p class="text-2xl text-blue-400 font-semibold">
            Create the worlds that teach robots.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <ul class="space-y-4 text-gray-300">
              <li class="flex items-start">
                <span class="text-blue-400 mr-3 mt-1">•</span>
                <span
                  >Learn how to use
                  <strong class="text-white"
                    >USD / Omniverse / Newton / Isaac Lab</strong
                  >
                  to design intelligent 3D environments.</span
                >
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-3 mt-1">•</span>
                <span
                  >Collaborate with real robotics research teams and emerging
                  startups.</span
                >
              </li>
            </ul>
          </div>
          <div class="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <ul class="space-y-4 text-gray-300">
              <li class="flex items-start">
                <span class="text-blue-400 mr-3 mt-1">•</span>
                <span
                  >Build a portfolio that spans
                  <strong class="text-white"
                    >VFX, simulation, and AI-driven storytelling</strong
                  >.</span
                >
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-3 mt-1">•</span>
                <span
                  >Launch ventures or prototypes that blur the line between art,
                  robotics, and interaction.</span
                >
              </li>
            </ul>
          </div>
        </div>

        <div
          class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-6 mb-12"
        >
          <p
            class="text-gray-300 text-center flex items-center justify-center gap-2"
          >
            <i class="pi pi-lightbulb text-yellow-400"></i>
            <em
              >Join workshops, sprints, and projects that turn your creative
              skills into applied research.</em
            >
          </p>
        </div>

        <!-- Student Pathways -->
        <div class="mt-12">
          <h3
            class="text-3xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <i class="pi pi-compass text-blue-400"></i>
            Student Pathways
          </h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div
              class="bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition"
            >
              <h4 class="text-xl font-bold text-blue-400 mb-3">
                Studio-in-Residence
              </h4>
              <p class="text-gray-300">
                6–12 week partner sprints building Sim2Real datasets and
                environments.
              </p>
            </div>
            <div
              class="bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition"
            >
              <h4 class="text-xl font-bold text-blue-400 mb-3">
                Newton / Isaac Jam Weekends
              </h4>
              <p class="text-gray-300">
                48-hour rapid-prototyping events in Physical AI.
              </p>
            </div>
            <div
              class="bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition"
            >
              <h4 class="text-xl font-bold text-blue-400 mb-3">
                Bridging Workshops
              </h4>
              <p class="text-gray-300">
                From "Artist → Roboticist" with training in simulation, AI, and
                real-time physics.
              </p>
            </div>
            <div
              class="bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition"
            >
              <h4 class="text-xl font-bold text-blue-400 mb-3">
                Capstone Showcase
              </h4>
              <p class="text-gray-300">
                An annual demo day where students present robotics-ready digital
                twins and visual explainers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section id="partners" class="py-20 px-6 bg-gray-900/50">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h2
            class="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3"
          >
            <i class="pi pi-users text-blue-400"></i>
            For Partners
          </h2>
          <p class="text-2xl text-blue-400 font-semibold">
            Collaborate with SVA to prototype the future of Physical AI.
          </p>
        </div>

        <div class="prose prose-invert prose-lg max-w-none mb-12">
          <p class="text-gray-300 text-lg leading-relaxed">
            The lab connects
            <strong class="text-white">SVA MFA Computer Arts students</strong
            >—world-class 3D generalists—with
            <strong class="text-white"
              >robotics labs and creative-tech companies</strong
            >
            that need visual simulation expertise.
          </p>
          <p class="text-gray-300 text-lg leading-relaxed">
            We partner with organizations developing embodied AI, digital twins,
            and real-world robotics pipelines.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mb-12">
          <div class="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 class="text-xl font-bold text-blue-400 mb-4">Partners Gain:</h3>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start">
                <span class="text-blue-400 mr-3 mt-1">✓</span>
                <span
                  >Access to
                  <strong class="text-white">creative talent</strong> fluent in
                  physics-based 3D and generative AI.</span
                >
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-3 mt-1">✓</span>
                <span
                  ><strong class="text-white">Rapid prototyping support</strong>
                  for simulation assets, environments, and data
                  generation.</span
                >
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-3 mt-1">✓</span>
                <span
                  >Opportunities for
                  <strong class="text-white">joint applied research</strong> and
                  co-authored publications or demos.</span
                >
              </li>
              <li class="flex items-start">
                <span class="text-blue-400 mr-3 mt-1">✓</span>
                <span
                  >A front-row seat in shaping the next generation of creative
                  technologists.</span
                >
              </li>
            </ul>
          </div>
          <!-- <div
            class="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-500/30"
          >
            <h3 class="text-xl font-bold text-white mb-4">
              Past & Potential Collaborators:
            </h3>
            <div class="flex flex-wrap gap-3">
              <span
                class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                >NVIDIA</span
              >
              <span
                class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                >Disney Research</span
              >
              <span
                class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                >Google DeepMind</span
              >
              <span
                class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                >Agility Robotics</span
              >
            </div>
            <div class="mt-6 text-center">
              <p
                class="text-gray-300 mb-4 flex items-center justify-center gap-2"
              >
                <i class="pi pi-puzzle-piece text-purple-400"></i>
                <em
                  >Interested in hosting a sprint, sponsoring a dataset, or
                  testing a concept?</em
                >
              </p>
              <a
                href="#contact"
                class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
              >
                Partner with Us →
              </a>
            </div>
          </div> -->
        </div>
      </div>
    </section>

    <!-- Focus Areas Section -->
    <section id="focus" class="py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2
          class="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3"
        >
          <i class="pi pi-cog text-blue-400"></i>
          Our Focus Areas
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            class="bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition"
          >
            <h3 class="text-xl font-bold text-blue-400 mb-3">
              1. Worldbuilding for Robotics
            </h3>
            <p class="text-gray-300">
              Creating procedural, physically accurate 3D environments tuned for
              domain randomization and sensor realism.
            </p>
          </div>
          <div
            class="bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition"
          >
            <h3 class="text-xl font-bold text-blue-400 mb-3">
              2. Synthetic Data Generation
            </h3>
            <p class="text-gray-300">
              Producing diverse, labeled datasets that train robots to see,
              move, and interact.
            </p>
          </div>
          <div
            class="bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition"
          >
            <h3 class="text-xl font-bold text-blue-400 mb-3">
              3. Embodied Agents & VLA
            </h3>
            <p class="text-gray-300">
              Integrating Vision-Language-Action models that perceive → plan →
              act.
            </p>
          </div>
          <div
            class="bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition"
          >
            <h3 class="text-xl font-bold text-blue-400 mb-3">
              4. Reality Capture → Simulation
            </h3>
            <p class="text-gray-300">
              Converting real spaces into interactive digital twins using USD
              pipelines.
            </p>
          </div>
          <div
            class="bg-gray-800/70 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition"
          >
            <h3 class="text-xl font-bold text-blue-400 mb-3">
              5. Applied VFX for Robotics
            </h3>
            <p class="text-gray-300">
              Designing cinematic explainers and human-AI interfaces that make
              machine intelligence visible.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Events Section -->
    <section id="events" class="py-20 px-6 bg-gray-900/50">
      <div class="container mx-auto max-w-6xl">
        <h2
          class="text-4xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3"
        >
          <i class="pi pi-calendar text-blue-400"></i>
          Upcoming Events
        </h2>

        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-700">
                <th class="text-left py-4 px-6 text-blue-400 font-semibold">
                  Date
                </th>
                <th class="text-left py-4 px-6 text-blue-400 font-semibold">
                  Event
                </th>
                <th class="text-left py-4 px-6 text-blue-400 font-semibold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="border-b border-gray-800 hover:bg-gray-800/50 transition"
              >
                <td class="py-4 px-6 text-gray-300">Mar 10 2026</td>
                <td class="py-4 px-6 text-white font-semibold">
                  Workshop: USD for Robotics
                </td>
                <td class="py-4 px-6 text-gray-300">
                  Learn USD and Omniverse scene building for AI and simulation.
                </td>
              </tr>
              <tr
                class="border-b border-gray-800 hover:bg-gray-800/50 transition"
              >
                <td class="py-4 px-6 text-gray-300">Apr 14 2026</td>
                <td class="py-4 px-6 text-white font-semibold">
                  Newton Jam Weekend
                </td>
                <td class="py-4 px-6 text-gray-300">
                  48-hour Sim2Real challenge with NVIDIA Isaac Lab.
                </td>
              </tr>
              <tr class="hover:bg-gray-800/50 transition">
                <td class="py-4 px-6 text-gray-300">May 20 2026</td>
                <td class="py-4 px-6 text-white font-semibold">
                  Physical AI Showcase
                </td>
                <td class="py-4 px-6 text-gray-300">
                  Student demos + partner presentations at SVA MFA Computer
                  Arts.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Students at Work Image Placeholder -->
    <!-- <section class="py-20 px-6">
      <div class="container mx-auto max-w-5xl">
        <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 aspect-video flex items-center justify-center">
          <div class="text-center p-8">
            <div class="w-24 h-24 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
              <svg class="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p class="text-gray-400 text-sm">
              Image Placeholder: Photo of SVA students animating robots in Omniverse or capturing motion data.
            </p>
            <p class="text-gray-500 text-xs mt-2 italic">
              Alt text: "Students developing robot simulation environments at SVA Physical AI Lab."
            </p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-6 bg-gray-900/50">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">
          Get Involved
        </h2>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-gray-800/70 p-8 rounded-lg border border-gray-700">
            <h3
              class="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2"
            >
              <i class="pi pi-graduation-cap"></i>
              Join the Lab
            </h3>
            <p class="text-gray-300 mb-4">
              If you're an SVA student or alum curious about
              <strong class="text-white"
                >AI, robotics, and creative simulation</strong
              >, we'd love to hear from you.
            </p>
            <p class="text-gray-400 italic">
              No prior robotics experience required — bring your imagination.
            </p>
          </div>
          <div class="bg-gray-800/70 p-8 rounded-lg border border-gray-700">
            <h3
              class="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2"
            >
              <i class="pi pi-users"></i>
              Partner with Us
            </h3>
            <p class="text-gray-300 mb-4">
              If you're a
              <strong class="text-white">lab, studio, or company</strong>
              working on robotics, digital twins, or embodied AI, collaborate
              with us on sprints, datasets, or research.
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
          <h3 class="text-2xl font-bold text-white mb-6 text-center">
            Contact Us
          </h3>
          <form class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label for="email" class="block text-gray-300 mb-2"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label for="organization" class="block text-gray-300 mb-2"
                >Organization / Affiliation</label
              >
              <input
                type="text"
                id="organization"
                class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
                placeholder="Your organization"
              />
            </div>
            <div>
              <label for="message" class="block text-gray-300 mb-2"
                >Message</label
              >
              <textarea
                id="message"
                rows="6"
                class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
                placeholder="Tell us about your interest..."
              ></textarea>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition transform hover:scale-105"
              >
                Submit
              </button>
            </div>
            <p class="text-gray-500 text-sm text-center">
              <em
                >Note: Integrate with Formspree, Netlify Forms, or SVA webform
                backend.</em
              >
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-6 bg-gray-900 border-t border-gray-800">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-white mb-2">
            SVA Physical AI Lab
          </h3>
          <p class="text-gray-400">School of Visual Arts — MFA Computer Arts</p>
          <p class="text-gray-400">New York City</p>
        </div>
        <div class="text-center space-y-2 text-gray-400">
          <p class="flex items-center justify-center gap-2">
            <i class="pi pi-map-marker text-blue-400"></i>
            133 W 21st St 10th floor, New York, NY 10011
          </p>
          <p class="flex items-center justify-center gap-2">
            <i class="pi pi-globe text-blue-400"></i>
            <a
              href="https://sva.edu/mfaca"
              class="text-blue-400 hover:text-blue-300 transition"
              >sva.edu/mfaca</a
            >
          </p>
        </div>
        <div class="mt-8 text-center text-gray-500 text-sm">
          <p><em>© 2025 School of Visual Arts. All rights reserved.</em></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title:
    "SVA Physical AI Lab - Where Visual Effects Meet Embodied Intelligence",
  meta: [
    {
      name: "description",
      content:
        "The SVA Physical AI Lab brings together artists, technologists, and researchers to explore 3D design, simulation, and AI, creating worlds that teach robots.",
    },
  ],
});

// Smooth scroll behavior for navigation links
if (process.client) {
  document.addEventListener("click", (e) => {
    const target = e.target.closest('a[href^="#"]');
    if (target) {
      e.preventDefault();
      const id = target.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
}
</script>

<style scoped>
/* Smooth scroll for the entire page */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar styling */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #2563eb;
}
</style>
