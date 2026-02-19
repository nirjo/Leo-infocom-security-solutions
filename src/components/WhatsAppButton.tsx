'use client';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9600162818?text=Hi%20Leo%20Infocom,%20let's%20talk%20security!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute -inset-2 rounded-full bg-amazon-orange opacity-75 blur-lg group-hover:opacity-100 transition duration-200 animate-pulse"></span>
      <div className="relative flex items-center justify-center w-14 h-14 bg-amazon-blue border-2 border-amazon-orange rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
