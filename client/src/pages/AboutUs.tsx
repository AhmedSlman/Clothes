import { useEffect } from 'react';
import Newsletter from '@/components/Newsletter';
import { Link } from 'wouter';

const AboutUs = () => {
  useEffect(() => {
    document.title = "من نحن | أزياء الأناقة";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-neutral">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h1 className="text-3xl font-bold text-primary mb-6 text-center">من نحن</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="متجر أزياء الأناقة" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">قصة متجرنا</h2>
              <p className="text-gray-600 mb-4">
                تأسس متجر أزياء الأناقة في عام 2010 على يد مجموعة من المصممين الشغوفين بالموضة والأزياء، وذلك بهدف تقديم تشكيلة متنوعة من الملابس العصرية ذات الجودة العالية بأسعار منافسة.
              </p>
              <p className="text-gray-600 mb-4">
                منذ البداية، كان هدفنا الأساسي هو توفير تجربة تسوق سهلة وممتعة لعملائنا، مع الالتزام بمعايير الجودة العالية في جميع منتجاتنا.
              </p>
              <p className="text-gray-600">
                اليوم، أصبح متجر أزياء الأناقة واحداً من أشهر المتاجر في المملكة العربية السعودية، حيث نقدم أحدث صيحات الموضة للرجال والنساء والأطفال، ونسعى دائماً لتلبية احتياجات عملائنا ومواكبة تطلعاتهم.
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">رؤيتنا وقيمنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-neutral p-6 rounded-lg text-center">
                <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full text-white mb-4">
                  <i className="fas fa-eye text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">رؤيتنا</h3>
                <p className="text-gray-600">
                  أن نصبح الوجهة الأولى للأزياء العصرية في الشرق الأوسط، ونقدم تجربة تسوق فريدة تلبي تطلعات عملائنا.
                </p>
              </div>
              
              <div className="bg-neutral p-6 rounded-lg text-center">
                <div className="bg-accent inline-flex items-center justify-center w-16 h-16 rounded-full text-white mb-4">
                  <i className="fas fa-bullseye text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">رسالتنا</h3>
                <p className="text-gray-600">
                  توفير منتجات عالية الجودة بأسعار مناسبة، مع الالتزام بأعلى معايير خدمة العملاء وتلبية احتياجاتهم.
                </p>
              </div>
              
              <div className="bg-neutral p-6 rounded-lg text-center">
                <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full text-white mb-4">
                  <i className="fas fa-star text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">قيمنا</h3>
                <p className="text-gray-600">
                  الجودة، الابتكار، النزاهة، الشفافية، والتميز في خدمة العملاء هي القيم الأساسية التي نلتزم بها في جميع أعمالنا.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">فريقنا</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
              يضم متجر أزياء الأناقة فريقاً من المتخصصين في مجال الأزياء والموضة، يتمتعون بخبرة واسعة وشغف كبير لتقديم أفضل المنتجات والخدمات لعملائنا.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="أحمد محمد" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-gray-800">أحمد محمد</h3>
                <p className="text-gray-600 text-sm">المؤسس والمدير التنفيذي</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="سارة علي" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-gray-800">سارة علي</h3>
                <p className="text-gray-600 text-sm">مديرة المنتجات</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="فهد خالد" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-gray-800">فهد خالد</h3>
                <p className="text-gray-600 text-sm">مدير التسويق</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="نورة عبدالله" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-gray-800">نورة عبدالله</h3>
                <p className="text-gray-600 text-sm">مديرة خدمة العملاء</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">معلومات المتجر</h2>
            <div className="bg-neutral p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-4 flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <i className="fas fa-map-marker-alt text-accent text-lg"></i>
                    </div>
                    <div className="mr-4">
                      <h4 className="font-semibold mb-1">العنوان</h4>
                      <p className="text-gray-600">شارع الملك فهد، الرياض، المملكة العربية السعودية</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <i className="fas fa-phone-alt text-accent text-lg"></i>
                    </div>
                    <div className="mr-4">
                      <h4 className="font-semibold mb-1">رقم الهاتف</h4>
                      <p className="text-gray-600">+966 12 345 6789</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <i className="far fa-envelope text-accent text-lg"></i>
                    </div>
                    <div className="mr-4">
                      <h4 className="font-semibold mb-1">البريد الإلكتروني</h4>
                      <p className="text-gray-600">info@elegantfashion.com</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-4 flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <i className="far fa-clock text-accent text-lg"></i>
                    </div>
                    <div className="mr-4">
                      <h4 className="font-semibold mb-1">ساعات العمل</h4>
                      <p className="text-gray-600">من السبت إلى الخميس: 10 صباحاً - 10 مساءً</p>
                      <p className="text-gray-600">الجمعة: 2 مساءً - 10 مساءً</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <i className="fab fa-whatsapp text-accent text-lg"></i>
                    </div>
                    <div className="mr-4">
                      <h4 className="font-semibold mb-1">واتساب</h4>
                      <p className="text-gray-600">+966 98 765 4321</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <i className="fas fa-globe text-accent text-lg"></i>
                    </div>
                    <div className="mr-4">
                      <h4 className="font-semibold mb-1">الموقع الإلكتروني</h4>
                      <p className="text-gray-600">www.elegantfashion.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact">
              <a className="bg-primary hover:bg-opacity-90 text-white py-3 px-8 rounded-lg font-semibold shadow-lg transition-all inline-block">
                تواصل معنا
              </a>
            </Link>
          </div>
        </div>
      </div>
      
      <Newsletter />
    </div>
  );
};

export default AboutUs;
