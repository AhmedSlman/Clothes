import { 
  users, type User, type InsertUser,
  products, type Product, type InsertProduct,
  contactMessages, type ContactMessage, type InsertContactMessage,
  newsletterSubscribers, type NewsletterSubscriber, type InsertNewsletterSubscriber
} from "@shared/schema";

// interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Product operations
  getAllProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Contact operations
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  
  // Newsletter operations
  createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private contactMessages: Map<number, ContactMessage>;
  private newsletterSubscribers: Map<number, NewsletterSubscriber>;
  private userId: number;
  private productId: number;
  private messageId: number;
  private subscriberId: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.contactMessages = new Map();
    this.newsletterSubscribers = new Map();
    this.userId = 1;
    this.productId = 1;
    this.messageId = 1;
    this.subscriberId = 1;
    
    // Initialize with sample products
    this.initializeProducts();
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Product operations
  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }
  
  async getProductById(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }
  
  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category
    );
  }
  
  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.isFeatured
    );
  }
  
  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.productId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }
  
  // Contact operations
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.messageId++;
    const message: ContactMessage = { ...insertMessage, id };
    this.contactMessages.set(id, message);
    return message;
  }
  
  // Newsletter operations
  async createNewsletterSubscriber(insertSubscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    const id = this.subscriberId++;
    const subscriber: NewsletterSubscriber = { ...insertSubscriber, id };
    this.newsletterSubscribers.set(id, subscriber);
    return subscriber;
  }
  
  // Initialize with sample products
  private initializeProducts() {
    const sampleProducts: InsertProduct[] = [
      {
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
      }
    ];
    
    sampleProducts.forEach(product => {
      this.createProduct(product);
    });
  }
}

export const storage = new MemStorage();
