import { motion } from 'motion/react';
import { Award, Clock, CheckCircle2, BarChart3 } from 'lucide-react';
import { ImageWithSkeleton } from './ImageWithSkeleton';

export function AboutExperience() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* About Us */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 w-full max-w-md mx-auto">
               <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-2xl rounded-full" />
               <div className="glass-card rounded-3xl overflow-hidden relative">
                  <ImageWithSkeleton src="https://i.ibb.co.com/rKPYk7cS/SJ-IT-Images-4.png" alt="Outsourcing work" className="w-full object-cover aspect-short" containerClassName="w-full h-full" />
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white rounded-xl p-4 shadow-lg flex flex-col items-center justify-center border border-white/10">
                     <span className="text-3xl font-bold">5+</span>
                     <span className="text-xs uppercase tracking-wider font-medium text-blue-100">Years of<br/>Experience</span>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h4 className="text-cyan-400 font-medium tracking-wide uppercase text-sm">About Us</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Innovative Solutions <br />
               & Professional Expertise
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              At SJ IT LTD, we deliver innovative software, automation, and IT solutions that help businesses grow through smart technology, reliable systems, and expert development services since 2011.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
               <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                  <Award className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Experience</h3>
                  <p className="text-slate-400 text-sm">We are a team of people with more than 11 years of experience.</p>
               </div>
               <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                  <Clock className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Quick Support</h3>
                  <p className="text-slate-400 text-sm">24/7 customer support will help you achieve your business goals.</p>
               </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 text-slate-300 italic">
               "We offer solutions that help your business accelerate growth, simplify and personalize Customer Experience, and build priceless loyalty and trust."
            </div>

            <button className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition-colors mt-6">
              READ MORE →
            </button>
          </motion.div>
        </div>

        {/* Experience */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6 lg:pr-10"
          >
            <h4 className="text-cyan-400 font-medium tracking-wide uppercase text-sm">Our Experience</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Experts With <br /> Experience
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Our comprehensive IT and software services are designed to meet all your tech needs. We'll tailor our services to meet your specific objectives, considering each process as a unique project that evolves with your business.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                "Graphic Design", "Virtual Assistant", 
                "Web Development", "BPO Solutions",
                "Admin Support", "Digital Marketing"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 glass-card border border-blue-500/20 p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
               <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 shrink-0">
                  <BarChart3 className="w-6 h-6" />
               </div>
               <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Best Practices From Our Experts</h4>
                  <p className="text-slate-400 text-sm">We put the customer at the heart of everything we do. We can provide you with a tailored solution.</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative h-[500px]"
          >
             <div className="absolute top-0 left-0 w-2/3 h-[48%] bg-slate-800 rounded-3xl overflow-hidden">
                <ImageWithSkeleton src="https://i.ibb.co.com/Q79h5PVq/SJ-IT-Images-23.png" alt="Team" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" containerClassName="w-full h-full" />
             </div>
             
             <div className="absolute bottom-0 left-0 w-2/3 h-[48%] bg-slate-800 rounded-3xl overflow-hidden">
                <ImageWithSkeleton src="https://i.ibb.co.com/Kp58f954/SJ-IT-Images-9.png" alt="Team member" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" containerClassName="w-full h-full" />
             </div>

             <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[55%] bg-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl aspect-[4/3] border-[6px] border-[#0a0e17]">
                 <span className="text-4xl lg:text-5xl xl:text-7xl font-sans text-blue-500 font-black mb-2 text-center w-full">4000+</span>
                 <span className="text-slate-900 font-bold text-sm lg:text-lg tracking-wide text-center">Satisfied Clients</span>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
