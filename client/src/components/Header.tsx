import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => location === path;

  return (
    <header className={`${scrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-white'} shadow-sm transition-all duration-300 sticky top-0 z-50`}>
      {/* Top announcement bar */}
      <div className="bg-primary text-white py-2 text-center text-sm font-medium">
        <div className="container mx-auto px-4">
          توصيل مجاني للطلبات فوق 200 ريال | خصم 15% على الطلب الأول
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <div className="text-2xl font-bold text-primary cursor-pointer flex items-center">
                <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-2">
                  <i className="fas fa-tshirt"></i>
                </div>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">أزياء الأناقة</span>
              </div>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-gray-500 hover:text-primary focus:outline-none transition-transform duration-300"
              aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              <i className={`${mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} text-xl`}></i>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {[
              { path: '/', label: 'الرئيسية' },
              { path: '/category/men', label: 'رجال' },
              { path: '/category/women', label: 'نساء' },
              { path: '/category/children', label: 'أطفال' },
              { path: '/about', label: 'من نحن' },
              { path: '/contact', label: 'اتصل بنا' }
            ].map((item) => (
              <Link key={item.path} href={item.path}>
                <div className={`cursor-pointer relative group ${isActive(item.path) ? 'text-primary font-semibold' : 'text-gray-600'}`}>
                  <span className="transition-colors duration-300 hover:text-primary">{item.label}</span>
                  <span className={`absolute -bottom-2 right-0 h-0.5 ${isActive(item.path) ? 'w-full' : 'w-0'} group-hover:w-full bg-primary transition-all duration-300`}></span>
                </div>
              </Link>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="ابحث عن منتجات..." 
                className="py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64 transition-all duration-300 group-hover:shadow-md"
              />
              <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors duration-300">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <button className="text-gray-600 hover:text-primary transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full">
              <i className="fas fa-user text-xl"></i>
            </button>
            <button className="text-gray-600 hover:text-primary transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full relative">
              <i className="fas fa-shopping-bag text-xl"></i>
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-md animate-pulse">0</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} bg-white border-t border-gray-200`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {[
              { path: '/', label: 'الرئيسية' },
              { path: '/category/men', label: 'رجال' },
              { path: '/category/women', label: 'نساء' },
              { path: '/category/children', label: 'أطفال' },
              { path: '/about', label: 'من نحن' },
              { path: '/contact', label: 'اتصل بنا' }
            ].map((item) => (
              <Link key={item.path} href={item.path}>
                <div 
                  className={`cursor-pointer py-2 px-4 rounded-lg transition-colors duration-300 ${isActive(item.path) ? 'bg-primary/10 text-primary font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </div>
              </Link>
            ))}
            
            <div className="pt-2 border-t border-gray-200">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="ابحث عن منتجات..." 
                  className="py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
                />
                <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            
            <div className="flex justify-around pt-2 border-t border-gray-200">
              <button className="text-gray-600 hover:text-primary transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full flex flex-col items-center">
                <i className="fas fa-user text-xl mb-1"></i>
                <span className="text-xs">حسابي</span>
              </button>
              <button className="text-gray-600 hover:text-primary transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full flex flex-col items-center relative">
                <i className="fas fa-shopping-bag text-xl mb-1"></i>
                <span className="absolute top-0 right-0 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                <span className="text-xs">السلة</span>
              </button>
              <button className="text-gray-600 hover:text-primary transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full flex flex-col items-center">
                <i className="fas fa-heart text-xl mb-1"></i>
                <span className="text-xs">المفضلة</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
