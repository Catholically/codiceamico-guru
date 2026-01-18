import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'American Express Business Platinum 2026: Referral e Bonus | Codice rOBErPcCDY',
  description: 'American Express Business Platinum: richiedi la carta premium per aziende e professionisti. Accesso lounge, assicurazioni viaggio e Membership Rewards. Usa il codice rOBErPcCDY.',
  keywords: [
    'amex business platinum',
    'american express referral',
    'amex codice amico',
    'carta amex business',
    'amex platinum aziende',
    'membership rewards',
    'amex lounge',
  ],
  alternates: {
    canonical: 'https://codiceamico.guru/amex-business-platinum-referral/',
  },
  openGraph: {
    title: 'American Express Business Platinum 2026: Referral e Bonus',
    description: 'Richiedi la carta Amex Business Platinum con il codice rOBErPcCDY e ottieni il bonus di benvenuto.',
    url: 'https://codiceamico.guru/amex-business-platinum-referral/',
    type: 'article',
  },
};

export default function AmexBusinessPlatinumPage() {
  const currentYear = new Date().getFullYear();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `American Express Business Platinum ${currentYear}: Referral e Bonus`,
    description: 'Guida completa alla carta American Express Business Platinum. Come richiederla e ottenere il bonus di benvenuto.',
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
          <a href="/categoria/banche/">Banche</a>
          <span>/</span>
          <span className="text-white">Amex Business Platinum</span>
        </nav>
      </div>

      {/* Article Header */}
      <article>
        <section className="px-6 md:px-12 py-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge-yellow">AGGIORNATO GENNAIO {currentYear}</div>
            <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-3 py-1 text-xs font-bold tracking-wide">CARTA PREMIUM</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            AMERICAN EXPRESS<br />
            <span className="text-[#FAFF00]">BUSINESS PLATINUM</span>
          </h1>
          <p className="text-xl text-[#999] max-w-2xl">
            La carta di credito premium per professionisti e aziende. Accesso a oltre 1.400 lounge aeroportuali,
            assicurazioni viaggio complete e il programma Membership Rewards.
          </p>
        </section>

        {/* CTA Box Top */}
        <section className="px-6 md:px-12 pb-12 max-w-4xl">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-[#FAFF00]">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Richiedi la Carta con Bonus</h2>
              <p className="text-gray-400">Usa il codice <strong className="text-[#FAFF00]">rOBErPcCDY</strong> per il bonus di benvenuto</p>
            </div>
            <a
              href="https://americanexpress.com/it-it/referral/business-platinum?ref=rOBErPcCDY&XLINK=MYCP"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAFF00] text-[#111] font-bold px-6 py-3 hover:bg-yellow-400 transition-colors text-center whitespace-nowrap"
            >
              RICHIEDI ORA →
            </a>
          </div>
        </section>

        {/* Content - Light Section */}
        <section className="light-section px-6 md:px-12 py-16">
          <div className="max-w-4xl">

            {/* Bonus Box */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">BONUS PRESENTA UN AMICO</h2>
              <p className="text-[#666] mb-6">
                Con il programma <strong className="text-[#111]">"Presenta un Amico Business"</strong> ottieni
                90.000 punti Membership Rewards spendendo 6.000€ nei primi 3 mesi!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-6 border-2 border-gray-800 text-center">
                  <span className="block text-sm text-[#999] mb-2">TU RICEVI</span>
                  <span className="block text-3xl font-black text-gray-800">90.000</span>
                  <span className="block text-sm text-[#666] mt-1">punti MR (fino a 360€)</span>
                </div>
                <div className="bg-white p-6 border-2 border-gray-800 text-center">
                  <span className="block text-sm text-[#999] mb-2">CHI TI PRESENTA RICEVE</span>
                  <span className="block text-3xl font-black text-gray-800">50.000</span>
                  <span className="block text-sm text-[#666] mt-1">punti Membership Rewards</span>
                </div>
              </div>

              <div className="bg-[#FAFF00] p-4 mb-4">
                <p className="text-[#111] text-sm font-medium">
                  <strong>Come ottenere il bonus:</strong> Spendi 6.000€ con la carta nei primi 3 mesi dall'emissione.
                  I punti possono essere convertiti in sconti Shop with Points fino a 360€.
                </p>
              </div>

              <div className="bg-gray-100 p-4">
                <p className="text-[#666] text-sm">
                  <strong className="text-[#111]">Costi:</strong> Canone 70€/mese (840€/anno) - deducibile fiscalmente.
                  Include 1 carta Platino supplementare + 98 carte Oro Business.
                </p>
              </div>
            </div>

            {/* Vantaggi */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">VANTAGGI ESCLUSIVI</h2>
              <p className="text-[#666] mb-6">
                La <strong className="text-[#111]">Business Platinum</strong> di American Express offre
                vantaggi premium pensati per chi viaggia spesso e vuole il massimo dalla propria carta.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-6 border-2 border-gray-800">
                  <h4 className="font-bold text-[#111] mb-2">Lounge Aeroportuali</h4>
                  <p className="text-[#666] text-sm">Accesso a oltre 1.400 lounge in tutto il mondo con Priority Pass, Centurion Lounge e altri programmi.</p>
                </div>
                <div className="bg-white p-6 border-2 border-gray-800">
                  <h4 className="font-bold text-[#111] mb-2">Assicurazione Viaggio</h4>
                  <p className="text-[#666] text-sm">Copertura completa per viaggi di lavoro: medica, bagaglio, annullamento e ritardo voli.</p>
                </div>
                <div className="bg-white p-6 border-2 border-gray-800">
                  <h4 className="font-bold text-[#111] mb-2">Membership Rewards</h4>
                  <p className="text-[#666] text-sm">Accumula punti su ogni acquisto e convertili in voli, hotel, shopping o cashback.</p>
                </div>
                <div className="bg-white p-6 border-2 border-gray-800">
                  <h4 className="font-bold text-[#111] mb-2">Concierge 24/7</h4>
                  <p className="text-[#666] text-sm">Servizio di assistenza personale disponibile 24 ore su 24, 7 giorni su 7.</p>
                </div>
              </div>
            </div>

            {/* Come Richiedere */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">COME RICHIEDERE LA CARTA</h2>

              <div className="space-y-4">
                <div className="bg-white p-6 border-2 border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-800 flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Clicca sul link di invito</h4>
                      <p className="text-[#666]">Usa il link con il codice rOBErPcCDY per accedere alla pagina di richiesta</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-800 flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Compila la richiesta</h4>
                      <p className="text-[#666]">Inserisci i dati aziendali o da professionista e i tuoi dati personali</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-800 flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Attendi l'approvazione</h4>
                      <p className="text-[#666]">American Express valutera la tua richiesta e ti contrattera per l'esito</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-800 flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Ricevi e attiva la carta</h4>
                      <p className="text-[#666]">Ricevi la carta, attivala e inizia a guadagnare punti Membership Rewards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Middle */}
            <div className="bg-[#111] p-8 text-center mb-12">
              <h3 className="text-xl font-bold text-white mb-2">Pronto per i vantaggi premium?</h3>
              <p className="text-[#999] mb-4">Usa il codice <strong className="text-[#FAFF00]">rOBErPcCDY</strong> per la richiesta</p>
              <a
                href="https://americanexpress.com/it-it/referral/business-platinum?ref=rOBErPcCDY&XLINK=MYCP"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                RICHIEDI BUSINESS PLATINUM <span>→</span>
              </a>
            </div>

            {/* Perche Amex */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">PERCHE SCEGLIERE AMEX BUSINESS</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Accettazione Globale</h4>
                  <p className="text-[#666] text-sm">American Express e accettata in milioni di esercizi in tutto il mondo.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Protezione Acquisti</h4>
                  <p className="text-[#666] text-sm">I tuoi acquisti sono protetti contro danni e furti per 90 giorni.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Carte Supplementari</h4>
                  <p className="text-[#666] text-sm">Aggiungi carte per i tuoi collaboratori con limiti personalizzati.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Reportistica Aziendale</h4>
                  <p className="text-[#666] text-sm">Strumenti per monitorare e gestire le spese aziendali.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Upgrade Hotel</h4>
                  <p className="text-[#666] text-sm">Status elite presso catene alberghiere come Hilton e Marriott.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Garanzia Estesa</h4>
                  <p className="text-[#666] text-sm">Estensione della garanzia del produttore fino a 2 anni aggiuntivi.</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-[#f5f5f5] p-4 text-sm text-[#999]">
              <strong>Nota:</strong> La carta e soggetta ad approvazione da parte di American Express.
              Canone annuo previsto. Verifica tutti i termini e le condizioni sul sito ufficiale.
              Link di affiliazione.
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-12 py-16 border-t border-white/10">
          <div className="max-w-4xl">
            <div className="section-title">Domande Frequenti</div>
            <h2 className="text-3xl font-black mb-8">FAQ SU AMEX BUSINESS PLATINUM</h2>
            <div className="space-y-4">
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Quanto costa la carta Business Platinum?</h3>
                <p className="text-[#999]">
                  La Business Platinum ha un canone annuo. Il costo esatto varia in base alle promozioni
                  in corso. Verifica sul sito Amex per il prezzo aggiornato.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Quali sono i requisiti?</h3>
                <p className="text-[#999]">
                  E necessario essere titolari di partita IVA, liberi professionisti o rappresentanti
                  di un'azienda. American Express valutera la tua richiesta.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Quanto tempo ci vuole per ricevere la carta?</h3>
                <p className="text-[#999]">
                  Dopo l'approvazione, la carta viene spedita entro pochi giorni lavorativi.
                  Il processo di approvazione puo richiedere da pochi giorni a qualche settimana.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">I punti Membership Rewards scadono?</h3>
                <p className="text-[#999]">
                  No! I punti Membership Rewards non hanno scadenza finche mantieni attiva la tua carta.
                  Puoi accumularli nel tempo e usarli quando preferisci.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="px-6 md:px-12 pb-16">
          <div className="max-w-4xl pt-8 border-t border-white/10">
            <h3 className="font-bold text-white mb-4">ALTRI CODICI BANCHE</h3>
            <div className="flex flex-wrap gap-3">
              <a href="/codice-amico-n26/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">N26</a>
              <a href="/codice-amico-revolut/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">Revolut</a>
              <a href="/codice-amico-bbva/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">BBVA</a>
              <a href="/categoria/banche/" className="px-4 py-2 bg-[#FAFF00] text-[#111] font-bold">VEDI TUTTI →</a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
