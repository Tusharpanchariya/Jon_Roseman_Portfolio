'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Instagram, Mail } from 'lucide-react';
import { useCart } from '../hooks/useCart';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, setIsOpen: setCartOpen } = useCart();
  const [cartCount, setCartCount] = useState(0);

  // Prevent hydration discrepancies
  useEffect(() => {
    setCartCount(cart.reduce((sum, item) => sum + item.quantity, 0));
  }, [cart]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 font-sans border-b ${
        isScrolled 
          ? 'bg-[#FAF9F6] border-[#E7E7E7] py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left Side Links */}
        <nav className="hidden md:flex items-center space-x-8 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#111111]">
          <Link href="/#work" className="hover:opacity-60 transition-opacity">Work</Link>
          <Link href="/#legacy" className="hover:opacity-60 transition-opacity">Legacy</Link>
          <Link href="/#books" className="hover:opacity-60 transition-opacity">Books</Link>
          <Link href="/#contact" className="hover:opacity-60 transition-opacity">Contact</Link>
        </nav>

        {/* Hamburger (Mobile Only) */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden flex-col justify-between w-5 h-4 cursor-pointer focus:outline-hidden p-0.5"
          aria-label="Toggle Navigation"
        >
          <span className={`w-full h-[1.5px] bg-[#111111] transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
          <span className={`w-full h-[1.5px] bg-[#111111] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-[1.5px] bg-[#111111] transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
        </button>

        {/* Center Logo branding */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link 
            href="/" 
            className="font-serif text-lg md:text-xl lg:text-2xl font-normal uppercase tracking-[0.25em] text-[#111111] hover:opacity-75 transition-opacity"
          >
            Jon Roseman
          </Link>
        </div>

        {/* Right Side Socials & Cart */}
        <div className="flex items-center space-x-6 text-[#111111]">
          {/* Instagram */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-60 transition-opacity hidden sm:block"
            aria-label="Instagram Link"
          >
            <Instagram className="w-4 h-4 stroke-1.5" />
          </a>

          {/* IMDb */}
          <a 
            href="https://www.imdb.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-60 transition-opacity text-[10px] font-mono tracking-widest font-bold border border-[#111111] px-1 py-0.5 rounded-xs leading-none uppercase shrink-0"
            aria-label="IMDb Link"
          >
            IMDb
          </a>

          {/* Email */}
          <a 
            href="mailto:jon@jonroseman.com" 
            className="hover:opacity-60 transition-opacity hidden sm:block"
            aria-label="Email Address"
          >
            <Mail className="w-4 h-4 stroke-1.5" />
          </a>

          {/* Cart Trigger Button */}
          <button 
            onClick={() => setCartOpen(true)}
            className="relative p-1 hover:opacity-60 transition-opacity flex items-center gap-1 cursor-pointer"
            aria-label="Open Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 stroke-1.5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#111111] text-[#FAF9F6] text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#FAF9F6]">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#FAF9F6] z-30 flex flex-col justify-between px-8 py-12 border-t border-[#E7E7E7] animate-fade-in">
          <nav className="flex flex-col space-y-8 text-xl font-serif text-[#111111]">
            <Link 
              href="/#work" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:opacity-60 transition-opacity pb-2 border-b border-[#E7E7E7]/40 text-left"
            >
              Selected Work
            </Link>
            <Link 
              href="/#legacy" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:opacity-60 transition-opacity pb-2 border-b border-[#E7E7E7]/40 text-left"
            >
              Collaborations & Legacy
            </Link>
            <Link 
              href="/#books" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:opacity-60 transition-opacity pb-2 border-b border-[#E7E7E7]/40 text-left"
            >
              The Bookstore
            </Link>
            <Link 
              href="/#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:opacity-60 transition-opacity pb-2 border-b border-[#E7E7E7]/40 text-left"
            >
              Contact Booking
            </Link>
          </nav>

          <div className="flex justify-start space-x-6 border-t border-[#E7E7E7] pt-8 text-[#666666] text-xs">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111]">Instagram</a>
            <a href="https://imdb.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111]">IMDb</a>
            <a href="mailto:jon@jonroseman.com" className="hover:text-[#111111]">Email</a>
          </div>
        </div>
      )}
    </header>
  );
}
