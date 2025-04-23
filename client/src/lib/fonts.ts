import { useEffect } from 'react';

// Import Cairo font for Arabic
const loadFonts = () => {
  useEffect(() => {
    // We're already loading Cairo from Google Fonts in index.html
    // This is just a placeholder for any additional font loading logic
    // that might be needed in the future
    document.documentElement.classList.add('font-cairo');
  }, []);
};

export default loadFonts;
