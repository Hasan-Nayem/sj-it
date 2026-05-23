import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Target, Rocket, Shield, Globe, Clock, Code, Database, Cloud, Zap, HeadphonesIcon, CheckCircle2 } from 'lucide-react';
import { ContactAndFooter } from './components/ContactAndFooter';
import { ImageWithSkeleton } from './components/ImageWithSkeleton';

const values = [
  { icon: <Target />, title: "Precision", desc: "We deliver exact, data-driven solutions tailored to your unique business needs." },
  { icon: <Users />, title: "Collaboration", desc: "We believe in working closely with our clients as a unified team." },
  { icon: <Award />, title: "Excellence", desc: "Setting high standards and consistently exceeding them in every project." },
  { icon: <Rocket />, title: "Innovation", desc: "Constantly exploring new technologies to keep you ahead of the curve." },
  { icon: <Shield />, title: "Integrity", desc: "Transparent processes, honest communication, and secure practices." },
  { icon: <Globe />, title: "Global Reach", desc: "Providing world-class IT services to clients across different continents." }
];

const services = [
  { icon: <Code />, title: "Custom Software Development", desc: "We build scalable, robust, and highly customized software solutions that perfectly align with your business processes and goals." },
  { icon: <Cloud />, title: "Cloud Integration & Migration", desc: "Seamlessly transition your legacy systems to modern cloud infrastructures like AWS, Azure, or Google Cloud for enhanced performance." },
  { icon: <Database />, title: "Data Analytics & AI", desc: "Leverage advanced analytics and artificial intelligence to unlock deep insights, automate workflows, and drive smarter business decisions." },
  { icon: <Zap />, title: "Digital Automation", desc: "Streamline your daily operations by automating repetitive tasks, reducing human error, and massively increasing overall efficiency." }
];

const standsOut = [
  "More than a decade of proven industry experience delivering successful projects globally.",
  "Highly customized, client-first approach rather than applying one-size-fits-all templates.",
  "Cost-effective pricing models designed to suit both startups and large-scale enterprises.",
  "A dedicated team of specialized developers, designers, and project managers.",
  "Uncompromising quality assurance with intensive testing and code reviews.",
  "Comprehensive post-launch maintenance, updates, and 24/7 technical support."
];

export default function About() {
  return (
    <main className="flex-1 flex flex-col min-h-screen">
      {/* About Hero */}
      <section className="relative h-[250px] w-full overflow-hidden">
        <ImageWithSkeleton
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
          alt="About Hero"
          className="w-full h-full object-cover"
          containerClassName="absolute inset-0 z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Text Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex flex-col justify-center items-center pt-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto"
          >
            We are a leading IT solutions company, dedicated to transforming businesses through innovative digital strategies and robust technological implementations.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="flex-grow bg-transparent py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          {/* Extraordinary IT Services Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">Architecting Digital Excellence<br/><span className="text-cyan-400">Engineered for Growth</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                At SJ IT LTD, we empower organizations to thrive in a digital-first world. Since our inception, we have been dedicated to crafting bespoke technological solutions—from scalable software architecture to future-ready automation—that drive measurable success.
              </p>
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                    <Award className="w-8 h-8 text-cyan-400 mb-4" />
                    <h3 className="text-white font-semibold text-lg mb-2">Our Experience</h3>
                    <p className="text-slate-400 text-sm">We are a team of experts with more than an amazing 11+ years of experience.</p>
                 </div>
                 <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                    <HeadphonesIcon className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-white font-semibold text-lg mb-2">Quick Support</h3>
                    <p className="text-slate-400 text-sm">24/7 customer support will help you achieve your business goals effectively.</p>
                 </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
              <ImageWithSkeleton 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Team working together" 
                className="relative rounded-3xl z-10 border border-white/10 shadow-2xl"
                containerClassName="rounded-3xl"
              />
            </motion.div>
          </div>

          {/* Story Section */}
          <div className="pt-10 border-t border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
              <ImageWithSkeleton 
                src="https://images.unsplash.com/photo-1542744094-24638ea0b56c?auto=format&fit=crop&q=80&w=1000" 
                alt="Business strategy" 
                className="relative rounded-3xl z-10 border border-white/10 shadow-2xl"
                containerClassName="rounded-3xl"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Journey to Excellence</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Founded with a vision to make technology accessible and impactful for businesses of all sizes, SJ IT LTD has grown into a trusted partner for global enterprises.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our team of dedicated professionals brings together decades of combined experience in software development, cloud infrastructure, artificial intelligence, and strategic IT consulting. We don't just build solutions; we engineer growth.
              </p>
              <div className="pt-6 border-t border-white/10 flex gap-12">
                <div>
                  <h4 className="text-4xl font-bold text-cyan-400 mb-2">10+</h4>
                  <span className="text-slate-500 uppercase tracking-widest text-sm font-semibold">Years Exp</span>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-blue-500 mb-2">500+</h4>
                  <span className="text-slate-500 uppercase tracking-widest text-sm font-semibold">Projects</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="pt-10 border-t border-white/5">
            <div className="text-center mb-16">
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase block mb-3">Our Principles</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Core Values</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((val, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card bg-[#1e293b]/50 p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SMB Services Section */}
          <div className="pt-10 border-t border-white/5">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase block mb-3">Our Offerings</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Services We Offer For Small & Medium-Sized Businesses</h2>
              <p className="text-slate-400 text-lg">
                We understand the unique challenges faced by growing businesses. Our scalable services are crafted to accelerate your growth without inflating budgets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((srv, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 items-start glass-card bg-[#1e293b]/50 p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 hover:bg-white/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    {srv.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{srv.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">{srv.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* See How We Can Help Your Brand */}
          <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-3xl p-10 md:p-16 border border-white/10 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400 via-transparent to-transparent"></div>
             <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">See How We Can Help Your Brand</h2>
               <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
                 Partner with SJ IT LTD to transform your visionary ideas into impactful digital products. From initial brainstorming to deployment, our end-to-end services ensure your brand thrives online.
               </p>
               <button onClick={() => {document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });}} className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold tracking-wide transition-all shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1">
                 Discover Your Solution Today
               </button>
             </div>
          </div>

          {/* Why SJ IT LTD Stands Out Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-10 border-t border-white/5">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why SJ IT LTD Technologies Stands Out</h2>
               <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                 We recognize that there are countless IT service providers globally. However, our commitment to lasting partnerships and quality outcomes clearly sets us apart from the rest.
               </p>
               <ul className="space-y-4">
                 {standsOut.map((point, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                     <span className="text-slate-300 leading-relaxed">{point}</span>
                   </li>
                 ))}
               </ul>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="grid grid-cols-2 gap-4"
             >
               <div className="space-y-4">
                 <ImageWithSkeleton src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" alt="Meeting" className="rounded-2xl border border-white/10 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300" containerClassName="rounded-2xl" />
                 <ImageWithSkeleton src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" alt="Working" className="rounded-2xl border border-white/10 h-48 object-cover w-full hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300" containerClassName="rounded-2xl h-48" />
               </div>
               <div className="space-y-4 pt-8">
                 <ImageWithSkeleton src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="Strategy" className="rounded-2xl border border-white/10 h-48 object-cover w-full hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300" containerClassName="rounded-2xl h-48" />
                 <ImageWithSkeleton src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600" alt="Team" className="rounded-2xl border border-white/10 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300" containerClassName="rounded-2xl" />
               </div>
             </motion.div>
          </div>

        </div>
      </section>

      <ContactAndFooter hideContactForm={true} />
    </main>
  );
}
