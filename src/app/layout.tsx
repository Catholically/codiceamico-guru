import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://codiceamico.guru'),
  title: {
    default: 'Codice Amico Guru | I Migliori Codici Referral Italia',
    template: '%s | Codice Amico Guru',
  },
  description: 'Trova i migliori codici amico e referral per banche, energia, telefonia e servizi in Italia. Risparmia fino a 200 euro!',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://codiceamico.guru',
    siteName: 'Codice Amico Guru',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Codice Amico Guru - I Migliori Codici Referral Italia',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="px-6 md:px-12 py-6">
      <div className="flex justify-between items-center">
        <a href="/" className="text-lg font-extrabold tracking-tight">
          CODICEAMICO<span className="text-[#FAFF00]">.</span>GURU
        </a>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          <a href="/categoria/banche/" className="text-[#999] text-sm font-medium hover:text-white transition-colors">
            Banche
          </a>
          <a href="/categoria/energia/" className="text-[#999] text-sm font-medium hover:text-white transition-colors">
            Energia
          </a>
          <a href="/categoria/telefonia/" className="text-[#999] text-sm font-medium hover:text-white transition-colors">
            Telefonia
          </a>
          <a href="/categoria/delivery/" className="text-[#999] text-sm font-medium hover:text-white transition-colors">
            Delivery
          </a>
          <a href="/confronto/" className="text-[#999] text-sm font-medium hover:text-white transition-colors">
            Confronto
          </a>
          <a href="/guide/" className="text-[#FAFF00] text-sm font-bold hover:text-white transition-colors">
            Guide
          </a>
        </nav>
        {/* Mobile menu button - links to guide as most important */}
        <a href="/guide/" className="md:hidden text-[#FAFF00] text-sm font-bold">
          Guide
        </a>
      </div>
      {/* Mobile nav bar */}
      <nav className="md:hidden flex gap-4 mt-4 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
        <a href="/categoria/banche/" className="text-[#999] text-xs font-medium hover:text-white transition-colors whitespace-nowrap">
          Banche
        </a>
        <a href="/categoria/energia/" className="text-[#999] text-xs font-medium hover:text-white transition-colors whitespace-nowrap">
          Energia
        </a>
        <a href="/categoria/telefonia/" className="text-[#999] text-xs font-medium hover:text-white transition-colors whitespace-nowrap">
          Telefonia
        </a>
        <a href="/categoria/delivery/" className="text-[#999] text-xs font-medium hover:text-white transition-colors whitespace-nowrap">
          Delivery
        </a>
        <a href="/confronto/" className="text-[#999] text-xs font-medium hover:text-white transition-colors whitespace-nowrap">
          Confronto
        </a>
        <a href="/glossario/" className="text-[#999] text-xs font-medium hover:text-white transition-colors whitespace-nowrap">
          Glossario
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6 md:px-12 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#666] text-sm">
          © {new Date().getFullYear()} CodiceAmico.guru — Tutti i diritti riservati
        </p>
        <div className="flex gap-6">
          <a href="/glossario/" className="text-[#666] text-sm hover:text-white transition-colors">
            Glossario
          </a>
          <a href="/privacy/" className="text-[#666] text-sm hover:text-white transition-colors">
            Privacy
          </a>
          <a href="/termini/" className="text-[#666] text-sm hover:text-white transition-colors">
            Termini
          </a>
        </div>
      </div>
    </footer>
  );
}
