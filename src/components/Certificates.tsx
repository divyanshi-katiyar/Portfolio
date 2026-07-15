import { useState } from 'react';
import { Award, Calendar, ExternalLink, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { certificates, Certificate } from '../data/certificates';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section 
      id="certificates" 
      className="py-24 relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[-5%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-blue-500/5 blur-[110px]" />
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
            <Award className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            Certifications & Accreditations
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg font-light leading-relaxed"
          >
            A compilation of professional trainings, courses, and certifications from industry leaders verifying technical specialization.
          </motion.p>
        </div>

        {/* Certificates Grid or Placeholder */}
        {certificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedCert(cert)}
                className="group glass-panel rounded-2xl overflow-hidden p-6 hover:shadow-xl dark:hover:shadow-purple-500/5 hover:border-purple-500/20 transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 cursor-pointer bg-white dark:bg-slate-900"
              >
                {/* Image Preview Block */}
                <div className="relative w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 border border-slate-200/25 dark:border-white/5">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-white text-glow-purple" />
                  </div>
                </div>

                {/* Text Info Block */}
                <div className="flex-grow flex flex-col justify-between h-full space-y-2">
                  <div>
                    <div className="flex items-center space-x-1.5 text-xs text-purple-600 dark:text-cyan-400 font-semibold font-mono">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{cert.issuer}</span>
                    </div>
                    <h3 className="text-lg font-display font-semibold text-slate-800 dark:text-white mt-1 leading-snug group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="flex items-center space-x-1.5 text-slate-400 dark:text-slate-500 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{cert.issueDate}</span>
                    </span>
                    
                    <button
                      id={`cert-${cert.id}-view`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCert(cert);
                      }}
                      className="text-xs font-medium text-purple-600 dark:text-cyan-400 hover:underline cursor-pointer flex items-center space-x-1"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center p-12 border border-dashed border-purple-500/25 dark:border-slate-800 rounded-3xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm max-w-xl mx-auto"
          >
            <div className="p-4 bg-purple-500/10 dark:bg-cyan-500/10 rounded-full border border-purple-500/20 dark:border-cyan-500/20 mb-4 animate-pulse">
              <Award className="w-8 h-8 text-purple-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-display font-semibold text-slate-800 dark:text-white mb-2">
              Certifications
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-light">
              More certificates will be added as I continue learning.
            </p>
          </motion.div>
        )}

        {/* Certificate Detail Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Dark Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 z-10"
              >
                {/* Close Button */}
                <button
                  id="modal-close-btn"
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300 transition-colors z-20 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Banner / Visual preview */}
                <div className="relative h-48 bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80" />
                  
                  {/* Decorative badge in middle */}
                  <div className="relative p-4 rounded-full bg-purple-600/25 border border-purple-400/40 backdrop-blur-md shadow-lg animate-float">
                    <Award className="w-12 h-12 text-purple-400" />
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 dark:bg-purple-500/25 text-purple-700 dark:text-purple-300 text-xs font-semibold font-mono tracking-wider uppercase">
                      {selectedCert.issuer}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mt-3 leading-snug">
                      {selectedCert.title}
                    </h3>
                    <p className="flex items-center space-x-1.5 text-slate-400 dark:text-slate-500 text-sm font-mono mt-2">
                      <Calendar className="w-4 h-4" />
                      <span>Certified on {selectedCert.issueDate}</span>
                    </p>
                  </div>

                  {/* Description text */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">Description / Competencies</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                      {selectedCert.description}
                    </p>
                  </div>

                  {/* Actions footer */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <a
                      id="modal-verify-btn"
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-sm rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-md"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      id="modal-close-footer"
                      onClick={() => setSelectedCert(null)}
                      className="flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
