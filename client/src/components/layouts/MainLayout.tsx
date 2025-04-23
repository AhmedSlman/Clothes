import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+9661234567890" />
    </div>
  );
};

export default MainLayout;
