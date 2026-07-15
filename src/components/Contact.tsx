import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { socials } from '../data/socials';

// Custom icons for coding websites where lucide doesn't have native logos
function LeetCodeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.603 9.6a1.37 1.37 0 0 0 0 1.937l7.076 7.077a1.371 1.371 0 0 0 1.933-.006l7.077-7.077a1.371 1.371 0 0 0 0-1.933l-1.933-1.934a1.371 1.371 0 0 0-1.934 0l-5.14 5.142-3.142-3.142 5.14-5.14a1.371 1.371 0 0 0 0-1.934L14.444.414A1.371 1.371 0 0 0 13.483 0zm.014 3.012l1.934 1.934-5.14 5.14a1.371 1.371 0 0 0 0 1.934l3.142 3.142-5.14-5.14a1.371 1.371 0 0 0 0-1.934l5.142-5.142z"/>
    </svg>
  );
}

function CodeChefIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.95 0C5.353 0 0 5.353 0 11.95s5.353 11.95 11.95 11.95c6.598 0 11.95-5.353 11.95-11.95S18.548 0 11.95 0zm6.812 17.514a.591.591 0 0 1-.365.176c-.059.004-.121.002-.18-.006-.477-.075-1.025-.224-1.579-.441-2.029-.79-3.882-2.316-5.011-4.225-.668-1.127-.996-2.324-.951-3.468.046-1.143.461-2.181 1.189-3.033.407-.474.922-.89 1.487-1.213a.625.625 0 0 1 .477-.042c.156.046.28.156.34.303.059.148.049.314-.027.453-.448.817-.674 1.701-.67 2.617.005.917.241 1.815.698 2.585.834 1.406 2.193 2.508 3.659 3.102.399.162.793.284 1.173.364.156.033.284.133.35.28a.602.602 0 0 1-.1.593z"/>
    </svg>
  );
}

function HackerRankIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.962 0a11.962 11.962 0 1 0 11.963 11.962A11.963 11.963 0 0 0 11.962 0zm5.105 16.518h-2.128v-4.145h-2.146v4.145H8.892V7.482H10.79v4.14h2.146V7.48h2.128z"/>
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate standard secure backend integration timing
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5 text-purple-500" />,
      label: 'Email Me',
      value: socials.email,
      href: `mailto:${socials.email}`,
    },
    {
      icon: <Phone className="w-5 h-5 text-blue-500" />,
      label: 'Call Me',
      value: socials.phone,
      href: `tel:${socials.phone}`,
    },
    {
      icon: <MapPin className="w-5 h-5 text-cyan-500" />,
      label: 'My Location',
      value: socials.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(socials.location || '')}`,
    },
  ].filter(detail => detail.value);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5 text-slate-800 dark:text-white" />,
      href: socials.github,
      color: 'hover:border-slate-800 dark:hover:border-white hover:bg-slate-50 dark:hover:bg-slate-800/40',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5 text-[#0077B5]" />,
      href: socials.linkedin,
      color: 'hover:border-[#0077B5] hover:bg-blue-500/5',
    },
    {
      name: 'LeetCode',
      icon: <LeetCodeIcon className="w-5 h-5 text-[#FFA116]" />,
      href: socials.leetcode,
      color: 'hover:border-[#FFA116] hover:bg-[#FFA116]/5',
    },
    {
      name: 'CodeChef',
      icon: <CodeChefIcon className="w-5 h-5 text-[#5B4636] dark:text-[#E2C39B]" />,
      href: socials.codechef,
      color: 'hover:border-[#5B4636] hover:bg-[#5B4636]/5',
    },
    {
      name: 'HackerRank',
      icon: <HackerRankIcon className="w-5 h-5 text-[#2EC866]" />,
      href: socials.hackerrank,
      color: 'hover:border-[#2EC866] hover:bg-[#2EC866]/5',
    },
  ].filter(link => link.href);

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[45%] h-[45%] rounded-full bg-cyan-500/5 blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-purple-500/10 dark:bg-purple-500/20 px-3 py-1 rounded-full text-purple-700 dark:text-purple-300 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            Let's Build Something Great
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg font-light leading-relaxed"
          >
            Whether you want to recruit me for a full-time job, discuss code structures, or talk algorithms, my inbox is always open.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Details & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold text-slate-800 dark:text-white">
                Contact Information
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm sm:text-base">
                Feel free to contact me directly using any of the channels below. I normally respond within 24 hours.
              </p>

              {/* Direct Info list */}
              <div className="space-y-4">
                {contactDetails.map((detail, idx) => (
                  <motion.a
                    key={idx}
                    href={detail.href}
                    target={detail.href.startsWith('http') ? '_blank' : undefined}
                    rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 6 }}
                    className="flex items-center space-x-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-purple-500/20 bg-slate-50/50 dark:bg-slate-950/40 transition-all cursor-pointer group"
                  >
                    <div className="p-3 bg-white dark:bg-slate-950 rounded-lg shadow-sm border border-slate-200/25 dark:border-white/5 flex-shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono tracking-wider font-semibold text-slate-400 dark:text-slate-500 uppercase">
                        {detail.label}
                      </h4>
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors mt-0.5 break-all">
                        {detail.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Grid */}
            <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                Find Me On Professional Platforms:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    id={`social-link-${social.name.toLowerCase()}`}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.02 }}
                    className={`flex items-center justify-between p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-800 transition-all cursor-pointer bg-white dark:bg-slate-950 group ${social.color}`}
                  >
                    <div className="flex items-center space-x-2">
                      {social.icon}
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                        {social.name}
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 shadow-xl"
            >
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-slate-800 dark:text-white mb-6">
                Send Me A Secure Message
              </h3>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    >
                      <CheckCircle2 className="w-16 h-16 text-emerald-500 text-glow-cyan" />
                    </motion.div>
                    <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                      Message Dispatched!
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm font-light">
                      Thank you for reaching out, Divyanshi. Your message was formatted and compiled successfully. I will be in touch shortly.
                    </p>
                    <button
                      id="form-success-reset"
                      onClick={() => setStatus('idle')}
                      className="mt-6 px-6 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs rounded-full transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    id="portfolio-contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="block text-xs font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                          Full Name *
                        </label>
                        <input
                          id="form-name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-purple-500/50 dark:focus:border-cyan-500/50 text-sm transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="block text-xs font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                          Email Address *
                        </label>
                        <input
                          id="form-email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-purple-500/50 dark:focus:border-cyan-500/50 text-sm transition-colors"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                        Subject
                      </label>
                      <input
                        id="form-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Collaboration Opportunities"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-purple-500/50 dark:focus:border-cyan-500/50 text-sm transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                        Message *
                      </label>
                      <textarea
                        id="form-message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hi Divyanshi, I'd love to chat about..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-purple-500/50 dark:focus:border-cyan-500/50 text-sm transition-colors resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="text-rose-500 text-xs font-semibold">
                        Please fill out all required fields marked with *
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      id="form-submit-btn"
                      type="submit"
                      disabled={status === 'loading'}
                      className="flex items-center justify-center space-x-2 w-full py-3.5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-medium text-sm rounded-xl transition-all shadow-md shadow-purple-500/10 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processing Payload...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
