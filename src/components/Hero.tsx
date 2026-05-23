import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const slides = [
  {
    image: "https://i.ibb.co.com/gbYkpq1Y/SJ-IT-Images-12.png",
    title: "Power Your Digital Future",
    description: "SJ IT Ltd Delivers end-to-end software development, IT Consulting, and  technology support services that help business grow, scale, and succeed.",
    buttonText: "About Us",
    buttonClass: "bg-cyan-500 hover:bg-cyan-600 text-white"
  },
  {
    image: "https://i.ibb.co.com/1xSG8Pp/SJ-IT-Images-11.png",
    title: "Building Tomorrow's Digital Solutions Today",
    description: "SJ IT Ltd is global IT firm with over 11 years of experience delivering  market-leading software solutions. We help businesses accelerate growth, simplify operations, and build customer trust through innovative technology.",
    buttonText: "Explore Our Services",
    buttonClass: "bg-cyan-500 hover:bg-cyan-600 text-white"
  },
  {
    image: "https://i.ibb.co.com/ycBh2MFS/SJ-IT-Images-14.png",
    title: "Expert Web Development Solutions",
    description: "We build intuitive, robust, and scalable web applications designed to drive your business forward and attract more customers.",
    buttonText: "Learn More",
    buttonClass: "bg-cyan-500 hover:bg-cyan-600 text-white"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Preload all slider images on mount
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-slate-950">
      {/* Background Slides with Cross-Fade Transitions */}
      {slides.map((slide, idx) => {
        const isActive = currentSlide === idx;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ 
              opacity: isActive ? 1 : 0, 
              scale: isActive ? 1 : 1.05,
              zIndex: isActive ? 1 : 0 
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* TOP VERTICAL GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1d6ca5]/60 via-[#5882ac]/10 to-transparent" />
          </motion.div>
        );
      })}

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mt-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-roboto font-bold text-white mb-6 leading-[1.1]">
            {slides[currentSlide].title}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-barlow max-w-2xl">
            {slides[currentSlide].description}
          </p>

          <button className={`px-8 py-3.5 rounded text-lg font-bold transition-all ${slides[currentSlide].buttonClass}`}>
            {slides[currentSlide].buttonText}
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === idx
                ? 'bg-[#44b0ef] scale-125'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

