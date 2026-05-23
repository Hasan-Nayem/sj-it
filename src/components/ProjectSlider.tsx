import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithSkeleton } from './ImageWithSkeleton';

const slideImages = [
  { img: "https://i.ibb.co.com/bM3R3nKr/Corporate-software.jpg", title: "Corporate Software", desc: "Enterprise solutions for dynamic markets." },
  { img: "https://i.ibb.co.com/7J9w40pp/Data-Analyst.jpg", title: "Data Analytics", desc: "Transform your data into actionable insights." },
  { img: "https://i.ibb.co.com/Ng1bk4mz/SJ-IT-Images-24.png", title: "Site Inspections", desc: "Thorough and timely property inspections you can rely on." },
  { img: "https://i.ibb.co.com/gLJQ0sjR/Team-Colaboration.jpg", title: "Team Collaboration", desc: "Tools that bring your workflow together." },
  { img: "https://i.ibb.co.com/8gQ0j2Yk/SJ-IT-Images-25.png", title: "Automation", desc: "End-to-end automation tailored to you." },
  { img: "https://i.ibb.co.com/Y7JG0YYk/Cloud-Computing.jpg", title: "Cloud Infrastructure", desc: "Scalable and secure cloud environments." },
];

export function ProjectSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const { current } = scrollRef;
    if (current && current.firstElementChild) {
      const slideWidth = current.firstElementChild.clientWidth + 24; // Width + gap (gap-6 = 24px)
      const maxScrollLeft = current.scrollWidth - current.clientWidth;

      if (direction === 'left') {
        if (current.scrollLeft <= 5) {
          current.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        }
      } else {
        if (current.scrollLeft >= maxScrollLeft - 5) {
          current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: slideWidth, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section className="pt-20 pb-4 relative max-w-[1400px] mx-auto overflow-hidden">
      <div className="relative group/slider">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 px-4 sm:px-6 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {slideImages.map((slide, idx) => (
            <div key={idx} className="min-w-[70vw] md:min-w-[400px] lg:min-w-[450px] aspect-[16/10] snap-center rounded-3xl overflow-hidden relative shadow-2xl group cursor-pointer transition-all">
              <ImageWithSkeleton 
                src={slide.img} 
                alt={`Slide ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                containerClassName="w-full h-full"
              />
              
              <div className="absolute inset-0 bg-[#0f172a]/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center backdrop-blur-[2px] z-10">
                 <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">{slide.title}</h3>
                 <div className="w-12 h-[2px] bg-cyan-400 rounded-full mb-3 relative"></div>
                 <p className="text-slate-300 text-sm max-w-sm">{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Left Nav Arrow */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-cyan-500/80 flex items-center justify-center text-white hover:bg-cyan-400 transition-colors z-10 shadow-lg shadow-cyan-500/30 backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Right Nav Arrow */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-cyan-500/80 flex items-center justify-center text-white hover:bg-cyan-400 transition-colors z-10 shadow-lg shadow-cyan-500/30 backdrop-blur-md"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </section>
  );
}
