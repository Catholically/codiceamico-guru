import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Satispay Invita un Amico 2026: Bonus 5€ | Codice ROBERTAPARMA1',
  description: 'Satispay Invita un Amico: ottieni 5€ di bonus per ogni amico che inviti! Usa il codice promo ROBERTAPARMA1. Guida completa alla promozione 2026.',
  keywords: [
    'satispay invita un amico',
    'satispay codice promo',
    'satispay bonus',
    'satispay referral',
    'satispay promozione 2026',
    'codice amico satispay',
    'satispay 5 euro gratis',
  ],
  alternates: {
    canonical: 'https://codiceamico.guru/satispay-invita-un-amico/',
  },
  openGraph: {
    title: 'Satispay Invita un Amico 2026: Bonus 5€ Gratis',
    description: 'Guida al programma Satispay Invita un Amico. Ottieni 5€ con il codice ROBERTAPARMA1.',
    url: 'https://codiceamico.guru/satispay-invita-un-amico/',
    type: 'article',
  },
};

export default function SatispayInvitaAmicoPage() {
  const currentYear = new Date().getFullYear();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Satispay Invita un Amico ${currentYear}: Come Ottenere 5€ di Bonus`,
    description: 'Guida completa al programma referral Satispay Italia. Come invitare amici e ottenere bonus.',
    author: {
      '@type': 'Organization',
      name: 'Codice Amico Guru',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Codice Amico Guru',
      url: 'https://codiceamico.guru',
    },
    datePublished: '2026-01-16',
    dateModified: new Date().toISOString().split('T')[0],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quanto bonus ricevo con Satispay Invita un Amico?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ricevi 5€ per ogni amico che si registra con il tuo codice e completa un pagamento di almeno 5€.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come inserisco il codice promo Satispay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Inserisci il codice durante la registrazione nell\'app Satispay, nella sezione apposita per i codici promozionali.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quanto tempo ho per usare il codice Satispay?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hai 30 giorni dalla registrazione per effettuare il primo pagamento di almeno 5€ e ottenere il bonus.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="px-6 md:px-12 py-4 border-b border-white/10">
        <nav className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/categoria/banche/">Banche</a>
          <span>/</span>
          <span className="text-white">Satispay Invita un Amico</span>
        </nav>
      </div>

      {/* Article Header */}
      <article>
        <section className="px-6 md:px-12 py-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge-yellow">AGGIORNATO GENNAIO {currentYear}</div>
            <div className="bg-red-500 text-white px-3 py-1 text-xs font-bold tracking-wide">APP ITALIANA</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            SATISPAY INVITA UN AMICO:<br />
            <span className="text-[#FAFF00]">BONUS 5€ PER TE E L'AMICO</span>
          </h1>
          <p className="text-xl text-[#999] max-w-2xl">
            Satispay e l'app italiana per i pagamenti piu amata! Invita i tuoi amici e
            guadagna 5€ per ogni persona che si registra e completa il primo pagamento.
          </p>
        </section>

        {/* CTA Box Top */}
        <section className="px-6 md:px-12 pb-12 max-w-4xl">
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Registrati con il Codice Promo</h2>
              <p className="text-red-100">Usa il codice <strong className="text-white">ROBERTAPARMA1</strong> e ricevi 5€</p>
            </div>
            <a
              href="https://www.satispay.com/promo/ROBERTAPARMA1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 font-bold px-6 py-3 hover:bg-red-50 transition-colors text-center whitespace-nowrap"
            >
              SCARICA SATISPAY →
            </a>
          </div>
        </section>

        {/* Content - Light Section */}
        <section className="light-section px-6 md:px-12 py-16">
          <div className="max-w-4xl">

            {/* Come Funziona */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">COME FUNZIONA IL PROGRAMMA</h2>
              <p className="text-[#666] mb-6">
                Il programma <strong className="text-[#111]">"Invita un Amico"</strong> di Satispay e semplicissimo:
                condividi il tuo codice promo, e quando un amico si registra e fa il primo pagamento,
                entrambi ricevete un bonus in denaro!
              </p>

              {/* Bonus Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-6 border-2 border-red-500 text-center">
                  <span className="block text-sm text-[#999] mb-2">TU RICEVI</span>
                  <span className="block text-4xl font-black text-red-500">5€</span>
                  <span className="block text-sm text-[#666] mt-2">per ogni amico invitato</span>
                </div>
                <div className="bg-white p-6 border-2 border-red-500 text-center">
                  <span className="block text-sm text-[#999] mb-2">IL TUO AMICO RICEVE</span>
                  <span className="block text-4xl font-black text-red-500">5€</span>
                  <span className="block text-sm text-[#666] mt-2">dopo il primo pagamento</span>
                </div>
              </div>
            </div>

            {/* Step by Step */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">GUIDA PASSO PASSO</h2>

              <div className="space-y-4">
                <div className="bg-white p-6 border-2 border-red-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Scarica l'app Satispay</h4>
                      <p className="text-[#666]">Disponibile gratis su App Store e Google Play.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-red-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Inserisci il codice ROBERTAPARMA1</h4>
                      <p className="text-[#666]">Durante la registrazione, nella sezione "Codice promo".</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-red-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Collega il tuo conto corrente</h4>
                      <p className="text-[#666]">Per ricaricare Satispay e iniziare a pagare.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-red-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Fai un pagamento di almeno 5€</h4>
                      <p className="text-[#666]">In un negozio fisico o online convenzionato (entro 30 giorni).</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-red-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-500 flex items-center justify-center text-white font-bold">5</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Ricevi 5€ di bonus!</h4>
                      <p className="text-[#666]">Il bonus viene accreditato direttamente sul tuo saldo Satispay.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Middle */}
            <div className="bg-[#111] p-8 text-center mb-12">
              <h3 className="text-xl font-bold text-white mb-2">Pronto a ricevere 5€ gratis?</h3>
              <p className="text-[#999] mb-4">Usa il codice <strong className="text-[#FAFF00]">ROBERTAPARMA1</strong></p>
              <a
                href="https://www.satispay.com/promo/ROBERTAPARMA1"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                SCARICA SATISPAY GRATIS <span>→</span>
              </a>
            </div>

            {/* Perche Satispay */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">PERCHE USARE SATISPAY</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Pagamenti Immediati</h4>
                  <p className="text-[#666] text-sm">Paga in negozio con un tap, senza carta ne contanti.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Cashback Settimanale</h4>
                  <p className="text-[#666] text-sm">Ricevi cashback su tanti acquisti nei negozi convenzionati.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">100% Gratuito</h4>
                  <p className="text-[#666] text-sm">Nessun costo di attivazione o gestione.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Ricarica Telefonica</h4>
                  <p className="text-[#666] text-sm">Ricarica il telefono direttamente dall'app.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Bollettini e Pagamenti PA</h4>
                  <p className="text-[#666] text-sm">Paga bollettini, bollo auto e servizi pubblici.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Invio Denaro Gratis</h4>
                  <p className="text-[#666] text-sm">Invia soldi agli amici senza commissioni.</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-[#f5f5f5] p-4 text-sm text-[#999]">
              <strong>Nota:</strong> Il codice e valido 30 giorni dalla registrazione. Il primo pagamento
              deve essere di almeno 5€ in un negozio convenzionato. Questo articolo contiene link di affiliazione.
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-12 py-16 border-t border-white/10">
          <div className="max-w-4xl">
            <div className="section-title">Domande Frequenti</div>
            <h2 className="text-3xl font-black mb-8">FAQ SU SATISPAY INVITA UN AMICO</h2>
            <div className="space-y-4">
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Dove inserisco il codice promo Satispay?</h3>
                <p className="text-[#999]">
                  Inserisci il codice ROBERTAPARMA1 durante la registrazione nell'app, nella sezione
                  dedicata ai codici promozionali.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Quanto tempo ho per ottenere il bonus?</h3>
                <p className="text-[#999]">
                  Hai 30 giorni dalla data di inserimento del codice per effettuare il primo pagamento
                  di almeno 5€ e ottenere il bonus.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Quanti amici posso invitare?</h3>
                <p className="text-[#999]">
                  Non c'e un limite al numero di amici che puoi invitare. Ogni amico che completa
                  i requisiti ti fa guadagnare 5€!
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Il codice ROBERTAPARMA1 e ancora valido?</h3>
                <p className="text-[#999]">
                  Si, il codice ROBERTAPARMA1 e attualmente attivo. Usalo durante la registrazione
                  per ottenere 5€ di bonus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="px-6 md:px-12 pb-16">
          <div className="max-w-4xl pt-8 border-t border-white/10">
            <h3 className="font-bold text-white mb-4">ALTRI CODICI AMICO</h3>
            <div className="flex flex-wrap gap-3">
              <a href="/codice-amico-n26/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">N26</a>
              <a href="/codice-amico-revolut/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">Revolut</a>
              <a href="/codice-amico-bbva/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">BBVA</a>
              <a href="/codice-amico-ing/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">ING</a>
              <a href="/categoria/banche/" className="px-4 py-2 bg-[#FAFF00] text-[#111] font-bold">VEDI TUTTI →</a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
