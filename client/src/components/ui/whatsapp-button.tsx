import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const formattedNumber = phoneNumber.replace(/\+/g, '').replace(/\s/g, '');
  
  return (
    <div className="whatsapp-button">
      <a 
        href={`https://wa.me/${formattedNumber}`} 
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
    </div>
  );
};
