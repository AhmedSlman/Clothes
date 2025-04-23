import Banner from '@/components/Banner';
import CategoryNav from '@/components/CategoryNav';
import FeaturedProducts from '@/components/FeaturedProducts';
import SpecialOffers from '@/components/SpecialOffers';
import StoreInfo from '@/components/StoreInfo';
import Newsletter from '@/components/Newsletter';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "أزياء الأناقة | الصفحة الرئيسية";
    
    // You could update meta description here too if needed
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "متجر أزياء الأناقة - تسوق أحدث صيحات الموضة للرجال والنساء والأطفال بأسعار مناسبة وجودة عالية");
    }
    
    // Scroll to top of page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner />
      <CategoryNav />
      <FeaturedProducts />
      <SpecialOffers />
      <StoreInfo />
      <Newsletter />
    </div>
  );
};

export default Home;
