import { useState } from 'react';
import { Link } from 'wouter';
import { Product } from '@shared/schema';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Safely handle potential null values
  const discount = product.discount || 0;
  const rating = product.rating || 0;
  
  const discountedPrice = discount > 0 
    ? product.price - (product.price * discount / 100) 
    : product.price;
  
  // Handle quick view and add to cart
  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Implement quick view functionality
    console.log('Quick view:', product.name);
  };
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Implement add to cart functionality
    console.log('Add to cart:', product.name);
  };
  
  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden group transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <Link href={`/product/${product.id}`}>
          <div className="aspect-[3/4] cursor-pointer">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110" 
            />
            
            {/* Overlay that appears on hover */}
            <div className={`absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
              <button 
                onClick={handleQuickView}
                className="bg-white text-primary rounded-lg mx-2 px-4 py-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 hover:bg-primary hover:text-white font-semibold text-sm"
              >
                نظرة سريعة
              </button>
            </div>
          </div>
        </Link>
        
        {/* Badge container */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {product.isNew && (
            <div className="bg-accent text-white px-3 py-1 rounded-full font-semibold text-xs shadow-lg">جديد</div>
          )}
          {discount > 0 && (
            <div className="bg-red-500 text-white px-3 py-1 rounded-full font-semibold text-xs shadow-lg animate-pulse">
              خصم {discount}%
            </div>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <button className="bg-white text-gray-700 hover:text-red-500 hover:bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-110">
            <i className="far fa-heart"></i>
          </button>
          <button 
            onClick={handleAddToCart}
            className="bg-white text-gray-700 hover:text-primary hover:bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-110"
          >
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
        
        {/* Sizes quick selector that appears on hover */}
        <div className={`absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-3 py-2 transform ${isHovered ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300`}>
          <div className="flex justify-center gap-1 items-center">
            <span className="text-gray-700 text-sm ml-2">المقاسات:</span>
            {product.sizes?.map((size) => (
              <button 
                key={size}
                className="w-6 h-6 rounded-full bg-white border border-gray-300 hover:border-primary text-xs flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex-1">
            <Link href={`/product/${product.id}`}>
              <h3 className="font-semibold text-gray-800 hover:text-primary transition-colors duration-300 cursor-pointer text-sm truncate">{product.name}</h3>
            </Link>
            
            <p className="text-gray-500 text-xs mb-1 truncate">{product.category}</p>
            
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <i 
                    key={i} 
                    className={`${i < Math.floor(rating) ? 'fas' : 'far'} fa-star text-xs`}
                  ></i>
                ))}
              </div>
              <span className="text-gray-500 text-xs mr-1">({Math.floor(Math.random() * 50) + 10})</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-3">
          <div>
            {discount > 0 ? (
              <div className="flex flex-col">
                <span className="font-bold text-lg text-primary">{discountedPrice.toFixed(0)} ريال</span>
                <span className="text-gray-400 text-xs line-through">{product.price} ريال</span>
              </div>
            ) : (
              <span className="font-bold text-lg text-primary">{product.price} ريال</span>
            )}
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="group bg-gray-100 hover:bg-primary text-gray-600 hover:text-white py-2 px-3 rounded-lg font-semibold transition-all duration-300 text-sm flex items-center"
          >
            <i className="fas fa-shopping-cart mr-1 group-hover:animate-bounce"></i>
            <span>أضف</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
