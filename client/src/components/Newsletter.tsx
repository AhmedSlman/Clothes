import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useNewsletterSubscription } from '@/hooks/use-mock-data';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const { subscribe, isSubmitting, isSuccess, error } = useNewsletterSubscription();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "خطأ",
        description: "الرجاء إدخال بريدك الإلكتروني",
        variant: "destructive",
      });
      return;
    }
    
    await subscribe(email);
    
    if (isSuccess) {
      toast({
        title: "تم الاشتراك بنجاح",
        description: "شكراً لاشتراكك في نشرتنا الإخبارية",
      });
      
      setEmail('');
    } else if (error) {
      toast({
        title: "خطأ في الاشتراك",
        description: error,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">اشترك في نشرتنا الإخبارية</h2>
          <p className="text-blue-100 mb-8">اشترك للحصول على أحدث العروض والتخفيضات والمعلومات عن المنتجات الجديدة</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="أدخل بريدك الإلكتروني" 
              className="flex-grow py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            <button 
              type="submit"
              className="bg-accent hover:bg-opacity-90 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transition-all disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'جاري الاشتراك...' : 'اشترك الآن'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
