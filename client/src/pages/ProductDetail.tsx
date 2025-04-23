import { useParams, Link } from 'wouter';
import { useState, useEffect } from 'react';
import Newsletter from '@/components/Newsletter';
import { Product } from '@shared/schema';
import { useProduct } from '@/hooks/use-mock-data';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const { data: product, isLoading } = useProduct(parseInt(id || '0'));

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | أزياء الأناقة`;
    }
    window.scrollTo(0, 0);
  }, [product]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('الرجاء اختيار المقاس');
      return;
    }
    
    // Add to cart logic would go here
    console.log('Adding to cart:', { productId: id, size: selectedSize, quantity });
    alert('تم إضافة المنتج إلى سلة التسوق');
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 animate-pulse">
          <div className="md:w-1/2 bg-gray-300 h-96 rounded-lg"></div>
          <div className="md:w-1/2">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-8"></div>
            <div className="h-10 bg-gray-300 rounded w-full mb-4"></div>
            <div className="h-12 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center py-16 bg-white rounded-lg shadow-sm">
          <i className="fas fa-exclamation-circle text-gray-300 text-5xl mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">المنتج غير موجود</h3>
          <p className="text-gray-500 mb-6">لم نتمكن من العثور على هذا المنتج</p>
          <Link href="/">
            <a className="bg-primary hover:bg-opacity-90 text-white py-2 px-6 rounded-lg font-semibold transition-all">
              العودة للصفحة الرئيسية
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const discount = product.discount || 0;
  const discountedPrice = discount > 0 
    ? product.price - (product.price * discount / 100) 
    : product.price;

  return (
    <div className="bg-neutral">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 space-x-reverse text-gray-500">
            <li className="inline-flex items-center">
              <Link href="/">
                <a className="hover:text-primary">الرئيسية</a>
              </Link>
              <i className="fas fa-chevron-left mx-2 text-xs"></i>
            </li>
            <li className="inline-flex items-center">
              <Link href={`/category/${product.category}`}>
                <a className="hover:text-primary">{product.category}</a>
              </Link>
              <i className="fas fa-chevron-left mx-2 text-xs"></i>
            </li>
            <li aria-current="page" className="text-primary font-semibold truncate max-w-xs">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Image */}
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full object-cover" 
                />
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full font-semibold">جديد</div>
                )}
                {discount > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
                    خصم {discount}%
                  </div>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`fas fa-star ${i < Math.floor(product.rating || 0) ? '' : 'text-gray-300'}`}></i>
                  ))}
                </div>
                <span className="text-gray-600 text-sm">{product.rating || 0} تقييم</span>
              </div>

              <div className="mb-6">
                {discount > 0 ? (
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-primary">{discountedPrice} ريال</span>
                    <span className="text-gray-500 text-lg line-through mr-3">{product.price} ريال</span>
                    <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded mr-3">
                      توفير {(product.price * discount / 100).toFixed(0)} ريال
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-primary">{product.price} ريال</span>
                )}
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">اختر المقاس</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes?.map((size) => (
                    <button 
                      key={size} 
                      className={`px-4 py-2 border rounded-md font-medium ${
                        selectedSize === size 
                          ? 'border-primary bg-primary text-white' 
                          : 'border-gray-300 hover:border-primary'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {selectedSize === '' && (
                  <p className="text-sm text-gray-500 mt-2">الرجاء اختيار المقاس</p>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">الكمية</h3>
                <div className="flex items-center">
                  <button 
                    className="w-10 h-10 rounded-l-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    onClick={decrementQuantity}
                  >
                    <i className="fas fa-minus text-gray-600"></i>
                  </button>
                  <input 
                    type="text" 
                    className="w-16 h-10 border-t border-b border-gray-300 text-center" 
                    value={quantity}
                    readOnly
                  />
                  <button 
                    className="w-10 h-10 rounded-r-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    onClick={incrementQuantity}
                  >
                    <i className="fas fa-plus text-gray-600"></i>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="bg-primary hover:bg-opacity-90 text-white py-3 px-6 rounded-lg font-semibold shadow-md transition-all flex-grow text-center"
                  onClick={handleAddToCart}
                >
                  <i className="fas fa-shopping-cart mr-2"></i>
                  أضف إلى السلة
                </button>
                <a 
                  href={`https://wa.me/9661234567890?text=أرغب في الاستفسار عن ${product.name}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md transition-all flex items-center justify-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  استفسر عبر الواتساب
                </a>
              </div>

              {/* Additional Info */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="flex items-center mb-3">
                  <i className="fas fa-truck text-primary mr-2"></i>
                  <span>شحن مجاني للطلبات فوق 200 ريال</span>
                </div>
                <div className="flex items-center mb-3">
                  <i className="fas fa-undo text-primary mr-2"></i>
                  <span>إمكانية الإرجاع خلال 14 يوم</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-shield-alt text-primary mr-2"></i>
                  <span>ضمان جودة المنتج</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Newsletter />
    </div>
  );
};

export default ProductDetail;
