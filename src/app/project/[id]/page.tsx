import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CartDrawer from '../../../components/CartDrawer';
import ProjectDetailPageClient from './ProjectDetailPageClient';
import { BRAND_DATA } from '../../../data/content';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const project = BRAND_DATA.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Find related projects (other works)
  const relatedProjects = BRAND_DATA.projects.filter((p) => p.id !== id);

  return (
    <>
      <Header />
      <main className="bg-[#FAF9F6] min-h-screen pt-28 pb-20 text-[#111111] font-sans">
        <ProjectDetailPageClient project={project} relatedProjects={relatedProjects} />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
