import { useState, useEffect } from 'react';
import { Link } from 'wouter';

const bannerSlides = [
  {
    id: 1,
    title: "تشكيلة صيف 2023",
    subtitle: "اكتشف أحدث صيحات الموضة بتصاميم حصرية وجودة عالية",
    image: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    primaryLink: { text: "تسوق الآن", url: "/category/men" },
    secondaryLink: { text: "العروض الخاصة", url: "/#offers" },
    bgColor: "from-primary to-accent",
  },
  {
    id: 2,
    title: "أزياء رمضان الفاخرة",
    subtitle: "تألق في شهر رمضان المبارك مع تشكيلتنا الحصرية",
    image: "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    primaryLink: { text: "اكتشف المجموعة", url: "/category/women" },
    secondaryLink: { text: "المزيد", url: "/about" },
    bgColor: "from-purple-700 to-purple-500",
  },
  {
    id: 3,
    title: "خصومات نهاية الموسم",
    subtitle: "خصومات تصل إلى 50% على مجموعة مختارة من المنتجات",
    image: "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    primaryLink: { text: "تسوق الآن", url: "/category/children" },
    secondaryLink: { text: "شروط الخصم", url: "/about" },
    bgColor: "from-red-600 to-red-400",
  }
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
      setIsAnimating(false);
    }, 500);
  };
  
  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 500);
  };
  
  const currentBanner = bannerSlides[currentSlide];
  
  return (
    <div className={`relative overflow-hidden bg-gradient-to-l ${currentBanner.bgColor} transition-colors duration-1000`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 text-white overflow-hidden transform rotate-180">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="h-full w-full"
          fill="currentColor"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className={`flex flex-col md:flex-row items-center transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <div className="md:w-1/2 text-center md:text-right mb-8 md:mb-0 pr-0 md:pr-8">
            <div className="transform transition-transform duration-700">
              <span className="inline-block bg-white/20 backdrop-blur-md text-white text-sm px-4 py-1 rounded-full mb-3 shadow-sm">
                {currentSlide === 0 ? "الأكثر مبيعًا" : currentSlide === 1 ? "جديد" : "عرض محدود"}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {currentBanner.title}
              </h1>
              <p className="text-white/90 text-lg mb-8">
                {currentBanner.subtitle}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start space-x-4 space-x-reverse">
                <Link href={currentBanner.primaryLink.url}>
                  <div className="group relative overflow-hidden bg-white text-primary hover:text-white py-3 px-8 rounded-full font-semibold shadow-lg mb-3 md:mb-0 cursor-pointer">
                    <span className="relative z-10 transition-colors duration-300">{currentBanner.primaryLink.text}</span>
                    <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
                  </div>
                </Link>
                <Link href={currentBanner.secondaryLink.url}>
                  <div className="relative overflow-hidden border-2 border-white text-white py-3 px-8 rounded-full font-semibold transition-all hover:bg-white/10 cursor-pointer">
                    {currentBanner.secondaryLink.text}
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 transform transition-transform duration-700">
            <div className="relative">
              <img 
                src={currentBanner.image} 
                alt={currentBanner.title} 
                className="rounded-xl shadow-2xl border-4 border-white/20 object-cover h-80 md:h-96 w-full" 
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-accent/80 backdrop-blur-sm flex items-center justify-center text-white font-bold text-xl animate-bounce">
                خصم<br/>40%
              </div>
              
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-6 py-3 flex space-x-3 space-x-reverse">
                {bannerSlides.map((_, index) => (
                  <button 
                    key={index} 
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary w-6' : 'bg-gray-300'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all z-10"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all z-10"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Banner;
