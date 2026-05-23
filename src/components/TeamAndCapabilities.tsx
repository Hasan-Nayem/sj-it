import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';
import { ImageWithSkeleton } from './ImageWithSkeleton';

export function TeamAndCapabilities() {
  const capabilities = [
    "Web Application", "Mobile App Dev", "UI/UX Design", 
    "Quality Assurance", "React & Node.js", "Python / Django",
    "Cloud Architecture", "API Integration", "Database Management", 
    "eCommerce Solutions"
  ];

  return (
    <section className="py-16 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Meet Our Team */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass-card rounded-3xl p-8 md:p-10 border border-white/5"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Meet Our Team</h2>
            <p className="text-slate-400 text-sm">Let Us Be Your Backend Team. We take care of all your software processing needs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", name: "Md. Shariful Islam Shamim", title: "CEO" },
              { img: "https://i.ibb.co.com/mFBvCCw7/SJ-IT-Images-26.png", name: "Md. Forhad Hossain", title: "Executive Manager" },
              { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", name: "Senior Developer", title: "Engineering" }
            ].map((member, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-2xl aspect-[3/4] bg-slate-800">
                <ImageWithSkeleton 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-x-2 bottom-2 bg-[#1e293b]/95 backdrop-blur p-4 rounded-xl text-center border border-white/5 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h4 className="font-bold text-white text-sm md:text-base leading-tight mb-1">{member.name}</h4>
                    <p className="text-blue-400 text-xs md:text-sm font-medium uppercase tracking-wide">{member.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div>
              <h3 className="text-white font-semibold mb-1">Interested in joining with us?</h3>
              <p className="text-slate-400 text-sm">Please send us your details along with your resume.</p>
            </div>
            <button className="px-6 py-2 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-medium whitespace-nowrap transition-colors">
              Write us →
            </button>
          </div>
        </motion.div>

        {/* Supported SJ IT LTD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-[2rem] p-8 md:p-10 border border-[#1e293b] bg-[#0b1121] shadow-2xl flex flex-col relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="mb-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight leading-none">Supported</h2>
            <div className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 tracking-tight leading-none">
              SJ IT LTD
            </div>
            <p className="text-slate-400 text-sm md:text-base max-w-md font-medium leading-relaxed border-l-2 border-cyan-500/30 pl-4">
              Expert IT & Software Development Services Company in Bangladesh
            </p>
          </div>

          <div className="relative z-10 mt-auto">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              Capabilities
              <div className="h-px bg-white/10 flex-1 ml-2"></div>
            </h3>
            <div className="grid grid-cols-2 gap-2 w-full">
               {capabilities.map((cap, i) => (
                  <div key={i} className="px-3 py-2.5 rounded-xl border border-slate-700/50 text-slate-300 text-xs md:text-sm bg-slate-800/30 hover:bg-slate-800/80 transition-all cursor-default flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></div>
                     {cap}
                  </div>
               ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Stats and Comparison combined section visually */}
      <div className="mt-20 space-y-20">
         {/* Performance Insights */}
         <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 grid grid-cols-2 gap-4"
            >
               <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                 <span className="text-4xl font-bold text-white mb-2">500+</span>
                 <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">Projects</span>
               </div>
               <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                 <span className="text-4xl font-bold text-white mb-2">50+</span>
                 <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Clients</span>
               </div>
               <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:border-teal-500/30 hover:bg-white/10 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300">
                 <span className="text-4xl font-bold text-white mb-2">99%</span>
                 <span className="text-teal-400 text-sm font-medium uppercase tracking-wider">QC Accuracy</span>
               </div>
               <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                 <span className="text-4xl font-bold text-white mb-2">24/7</span>
                 <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">Support</span>
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-6"
            >
               <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/20">Results & Analytics</span>
               <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Performance Insights <br /> and Analytics Overview
               </h2>
               <p className="text-slate-400 text-lg leading-relaxed">
                  Our analytics-driven approach ensures that every decision is backed by data. We monitor performance metrics in real-time to guarantee efficiency and accuracy in all software tasks.
               </p>
            </motion.div>
         </div>

         {/* Choosing Comparison */}
         <div className="max-w-5xl mx-auto text-center pb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Choosing <span className="text-cyan-400">SJ IT LTD</span> <br className="hidden md:block"/> Technologies Over Others
            </h2>
            <p className="text-slate-400 mb-16 text-lg">See why SJ IT LTD stands out with superior service, innovation, and client satisfaction benchmarks.</p>
            
            <div className="grid grid-cols-2 gap-0 mb-4 px-2 md:px-0 max-w-4xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white text-left pl-6">Other Agencies</h3>
                <h3 className="text-xl md:text-2xl font-bold text-cyan-400 text-left pl-6">SJ IT LTD</h3>
            </div>

            <div className="max-w-4xl mx-auto space-y-3">
               {[
                 { bad: "Experienced team delivering standard solutions.", good: "Highly skilled specialists delivering customized solutions." },
                 { bad: "Offers standard, template-based designs.", good: "Offers innovative, bespoke website designs." },
                 { bad: "Limited post-launch support and updates.", good: "Comprehensive post-launch support and updates." },
                 { bad: "Basic performance with average loading times.", good: "Optimal performance with fast loading times." },
                 { bad: "Basic SEO practices implemented.", good: "Advanced SEO tactics for enhanced online visibility." }
               ].map((c, idx) => (
                  <div key={idx} className="flex w-full group/comp overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-cyan-500/10 transition-all duration-300 cursor-default">
                     <div className="w-1/2 bg-[#172033]/90 rounded-l-xl md:rounded-l-2xl p-4 md:p-6 flex items-center gap-4 md:gap-6 border border-white/5 border-r-0 group-hover/comp:bg-[#172033] transition-colors">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                           <X className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                        <span className="text-slate-300 text-left text-xs md:text-sm font-medium leading-tight">{c.bad}</span>
                     </div>
                     <div className="w-1/2 bg-[#1e293b] rounded-r-xl md:rounded-r-2xl p-4 md:p-6 flex items-center gap-4 md:gap-6 relative border border-white/5 border-l-0 shadow-[inset_4px_0_20px_rgba(14,165,233,0.05)] group-hover/comp:bg-[#1e293b]/80 group-hover/comp:border-cyan-500/30 transition-colors">
                        <div className="absolute left-0 top-[15%] bottom-[15%] w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_rgba(34,211,238,0.8)] opacity-60"></div>
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0 ml-2 md:ml-4">
                           <Check className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                        <span className="text-white text-left text-xs md:text-sm font-bold leading-tight">{c.good}</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

    </section>
  );
}
