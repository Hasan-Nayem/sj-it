import { motion } from 'motion/react';
import { Settings, ShieldCheck, Clock, CheckCircle2, Box, Code2 } from 'lucide-react';

export function WhyChoose() {
  const standouts = [
    { icon: Settings, title: "Software Automation", desc: "We handle high-volume systems to ensure full automation for your platforms." },
    { icon: ShieldCheck, title: "Quality Assurance", desc: "Our QA team ensures every product and line item meets client guidelines before submission." },
    { icon: Clock, title: "24/7 Support", desc: "Our team operates round the clock to ensure your work orders are processed." },
    { icon: Box, title: "Project Management", desc: "We recruit, vet, and manage vendors to ensure full coverage and compliance." },
    { icon: CheckCircle2, title: "System Integration", desc: "We handle utility activations, data connections, and shut-offs for software efficiency." },
    { icon: Code2, title: "Software Expertise", desc: "Expertise in all major development software, APIs, E-commerce, and client-proprietary systems." },
  ];

  return (
    <section className="py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Why SJ IT LTD Stands Out */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why SJ IT LTD <br className="hidden md:block" /> Technologies Stands Out
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {standouts.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card rounded-2xl p-8 border border-white/5 hover:border-blue-500/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
               <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
