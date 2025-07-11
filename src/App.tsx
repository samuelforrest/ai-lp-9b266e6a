import { motion } from "framer-motion";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-[#0a0f1c] via-[#141d2f] to-[#1a223a] text-white overflow-x-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.35, scale: 1.1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: [0.42, 0, 0.58, 1] }}
          className="absolute top-[-15%] left-[-10%] w-[38vw] h-[38vw] bg-gradient-to-tr from-purple-700 via-indigo-600 to-cyan-500 rounded-full blur-3xl opacity-60"
        />
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.18, scale: 1.05 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute bottom-[-12%] right-[-10%] w-[28vw] h-[28vw] bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 rounded-full blur-3xl opacity-50"
        />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-30 w-full bg-gradient-to-r from-[#0a0f1c]/90 via-[#141d2f]/90 to-[#1a223a]/85 backdrop-blur-lg border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2">
            {/* SVG Placeholder Logo */}
            <span className="inline-block">
              <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="url(#grad)" />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-br from-indigo-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
              hi.AI
            </span>
          </a>
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-sm">
            <li>
              <a href="#home" className="transition-colors hover:text-cyan-400 focus:text-cyan-400">Home</a>
            </li>
            <li>
              <a href="#features" className="transition-colors hover:text-cyan-400 focus:text-cyan-400">Features</a>
            </li>
            <li>
              <a href="#about" className="transition-colors hover:text-cyan-400 focus:text-cyan-400">About</a>
            </li>
            <li>
              <a href="#testimonials" className="transition-colors hover:text-cyan-400 focus:text-cyan-400">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-cyan-400 focus:text-cyan-400">Contact</a>
            </li>
          </ul>
          {/* Hamburger (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Open Menu"
              className="p-2 rounded hover:bg-white/10 focus:bg-white/10 transition-colors"
              tabIndex={0}
            >
              {/* Hamburger Icon */}
              <svg width={26} height={26} viewBox="0 0 24 24" fill="none">
                <rect x="4" y="6" width="16" height="2" rx="1" fill="#22d3ee" />
                <rect x="4" y="11" width="16" height="2" rx="1" fill="#22d3ee" />
                <rect x="4" y="16" width="16" height="2" rx="1" fill="#22d3ee" />
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Nav (static, for demo purposes) */}
        <ul className="md:hidden px-6 pb-4 flex flex-col gap-2">
          <li>
            <a href="#home" className="block py-2 px-3 rounded hover:bg-white/5 focus:bg-white/5 transition-colors">Home</a>
          </li>
          <li>
            <a href="#features" className="block py-2 px-3 rounded hover:bg-white/5 focus:bg-white/5 transition-colors">Features</a>
          </li>
          <li>
            <a href="#about" className="block py-2 px-3 rounded hover:bg-white/5 focus:bg-white/5 transition-colors">About</a>
          </li>
          <li>
            <a href="#testimonials" className="block py-2 px-3 rounded hover:bg-white/5 focus:bg-white/5 transition-colors">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="block py-2 px-3 rounded hover:bg-white/5 focus:bg-white/5 transition-colors">Contact</a>
          </li>
        </ul>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative py-28 md:py-40 flex items-center justify-center min-h-[60vh]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-indigo-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent mb-6"
            >
              Welcome to hi.AI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
              className="text-lg md:text-xl text-slate-300 mb-8"
            >
              Elevate your workflow with the next-gen AI platform that understands your needs and amplifies productivity. Experience the future of intelligent automation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
              className="flex justify-center"
            >
              <a
                href="#features"
                className="inline-block bg-gradient-to-r from-cyan-400 to-indigo-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Discover Features
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-24 bg-[#111624]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-300 bg-clip-text text-transparent"
            >
              Powerful AI Features at Your Fingertips
            </motion.h2>
            <div className="grid gap-10 md:grid-cols-3">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
                className="bg-gradient-to-br from-[#181e34] via-[#1b253c] to-[#1a223a] rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-white/5 hover:border-cyan-400/40 transition-all"
              >
                <div className="mb-5">
                  {/* AI Brain Icon */}
                  <svg width={48} height={48} fill="none">
                    <circle cx={24} cy={24} r={22} fill="url(#aibrain)" opacity={0.18} />
                    <path d="M24 15c-4 0-7 2.5-7 6.5 0 2.5 2 4.5 4.5 4.5 0 2 2.5 2 2.5 0 2.5 0 4.5-2 4.5-4.5C31 17.5 28 15 24 15z" stroke="#22d3ee" strokeWidth="2" />
                    <defs>
                      <radialGradient id="aibrain" cx="0" cy="0" r="1" gradientTransform="translate(24 24) scale(24)" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#22d3ee" />
                        <stop offset="1" stopColor="#6366f1" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2 text-cyan-300">Intelligent Automation</h3>
                <p className="text-slate-300">
                  Automate repetitive tasks and optimize workflows with AI-powered decision-making that adapts to your business in real-time.
                </p>
              </motion.div>
              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-gradient-to-br from-[#181e34] via-[#1b253c] to-[#1a223a] rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-white/5 hover:border-cyan-400/40 transition-all"
              >
                <div className="mb-5">
                  {/* Lightning / Speed Icon */}
                  <svg width={48} height={48} fill="none">
                    <circle cx={24} cy={24} r={22} fill="url(#speedfeat)" opacity={0.18} />
                    <path d="M24 13l-6 11h5l-2 11 8-13h-5l2-9z" fill="#6366f1" />
                    <defs>
                      <radialGradient id="speedfeat" cx="0" cy="0" r="1" gradientTransform="translate(24 24) scale(24)" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6366f1" />
                        <stop offset="1" stopColor="#22d3ee" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2 text-indigo-300">Lightning-Fast Insights</h3>
                <p className="text-slate-300">
                  Instantly analyze complex data to uncover actionable insights and make smarter, faster decisions with AI-driven analytics.
                </p>
              </motion.div>
              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-gradient-to-br from-[#181e34] via-[#1b253c] to-[#1a223a] rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-white/5 hover:border-cyan-400/40 transition-all"
              >
                <div className="mb-5">
                  {/* Customizable Icon */}
                  <svg width={48} height={48} fill="none">
                    <circle cx={24} cy={24} r={22} fill="url(#customfeat)" opacity={0.18} />
                    <rect x="14" y="20" width="20" height="8" rx="2" fill="#22d3ee" />
                    <rect x="10" y="28" width="12" height="6" rx="2" fill="#6366f1" />
                    <defs>
                      <radialGradient id="customfeat" cx="0" cy="0" r="1" gradientTransform="translate(24 24) scale(24)" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#22d3ee" />
                        <stop offset="1" stopColor="#6366f1" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2 text-emerald-300">Customizable Solutions</h3>
                <p className="text-slate-300">
                  Tailor the AI platform to your unique needs with modular tools, flexible APIs, and seamless integrations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-24 bg-gradient-to-r from-[#161e2e] via-[#172132] to-[#1c243b]">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-5 bg-gradient-to-br from-indigo-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
                Our Mission: Empowering Human Potential with AI
              </h2>
              <p className="text-slate-300 text-lg mb-6">
                At hi.AI, we believe the future is a synergy of human intuition and artificial intelligence. Our mission is to democratize advanced AI for businesses and individuals, making cutting-edge tools accessible, ethical, and impactful.
              </p>
              <ul className="space-y-3 text-slate-200">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Transparency & Trust at Every Step</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-indigo-400" />
                  <span>Human-Centric Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Continuous Innovation</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
              className="flex items-center justify-center"
            >
              {/* About Illustration */}
              <svg width={280} height={220} fill="none" className="mx-auto">
                <ellipse cx={140} cy={110} rx={120} ry={90} fill="url(#aboutbg)" opacity={0.15} />
                <rect x={60} y={70} width={160} height={50} rx={15} fill="#232e4a" />
                <rect x={100} y={90} width={80} height={30} rx={8} fill="#1c243b" />
                <circle cx={140} cy={105} r={14} fill="url(#aboutcircle)" />
                <defs>
                  <radialGradient id="aboutbg" cx="0" cy="0" r="1" gradientTransform="translate(140 110) scale(120 90)" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#22d3ee" />
                    <stop offset="1" stopColor="#6366f1" />
                  </radialGradient>
                  <linearGradient id="aboutcircle" x1="126" y1="90" x2="154" y2="120" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-[#171e2c]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-300 bg-clip-text text-transparent"
            >
              Trusted by Innovators Worldwide
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Testimonial 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
                className="bg-gradient-to-tr from-[#1b253c] via-[#181e34] to-[#223057] rounded-xl p-8 shadow-lg border border-white/5"
              >
                <p className="text-slate-200 mb-6 italic">
                  &quot;hi.AI revolutionized how our team works. The automation tools saved us hundreds of hours, and the insights drove record growth.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <span className="block w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 via-indigo-400 to-emerald-300" />
                  <div>
                    <span className="font-semibold text-cyan-300">Alex Kim</span>
                    <div className="text-xs text-slate-400">Product Lead, TechNova</div>
                  </div>
                </div>
              </motion.div>
              {/* Testimonial 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
                className="bg-gradient-to-tr from-[#1b253c] via-[#181e34] to-[#223057] rounded-xl p-8 shadow-lg border border-white/5"
              >
                <p className="text-slate-200 mb-6 italic">
                  &quot;The customizable modules let us build exactly what we needed. Support is top-notch and the platform is super intuitive.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <span className="block w-10 h-10 rounded-full bg-gradient-to-br from-emerald-300 via-cyan-400 to-indigo-400" />
                  <div>
                    <span className="font-semibold text-emerald-300">Priya Singh</span>
                    <div className="text-xs text-slate-400">CTO, Visionary Labs</div>
                  </div>
                </div>
              </motion.div>
              {/* Testimonial 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
                className="bg-gradient-to-tr from-[#1b253c] via-[#181e34] to-[#223057] rounded-xl p-8 shadow-lg border border-white/5"
              >
                <p className="text-slate-200 mb-6 italic">
                  &quot;We trust hi.AI for mission-critical automation. The platform keeps improving and always puts our needs first.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <span className="block w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 via-cyan-400 to-emerald-300" />
                  <div>
                    <span className="font-semibold text-indigo-300">Morgan Lee</span>
                    <div className="text-xs text-slate-400">CEO, DataFlowX</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="cta" className="py-24 bg-gradient-to-r from-[#18203d] via-[#12203b] to-[#1f283e]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl md:text-4xl font-bold mb-5 bg-gradient-to-br from-indigo-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent"
            >
              Ready to Unlock Your Potential?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
              className="text-lg text-slate-300 mb-8"
            >
              Join the movement and harness the power of AI to transform your business. Start your journey with hi.AI today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.65, ease: [0.42, 0, 0.58, 1] }}
              className="flex justify-center"
            >
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-cyan-400 to-indigo-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Get Started
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-[#161e2e]">
          <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-indigo-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
                Contact hi.AI
              </h2>
              <p className="text-slate-300 mb-6">
                We're here to help you. Reach out for a personalized demo, support, or partnership opportunities.
              </p>
              <ul className="space-y-4 text-slate-200">
                <li className="flex items-center gap-3">
                  {/* Email Icon */}
                  <svg width={20} height={20} fill="none" className="text-cyan-400">
                    <rect x={2} y={4} width={16} height={12} rx={3} stroke="#22d3ee" strokeWidth="2" />
                    <path d="M4 6l6 5 6-5" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>hello@hi.ai</span>
                </li>
                <li className="flex items-center gap-3">
                  {/* Phone Icon */}
                  <svg width={20} height={20} fill="none" className="text-cyan-400">
                    <rect x={4} y={2} width={12} height={16} rx={3} stroke="#22d3ee" strokeWidth="2" />
                    <circle cx={10} cy={16} r={1} fill="#22d3ee" />
                  </svg>
                  <span>+1 800 123 4567</span>
                </li>
                <li className="flex items-center gap-3">
                  {/* Location Icon */}
                  <svg width={20} height={20} fill="none" className="text-cyan-400">
                    <circle cx={10} cy={8} r={3} stroke="#22d3ee" strokeWidth="2" />
                    <path d="M10 18c3.5-4 6-7 6-10a6 6 0 10-12 0c0 3 2.5 6 6 10z" stroke="#22d3ee" strokeWidth="2" />
                  </svg>
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </motion.div>
            {/* Contact Form (placeholder) */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
              className="bg-gradient-to-br from-[#181e34] via-[#1b253c] to-[#1a223a] rounded-xl shadow-lg p-8 flex flex-col gap-5 border border-white/5"
              autoComplete="off"
            >
              <div>
                <label htmlFor="name" className="block mb-1 font-semibold text-slate-200">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md bg-[#22294a] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/80"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-semibold text-slate-200">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@email.com"
                  className="w-full px-4 py-2 rounded-md bg-[#22294a] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/80"
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-semibold text-slate-200">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2 rounded-md bg-[#22294a] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/80"
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                className="mt-2 bg-gradient-to-r from-cyan-400 to-indigo-500 font-semibold text-white px-6 py-3 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#101624] border-t border-white/10 mt-8 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            {/* Footer Logo */}
            <span className="inline-block">
              <svg width={28} height={28} viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="url(#ftrgrad)" />
                <defs>
                  <linearGradient id="ftrgrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366f1" />
                    <stop offset="1" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="font-bold text-lg bg-gradient-to-br from-indigo-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">hi.AI</span>
          </div>
          <nav className="flex flex-col sm:flex-row items-center gap-5 text-slate-400 font-medium text-sm">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            {/* Social icons (SVG placeholders) */}
            <a href="#" className="p-2 rounded hover:bg-white/10 focus:bg-white/10 transition-colors" aria-label="Twitter">
              <svg width={22} height={22} fill="none" viewBox="0 0 24 24">
                <path d="M22 5.92a8.67 8.67 0 01-2.48.68A4.19 4.19 0 0021.4 4.1a8.38 8.38 0 01-2.67 1.02A4.14 4.14 0 0012 8.75c0 .33.04.65.11.95A11.72 11.72 0 013 4.89a4.13 4.13 0 001.28 5.52c-.38-.01-.73-.11-1.04-.27v.03c0 2.07 1.47 3.8 3.41 4.2-.36.1-.74.16-1.13.06.31.97 1.22 1.68 2.29 1.7A8.3 8.3 0 012 19.11a11.74 11.74 0 006.29 1.84c7.54 0 11.67-6.24 11.67-11.66 0-.18 0-.35-.01-.53A8.02 8.02 0 0022 5.92z" fill="#38bdf8"/>
              </svg>
            </a>
            <a href="#" className="p-2 rounded hover:bg-white/10 focus:bg-white/10 transition-colors" aria-label="LinkedIn">
              <svg width={22} height={22} fill="none" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" fill="#6366f1"/>
                <rect x="6" y="9" width="3" height="7" fill="#fff"/>
                <rect x="6" y="6" width="3" height="2.5" rx="1.2" fill="#fff"/>
                <rect x="11" y="9" width="3" height="7" fill="#fff"/>
                <rect x="11" y="13" width="3" height="3" rx="1" fill="#6366f1"/>
                <rect x="15" y="9" width="3" height="7" fill="#fff"/>
              </svg>
            </a>
            <a href="#" className="p-2 rounded hover:bg-white/10 focus:bg-white/10 transition-colors" aria-label="GitHub">
              <svg width={22} height={22} fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#22d3ee"/>
                <path d="M14.5 18.5v-2.2c0-.4-.1-.7-.3-.9 1-.1 2.1-.5 2.1-2.3 0-.5-.2-.9-.5-1.2 0-.1.2-.6-.1-1.2 0 0-.4-.1-1.2.5-.4-.1-.9-.2-1.4-.2s-1 .1-1.4.2c-.8-.6-1.2-.5-1.2-.5-.3.6-.1 1.1-.1 1.2-.3.3-.5.7-.5 1.2 0 1.7 1.1 2.2 2.1 2.3-.1.1-.2.3-.2.7v2.3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} hi.AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
export default LandingPage;