import { Menu, X, ChevronDown } from 'lucide-react';
      import { useState, useEffect } from 'react';
      import { Link, useLocation, useNavigate } from 'react-router-dom';

      export function Navbar() {
        const [isOpen, setIsOpen] = useState(false);
        const [scrolled, setScrolled] = useState(false);
        const location = useLocation();
        const navigate = useNavigate();

        useEffect(() => {
          const handleScroll = () => {
            setScrolled(window.scrollY > 20);
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        const scrollToSection = (id: string) => {
          setIsOpen(false);
          
          if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
              document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
          }
        };

        const Logo = () => (
          <div className="flex items-center gap-2">
            <img src="https://i.ibb.co.com/4kTVSnp/screen.png" alt="SJ IT LTD Logo" className="h-20 w-auto object-contain" />
          </div>
        );

        return (
          <nav className={`fixed w-full z-50 transition-all duration-300 font-sans top-0 border-b backdrop-blur-[2px] ${scrolled ? 'bg-white/20 border-white/20 shadow-lg' : 'bg-transparent border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-[100px]">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => { if (location.pathname !== '/') navigate('/'); else window.scrollTo({top: 0, behavior: 'smooth'}); }}>
                  <Logo />
                </div>

                <div className="flex-1 flex justify-center">
                  {/* Desktop Menu */}
                  <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                    

                    

                    <div className="relative group/nav cursor-pointer flex items-center space-x-1">
                      <a href="#service" onClick={(e) => { e.preventDefault(); scrollToSection('service'); }} className="text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors py-2">Services</a>
                      <ChevronDown className="w-4 h-4 text-slate-300 group-hover/nav:text-cyan-400 transition-colors" />
                      
                      {/* Dropdown Menu */}
                      <div className="absolute top-10 left-0 w-48 bg-[#0f172a] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 translate-y-2 group-hover/nav:translate-y-0 pt-2 pb-2">
                        <a href="#service" onClick={(e) => { e.preventDefault(); scrollToSection('service'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">IT Consulting</a>
                        <a href="#service" onClick={(e) => { e.preventDefault(); scrollToSection('service'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">Web Development</a>
                        <a href="#service" onClick={(e) => { e.preventDefault(); scrollToSection('service'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">SEO</a>
                      </div>
                    </div>
                    






                    <div className="relative group/nav cursor-pointer flex items-center space-x-1">
                      <a href="#outsourcing" onClick={(e) => { e.preventDefault(); scrollToSection('outsourcing'); }} className="text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors py-2">Outsourcing</a>
                      <ChevronDown className="w-4 h-4 text-slate-300 group-hover/nav:text-cyan-400 transition-colors" />
                      
                      {/* Dropdown Menu */}
                      <div className="absolute top-10 left-0 w-48 bg-[#0f172a] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 translate-y-2 group-hover/nav:translate-y-0 pt-2 pb-2">
                        <a href="#outsourcing" onClick={(e) => { e.preventDefault(); scrollToSection('outsourcing'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">Virtual Assistant</a>
                        <a href="#outsourcing" onClick={(e) => { e.preventDefault(); scrollToSection('outsourcing'); }} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">BPO Services</a>
                      </div>
                    </div>

  <div className="relative group/nav cursor-pointer flex items-center space-x-1">
                      <Link to="/gallery" className="text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors py-2">Gallery</Link>
                                          </div>




                    <div className="relative group/nav cursor-pointer flex items-center space-x-1">
                      <Link to="/about" className="text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors py-2">About Us</Link>
                    
                      
                      
                    </div>

                    <Link to="/career" className={`font-medium text-base hover:text-cyan-400 transition-colors py-2 ${location.pathname === '/career' ? 'text-cyan-400' : 'text-slate-200'}`}>Career</Link>
                  </div>
                </div>

                <div className="hidden lg:flex">
                  <button onClick={() => scrollToSection('contact')} className="px-6 py-2.5 text-base rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-300">
                    Contact Us
                  </button>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden flex items-center">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white hover:text-blue-400 focus:outline-none"
                  >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="lg:hidden bg-[#0f172a] absolute top-full left-0 w-full border-b border-white/10 shadow-xl pb-4">
                <div className="px-4 py-4 space-y-2 text-white">
                  <a href="#service" onClick={(e) => { e.preventDefault(); scrollToSection('service'); }} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5">Services</a>
                  <a href="#outsourcing" onClick={(e) => { e.preventDefault(); scrollToSection('outsourcing'); }} className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5">Outsourcing</a>
                  <Link to="/gallery" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5 ${location.pathname === '/gallery' ? 'text-cyan-400 bg-white/5' : ''}`}>Gallery</Link>
                  <Link to="/about" onClick={(e) => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5 ${location.pathname === '/about' ? 'text-cyan-400 bg-white/5' : ''}`}>About Us</Link>
                  <Link to="/career" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5 ${location.pathname === '/career' ? 'text-cyan-400 bg-white/5' : ''}`}>Career</Link>
                  <button onClick={() => scrollToSection('contact')} className="w-full mt-4 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </nav>
        );
      }
