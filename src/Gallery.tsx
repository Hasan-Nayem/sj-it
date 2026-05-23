import React from 'react';
import { motion } from 'motion/react';
import { ContactAndFooter } from './components/ContactAndFooter';
import { ImageWithSkeleton } from './components/ImageWithSkeleton';

const portfolioItems = [
  { id: 1, category: "Gallary", title: "Our Environment", image: "https://i.ibb.co.com/LXMJHQH4/SJ-IT-Images-16.png" },
  { id: 2, category: "Gallary", title: "Day Tour & Appreciation Night", image: "https://i.ibb.co.com/20r9J3mT/SJ-IT-Images-1.jpg" },
  { id: 3, category: "Gallary", title: "Sports Day", image: "https://i.ibb.co.com/2Ynw6bRs/SJ-IT-Images-1.png" },
  { id: 4, category: "Gallary", title: "Office Meetings", image: "https://i.ibb.co.com/Q3JxT6JS/SJ-IT-Images-9.png" },
  { id: 5, category: "Gallary", title: "Celebrating Pahel Baishakh", image: "https://i.ibb.co.com/JWjTS6fc/SJ-IT-Images-7.png" },
  { id: 6, category: "Gallary", title: "SJ IT Office Loby", image: "https://i.ibb.co.com/QB9gWXb/SJ-IT-Images-19.png" },
  { id: 7, category: "Gallary", title: "Office Team Work", image: "https://i.ibb.co.com/HpnKbyD8/SJ-IT-Images-22.png" },
  { id: 8, category: "Gallary", title: "Ramadan Iftar Party", image: "https://i.ibb.co.com/yB4wC3Y6/SJ-IT-Images-4.jpg" },
  { id: 9, category: "Gallary", title: "Celebrating Birthdays", image: "https://i.ibb.co.com/d03ffy50/SJ-IT-Images-3.jpg" },
  { id: 10, category: "Gallary", title: "Refreshment Tour", image: "https://i.ibb.co.com/RGysWDG5/SJ-IT-Images-6.jpg" },
  { id: 11, category: "Gallary", title: "Team SJ IT", image: "https://i.ibb.co.com/bjcCYP9r/SJ-IT-Images-5.jpg" },
 /* { id: 12, category: "Gallary", title: "CRM System", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
  { id: 13, category: "Web Design", title: "Healthcare Portal", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" },
  { id: 14, category: "Mobile App", title: "Travel Planner", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800" },
  { id: 15, category: "SEO", title: "Keyword Tool", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800" },
  { id: 16, category: "Marketing", title: "Social Strategy", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800" },
  { id: 17, category: "Web Design", title: "Real Estate Site", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" },
  { id: 18, category: "Branding", title: "Tech Startup", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800" },
  { id: 19, category: "App Development", title: "Food Delivery", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800" },
  { id: 20, category: "Web App", title: "Project Manager", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" },
  { id: 21, category: "E-Commerce", title: "Electronics Hub", image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=800" },*/
];

export default function Gallery() {
  return (
    <main className="flex-1 flex flex-col min-h-screen">
      {/* Gallery Hero */}
      <section className="relative h-[250px] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920')",
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
            Our Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto"
          >
           “Explore our diverse portfolio showcasing workplace culture, team activities, celebrations, tours, travel experiences, and achievements.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="flex-grow bg-transparent py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-[4/3] w-full">
                  <ImageWithSkeleton 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    containerClassName="w-full h-full"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#021f36]/90 via-[#021f36]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactAndFooter hideContactForm={true} />
    </main>
  );
}
