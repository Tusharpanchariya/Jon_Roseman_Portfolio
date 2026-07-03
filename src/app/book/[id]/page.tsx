import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CartDrawer from '../../../components/CartDrawer';
import BookDetailPageClient from './BookDetailPageClient';
import { BRAND_DATA } from '../../../data/content';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const book = BRAND_DATA.books.find((b) => b.id === id);

  if (!book) {
    notFound();
  }

  // Filter other books for the related section
  const relatedBooks = BRAND_DATA.books.filter((b) => b.id !== id);

  return (
    <>
      <Header />
      <main className="bg-[#FAF9F6] min-h-screen pt-28 pb-20 text-[#111111] font-sans">
        <BookDetailPageClient book={book} relatedBooks={relatedBooks} />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
