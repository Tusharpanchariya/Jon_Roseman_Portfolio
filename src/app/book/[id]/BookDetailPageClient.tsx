'use client';

import { useState } from 'react';
import { Book } from '../../../data/content';
import { useCart } from '../../../hooks/useCart';
import { ShoppingCart, Heart, ShieldCheck, Truck, BookOpen, Star } from 'lucide-react';
import Link from 'next/link';

interface ClientProps {
  book: Book;
  relatedBooks: Book[];
}

export default function BookDetailPageClient({ book, relatedBooks }: ClientProps) {
  const [activeImage, setActiveImage] = useState(book.coverImage);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, toggleWishlist, isInWishlist, setIsOpen } = useCart();
  const wishlisted = isInWishlist(book.id);

  const handleBuyNow = () => {
    addToCart(book, quantity);
    setIsOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      
      {/* Back Button */}
      <div className="mb-12">
        <Link 
          href="/#books" 
          className="text-xs uppercase tracking-widest text-[#666666] hover:text-[#111111] transition-colors"
        >
          &larr; Back to Bookstore
        </Link>
      </div>

      {/* Main Grid split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* Images Columns */}
        <div className="lg:col-span-6 space-y-6">
          <div className="relative aspect-[3/4] bg-white border border-[#E7E7E7] overflow-hidden">
            <img 
              src={activeImage} 
              alt={book.title} 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Thumbnail list */}
          {book.gallery && book.gallery.length > 0 && (
            <div className="grid grid-cols-4 gap-4">
              {book.gallery.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-[3/4] bg-white border overflow-hidden transition-all duration-300 ${
                    activeImage === img ? 'border-[#111111]' : 'border-[#E7E7E7] hover:border-[#666666]'
                  }`}
                >
                  <img src={img} alt={`${book.title} view ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Copy/Checkout Column */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Header */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#111111] leading-tight">
              {book.title}
            </h1>
            <p className="text-sm text-[#C5A880] tracking-widest font-semibold uppercase">
              {book.tagline}
            </p>
            <p className="font-serif text-lg italic text-[#666666] leading-relaxed">
              {book.subtitle}
            </p>
            <div className="border-b border-[#E7E7E7] pb-6">
              <span className="text-2xl font-semibold text-[#111111]">
                ${book.price.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 font-light text-sm text-[#666666] leading-relaxed">
            <p>{book.description}</p>
          </div>

          {/* Buy Section */}
          <div className="space-y-4 border-t border-b border-[#E7E7E7] py-6">
            <div className="flex items-center gap-6">
              
              {/* Quantity input */}
              <div className="flex items-center border border-[#111111] bg-white h-12">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 text-sm text-[#666666] hover:text-[#111111] font-semibold"
                >
                  -
                </button>
                <span className="px-6 text-sm font-semibold text-[#111111]">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 text-sm text-[#666666] hover:text-[#111111] font-semibold"
                >
                  +
                </button>
              </div>

              {/* Add To Cart */}
              <button
                onClick={() => addToCart(book, quantity)}
                className="flex-1 bg-transparent text-[#111111] border border-[#111111] h-12 text-[10px] uppercase tracking-widest font-semibold hover:bg-[#111111] hover:text-[#FAF9F6] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
              </button>

              {/* Wishlist toggle */}
              <button
                onClick={() => toggleWishlist(book)}
                className={`w-12 h-12 border flex items-center justify-center transition-colors cursor-pointer ${
                  wishlisted 
                    ? 'border-red-500 bg-red-50 text-red-500' 
                    : 'border-[#E7E7E7] hover:border-[#111111] text-[#666666] hover:text-[#111111]'
                }`}
                title={wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              >
                <Heart className="w-4 h-4" style={{ fill: wishlisted ? 'currentColor' : 'none' }} />
              </button>
            </div>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className="w-full bg-[#111111] text-[#FAF9F6] border border-[#111111] h-12 text-[10px] uppercase tracking-widest font-semibold hover:bg-[#666666] hover:border-[#666666] transition-all duration-300 cursor-pointer"
            >
              Buy It Now
            </button>
          </div>

          {/* Logistics highlights */}
          <div className="grid grid-cols-2 gap-4 text-xs font-light text-[#666666]">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#C5A880] stroke-1" />
              <span>Worldwide Tracked Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A880] stroke-1" />
              <span>Secure SSL Checkout</span>
            </div>
          </div>

        </div>
      </div>

      {/* Editorial Reviews Chapter Section */}
      {book.reviews && book.reviews.length > 0 && (
        <section className="py-20 border-t border-b border-[#E7E7E7] mt-24">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="font-serif text-3xl font-light text-[#111111] text-center tracking-tight">
              Editorial Praise
            </h2>
            <div className="space-y-8">
              {book.reviews.map((rev, index) => (
                <blockquote key={index} className="text-center space-y-3">
                  <p className="font-serif text-xl italic text-[#111111] leading-relaxed">
                    "{rev.text}"
                  </p>
                  <cite className="text-[10px] uppercase tracking-widest text-[#666666] font-semibold block">
                    &mdash; {rev.author}
                  </cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Book details list */}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-light text-[#111111] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#C5A880] stroke-1" /> Specifications
            </h3>
            <div className="divide-y divide-[#E7E7E7] border-t border-b border-[#E7E7E7]">
              {book.details.map((detail, i) => (
                <div key={i} className="flex justify-between py-3.5 text-xs">
                  <span className="text-[#666666] font-light">{detail.label}</span>
                  <span className="text-[#111111] font-semibold">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-light text-[#111111] flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#C5A880] stroke-1" /> Shipping & Details
            </h3>
            <div className="border border-[#E7E7E7] bg-white p-6 space-y-4 text-xs text-[#666666] leading-relaxed font-light">
              <p className="font-semibold text-[#111111]">Delivery Expectations</p>
              <p>
                All copies are wrapped in protective archival packaging to prevent cover scuffs and ensure book-shelf condition upon delivery. 
              </p>
              <p>
                <strong>Domestic (UK/US):</strong> 3-5 business days. 
                <br />
                <strong>International:</strong> 7-14 business days. Tracking details sent via order confirmation email.
              </p>
              <p className="text-[10px] italic text-[#666666] border-t border-[#E7E7E7] pt-4">
                * For signed, dedicated copies, please contact Jon Roseman's management directly through the contact inquiry form.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Related Books */}
      {relatedBooks && relatedBooks.length > 0 && (
        <section className="py-16 border-t border-[#E7E7E7]">
          <h3 className="font-serif text-2xl font-light text-[#111111] mb-12">
            Related Publications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {relatedBooks.map((rb) => (
              <Link 
                key={rb.id}
                href={`/book/${rb.id}`} 
                className="group flex flex-col space-y-3"
              >
                <div className="aspect-[3/4.5] bg-white border border-[#E7E7E7] overflow-hidden">
                  <img 
                    src={rb.coverImage} 
                    alt={rb.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                  />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#C5A880] transition-colors leading-tight">
                    {rb.title}
                  </h4>
                  <span className="text-[10px] text-[#666666] block mt-0.5">${rb.price.toFixed(2)}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
