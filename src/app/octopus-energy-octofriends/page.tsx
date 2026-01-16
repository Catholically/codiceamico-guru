import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Octopus Energy Octofriends 2026: 30€ Sconto Bolletta | Codice smoke-melon-499',
  description: 'Octopus Energy Octofriends: ottieni 30€ di sconto sulla prima bolletta! Energia 100% rinnovabile. Usa il link smoke-melon-499.',
  keywords: [
    'octopus energy octofriends',
    'octopus energy codice amico',
    'octopus energy sconto',
    'octopus energy referral',
    'octopus energy promozione 2026',
    'codice sconto octopus',
    'octopus energy 30 euro',
  ],
  alternates: {
    canonical: 'https://codiceamico.guru/octopus-energy-octofriends/',
  },
  openGraph: {
    title: 'Octopus Energy Octofriends 2026: 30€ Sconto',
    description: 'Passa a Octopus Energy e risparmia 30€! Energia verde al 100%. Usa il codice smoke-melon-499.',
    url: 'https://codiceamico.guru/octopus-energy-octofriends/',
    type: 'article',
  },
};

export default function OctopusOctofriendsPage() {
  const currentYear = new Date().getFullYear();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Octopus Energy Octofriends ${currentYear}: Come Ottenere 30€ di Sconto`,
    description: 'Guida completa al programma Octofriends. Come invitare amici e risparmiare sulla bolletta.',
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
        name: 'Quanto sconto ottengo con Octofriends?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ottieni 30€ di sconto sulla prima bolletta per la fornitura luce. Con luce + gas lo sconto arriva a 70€ (30€ luce + 20€ gas per te e l\'amico).',
        },
      },
      {
        '@type': 'Question',
        name: 'Come funziona il programma Octofriends?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Condividi il tuo link Octofriends con amici. Quando attivano la fornitura, entrambi ricevete lo sconto sulla prima bolletta.',
        },
      },
      {
        '@type': 'Question',
        name: 'Octopus Energy usa energia rinnovabile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Si, Octopus Energy fornisce energia 100% rinnovabile certificata con Garanzie di Origine.',
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
          <a href="/categoria/energia/">Energia</a>
          <span>/</span>
          <span className="text-white">Octopus Energy Octofriends</span>
        </nav>
      </div>

      {/* Article Header */}
      <article>
        <section className="px-6 md:px-12 py-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge-yellow">AGGIORNATO GENNAIO {currentYear}</div>
            <div className="bg-pink-500 text-white px-3 py-1 text-xs font-bold tracking-wide">100% GREEN</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            OCTOPUS ENERGY OCTOFRIENDS:<br />
            <span className="text-[#FAFF00]">30€ DI SCONTO IN BOLLETTA</span>
          </h1>
          <p className="text-xl text-[#999] max-w-2xl">
            Passa a Octopus Energy, il fornitore green con prezzi trasparenti!
            Con Octofriends ottieni 30€ di sconto sulla prima bolletta, e anche il tuo amico risparmia.
          </p>
        </section>

        {/* CTA Box Top */}
        <section className="px-6 md:px-12 pb-12 max-w-4xl">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Attiva con il Link Octofriends</h2>
              <p className="text-pink-100">Usa il link <strong className="text-white">smoke-melon-499</strong> e risparmia 30€</p>
            </div>
            <a
              href="https://octopusenergy.it/octo-friends/smoke-melon-499"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-600 font-bold px-6 py-3 hover:bg-pink-50 transition-colors text-center whitespace-nowrap"
            >
              PASSA A OCTOPUS →
            </a>
          </div>
        </section>

        {/* Content - Light Section */}
        <section className="light-section px-6 md:px-12 py-16">
          <div className="max-w-4xl">

            {/* Come Funziona */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">COME FUNZIONA OCTOFRIENDS</h2>
              <p className="text-[#666] mb-6">
                Il programma <strong className="text-[#111]">"Octofriends"</strong> di Octopus Energy
                ti permette di risparmiare semplicemente condividendo il tuo link con amici e familiari.
              </p>

              {/* Bonus Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-6 border-2 border-pink-500 text-center">
                  <span className="block text-sm text-[#999] mb-2">TU RICEVI</span>
                  <span className="block text-4xl font-black text-pink-600">30€</span>
                  <span className="block text-sm text-[#666] mt-2">sconto in bolletta</span>
                </div>
                <div className="bg-white p-6 border-2 border-pink-500 text-center">
                  <span className="block text-sm text-[#999] mb-2">IL TUO AMICO RICEVE</span>
                  <span className="block text-4xl font-black text-pink-600">30€</span>
                  <span className="block text-sm text-[#666] mt-2">sconto sulla prima bolletta</span>
                </div>
              </div>

              <div className="bg-pink-50 p-4 border-l-4 border-pink-500 mb-6">
                <p className="text-[#666] text-sm">
                  <strong className="text-[#111]">Bonus Luce + Gas:</strong> Se attivi anche il gas,
                  lo sconto totale e di <strong className="text-[#111]">70€</strong> (30€ luce + 20€ gas per entrambi)!
                </p>
              </div>
            </div>

            {/* Step by Step */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">COME OTTENERE LO SCONTO</h2>

              <div className="space-y-4">
                <div className="bg-white p-6 border-2 border-pink-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-pink-500 flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Clicca sul link Octofriends</h4>
                      <p className="text-[#666]">Vai su octopusenergy.it/octo-friends/smoke-melon-499</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-pink-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-pink-500 flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Inserisci il tuo indirizzo</h4>
                      <p className="text-[#666]">Verifica la copertura del servizio nella tua zona.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-pink-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-pink-500 flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Scegli la tariffa luce e/o gas</h4>
                      <p className="text-[#666]">Prezzi trasparenti, 100% energia rinnovabile.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-pink-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-pink-500 flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Completa il passaggio</h4>
                      <p className="text-[#666]">Octopus si occupa di tutto, il cambio e indolore!</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-pink-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-pink-500 flex items-center justify-center text-white font-bold">5</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Ricevi 30€ di sconto!</h4>
                      <p className="text-[#666]">Lo sconto viene applicato alla prima bolletta utile.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Middle */}
            <div className="bg-[#111] p-8 text-center mb-12">
              <h3 className="text-xl font-bold text-white mb-2">Pronto a risparmiare 30€?</h3>
              <p className="text-[#999] mb-4">Usa il link Octofriends <strong className="text-[#FAFF00]">smoke-melon-499</strong></p>
              <a
                href="https://octopusenergy.it/octo-friends/smoke-melon-499"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                PASSA A OCTOPUS ENERGY <span>→</span>
              </a>
            </div>

            {/* Perche Octopus */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">PERCHE SCEGLIERE OCTOPUS ENERGY</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">100% Energia Rinnovabile</h4>
                  <p className="text-[#666] text-sm">Elettricita da fonti rinnovabili certificate.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Prezzi Trasparenti</h4>
                  <p className="text-[#666] text-sm">Nessun costo nascosto, tariffe chiare e comprensibili.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">App Moderna</h4>
                  <p className="text-[#666] text-sm">Gestisci tutto dall'app, monitora i consumi in tempo reale.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Assistenza Eccellente</h4>
                  <p className="text-[#666] text-sm">Supporto clienti rapido e disponibile.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Inviti Illimitati</h4>
                  <p className="text-[#666] text-sm">Puoi invitare quanti amici vuoi, senza limiti!</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Passaggio Indolore</h4>
                  <p className="text-[#666] text-sm">Octopus gestisce tutto, zero interruzioni di servizio.</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-[#f5f5f5] p-4 text-sm text-[#999]">
              <strong>Nota:</strong> Lo sconto viene applicato alla prima bolletta utile dopo l'attivazione.
              Promozione valida per nuovi clienti. Questo articolo contiene link di affiliazione.
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-12 py-16 border-t border-white/10">
          <div className="max-w-4xl">
            <div className="section-title">Domande Frequenti</div>
            <h2 className="text-3xl font-black mb-8">FAQ SU OCTOPUS ENERGY OCTOFRIENDS</h2>
            <div className="space-y-4">
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Quanto tempo ci vuole per ricevere lo sconto?</h3>
                <p className="text-[#999]">
                  Lo sconto viene applicato alla prima bolletta utile dopo l'attivazione della fornitura,
                  solitamente entro 3 mesi.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Devo disdire con il vecchio fornitore?</h3>
                <p className="text-[#999]">
                  No! Octopus Energy si occupa di tutto. Il passaggio e automatico e senza interruzioni
                  del servizio.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">L'energia e davvero rinnovabile?</h3>
                <p className="text-[#999]">
                  Si, Octopus Energy fornisce energia 100% rinnovabile, certificata con Garanzie
                  di Origine (GO).
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Quanti amici posso invitare?</h3>
                <p className="text-[#999]">
                  Non c'e limite! Puoi invitare quanti amici vuoi e ricevere 30€ per ognuno che
                  attiva la fornitura.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="px-6 md:px-12 pb-16">
          <div className="max-w-4xl pt-8 border-t border-white/10">
            <h3 className="font-bold text-white mb-4">ALTRI CODICI ENERGIA</h3>
            <div className="flex flex-wrap gap-3">
              <a href="/codice-amico-eni/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">ENI Plenitude</a>
              <a href="/categoria/energia/" className="px-4 py-2 bg-[#FAFF00] text-[#111] font-bold">VEDI TUTTI →</a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
