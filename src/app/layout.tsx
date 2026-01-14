import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Codice Amico Guru | I Migliori Codici Referral Italia',
  description: 'Trova i migliori codici amico e referral per banche, energia, telefonia e servizi in Italia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-stone-50">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-stone-200">
          <nav className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-2">
                <span className="text-2xl">🎁</span>
                <span className="text-xl font-bold text-stone-900">
                  Codice<span className="text-green-600">Amico</span>
                  <span className="text-stone-400">.guru</span>
                </span>
              </a>
              <div className="hidden md:flex items-center gap-6">
                <a href="/categoria/banche/" className="text-stone-600 hover:text-green-600">Banche</a>
                <a href="/categoria/energia/" className="text-stone-600 hover:text-green-600">Energia</a>
                <a href="/categoria/telefonia/" className="text-stone-600 hover:text-green-600">Telefonia</a>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-stone-900 text-stone-300 mt-20 py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>© 2026 CodiceAmico.guru - Tutti i diritti riservati</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
