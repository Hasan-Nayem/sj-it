    import React, { useState } from 'react';
    import { motion } from 'motion/react';
    import { ContactAndFooter } from './components/ContactAndFooter';

    export default function Career() {
      const [activeTab, setActiveTab] = useState<'why' | 'opportunities'>('why');

      return (
        <main className="flex-1 flex flex-col">


              {/* Career Hero */}
              <section className="relative h-[250px] w-full overflow-hidden">

                {/* Background Image */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  }}
                >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center items-center pt-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4"
          >
            Career
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto"
          >
            Join our team and grow your career in a dynamic, innovative, and collaborative work environment.
          </motion.p>
        </div>
              </section>





          {/* Content Area */}
          <section className="flex-grow bg-[#022e4e] py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Tabs */}
              <div className="flex border-b border-white/10 mb-12 max-w-3xl mx-auto rounded-t-xl overflow-hidden bg-white/5">
                <button
                  onClick={() => setActiveTab('why')}
                  className={`flex-1 py-4 text-center font-semibold text-lg transition-all duration-300 ${
                    activeTab === 'why' 
                      ? 'bg-cyan-500/20 text-cyan-400 border-b-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                      : 'bg-transparent text-slate-400 hover:bg-white/5 hover:text-slate-300 border-b-2 border-transparent'
                  }`}
                >
                  Why Join SJ IT LTD?
                </button>
                <button
                  onClick={() => setActiveTab('opportunities')}
                  className={`flex-1 py-4 text-center font-semibold text-lg transition-all duration-300 ${
                    activeTab === 'opportunities' 
                      ? 'bg-cyan-500/20 text-cyan-400 border-b-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                      : 'bg-transparent text-slate-400 hover:bg-white/5 hover:text-slate-300 border-b-2 border-transparent'
                  }`}
                >
                  Opportunities
                </button>
              </div>

              <div className="max-w-3xl mx-auto">
                {activeTab === 'opportunities' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-4">Opportunities</h2>
                    <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                      SJ IT LTD is always offering new employment opportunities for skilled professionals across a range of fields. From software developers to marketing specialists, we are searching for talent from all walks of life. Currently, the following vacancies are accepting applications:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Job Card 1 */}
                      <div className="glass-card bg-[#1e293b]/50 border border-white/5 p-8 rounded-2xl shadow-xl hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-4">iOS Developer</h3>
                        <div className="space-y-2 text-sm text-slate-400 mb-8 font-mono">
                          <p><span className="text-cyan-400 mr-2">›</span>No. of Positions: 2</p>
                          <p><span className="text-cyan-400 mr-2">›</span>Experience: At least 2 years</p>
                          <p><span className="text-cyan-400 mr-2">›</span>Job Type: Full Time</p>
                          <p><span className="text-cyan-400 mr-2">›</span>Deadline: 06.06.2024</p>
                        </div>
                        <div className="mt-auto pt-6">
                          <button onClick={() => {document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });}} className="w-full text-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25">
                            Apply Now
                          </button>
                        </div>
                      </div>

                      {/* Job Card 2 */}
                      <div className="glass-card bg-[#1e293b]/50 border border-white/5 p-8 rounded-2xl shadow-xl hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-4">Graphics Designer</h3>
                        <div className="space-y-2 text-sm text-slate-400 mb-8 font-mono">
                          <p><span className="text-cyan-400 mr-2">›</span>No. of Positions: 1</p>
                          <p><span className="text-cyan-400 mr-2">›</span>Experience: At least 2 years</p>
                          <p><span className="text-cyan-400 mr-2">›</span>Job Type: Full Time</p>
                          <p><span className="text-cyan-400 mr-2">›</span>Deadline: 06.06.2024</p>
                        </div>
                        <div className="mt-auto pt-6">
                          <button onClick={() => {document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });}} className="w-full text-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25">
                            Apply Now
                          </button>
                        </div>
                      </div>
                      
                      {/* Job Card 3 */}
                      <div className="glass-card bg-[#1e293b]/50 border border-white/5 p-8 rounded-2xl shadow-xl hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-4">Web Developer</h3>
                        <div className="space-y-2 text-sm text-slate-400 mb-8 font-mono">
                          <p><span className="text-cyan-400 mr-2">›</span>No. of Positions: 3</p>
                          <p><span className="text-cyan-400 mr-2">›</span>Experience: At least 3 years</p>
                          <p><span className="text-cyan-400 mr-2">›</span>Job Type: Full Time</p>
                          <p><span className="text-cyan-400 mr-2">›</span>Deadline: 06.06.2024</p>
                        </div>
                        <div className="mt-auto pt-6">
                          <button onClick={() => {document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });}} className="w-full text-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'why' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="glass-card bg-[#1e293b]/50 border border-white/5 p-8 md:p-12 rounded-3xl shadow-xl">
                      <h2 className="text-3xl font-bold text-white mb-6">Why Join SJ IT LTD?</h2>
                      <div className="prose prose-slate prose-invert max-w-none text-slate-300 text-lg leading-relaxed">
                        <p className="mb-6">
                          At SJ IT LTD, we believe that our greatest asset is our people. We foster an environment of continuous learning and innovation where every team member gets the opportunity to grow and make a real impact.
                        </p>
                        <ul className="space-y-4 mb-8 list-none pl-0">
                          <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">✦</span><span>Innovative work environment with cutting-edge technologies</span></li>
                          <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">✦</span><span>Competitive compensation packages and benefits</span></li>
                          <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">✦</span><span>Opportunities for continuous learning and professional development</span></li>
                          <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">✦</span><span>A collaborative and supportive team culture</span></li>
                          <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">✦</span><span>Flexible working arrangements</span></li>
                        </ul>
                        <p className="text-cyan-400 font-medium">
                          Join us in building software solutions that transform businesses across the globe.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </section>

          {/* Adding Contact and Footer */}
          <ContactAndFooter />
        </main>
      );
    }
