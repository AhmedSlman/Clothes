import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import Newsletter from '@/components/Newsletter';
import { useContactForm } from '@/hooks/use-mock-data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();
  const { submitContactForm, isSubmitting, isSuccess, error } = useContactForm();

  useEffect(() => {
    document.title = "اتصل بنا | أزياء الأناقة";
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطأ في النموذج",
        description: "الرجاء ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }
    
    await submitContactForm({
      ...formData,
      createdAt: new Date().toISOString()
    });
    
    if (isSuccess) {
      toast({
        title: "تم إرسال الرسالة بنجاح",
        description: "سنقوم بالرد عليك في أقرب وقت ممكن. شكراً لتواصلك معنا.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } else if (error) {
      toast({
        title: "خطأ في إرسال الرسالة",
        description: error,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-neutral">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">اتصل بنا</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">أرسل لنا رسالة</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">الاسم <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">البريد الإلكتروني <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">رقم الهاتف</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">الموضوع</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="استفسار عام">استفسار عام</option>
                    <option value="استفسار عن منتج">استفسار عن منتج</option>
                    <option value="مشكلة في الطلب">مشكلة في الطلب</option>
                    <option value="اقتراح">اقتراح</option>
                    <option value="أخرى">أخرى</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">الرسالة <span className="text-red-500">*</span></label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-primary hover:bg-opacity-90 text-white py-3 px-6 rounded-lg font-semibold shadow-md transition-all w-full sm:w-auto disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">معلومات الاتصال</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fas fa-map-marker-alt text-accent text-lg"></i>
                  </div>
                  <div className="mr-4">
                    <h4 className="font-semibold mb-1">العنوان</h4>
                    <p className="text-gray-600">شارع الملك فهد، الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fas fa-phone-alt text-accent text-lg"></i>
                  </div>
                  <div className="mr-4">
                    <h4 className="font-semibold mb-1">رقم الهاتف</h4>
                    <p className="text-gray-600">+966 12 345 6789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="far fa-envelope text-accent text-lg"></i>
                  </div>
                  <div className="mr-4">
                    <h4 className="font-semibold mb-1">البريد الإلكتروني</h4>
                    <p className="text-gray-600">info@elegantfashion.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="far fa-clock text-accent text-lg"></i>
                  </div>
                  <div className="mr-4">
                    <h4 className="font-semibold mb-1">ساعات العمل</h4>
                    <p className="text-gray-600">من السبت إلى الخميس: 10 صباحاً - 10 مساءً</p>
                    <p className="text-gray-600">الجمعة: 2 مساءً - 10 مساءً</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fab fa-whatsapp text-accent text-lg"></i>
                  </div>
                  <div className="mr-4">
                    <h4 className="font-semibold mb-1">واتساب</h4>
                    <p className="text-gray-600">+966 98 765 4321</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="https://wa.me/9661234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold shadow-sm transition-all flex items-center justify-center w-full"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  تواصل معنا عبر الواتساب
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">موقعنا</h2>
              <div className="h-64 bg-gray-200 rounded-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6759114896596!2d46.67226491500564!3d24.70134518413861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sKing%20Fahd%20Rd%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1620122013511!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy"
                  className="rounded-lg"
                  title="موقع المتجر"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Newsletter />
    </div>
  );
};

export default Contact;
