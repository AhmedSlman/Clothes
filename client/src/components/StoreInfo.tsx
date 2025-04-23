import { Link } from 'wouter';

const StoreInfo = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">متجرنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="صورة المتجر" 
              className="w-full h-64 object-cover" 
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-primary mb-4">أزياء الأناقة - متجرك المفضل للأزياء العصرية</h3>
            <p className="text-gray-600 mb-6">نقدم لكم أحدث صيحات الموضة بتصاميم حصرية وجودة عالية. تأسس متجرنا عام 2010 بهدف توفير ملابس عصرية بأسعار مناسبة للجميع.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i className="fas fa-map-marker-alt text-accent"></i>
                </div>
                <div className="mr-3">
                  <h4 className="font-semibold mb-1">العنوان</h4>
                  <p className="text-gray-600">شارع الملك فهد، الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i className="fas fa-phone-alt text-accent"></i>
                </div>
                <div className="mr-3">
                  <h4 className="font-semibold mb-1">اتصل بنا</h4>
                  <p className="text-gray-600">+966 12 345 6789</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i className="far fa-clock text-accent"></i>
                </div>
                <div className="mr-3">
                  <h4 className="font-semibold mb-1">ساعات العمل</h4>
                  <p className="text-gray-600">كل يوم من 10 صباحاً - 10 مساءً</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i className="far fa-envelope text-accent"></i>
                </div>
                <div className="mr-3">
                  <h4 className="font-semibold mb-1">البريد الإلكتروني</h4>
                  <p className="text-gray-600">info@elegantfashion.com</p>
                </div>
              </div>
            </div>
            
            <Link href="/about">
              <a className="bg-primary hover:bg-opacity-90 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transition-all inline-block text-center w-full sm:w-auto">
                تعرف علينا أكثر
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
