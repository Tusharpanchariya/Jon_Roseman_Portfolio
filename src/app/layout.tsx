import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jonroseman.com'),
  title: 'Jon Roseman | Digital Archive & Bookstore',
  description: 'Official digital archive of Jon Roseman, Godfather of the Music Video, pioneer producer of Queen\'s "Bohemian Rhapsody", top British television talent agent, and author.',
  keywords: 'Jon Roseman, Godfather of the Music Video, Bohemian Rhapsody, Queen music video, Rolling Stones video, British TV agent, From Here to Obscurity book, after dinner speaker',
  authors: [{ name: 'Jon Roseman' }],
  openGraph: {
    type: 'website',
    url: 'https://jonroseman.com/',
    title: 'Jon Roseman | Digital Archive & Bookstore',
    description: 'Explore the legendary career of Jon Roseman: producer of "Bohemian Rhapsody", agent to television stars, and author.',
    images: [{ url: '/profile/images.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jon Roseman | Digital Archive & Bookstore',
    description: 'Explore the legendary career of Jon Roseman: producer of "Bohemian Rhapsody", agent to television stars, and author.',
    images: ['/profile/images.webp'],
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22 fill=%22%23111111%22 font-family=%22serif%22>JR</text></svg>',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAF9F6] text-[#111111] antialiased">
        {/* Subtle editorial film grain overlay */}
        <div className="film-grain" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
