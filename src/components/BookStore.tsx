'use client';

import Link from 'next/link';
import { BRAND_DATA } from '../data/content';
import { useCart } from '../hooks/useCart';
import { ShoppingCart, BookOpen } from 'lucide-react';

export default function BookStore() {
  const books = BRAND_DATA.books;
  const { addToCart, setIsOpen } = useCart();

  const handleBuyNow = (book: any) => {
    addToCart(book, 1);
    setIsOpen(true);
  };

  return (
    <section id="books" className="py-24 md:py-32 bg-[#FAF9F6] border-b border-[#E7E7E7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#666666] block mb-3">Official Publications</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-[#111111] tracking-tight">
            The Bookstore
          </h2>
          <div className="w-16 h-[1px] bg-[#111111] mt-6"></div>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {books.map((book) => (
            <div 
              key={book.id} 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group"
            >
              {/* Cover Column */}
              <div className="md:col-span-5">
                <Link 
                  href={`/book/${book.id}`}
                  className="block relative bg-white border border-[#E7E7E7] aspect-[3/4.5] overflow-hidden"
                >
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103" 
                  />
                </Link>
              </div>

              {/* Copy/Actions Column */}
              <div className="md:col-span-7 flex flex-col justify-between h-full space-y-6 py-2">
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline border-b border-[#E7E7E7] pb-3">
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-[#111111] hover:text-[#C5A880] transition-colors">
                      <Link href={`/book/${book.id}`}>{book.title}</Link>
                    </h3>
                    <span className="text-sm font-semibold text-[#111111]">
                      ${book.price.toFixed(2)}
                    </span>
                  </div>
                  
                  <p className="text-[11px] text-[#666666] font-serif italic tracking-wide">
                    {book.subtitle}
                  </p>
                  
                  <p className="text-xs text-[#666666] leading-relaxed font-light line-clamp-4">
                    {book.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  {/* Buy Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => addToCart(book, 1)}
                      className="flex items-center justify-center gap-2 border border-[#111111] text-[#111111] py-3 text-[10px] uppercase tracking-widest font-semibold hover:bg-[#111111] hover:text-[#FAF9F6] transition-all duration-300 cursor-pointer"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
                    </button>
                    <button
                      onClick={() => handleBuyNow(book)}
                      className="bg-[#111111] text-[#FAF9F6] border border-[#111111] py-3 text-[10px] uppercase tracking-widest font-semibold hover:bg-[#666666] hover:border-[#666666] transition-all duration-300 cursor-pointer"
                    >
                      Buy Now
                    </button>
                  </div>
                  
                  <Link
                    href={`/book/${book.id}`}
                    className="w-full flex items-center justify-center gap-2 border border-[#E7E7E7] text-[#666666] py-2.5 text-[9px] uppercase tracking-widest hover:text-[#111111] hover:border-[#111111] transition-all duration-300"
                  >
                    <BookOpen className="w-3 h-3" /> View Editorial Reviews
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
