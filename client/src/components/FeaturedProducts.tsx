import { Link } from 'wouter';
import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@shared/schema';
import { useFeaturedProducts } from '@/hooks/use-mock-data';

const FeaturedProducts = () => {
  const [filters, setFilters] = useState({
    size: '',
    type: '',
    price: ''
  });

  const { data: products, isLoading } = useFeaturedProducts();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    // In a real app, this would trigger a new query with the filters
    console.log('Applying filters:', filters);
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">منتجات مميزة</h2>
          <Link href="/category/all">
            <a className="text-accent hover:text-primary flex items-center">
              عرض الكل
              <i className="fas fa-arrow-left mr-2"></i>
            </a>
          </Link>
        </div>

        {/* Filter Options */}
        <div className="mb-8 bg-neutral rounded-lg p-4">
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
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 h-96 animate-pulse">
                <div className="bg-gray-300 h-64 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : !products || products.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg text-gray-600">لا توجد منتجات متاحة حالياً</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
