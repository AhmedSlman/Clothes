import { useParams, Link } from 'wouter';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import Newsletter from '@/components/Newsletter';
import { Product } from '@shared/schema';
import { useProductsByCategory } from '@/hooks/use-mock-data';

const CategoryPage = () => {
  const { category } = useParams();
  const [filters, setFilters] = useState({
    size: '',
    type: '',
    price: '',
  });

  const categoryNames: Record<string, string> = {
    men: 'رجال',
    women: 'نساء',
    children: 'أطفال',
    accessories: 'إكسسوارات',
    shoes: 'أحذية',
  };

  const { data: products, isLoading } = useProductsByCategory(category || '');

  useEffect(() => {
    // Update page title
    const categoryTitle = category ? (categoryNames[category as keyof typeof categoryNames] || category) : 'فئات المنتجات';
    document.title = `${categoryTitle} | أزياء الأناقة`;
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [category]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    // In a real app, this would trigger a new query with the filters
    console.log('Applying filters:', filters);
  };

  return (
    <div className="bg-neutral">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div>
            <nav className="flex mb-4" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 space-x-reverse text-gray-500">
                <li className="inline-flex items-center">
                  <Link href="/">
                    <a className="hover:text-primary">الرئيسية</a>
                  </Link>
                  <i className="fas fa-chevron-left mx-2 text-xs"></i>
                </li>
                <li aria-current="page" className="text-primary font-semibold">
                  {category ? (categoryNames[category as keyof typeof categoryNames] || category) : 'فئات المنتجات'}
                </li>
              </ol>
            </nav>
            <h1 className="text-3xl font-bold text-gray-800">
              {category ? (categoryNames[category as keyof typeof categoryNames] || category) : 'فئات المنتجات'}
            </h1>
          </div>
        </div>

        {/* Filter Options */}
        <div className="mb-8 bg-white rounded-lg p-4 shadow-sm">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold text-gray-700">تصفية حسب:</span>
            
            <div className="relative">
              <select 
                name="size"
                value={filters.size}
                onChange={handleFilterChange}
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-10"
              >
                <option value="">المقاس</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <div className="absolute left-4 top-3 pointer-events-none">
                <i className="fas fa-chevron-down text-gray-400"></i>
              </div>
            </div>
            
            <div className="relative">
              <select 
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-10"
              >
                <option value="">النوع</option>
                <option value="shirts">قمصان</option>
                <option value="pants">بناطيل</option>
                <option value="dresses">فساتين</option>
                <option value="shoes">أحذية</option>
              </select>
              <div className="absolute left-4 top-3 pointer-events-none">
                <i className="fas fa-chevron-down text-gray-400"></i>
              </div>
            </div>
            
            <div className="relative">
              <select 
                name="price"
                value={filters.price}
                onChange={handleFilterChange}
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-10"
              >
                <option value="">السعر</option>
                <option value="under100">أقل من 100 ريال</option>
                <option value="100-300">100 - 300 ريال</option>
                <option value="over300">أكثر من 300 ريال</option>
              </select>
              <div className="absolute left-4 top-3 pointer-events-none">
                <i className="fas fa-chevron-down text-gray-400"></i>
              </div>
            </div>
            
            <button 
              onClick={applyFilters}
              className="ml-auto bg-primary hover:bg-opacity-90 text-white py-2 px-4 rounded-lg font-semibold shadow-sm transition-all"
            >
              تطبيق الفلتر
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 h-96 animate-pulse">
                <div className="bg-gray-300 h-64 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : !products || products.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <i className="fas fa-shopping-bag text-gray-300 text-5xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">لا توجد منتجات</h3>
            <p className="text-gray-500 mb-6">لم نتمكن من العثور على منتجات في هذه الفئة</p>
            <Link href="/">
              <a className="bg-primary hover:bg-opacity-90 text-white py-2 px-6 rounded-lg font-semibold transition-all">
                العودة للصفحة الرئيسية
              </a>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
      
      <Newsletter />
    </div>
  );
};

export default CategoryPage;
