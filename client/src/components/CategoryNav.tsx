import { Link } from 'wouter';

const categories = [
  {
    id: 'men',
    name: 'رجال',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/category/men'
  },
  {
    id: 'women',
    name: 'نساء',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/category/women'
  },
  {
    id: 'children',
    name: 'أطفال',
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/category/children'
  }
];

const CategoryNav = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">تسوق حسب الفئة</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="relative overflow-hidden rounded-lg shadow-md group">
            <img 
              src={category.image} 
              alt={`ملابس ${category.name}`} 
              className="w-full h-64 object-cover transform transition-transform group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>
            <div className="absolute bottom-0 right-0 p-6">
              <h3 className="text-white text-2xl font-bold mb-2">{category.name}</h3>
              <Link href={category.link}>
                <a className="text-white hover:text-accent flex items-center">
                  تسوق الآن
                  <i className="fas fa-arrow-left mr-2"></i>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
