'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, Mail, ArrowRight, Printer } from 'lucide-react';
import { useCart } from '../../../hooks/useCart';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id') || 'JR-MOCK-SESSION';
  const { clearCart } = useCart();
  const [mounted, setMounted] = useState(false);

  // Clear checkout cart on mount
  useEffect(() => {
    clearCart();
    setMounted(true);
  }, [clearCart]);

  if (!mounted) return null;

  return (
    <div className="max-w-xl mx-auto px-6 text-center space-y-10">
      
      {/* Header State Icon */}
      <div className="flex flex-col items-center space-y-4">
        <CheckCircle2 className="w-16 h-16 text-[#C5A880] stroke-1" />
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-[#111111]">
          Thank You for Your Order
        </h1>
        <p className="text-xs uppercase tracking-widest text-[#666666] font-semibold">
          Payment Confirmed & Secured
        </p>
      </div>

      <div className="w-12 h-[1px] bg-[#E7E7E7] mx-auto"></div>

      {/* Transaction Metadata Card */}
      <div className="border border-[#E7E7E7] bg-white p-6 space-y-6 text-left text-xs text-[#666666] leading-relaxed">
        <div className="flex justify-between items-center pb-3 border-b border-[#E7E7E7]">
          <span>Receipt Reference</span>
          <span className="font-mono font-semibold text-[#111111] truncate max-w-[200px]" title={sessionId}>
            {sessionId}
          </span>
        </div>
        
        <div className="space-y-3 font-light">
          <p>
            A copy of your purchase invoice and package tracking number has been sent to your billing email address via our automated courier system.
          </p>
          <p>
            Orders are usually processed and shipped within 24 to 48 hours. Delivery will be handled via premium tracked shipping.
          </p>
        </div>

        <div className="flex items-center gap-2 border-t border-[#E7E7E7] pt-4 text-[#111111] font-semibold">
          <Mail className="w-4 h-4 text-[#C5A880] stroke-1" />
          <span>Invoice Receipt Confirmation Sent</span>
        </div>
      </div>

      {/* Action Row */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <button
          onClick={() => window.print()}
          className="border border-[#111111] text-[#111111] py-3 px-6 text-[10px] uppercase tracking-widest font-semibold hover:bg-[#111111] hover:text-[#FAF9F6] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5" /> Print Invoice
        </button>
        <Link
          href="/"
          className="bg-[#111111] text-[#FAF9F6] border border-[#111111] py-3 px-6 text-[10px] uppercase tracking-widest font-semibold hover:bg-[#666666] hover:border-[#666666] transition-all duration-300 flex items-center justify-center gap-2"
        >
          Back to Portfolio <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <>
      <Header />
      <main className="bg-[#FAF9F6] min-h-screen pt-28 pb-20 text-[#111111] font-sans flex items-center">
        <Suspense fallback={
          <div className="max-w-xl mx-auto px-6 text-center text-sm text-[#666666] tracking-wide">
            Loading order details...
          </div>
        }>
          <SuccessContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
