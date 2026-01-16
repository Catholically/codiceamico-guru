import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glovo Invita un Amico 2026: 3 Consegne Gratis | Codice D26WDLQ',
  description: 'Glovo Invita un Amico: ricevi 3 consegne gratuite per ogni amico che inviti! Usa il codice D26WDLQ. Cibo, farmacia, supermercato consegnati a casa.',
  keywords: [
    'glovo invita un amico',
    'glovo codice amico',
    'glovo consegne gratis',
    'glovo referral',
    'glovo promozione 2026',
    'codice sconto glovo',
    'glovo gratis',
  ],
  alternates: {
    canonical: 'https://codiceamico.guru/glovo-invita-un-amico/',
  },
  openGraph: {
    title: 'Glovo Invita un Amico 2026: 3 Consegne Gratis',
    description: 'Fatti consegnare tutto gratis! Usa il codice D26WDLQ e ottieni 3 consegne gratuite.',
    url: 'https://codiceamico.guru/glovo-invita-un-amico/',
    type: 'article',
  },
};

export default function GlovoInvitaAmicoPage() {
  const currentYear = new Date().getFullYear();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Glovo Invita un Amico ${currentYear}: Come Ottenere 3 Consegne Gratuite`,
    description: 'Guida completa al programma referral Glovo. Come invitare amici e ottenere consegne gratis.',
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
        name: 'Quante consegne gratis ottengo con Glovo Invita un Amico?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ricevi 3 consegne gratuite per ogni amico che inviti e completa il primo ordine. Il tuo amico riceve 3 consegne gratis sui primi ordini.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qual e l\'importo minimo per la consegna gratuita Glovo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La consegna gratuita si applica su ordini di importo superiore a 5 euro.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quanto dura il codice Glovo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Il codice promozionale e valido per 30 giorni dalla condivisione.',
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
          <a href="/categoria/delivery/">Delivery</a>
          <span>/</span>
          <span className="text-white">Glovo Invita un Amico</span>
        </nav>
      </div>

      {/* Article Header */}
      <article>
        <section className="px-6 md:px-12 py-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge-yellow">AGGIORNATO GENNAIO {currentYear}</div>
            <div className="bg-yellow-500 text-black px-3 py-1 text-xs font-bold tracking-wide">DELIVERY #1</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            GLOVO INVITA UN AMICO:<br />
            <span className="text-[#FAFF00]">3 CONSEGNE GRATUITE</span>
          </h1>
          <p className="text-xl text-[#999] max-w-2xl">
            Glovo ti consegna tutto: cibo, farmacia, supermercato e molto altro!
            Invita un amico e ricevi 3 consegne gratuite quando lui effettua il primo ordine.
          </p>
        </section>

        {/* CTA Box Top */}
        <section className="px-6 md:px-12 pb-12 max-w-4xl">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-black mb-1">Registrati con il Codice Amico</h2>
              <p className="text-yellow-900">Usa il codice <strong className="text-black">D26WDLQ</strong> e ricevi 3 consegne gratis</p>
            </div>
            <a
              href="https://glovoapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-yellow-500 font-bold px-6 py-3 hover:bg-gray-900 transition-colors text-center whitespace-nowrap"
            >
              ORDINA SU GLOVO →
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
                Con il programma <strong className="text-[#111]">"Invita un Amico"</strong> di Glovo,
                puoi ottenere consegne gratuite semplicemente condividendo il tuo codice!
              </p>

              {/* Bonus Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-6 border-2 border-yellow-500 text-center">
                  <span className="block text-sm text-[#999] mb-2">TU RICEVI</span>
                  <span className="block text-4xl font-black text-yellow-600">3</span>
                  <span className="block text-lg font-bold text-yellow-600">consegne gratis</span>
                  <span className="block text-sm text-[#666] mt-2">per ogni amico invitato</span>
                </div>
                <div className="bg-white p-6 border-2 border-yellow-500 text-center">
                  <span className="block text-sm text-[#999] mb-2">IL TUO AMICO RICEVE</span>
                  <span className="block text-4xl font-black text-yellow-600">3</span>
                  <span className="block text-lg font-bold text-yellow-600">consegne gratis</span>
                  <span className="block text-sm text-[#666] mt-2">sui primi ordini</span>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 border-l-4 border-yellow-500">
                <p className="text-[#666] text-sm">
                  <strong className="text-[#111]">Risparmio:</strong> La consegna Glovo costa normalmente
                  2-4€. Con 3 consegne gratis risparmi fino a <strong className="text-[#111]">12€</strong>!
                </p>
              </div>
            </div>

            {/* Step by Step */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">COME USARE IL CODICE</h2>

              <div className="space-y-4">
                <div className="bg-white p-6 border-2 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 flex items-center justify-center text-black font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Scarica l'app Glovo</h4>
                      <p className="text-[#666]">Disponibile gratis su App Store e Google Play.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 flex items-center justify-center text-black font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Registrati e inserisci il codice D26WDLQ</h4>
                      <p className="text-[#666]">Inserisci il codice durante la registrazione o nel carrello.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 flex items-center justify-center text-black font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Ordina quello che vuoi</h4>
                      <p className="text-[#666]">Cibo, farmacia, supermercato, fiori, regali... Glovo consegna tutto!</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 flex items-center justify-center text-black font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Goditi la consegna gratuita!</h4>
                      <p className="text-[#666]">Su ordini superiori a 5€, la consegna e gratis per i primi 3 ordini.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Middle */}
            <div className="bg-[#111] p-8 text-center mb-12">
              <h3 className="text-xl font-bold text-white mb-2">Fatti consegnare tutto gratis!</h3>
              <p className="text-[#999] mb-4">Usa il codice <strong className="text-[#FAFF00]">D26WDLQ</strong></p>
              <a
                href="https://glovoapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                ORDINA SU GLOVO <span>→</span>
              </a>
            </div>

            {/* Cosa puoi ordinare */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">COSA PUOI ORDINARE SU GLOVO</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white p-4 border border-[#e5e5e5] text-center">
                  <span className="text-2xl mb-2 block">🍕</span>
                  <span className="font-bold text-[#111]">Ristoranti</span>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5] text-center">
                  <span className="text-2xl mb-2 block">🛒</span>
                  <span className="font-bold text-[#111]">Supermercati</span>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5] text-center">
                  <span className="text-2xl mb-2 block">💊</span>
                  <span className="font-bold text-[#111]">Farmacia</span>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5] text-center">
                  <span className="text-2xl mb-2 block">🎁</span>
                  <span className="font-bold text-[#111]">Regali</span>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5] text-center">
                  <span className="text-2xl mb-2 block">🌸</span>
                  <span className="font-bold text-[#111]">Fiori</span>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5] text-center">
                  <span className="text-2xl mb-2 block">📦</span>
                  <span className="font-bold text-[#111]">Pacchi</span>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5] text-center">
                  <span className="text-2xl mb-2 block">🍷</span>
                  <span className="font-bold text-[#111]">Alcolici</span>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5] text-center">
                  <span className="text-2xl mb-2 block">🐕</span>
                  <span className="font-bold text-[#111]">Pet Shop</span>
                </div>
              </div>
            </div>

            {/* Perche Glovo */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">PERCHE SCEGLIERE GLOVO</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Consegna Veloce</h4>
                  <p className="text-[#666] text-sm">In media 30 minuti dalla conferma dell'ordine.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Tracking in Tempo Reale</h4>
                  <p className="text-[#666] text-sm">Segui il tuo ordine dal ristorante a casa tua.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Tantissimi Partner</h4>
                  <p className="text-[#666] text-sm">Migliaia di ristoranti e negozi disponibili.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Glovo Prime</h4>
                  <p className="text-[#666] text-sm">Abbonamento per consegne illimitate gratis.</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-[#f5f5f5] p-4 text-sm text-[#999]">
              <strong>Nota:</strong> Il codice e valido 30 giorni dalla condivisione. La consegna gratuita
              si applica su ordini superiori a 5€. Disponibilita del servizio variabile per zona.
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-12 py-16 border-t border-white/10">
          <div className="max-w-4xl">
            <div className="section-title">Domande Frequenti</div>
            <h2 className="text-3xl font-black mb-8">FAQ SU GLOVO INVITA UN AMICO</h2>
            <div className="space-y-4">
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Dove inserisco il codice Glovo?</h3>
                <p className="text-[#999]">
                  Puoi inserire il codice D26WDLQ durante la registrazione oppure nella sezione
                  "Promozioni" dell'app prima di completare l'ordine.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Qual e l'importo minimo dell'ordine?</h3>
                <p className="text-[#999]">
                  Per usufruire della consegna gratuita con il codice amico, l'ordine deve essere
                  superiore a 5€.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Glovo e disponibile nella mia citta?</h3>
                <p className="text-[#999]">
                  Glovo e attivo in tantissime citta italiane. Verifica la disponibilita inserendo
                  il tuo indirizzo nell'app.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Il codice D26WDLQ e ancora valido?</h3>
                <p className="text-[#999]">
                  Si, il codice D26WDLQ e attualmente attivo. Usalo durante la registrazione
                  per ottenere 3 consegne gratuite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="px-6 md:px-12 pb-16">
          <div className="max-w-4xl pt-8 border-t border-white/10">
            <h3 className="font-bold text-white mb-4">ALTRI CODICI DELIVERY</h3>
            <div className="flex flex-wrap gap-3">
              <a href="/codice-amico-deliveroo/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">Deliveroo</a>
              <a href="/codice-amico-too-good-to-go/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">Too Good To Go</a>
              <a href="/categoria/delivery/" className="px-4 py-2 bg-[#FAFF00] text-[#111] font-bold">VEDI TUTTI →</a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
