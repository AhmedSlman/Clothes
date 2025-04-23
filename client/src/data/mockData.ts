import { Product, ContactMessage, InsertContactMessage, NewsletterSubscriber, InsertNewsletterSubscriber } from '@shared/schema';

// Mock Products Data
export const products: Product[] = [
  {
    id: 1,
    name: "قميص رجالي أنيق",
    description: "قميص رجالي عصري بتصميم أنيق مناسب لجميع المناسبات",
    price: 199,
    discount: 0,
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    colors: ["أبيض", "أزرق", "أسود"],
    isNew: true,
    isFeatured: true,
    rating: 4.8,
    type: "shirts"
  },
  {
    id: 2,
    name: "فستان نسائي صيفي",
    description: "فستان صيفي خفيف بألوان زاهية مناسب للعطلات",
    price: 299,
    discount: 15,
    image: "https://images.unsplash.com/photo-1551854638-3fff8de191d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "women",
    sizes: ["S", "M", "L"],
    colors: ["أزرق", "وردي", "أصفر"],
    isNew: false,
    isFeatured: true,
    rating: 4.6,
    type: "dresses"
  },
  {
    id: 3,
    name: "بنطلون جينز رجالي",
    description: "بنطلون جينز بقصة مستقيمة وخامة ممتازة",
    price: 175,
    discount: 0,
    image: "https://images.unsplash.com/photo-1618886614638-80e3c103d465?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "men",
    sizes: ["30", "32", "34", "36"],
    colors: ["أزرق داكن", "أزرق فاتح"],
    isNew: false,
    isFeatured: true,
    rating: 4.9,
    type: "pants"
  },
  {
    id: 4,
    name: "قميص أطفال قطني",
    description: "قميص قطني مريح للأطفال بألوان متعددة",
    price: 89,
    discount: 0,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "children",
    sizes: ["3-4", "5-6", "7-8", "9-10"],
    colors: ["أحمر", "أزرق", "أخضر"],
    isNew: true,
    isFeatured: true,
    rating: 4.7,
    type: "shirts"
  },
  {
    id: 5,
    name: "حذاء رياضي للرجال",
    description: "حذاء رياضي مريح للرجال مناسب للجري والتمارين الرياضية",
    price: 250,
    discount: 10,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "men",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["أسود", "رمادي", "أزرق"],
    isNew: false,
    isFeatured: false,
    rating: 4.5,
    type: "shoes"
  },
  {
    id: 6,
    name: "بلوزة نسائية أنيقة",
    description: "بلوزة نسائية أنيقة بتصميم عصري مناسبة للعمل والخروجات",
    price: 150,
    discount: 0,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "women",
    sizes: ["S", "M", "L"],
    colors: ["أبيض", "أسود", "أحمر"],
    isNew: true,
    isFeatured: false,
    rating: 4.3,
    type: "shirts"
  },
  {
    id: 7,
    name: "حذاء نسائي كلاسيكي",
    description: "حذاء نسائي كلاسيكي أنيق مناسب للمناسبات الرسمية",
    price: 320,
    discount: 5,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "women",
    sizes: ["37", "38", "39", "40"],
    colors: ["أسود", "بني", "أحمر"],
    isNew: false,
    isFeatured: true,
    rating: 4.8,
    type: "shoes"
  },
  {
    id: 8,
    name: "فستان أطفال للمناسبات",
    description: "فستان أنيق للأطفال مناسب للمناسبات والحفلات",
    price: 199,
    discount: 0,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "children",
    sizes: ["3-4", "5-6", "7-8"],
    colors: ["وردي", "أزرق فاتح", "أبيض"],
    isNew: true,
    isFeatured: false,
    rating: 4.6,
    type: "dresses"
  }
];

// Helper Functions
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
};

// Contact Form Mock Functions
export const createContactMessage = (message: InsertContactMessage): Promise<ContactMessage> => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: Math.floor(Math.random() * 1000),
        name: message.name,
        email: message.email,
        phone: message.phone || null,
        subject: message.subject || null,
        message: message.message,
        createdAt: message.createdAt
      };
      resolve(newMessage);
    }, 800);
  });
};

// Newsletter Mock Functions
export const createNewsletterSubscriber = (subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const newSubscriber: NewsletterSubscriber = {
        id: Math.floor(Math.random() * 1000),
        ...subscriber
      };
      resolve(newSubscriber);
    }, 800);
  });
};