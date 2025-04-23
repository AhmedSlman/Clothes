import { useState, useEffect } from 'react';
import { Product, InsertContactMessage, InsertNewsletterSubscriber } from '@shared/schema';
import { 
  products, 
  getFeaturedProducts, 
  getProductById, 
  getProductsByCategory,
  createContactMessage,
  createNewsletterSubscriber
} from '@/data/mockData';

// Hook for fetching products
export function useProducts() {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      setData(products);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return { data, isLoading };
}

// Hook for fetching featured products
export function useFeaturedProducts() {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      setData(getFeaturedProducts());
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return { data, isLoading };
}

// Hook for fetching a product by ID
export function useProduct(id: number) {
  const [data, setData] = useState<Product | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      setData(getProductById(id));
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  return { data, isLoading };
}

// Hook for fetching products by category
export function useProductsByCategory(category: string) {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      setData(getProductsByCategory(category));
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [category]);
  
  return { data, isLoading };
}

// Hook for submitting contact form
export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const submitContactForm = async (formData: InsertContactMessage) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      await createContactMessage(formData);
      setIsSuccess(true);
    } catch (err) {
      setError('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return { submitContactForm, isSubmitting, isSuccess, error };
}

// Hook for newsletter subscription
export function useNewsletterSubscription() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const subscribe = async (email: string) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      await createNewsletterSubscriber({
        email,
        subscribedAt: new Date().toISOString()
      });
      setIsSuccess(true);
    } catch (err) {
      setError('An error occurred while subscribing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return { subscribe, isSubmitting, isSuccess, error };
}