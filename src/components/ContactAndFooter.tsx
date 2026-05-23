import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Send, Globe, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithSkeleton } from './ImageWithSkeleton';

export function ContactAndFooter({ hideContactForm = false }: { hideContactForm?: boolean }) {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent default form submission behavior (page reload)
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    // Create FormData object from the form elements
    // This gathers all input fields (name, email, message, etc.) including attachments
    const formData = new FormData(event.currentTarget);

    try {
      // Calling our own server-side proxy to keep the Forminit ID hidden
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        // Handle successful response
        setResult("Message sent successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        // Handle server-side errors (e.g., misconfigured form or limit reached)
        const data = await response.json().catch(() => ({}));
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      // Handle client-side errors like network failures
      setResult("Failed to send message. Please try again.");
    } finally {
      // Always reset the submitting state to re-enable the button
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {!hideContactForm && (
      <section className="py-16 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact">
        <div className="glass-card rounded-[2.5rem] border border-white/10 overflow-hidden relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2">
             {/* Left Image */}
             <div className="relative h-64 md:h-auto hidden md:block">
               <ImageWithSkeleton
                 src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000"
                 alt="Customer Support"
                 className="absolute inset-0 w-full h-full object-cover"
                 containerClassName="absolute inset-0"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f172a]" />
             </div>

             {/* Right Form */}
             <div className="p-8 md:p-12 lg:p-16">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                 <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-1 block">Contact Us</span>
                 <h2 className="text-2xl font-bold text-white mb-6">We Always Here To Help You</h2>

                 <form className="space-y-6" onSubmit={onSubmit}>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <label className="text-xs text-slate-400 ml-1">Your Name *</label>
                       <input type="text" name="fi-sender-fullName" required placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-xs text-slate-400 ml-1">Phone Number *</label>
                       <input type="tel" name="fi-text-phone" required placeholder="(xxx) xxx-xxxx" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" />
                     </div>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <label className="text-xs text-slate-400 ml-1">Email Address *</label>
                       <input type="email" name="fi-sender-email" required placeholder="name@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" />
                     </div>
                     <div className="space-y-2">
                       <label className="text-xs text-slate-400 ml-1">Subject</label>
                       <input type="text" name="fi-text-subject" placeholder="Project Discussion" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" />
                     </div>
                   </div>

                   <div className="space-y-2">
                     <label className="text-xs text-slate-400 ml-1">Message *</label>
                     <textarea name="fi-text-message" required rows={4} placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"></textarea>
                   </div>
                   
                   <div className="space-y-2">
                     <label className="text-xs text-slate-400 ml-1">Attach File (PDF only)</label>
                     <input type="file" name="fi-file-attachment" accept=".pdf" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-500/10 file:text-cyan-400 hover:file:bg-cyan-500/20 focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer" />
                   </div>

                   <button type="submit" disabled={isSubmitting} className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-base py-4 transition-all duration-300 shadow-xl shadow-cyan-500/25 group disabled:opacity-70 disabled:cursor-not-allowed">
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                     <span className="flex items-center justify-center gap-2 relative z-10">
                       {isSubmitting ? "Sending..." : "Send Message"}
                       {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
                     </span>
                   </button>
                   {result && (
                     <div className={`mt-4 text-sm text-center ${result.includes("success") || result.includes("sent") ? "text-green-400" : "text-yellow-400"}`}>
                       {result}
                     </div>
                   )}
                   <p className="text-xs text-slate-400 text-center mt-4">
                     Having trouble sending or attaching a PDF? Please mail directly via <a href="mailto:info@sjitltd.com" className="text-cyan-400 hover:underline">info@sjitltd.com</a>
                   </p>
                 </form>
               </motion.div>
             </div>
          </div>
        </div>
      </section>
      )}

      {/* Footer */}
<footer className="relative overflow-hidden pt-16 pb-8">
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      transform: 'scaleX(1)' ,
    }}
  />

        {/* GRADIENT OVERLAY */}
<div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 to-[#0f172a]/50 z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
              <img src="https://i.ibb.co.com/4kTVSnp/screen.png" alt="SJ IT LTD Logo" className="h-20 w-auto object-contain drop-shadow-[5px_10px_20px_#ffff]/40" />                   </div>
              <p className="text-slate-400 text-sm">
                Empowering businesses with top-tier IT and software solutions.
              </p>
              <div className="flex gap-4">
  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><Facebook className="w-4 h-4" /></a>
  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><Twitter className="w-4 h-4" /></a>
  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><Instagram className="w-4 h-4" /></a>
  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><Linkedin className="w-4 h-4" /></a>
  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"><Youtube className="w-4 h-4" /></a>
</div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                {['About Us', 'Our Portfolio', 'Gallery', 'Terms & Conditions'].map((link) => (
                  <li key={link}><a href="#" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                {['IT Services', 'Web Development', 'Software Solutions', 'Digital Marketing','SEO'].map((link) => (
                  <li key={link}><a href="#" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Office */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Contact Us At</h3>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                   <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 shrink-0">
                      <Globe className="w-5 h-5" />
                   </div>
                   <div>
                     <h4 className="text-white font-medium text-base">Ka-6/A, Navana Sylvania,</h4>
                     <p className="text-slate-400 text-sm mt-1">Baridhara, Nadda, Gulshan-2,<br/>Dhaka-1212</p>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex justify-center items-center shrink-0">
                    <Phone className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">+88 01811-479397</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-700/50 flex justify-center items-center shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <a href="mailto:info@sjitltd.com" className="text-slate-300 text-sm font-medium hover:text-cyan-400 overflow-hidden text-ellipsis whitespace-nowrap">info@sjitltd.com</a>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-50 text-sm">Copyright © 2026 SJ IT Ltd - All Rights Reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-50 hover:text-white">Terms & Conditions</a>
              <a href="#" className="text-slate-50 hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
