import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Codice Amico Guru | I Migliori Codici Referral Italia',
  description: 'Trova i migliori codici amico e referral per banche, energia, telefonia e servizi in Italia. Risparmia fino a €200!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <header className="px-6 md:px-12 py-6 flex justify-between items-center">
          <a href="/" className="text-lg font-extrabold tracking-tight">
            CODICEAMICO<span className="text-[#FAFF00]">.</span>GURU
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="/categoria/banche/" className="text-[#999] text-sm font-medium hover:text-white transition-colors">Banche</a>
            <a href="/categoria/energia/" className="text-[#999] text-sm font-medium hover:text-white transition-colors">Energia</a>
            <a href="/categoria/telefonia/" className="text-[#999] text-sm font-medium hover:text-white transition-colors">Telefonia</a>
            <a href="/categoria/delivery/" className="text-[#999] text-sm font-medium hover:text-white transition-colors">Delivery</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-white/10 py-8 px-6 md:px-12 mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#666] text-sm">© 2026 CodiceAmico.guru — Tutti i diritti riservati</p>
            <div className="flex gap-6">
              <a href="/privacy/" className="text-[#666] text-sm hover:text-white transition-colors">Privacy</a>
              <a href="/termini/" className="text-[#666] text-sm hover:text-white transition-colors">Termini</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
