import { motion } from 'motion/react';
import { Network, Code2, PenTool, Globe, Server, Database, Smartphone, Workflow } from 'lucide-react';

export function Services() {
  const smbServices = [
    { icon: Network, title: "IT Automation", desc: "Automate technical services to operate agents.", color: "text-blue-400" },
    { icon: Code2, title: "Software Development", desc: "Let us take care of your software applications so you can focus on your core business.", color: "text-cyan-400" },
    { icon: Globe, title: "Web Application", desc: "We specialize in web services for small to medium-sized companies.", color: "text-blue-500" },
    { icon: Smartphone, title: "Mobile App Dev", desc: "Streamlined communication and apps for your mobile users.", color: "text-teal-400" },
    { icon: PenTool, title: "UI/UX Design", desc: "Increase your brand awareness and revenue with creative UI/UX designs.", color: "text-indigo-400" },
  ];

  const brandHelp = [
    { icon: Database, title: "Database Management", desc: "Accurate and timely updates for all your software needs." },
    { icon: Workflow, title: "API Integration", desc: "Seamless connections to third-party services and APIs." },
    { icon: Server, title: "Cloud Architecture", desc: "Scale securely with modern cloud infrastructure setup." }
  ];

  return (
    <section className="py-12 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Services For SMBs */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Services We Offer For Small & <br className="hidden md:block" /> Medium-Sized Businesses
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
        {smbServices.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center text-center group p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform duration-300">
               <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <service.icon className={`w-5 h-5 ${service.color}`} />
               </div>
            </div>
            <h3 className="text-white font-semibold text-sm mb-2">{service.title}</h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-[200px]">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* See How We Can Help Your Brand */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">See How We Can Help Your Brand</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {brandHelp.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mb-4 text-cyan-400">
               <item.icon className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
            <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
          </motion.div>
         ))}
      </div>

    </section>
  );
}
