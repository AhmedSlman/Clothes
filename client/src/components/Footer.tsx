import { useState } from 'react';
import { Link } from 'wouter';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 relative">
      {/* Wave decoration at the top */}
      <div className="absolute top-0 left-0 right-0 h-16 text-white overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="h-full w-full"
          fill="white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4 lg:border-l border-gray-700 lg:pl-6">
            <div className="flex items-center mb-4">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-2">
                <i className="fas fa-tshirt"></i>
              </div>
              <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">أزياء الأناقة</h3>
            </div>
            
            <p className="mb-6 text-gray-400 leading-relaxed">
              متجرك المفضل لأحدث صيحات الموضة والأزياء العصرية بجودة عالية وأسعار مناسبة.
              نحن نسعى دائمًا لتقديم أفضل المنتجات التي تلبي احتياجاتك وتعكس أسلوبك الفريد.
            </p>
            
            {/* Social media icons */}
            <div className="mb-8">
              <h4 className="text-white text-sm font-semibold mb-3">تابعنا على وسائل التواصل</h4>
              <div className="flex space-x-4 space-x-reverse">
                {[
                  { icon: "facebook-f", color: "bg-blue-600" },
                  { icon: "twitter", color: "bg-sky-500" },
                  { icon: "instagram", color: "bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500" },
                  { icon: "snapchat-ghost", color: "bg-yellow-400" },
                  { icon: "tiktok", color: "bg-black" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`${social.color} w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-90 hover:scale-110 transition-all duration-300 shadow-lg`}
                    aria-label={`تابعنا على ${social.icon}`}
                  >
                    <i className={`fab fa-${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Download app section */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-3">حمل تطبيقنا</h4>
              <div className="flex space-x-3 space-x-reverse">
                <a href="#" className="bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 rounded-lg px-4 py-2 flex items-center space-x-2 space-x-reverse border border-gray-700 hover:border-gray-500">
                  <i className="fab fa-apple text-2xl text-white"></i>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">تحميل من</div>
                    <div className="text-sm font-semibold text-white">App Store</div>
                  </div>
                </a>
                <a href="#" className="bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 rounded-lg px-4 py-2 flex items-center space-x-2 space-x-reverse border border-gray-700 hover:border-gray-500">
                  <i className="fab fa-google-play text-2xl text-white"></i>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">تحميل من</div>
                    <div className="text-sm font-semibold text-white">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Links columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Quick links */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 relative inline-block pb-2">
                  روابط سريعة
                  <span className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-gradient-to-l from-primary to-accent"></span>
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: "الصفحة الرئيسية", path: "/" },
                    { name: "تسوق الآن", path: "/category/men" },
                    { name: "العروض الخاصة", path: "/#offers" },
                    { name: "من نحن", path: "/about" },
                    { name: "اتصل بنا", path: "/contact" },
                    { name: "الأسئلة الشائعة", path: "/about" }
                  ].map((link, index) => (
                    <li key={index} className="group">
                      <Link href={link.path}>
                        <div className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                          <i className="fas fa-chevron-left text-xs ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"></i>
                          <span>{link.name}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Categories */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 relative inline-block pb-2">
                  الفئات
                  <span className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-gradient-to-l from-primary to-accent"></span>
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: "ملابس رجالية", path: "/category/men" },
                    { name: "ملابس نسائية", path: "/category/women" },
                    { name: "ملابس أطفال", path: "/category/children" },
                    { name: "إكسسوارات", path: "/category/accessories" },
                    { name: "أحذية", path: "/category/shoes" },
                    { name: "الماركات العالمية", path: "/category/brands" }
                  ].map((category, index) => (
                    <li key={index} className="group">
                      <Link href={category.path}>
                        <div className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                          <i className="fas fa-chevron-left text-xs ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"></i>
                          <span>{category.name}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact info */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 relative inline-block pb-2">
                  معلومات الاتصال
                  <span className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-gradient-to-l from-primary to-accent"></span>
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: "map-marker-alt", text: "شارع الملك فهد، الرياض، المملكة العربية السعودية" },
                    { icon: "phone-alt", text: "+966 12 345 6789" },
                    { icon: "envelope", text: "info@elegantfashion.com" },
                    { icon: "clock", text: "السبت - الخميس: 10 ص - 10 م" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="flex-shrink-0 bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center ml-3 mt-1 group-hover:bg-primary transition-colors duration-300">
                        <i className={`fas fa-${item.icon} text-gray-400 group-hover:text-white transition-colors duration-300`}></i>
                      </div>
                      <span className="text-gray-400 flex-1">{item.text}</span>
                    </li>
                  ))}
                </ul>
                
                {/* WhatsApp button */}
                <a
                  href="https://wa.me/9661234567890" 
                  className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp text-lg ml-2"></i>
                  <span>تواصل عبر الواتساب</span>
                </a>
              </div>
            </div>
            
            {/* Newsletter subscription */}
            <div className="mt-12 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white">اشترك في النشرة البريدية</h3>
                <p className="text-gray-400">اشترك للحصول على أحدث العروض والأخبار</p>
              </div>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <i className="far fa-envelope"></i>
                  </div>
                  <input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 whitespace-nowrap"
                >
                  {subscribed ? 'تم الاشتراك ✓' : 'اشترك الآن'}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Payment methods */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} أزياء الأناقة - جميع الحقوق محفوظة
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-sm text-gray-500 ml-2">نقبل الدفع عبر:</span>
              {['fa-cc-visa', 'fa-cc-mastercard', 'fa-cc-amex', 'fa-cc-apple-pay', 'fa-cc-paypal'].map((card, index) => (
                <div key={index} className="bg-white bg-opacity-10 p-2 rounded">
                  <i className={`fab ${card} text-xl text-gray-300`}></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
