import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jon Roseman | The Godfather of the Music Video | Producer & Talent Agent',
  description: 'Official website of Jon Roseman, pioneer producer of Queen\'s "Bohemian Rhapsody" music video, top British television agent, author of "From Here to Obscurity", speaker, and media commentator.',
  keywords: 'Jon Roseman, Godfather of the Music Video, Bohemian Rhapsody Producer, Queen music video, Rolling Stones video producer, British TV agent, From Here to Obscurity book, after dinner speaker, media consultant',
  authors: [{ name: 'Jon Roseman' }],
  openGraph: {
    type: 'website',
    url: 'http://localhost:3000/',
    title: 'Jon Roseman | The Godfather of the Music Video',
    description: 'Discover the legendary career of Jon Roseman: producer of "Bohemian Rhapsody", agent to Britain\'s biggest television stars, and writer.',
    images: [{ url: '/assets/brand_cover.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jon Roseman | The Godfather of the Music Video',
    description: 'Discover the legendary career of Jon Roseman: producer of "Bohemian Rhapsody", agent to Britain\'s biggest television stars, and writer.',
    images: ['/assets/brand_cover.webp'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* FontAwesome CDN for premium icons */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          precedence="default"
        />
        {/* Favicon */}
        <link 
          rel="icon" 
          type="image/png" 
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22 fill=%22%23c5a880%22 font-family=%22Cinzel%22>JR</text></svg>"
        />
      </head>
      <body>
        {/* Looped 35mm film grain overlay */}
        <div className="film-grain" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
