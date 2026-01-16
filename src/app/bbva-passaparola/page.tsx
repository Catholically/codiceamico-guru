import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BBVA Passaparola 2026: 10€ Bonus + 3% Interessi + 3% Cashback | Codice 77610082263181',
  description: 'BBVA Passaparola: ottieni 10€ di bonus, 3% di interessi sul saldo e 3% di cashback per 6 mesi! Usa il codice 77610082263181. Conto e carta gratuiti per sempre.',
  keywords: [
    'bbva passaparola',
    'bbva codice amico',
    'bbva bonus',
    'bbva 3 percento',
    'bbva cashback',
    'bbva promozione 2026',
    'codice passaparola bbva',
    'bbva conto gratuito',
  ],
  alternates: {
    canonical: 'https://codiceamico.guru/bbva-passaparola/',
  },
  openGraph: {
    title: 'BBVA Passaparola 2026: 10€ + 3% Interessi + 3% Cashback',
    description: 'Apri il conto BBVA con il codice 77610082263181 e ottieni 10€ bonus, 3% interessi e 3% cashback!',
    url: 'https://codiceamico.guru/bbva-passaparola/',
    type: 'article',
  },
};

export default function BBVAPassaparolaPage() {
  const currentYear = new Date().getFullYear();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `BBVA Passaparola ${currentYear}: 10€ Bonus + 3% Interessi + 3% Cashback`,
    description: 'Guida completa alla promozione BBVA Passaparola. Come ottenere 10€ bonus e vantaggi esclusivi.',
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
        name: 'Quanto bonus ricevo con BBVA Passaparola?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ricevi 10€ di bonus dopo il primo acquisto con la carta. Chi ti invita riceve 20€ per ogni amico (max 200€).',
        },
      },
      {
        '@type': 'Question',
        name: 'Il conto BBVA e davvero gratuito?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Si, il conto BBVA e completamente gratuito per sempre: zero costi di apertura, gestione e carta di debito.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come funziona il 3% di interessi BBVA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Per i primi 6 mesi ricevi il 3% annuo lordo sul saldo del conto. Dopo i 6 mesi, il tasso si basa sul 25% del tasso BCE.',
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
          <span className="text-white">BBVA Passaparola</span>
        </nav>
      </div>

      {/* Article Header */}
      <article>
        <section className="px-6 md:px-12 py-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge-yellow">AGGIORNATO GENNAIO {currentYear}</div>
            <div className="bg-blue-600 text-white px-3 py-1 text-xs font-bold tracking-wide">CONTO GRATIS</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            BBVA PASSAPAROLA:<br />
            <span className="text-[#FAFF00]">10€ + 3% INTERESSI + 3% CASHBACK</span>
          </h1>
          <p className="text-xl text-[#999] max-w-2xl">
            BBVA ti offre un conto e carta a 0€ per sempre! Con il codice Passaparola ottieni
            10€ di bonus, 3% di interessi sul saldo e 3% di cashback sugli acquisti per 6 mesi.
          </p>
        </section>

        {/* CTA Box Top */}
        <section className="px-6 md:px-12 pb-12 max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Apri il Conto con il Codice Passaparola</h2>
              <p className="text-blue-100">Inserisci <strong className="text-white">77610082263181</strong> durante la registrazione</p>
            </div>
            <a
              href="https://www.bbva.it/promo/passaparola.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 font-bold px-6 py-3 hover:bg-blue-50 transition-colors text-center whitespace-nowrap"
            >
              APRI CONTO BBVA →
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="px-6 md:px-12 pb-12 max-w-4xl">
          <div className="border border-white/10 p-6">
            <h2 className="font-bold text-white mb-4">CONTENUTI</h2>
            <ul className="space-y-2 text-[#999]">
              <li><a href="#vantaggi" className="hover:text-[#FAFF00] transition-colors">I 3 Vantaggi della Promozione</a></li>
              <li><a href="#come-funziona" className="hover:text-[#FAFF00] transition-colors">Come Funziona il Passaparola</a></li>
              <li><a href="#step-by-step" className="hover:text-[#FAFF00] transition-colors">Guida Passo Passo</a></li>
              <li><a href="#perche-bbva" className="hover:text-[#FAFF00] transition-colors">Perche Scegliere BBVA</a></li>
              <li><a href="#faq" className="hover:text-[#FAFF00] transition-colors">Domande Frequenti</a></li>
            </ul>
          </div>
        </section>

        {/* Content - Light Section */}
        <section className="light-section px-6 md:px-12 py-16">
          <div className="max-w-4xl">

            {/* I 3 Vantaggi */}
            <div id="vantaggi" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">I 3 VANTAGGI DELLA PROMOZIONE</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-6 border-2 border-blue-600 text-center">
                  <span className="block text-4xl font-black text-blue-600 mb-2">10€</span>
                  <span className="block text-sm font-bold text-[#111]">BONUS BENVENUTO</span>
                  <span className="block text-xs text-[#666] mt-2">Dopo il primo acquisto</span>
                </div>
                <div className="bg-white p-6 border-2 border-blue-600 text-center">
                  <span className="block text-4xl font-black text-blue-600 mb-2">3%</span>
                  <span className="block text-sm font-bold text-[#111]">INTERESSI</span>
                  <span className="block text-xs text-[#666] mt-2">Sul saldo per 6 mesi</span>
                </div>
                <div className="bg-white p-6 border-2 border-blue-600 text-center">
                  <span className="block text-4xl font-black text-blue-600 mb-2">3%</span>
                  <span className="block text-sm font-bold text-[#111]">CASHBACK</span>
                  <span className="block text-xs text-[#666] mt-2">Sugli acquisti per 6 mesi</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 border-l-4 border-blue-600">
                <p className="text-[#666] text-sm">
                  <strong className="text-[#111]">Esempio pratico:</strong> Se depositi 10.000€ e spendi 280€/mese
                  per 6 mesi, guadagni circa 150€ di interessi + 50€ di cashback + 10€ di bonus = <strong className="text-[#111]">oltre 200€ totali!</strong>
                </p>
              </div>
            </div>

            {/* Come Funziona */}
            <div id="come-funziona" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">COME FUNZIONA IL PASSAPAROLA</h2>
              <p className="text-[#666] mb-6">
                Il programma <strong className="text-[#111]">"Passaparola"</strong> di BBVA premia sia chi invita
                che chi viene invitato. Ecco i dettagli:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white border border-[#e5e5e5]">
                  <thead className="bg-[#111] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Chi</th>
                      <th className="px-6 py-4 text-left font-bold">Bonus</th>
                      <th className="px-6 py-4 text-left font-bold">Requisito</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e5e5]">
                    <tr>
                      <td className="px-6 py-4 font-bold text-[#111]">Tu (invitato)</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">10€</td>
                      <td className="px-6 py-4 text-[#666]">Primo acquisto con carta</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-[#111]">Chi ti invita</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">20€ (max 200€)</td>
                      <td className="px-6 py-4 text-[#666]">Per ogni amico che completa</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-[#111] mb-3">Bonus Extra Remunerazione</h3>
              <p className="text-[#666] mb-4">
                Puoi ottenere fino allo <strong className="text-[#111]">0,50% extra</strong> di remunerazione:
              </p>
              <ul className="space-y-2 text-[#666] mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">+0,25%</span>
                  <span>Se mantieni un saldo medio di almeno 10.000€ per un mese</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">+0,25%</span>
                  <span>Se un amico che hai invitato mantiene 10.000€ di saldo medio</span>
                </li>
              </ul>
            </div>

            {/* Step by Step */}
            <div id="step-by-step" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">GUIDA PASSO PASSO</h2>

              <div className="space-y-4">
                <div className="bg-white p-6 border-2 border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Vai su BBVA o scarica l'app</h4>
                      <p className="text-[#666]">Accedi a <strong>bbva.it/promo/passaparola.html</strong> o scarica l'app BBVA.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Inserisci il codice Passaparola</h4>
                      <p className="text-[#666]">Durante la registrazione inserisci il codice <strong>77610082263181</strong>.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Completa l'apertura del conto</h4>
                      <p className="text-[#666]">Verifica la tua identita e attiva il conto (processo 100% online).</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Fai il primo acquisto</h4>
                      <p className="text-[#666]">Effettua un acquisto con la carta di debito BBVA (qualsiasi importo).</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 flex items-center justify-center text-white font-bold">5</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Ricevi 10€ + inizia a guadagnare!</h4>
                      <p className="text-[#666]">Il bonus viene accreditato e inizia il periodo con 3% interessi e 3% cashback.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Middle */}
            <div className="bg-[#111] p-8 text-center mb-12">
              <h3 className="text-xl font-bold text-white mb-2">Pronto a ottenere 10€ + 3% + 3%?</h3>
              <p className="text-[#999] mb-4">Usa il codice <strong className="text-[#FAFF00]">77610082263181</strong></p>
              <a
                href="https://www.bbva.it/promo/passaparola.html"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                APRI CONTO BBVA GRATIS <span>→</span>
              </a>
            </div>

            {/* Scadenze */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">SCADENZE IMPORTANTI</h2>
              <div className="bg-[#FAFF00] p-4 mb-4">
                <ul className="space-y-2 text-[#111] text-sm">
                  <li><strong>Remunerazione Extra 0,25%:</strong> Aderisci entro il 24/01/2026</li>
                  <li><strong>Promo Cashback 3%:</strong> Apri il conto entro il 07/04/2026</li>
                  <li><strong>Cashback:</strong> Valido sui primi 280€ di acquisti/mese per 6 mesi</li>
                </ul>
              </div>
            </div>

            {/* Perche BBVA */}
            <div id="perche-bbva" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">PERCHE SCEGLIERE BBVA</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Conto Gratuito per Sempre</h4>
                  <p className="text-[#666] text-sm">Zero costi di apertura, gestione e chiusura. Nessun canone.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">IBAN Italiano</h4>
                  <p className="text-[#666] text-sm">Conto con IBAN italiano, ideale per accredito stipendio.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Carta di Debito Gratuita</h4>
                  <p className="text-[#666] text-sm">Carta Mastercard inclusa senza costi aggiuntivi.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Remunerazione Continua</h4>
                  <p className="text-[#666] text-sm">Dopo i 6 mesi, interessi basati sul 25% del tasso BCE.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Bonifici Gratuiti</h4>
                  <p className="text-[#666] text-sm">Bonifici SEPA senza commissioni.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">App Intuitiva</h4>
                  <p className="text-[#666] text-sm">Gestisci tutto da smartphone con notifiche in tempo reale.</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-[#f5f5f5] p-4 text-sm text-[#999]">
              <strong>Nota:</strong> Le condizioni della promozione possono variare. Verifica sempre
              i termini aggiornati sul sito ufficiale BBVA. Questo articolo contiene link di affiliazione.
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="px-6 md:px-12 py-16 border-t border-white/10">
          <div className="max-w-4xl">
            <div className="section-title">Domande Frequenti</div>
            <h2 className="text-3xl font-black mb-8">FAQ SU BBVA PASSAPAROLA</h2>
            <div className="space-y-4">
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Il conto BBVA e davvero gratuito?</h3>
                <p className="text-[#999]">
                  Si, il conto BBVA e completamente gratuito per sempre. Nessun costo di apertura,
                  gestione, carta di debito o chiusura.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Come funziona il cashback del 3%?</h3>
                <p className="text-[#999]">
                  Ricevi il 3% di cashback sui primi 280€ di acquisti ogni mese per 6 mesi.
                  Il cashback massimo e di circa 50€ totali.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Cosa succede dopo i 6 mesi promozionali?</h3>
                <p className="text-[#999]">
                  Dopo i 6 mesi, la remunerazione sul saldo sara pari al 25% del tasso BCE
                  (attualmente circa 0,75-1%), mentre il cashback termina.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Il codice 77610082263181 e ancora valido?</h3>
                <p className="text-[#999]">
                  Si, il codice 77610082263181 e attualmente attivo. Inseriscilo durante la
                  registrazione per ottenere tutti i bonus della promozione Passaparola.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="px-6 md:px-12 pb-16">
          <div className="max-w-4xl pt-8 border-t border-white/10">
            <h3 className="font-bold text-white mb-4">ALTRI CODICI AMICO BANCHE</h3>
            <div className="flex flex-wrap gap-3">
              <a href="/codice-amico-n26/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">N26</a>
              <a href="/codice-amico-revolut/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">Revolut</a>
              <a href="/codice-amico-ing/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">ING</a>
              <a href="/codice-amico-satispay/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">Satispay</a>
              <a href="/categoria/banche/" className="px-4 py-2 bg-[#FAFF00] text-[#111] font-bold">VEDI TUTTI →</a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
