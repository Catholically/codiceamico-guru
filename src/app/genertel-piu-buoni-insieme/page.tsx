import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Genertel Piu Buoni Insieme 2026: 50 Euro Buono Amazon | Codice g6OTP6R4',
  description: 'Genertel Piu Buoni Insieme: chi invita riceve 50 euro in buoni Amazon per ogni amico che acquista una polizza RC Auto! Usa il codice g6OTP6R4.',
  keywords: [
    'genertel piu buoni insieme',
    'genertel codice amico',
    'genertel buono amazon',
    'genertel referral',
    'genertel promozione 2026',
    'assicurazione auto sconto',
    'genertel invita amico',
  ],
  alternates: {
    canonical: 'https://codiceamico.guru/genertel-piu-buoni-insieme/',
  },
  openGraph: {
    title: 'Genertel Piu Buoni Insieme 2026: 50 Euro Amazon',
    description: 'Guadagna 50 euro in buoni Amazon per ogni amico che acquista una polizza Genertel! Usa il codice g6OTP6R4.',
    url: 'https://codiceamico.guru/genertel-piu-buoni-insieme/',
    type: 'article',
  },
};

export default function GenertelPiuBuoniInsiemePage() {
  const currentYear = new Date().getFullYear();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Genertel Piu Buoni Insieme ${currentYear}: 50 Euro Buono Amazon`,
    description: 'Guida completa al programma referral Genertel. Come invitare amici e guadagnare buoni Amazon.',
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Breadcrumb */}
      <div className="px-6 md:px-12 py-4 border-b border-white/10">
        <nav className="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/categoria/assicurazioni/">Assicurazioni</a>
          <span>/</span>
          <span className="text-white">Genertel Piu Buoni Insieme</span>
        </nav>
      </div>

      {/* Article Header */}
      <article>
        <section className="px-6 md:px-12 py-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge-yellow">AGGIORNATO GENNAIO {currentYear}</div>
            <div className="bg-red-600 text-white px-3 py-1 text-xs font-bold tracking-wide">GRUPPO GENERALI</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            GENERTEL PIU BUONI INSIEME:<br />
            <span className="text-[#FAFF00]">50 EURO BUONO AMAZON</span>
          </h1>
          <p className="text-xl text-[#999] max-w-2xl">
            Genertel e l'assicurazione diretta del gruppo Generali. Con il programma "Piu Buoni Insieme"
            guadagni 50 euro in buoni Amazon per ogni amico che acquista una polizza!
          </p>
        </section>

        {/* CTA Box Top */}
        <section className="px-6 md:px-12 pb-12 max-w-4xl">
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Registrati con il codice</h2>
              <p className="text-red-100">Usa il codice <strong className="text-white">g6OTP6R4</strong> e inizia a guadagnare</p>
            </div>
            <a
              href="https://piubuoninsieme-genertel.it/registrazione/g6OTP6R4"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 font-bold px-6 py-3 hover:bg-red-50 transition-colors text-center whitespace-nowrap"
            >
              REGISTRATI ORA →
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
                Il programma <strong className="text-[#111]">"Piu Buoni Insieme"</strong> di Genertel
                ti premia con <strong className="text-[#111]">50 euro in buoni Amazon</strong> per ogni persona
                che si iscrive con il tuo codice e acquista una polizza Genertel.
              </p>

              {/* Bonus Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-6 border-2 border-red-600 text-center">
                  <span className="block text-sm text-[#999] mb-2">TU GUADAGNI</span>
                  <span className="block text-4xl font-black text-red-600">50 EURO</span>
                  <span className="block text-sm text-[#666] mt-2">in buoni Amazon per ogni amico</span>
                </div>
                <div className="bg-white p-6 border-2 border-red-600 text-center">
                  <span className="block text-sm text-[#999] mb-2">BONUS EXTRA</span>
                  <span className="block text-4xl font-black text-red-600">+200 EURO</span>
                  <span className="block text-sm text-[#666] mt-2">se acquisti anche tu (investimenti)</span>
                </div>
              </div>

              <div className="bg-[#FAFF00] p-4 mb-6">
                <p className="text-[#111] text-sm font-medium">
                  <strong>Bonus aggiuntivi:</strong> Se oltre a invitare amici acquisti anche tu, puoi ottenere
                  fino a 200 euro extra per prodotti di investimento, 40 euro per mutuo/casa, 20 euro per risparmio/vita.
                </p>
              </div>
            </div>

            {/* Step by Step */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">COME PARTECIPARE</h2>

              <div className="space-y-4">
                <div className="bg-white p-6 border-2 border-red-600">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-600 flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Registrati con il codice</h4>
                      <p className="text-[#666]">Vai su piubuoninsieme-genertel.it e usa il codice g6OTP6R4</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-red-600">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-600 flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Completa il profilo</h4>
                      <p className="text-[#666]">Inserisci il tuo numero di cellulare e completa la registrazione</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-red-600">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-600 flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Condividi il tuo codice</h4>
                      <p className="text-[#666]">Ricevi il tuo codice personale e condividilo sui social o con gli amici</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-red-600">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-600 flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Guadagna buoni Amazon</h4>
                      <p className="text-[#666]">Per ogni amico che acquista una polizza, ricevi 50 euro in buoni Amazon!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Middle */}
            <div className="bg-[#111] p-8 text-center mb-12">
              <h3 className="text-xl font-bold text-white mb-2">Pronto a guadagnare?</h3>
              <p className="text-[#999] mb-4">Usa il codice <strong className="text-[#FAFF00]">g6OTP6R4</strong> per registrarti</p>
              <a
                href="https://piubuoninsieme-genertel.it/registrazione/g6OTP6R4"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                REGISTRATI E GUADAGNA <span>→</span>
              </a>
            </div>

            {/* Perche Genertel */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">PERCHE SCEGLIERE GENERTEL</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Gruppo Generali</h4>
                  <p className="text-[#666] text-sm">Solidita e affidabilita di uno dei maggiori gruppi assicurativi al mondo.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">100% Online</h4>
                  <p className="text-[#666] text-sm">Gestisci tutto comodamente online, dal preventivo al sinistro.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Prezzi Competitivi</h4>
                  <p className="text-[#666] text-sm">Assicurazione diretta = costi ridotti e prezzi piu bassi.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Assistenza 24/7</h4>
                  <p className="text-[#666] text-sm">Servizio clienti sempre disponibile in caso di necessita.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Polizza Personalizzabile</h4>
                  <p className="text-[#666] text-sm">Scegli le garanzie accessorie che ti servono davvero.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">App Mobile</h4>
                  <p className="text-[#666] text-sm">Gestisci la tua polizza e apri sinistri direttamente dall'app.</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-[#f5f5f5] p-4 text-sm text-[#999]">
              <strong>Nota:</strong> Buono Amazon soggetto a condizioni Amazon (amazon.it/gc-legal).
              Le condizioni del programma possono variare. Verifica sempre i termini aggiornati sul sito.
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-12 py-16 border-t border-white/10">
          <div className="max-w-4xl">
            <div className="section-title">Domande Frequenti</div>
            <h2 className="text-3xl font-black mb-8">FAQ SU GENERTEL PIU BUONI INSIEME</h2>
            <div className="space-y-4">
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Come ricevo il buono Amazon da 50 euro?</h3>
                <p className="text-[#999]">
                  Il buono Amazon da 50 euro viene erogato dopo che la persona invitata con il tuo codice
                  acquista una nuova polizza Genertel durante il periodo promozionale.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Posso invitare piu amici?</h3>
                <p className="text-[#999]">
                  Si! Non c'e un limite al numero di amici che puoi invitare. Per ogni amico che acquista
                  una polizza, ricevi 50 euro in buoni Amazon.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Genertel e affidabile?</h3>
                <p className="text-[#999]">
                  Genertel fa parte del gruppo Generali, uno dei maggiori gruppi assicurativi al mondo.
                  E un'assicurazione diretta che opera in Italia da oltre 25 anni.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Cosa sono i bonus extra?</h3>
                <p className="text-[#999]">
                  Se oltre a invitare amici acquisti anche tu prodotti Genertel, puoi ottenere bonus extra:
                  fino a 200 euro per investimenti, 40 euro per mutuo/casa, 20 euro per risparmio/vita/assicurazione cane.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="px-6 md:px-12 pb-16">
          <div className="max-w-4xl pt-8 border-t border-white/10">
            <h3 className="font-bold text-white mb-4">ALTRI CODICI ASSICURAZIONI</h3>
            <div className="flex flex-wrap gap-3">
              <a href="/codice-amico-prima/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">Prima Assicurazioni</a>
              <a href="/categoria/assicurazioni/" className="px-4 py-2 bg-[#FAFF00] text-[#111] font-bold">VEDI TUTTI →</a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
