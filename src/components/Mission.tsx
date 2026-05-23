import { motion } from 'motion/react';
import { Lightbulb, HeadphonesIcon, Users, ShieldCheck } from 'lucide-react';

export function Mission() {
  return (
    <section className="pt-0 pb-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Mission Box */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card glow-border rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto mb-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Our mission is to design <br className="hidden md:block" />
            websites and software that <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">attract and engage</span> customers.
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            However, we approach things a bit differently with our data-driven strategies and automated solutions.
          </p>
        </div>
      </motion.div>

      {/* How We Can Help */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Can Help Your Business Grow</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: Lightbulb,
            title: "Value",
            desc: "We offer automation solutions to businesses and help them reduce overhead costs."
          },
          {
            icon: HeadphonesIcon,
            title: "Support",
            desc: "Our 24/7 customer support team is here to help clients achieve their desired business goals."
          },
          {
            icon: Users,
            title: "Trust",
            desc: "Our business plan and strategies are developed with transparency, to help businesses grow."
          },
          {
            icon: ShieldCheck,
            title: "Quality",
            desc: "We're proud of the work we do, and we're thrilled to work with over 4,000 clients worldwide."
          }
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card rounded-2xl p-8 hover:bg-white/5 transition-colors border border-white/5 hover:border-cyan-500/30 flex flex-col items-center text-center group"
          >
            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
