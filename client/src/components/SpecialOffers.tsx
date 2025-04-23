import { Link } from 'wouter';

const SpecialOffers = () => {
  return (
    <div id="offers" className="container mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">عروض خاصة</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-primary bg-opacity-10 rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <span className="text-accent font-semibold mb-2">عرض لفترة محدودة</span>
              <h3 className="text-2xl text-primary font-bold mb-3">خصم 30% على الأزياء الرجالية</h3>
              <p className="text-gray-600 mb-4">تسوق الآن واحصل على خصم 30% على جميع الأزياء الرجالية الجديدة</p>
              <Link href="/category/men">
                <a className="bg-accent hover:bg-opacity-90 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transition-all inline-block text-center w-full md:w-auto">
                  تسوق الآن
                </a>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="عرض خاص رجالي" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
        
        <div className="bg-accent bg-opacity-10 rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <span className="text-primary font-semibold mb-2">عرض الأسبوع</span>
              <h3 className="text-2xl text-accent font-bold mb-3">تشكيلة صيفية جديدة للنساء</h3>
              <p className="text-gray-600 mb-4">اكتشفي أحدث التشكيلات الصيفية مع خصم يصل إلى 25% على المجموعة الكاملة</p>
              <Link href="/category/women">
                <a className="bg-primary hover:bg-opacity-90 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transition-all inline-block text-center w-full md:w-auto">
                  تسوق الآن
                </a>
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="عرض خاص نسائي" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
