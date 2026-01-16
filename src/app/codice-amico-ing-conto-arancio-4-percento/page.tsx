import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conto Arancio ING 2025: Tasso 4% e Cashback | Codice Amico 25B4BB',
  description: 'Conto Arancio ING con tasso al 4% annuo lordo per 6 mesi + 4% cashback. Usa il codice amico 25B4BB per attivare la promozione. Guida completa e recensione.',
  keywords: [
    'conto arancio',
    'ing conto arancio',
    'conto arancio 4 percento',
    'ing 4%',
    'codice amico ing',
    'conto arancio recensione',
    'ing promozione 2025',
    'conto deposito ing',
  ],
  alternates: {
    canonical: 'https://codiceamico.guru/codice-amico-ing-conto-arancio-4-percento/',
  },
  openGraph: {
    title: 'Conto Arancio ING 2025: Tasso 4% e Cashback - Conviene?',
    description: 'Conto Arancio ING con tasso al 4% annuo lordo per 6 mesi + 4% cashback. Guida completa con codice amico.',
    url: 'https://codiceamico.guru/codice-amico-ing-conto-arancio-4-percento/',
    type: 'article',
  },
};

export default function ContoArancioINGPage() {
  const currentYear = new Date().getFullYear();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Conto Arancio ING ${currentYear}: Tasso 4% e Cashback - Conviene Davvero?`,
    description: 'Guida completa al Conto Arancio ING con tasso al 4% e cashback. Analisi, pro e contro, confronto con la concorrenza.',
    author: {
      '@type': 'Organization',
      name: 'Codice Amico Guru',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Codice Amico Guru',
      url: 'https://codiceamico.guru',
    },
    datePublished: '2025-01-15',
    dateModified: new Date().toISOString().split('T')[0],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quanto rende il Conto Arancio ING nel 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Il Conto Arancio ING offre un tasso promozionale del 4% annuo lordo per i primi 6 mesi su depositi fino a 50.000 euro. Dopo il periodo promozionale si applica il tasso base.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come funziona il cashback ING?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ING offre il 4% di cashback sugli acquisti con carta di debito per 6 mesi, calcolato su una spesa massima di 500 euro al mese. Il cashback massimo ottenibile e di 120 euro totali.',
        },
      },
      {
        '@type': 'Question',
        name: 'Il Conto Corrente Arancio ha costi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Il Conto Corrente Arancio Plus costa 5 euro al mese, ma il canone viene azzerato se accrediti stipendio/pensione, hai entrate mensili di almeno 1.000 euro, o hai meno di 30 anni.',
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
          <span className="text-white">Conto Arancio ING 4%</span>
        </nav>
      </div>

      {/* Article Header */}
      <article>
        <section className="px-6 md:px-12 py-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge-yellow">AGGIORNATO GENNAIO 2025</div>
            <div className="bg-orange-500 text-white px-3 py-1 text-xs font-bold tracking-wide">PROMO ATTIVA</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            CONTO ARANCIO ING {currentYear}:<br />
            <span className="text-[#FAFF00]">TASSO 4% E CASHBACK</span>
          </h1>
          <p className="text-xl text-[#999] max-w-2xl">
            Se stai cercando dove parcheggiare i tuoi risparmi con un rendimento interessante,
            l'offerta di ING per il {currentYear} merita sicuramente attenzione. Vediamo nel dettaglio
            cosa propone la banca olandese e se conviene davvero.
          </p>
        </section>

        {/* CTA Box Top */}
        <section className="px-6 md:px-12 pb-12 max-w-4xl">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Apri il Conto con il Codice Amico</h2>
              <p className="text-orange-100">Usa il codice <strong className="text-white">25B4BB</strong> per attivare la promozione</p>
            </div>
            <a
              href="https://www.ing.it/per-i-miei-amici.html?code=25B4BB"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 font-bold px-6 py-3 hover:bg-orange-50 transition-colors text-center whitespace-nowrap"
            >
              APRI CONTO ING →
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="px-6 md:px-12 pb-12 max-w-4xl">
          <div className="border border-white/10 p-6">
            <h2 className="font-bold text-white mb-4">CONTENUTI</h2>
            <ul className="space-y-2 text-[#999]">
              <li><a href="#offerta" className="hover:text-[#FAFF00] transition-colors">L'Offerta in Sintesi</a></li>
              <li><a href="#conto-arancio" className="hover:text-[#FAFF00] transition-colors">Conto Arancio: Il Conto Deposito</a></li>
              <li><a href="#conto-corrente" className="hover:text-[#FAFF00] transition-colors">Conto Corrente Arancio Plus</a></li>
              <li><a href="#cashback" className="hover:text-[#FAFF00] transition-colors">Il Cashback: Come Funziona</a></li>
              <li><a href="#come-attivare" className="hover:text-[#FAFF00] transition-colors">Come Attivare la Promozione</a></li>
              <li><a href="#pro-contro" className="hover:text-[#FAFF00] transition-colors">Pro e Contro</a></li>
              <li><a href="#confronto" className="hover:text-[#FAFF00] transition-colors">Confronto con la Concorrenza</a></li>
              <li><a href="#verdetto" className="hover:text-[#FAFF00] transition-colors">Il Verdetto</a></li>
            </ul>
          </div>
        </section>

        {/* Content - Light Section */}
        <section className="light-section px-6 md:px-12 py-16">
          <div className="max-w-4xl">

            {/* Offerta in Sintesi */}
            <div id="offerta" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">L'OFFERTA IN SINTESI</h2>
              <p className="text-[#666] mb-4">
                ING propone una promozione valida fino al <strong className="text-[#111]">24 gennaio 2026</strong> che combina due vantaggi:
              </p>
              <ul className="space-y-2 text-[#666]">
                <li className="flex items-start gap-2">
                  <span className="text-[#FAFF00] bg-[#111] w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  <span><strong className="text-[#111]">4% annuo lordo per 6 mesi</strong> sui risparmi depositati su Conto Arancio (fino a 50.000 euro)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FAFF00] bg-[#111] w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  <span><strong className="text-[#111]">4% di cashback per 6 mesi</strong> sugli acquisti con carta di debito (max 500 euro/mese di spesa)</span>
                </li>
              </ul>
            </div>

            {/* Conto Arancio */}
            <div id="conto-arancio" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">CONTO ARANCIO: IL CONTO DEPOSITO</h2>

              <h3 className="text-lg font-bold text-[#111] mb-3">Rendimento</h3>
              <p className="text-[#666] mb-6">
                Il tasso promozionale del <strong className="text-[#111]">4% annuo lordo</strong> si applica per i primi 6 mesi
                su depositi fino a <strong className="text-[#111]">50.000 euro</strong>. Tradotto in numeri concreti:
              </p>

              {/* Rendimento Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white border border-[#e5e5e5]">
                  <thead className="bg-[#111] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Deposito</th>
                      <th className="px-6 py-4 text-left font-bold">Lordo (6 mesi)</th>
                      <th className="px-6 py-4 text-left font-bold">Netto*</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e5e5]">
                    <tr>
                      <td className="px-6 py-4 text-[#666]">10.000 euro</td>
                      <td className="px-6 py-4 text-[#666]">~200 euro</td>
                      <td className="px-6 py-4 text-[#111] font-bold">~148 euro</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-[#666]">30.000 euro</td>
                      <td className="px-6 py-4 text-[#666]">~600 euro</td>
                      <td className="px-6 py-4 text-[#111] font-bold">~444 euro</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-[#666]">50.000 euro</td>
                      <td className="px-6 py-4 text-[#666]">~1.000 euro</td>
                      <td className="px-6 py-4 text-[#111] font-bold">~740 euro</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-[#999] mt-2">*Al netto della ritenuta fiscale del 26%</p>
              </div>

              <h3 className="text-lg font-bold text-[#111] mb-3">Costi</h3>
              <p className="text-[#666] mb-4"><strong className="text-[#111]">Zero.</strong> Nessun costo per:</p>
              <ul className="space-y-1 text-[#666] mb-6">
                <li>• Apertura conto</li>
                <li>• Gestione</li>
                <li>• Bonifici in entrata/uscita</li>
                <li>• Chiusura</li>
              </ul>

              <h3 className="text-lg font-bold text-[#111] mb-3">Sicurezza</h3>
              <p className="text-[#666]">
                I risparmi sono protetti fino a <strong className="text-[#111]">100.000 euro</strong> dal Fondo di Garanzia
                dei Depositi olandese (DGS), con rating AAA.
              </p>
            </div>

            {/* Conto Corrente */}
            <div id="conto-corrente" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">CONTO CORRENTE ARANCIO PLUS</h2>
              <p className="text-[#666] mb-4">Per accedere alla promozione serve anche il Conto Corrente Arancio Plus.</p>

              <h3 className="text-lg font-bold text-[#111] mb-3">Canone Mensile: 5 euro</h3>
              <p className="text-[#666] mb-2">Il canone viene <strong className="text-[#111]">azzerato</strong> se:</p>
              <ul className="space-y-1 text-[#666] mb-6">
                <li>• Accrediti stipendio o pensione</li>
                <li>• Hai entrate mensili di almeno 1.000 euro</li>
                <li>• Hai meno di 30 anni</li>
              </ul>

              <h3 className="text-lg font-bold text-[#111] mb-3">Cosa Include</h3>
              <ul className="space-y-1 text-[#666]">
                <li>• Bonifici istantanei e SEPA gratuiti</li>
                <li>• Carta di debito gratuita</li>
                <li>• Prelievi gratis in Italia e Europa</li>
                <li>• Home banking completo</li>
              </ul>
            </div>

            {/* Cashback */}
            <div id="cashback" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">IL CASHBACK: COME FUNZIONA</h2>
              <p className="text-[#666] mb-4">
                Il 4% di cashback si calcola sulla spesa mensile fino a <strong className="text-[#111]">500 euro</strong> per 6 mesi.
              </p>
              <div className="bg-[#f5f5f5] p-4 mb-4">
                <p className="text-[#111] font-bold mb-2">Esempio pratico:</p>
                <ul className="space-y-1 text-[#666]">
                  <li>• Spendi 500 euro/mese = ottieni 20 euro di cashback</li>
                  <li>• In 6 mesi = massimo <strong className="text-[#111]">120 euro</strong> totali</li>
                </ul>
              </div>
              <p className="text-[#111] font-bold mb-2">Requisiti:</p>
              <ul className="space-y-1 text-[#666]">
                <li>• Mantenere almeno 100 euro sul conto corrente entro il 31 luglio</li>
                <li>• Il cashback viene accreditato su Conto Arancio</li>
              </ul>
            </div>

            {/* Come Attivare */}
            <div id="come-attivare" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">COME ATTIVARE LA PROMOZIONE</h2>
              <p className="text-[#666] mb-6">Ecco i <strong className="text-[#111]">3 step obbligatori</strong> per ottenere il 4% + cashback:</p>

              {/* Steps */}
              <div className="space-y-4 mb-6">
                <div className="bg-white p-6 border-2 border-orange-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Apri i conti entro il 31/01/2026</h4>
                      <p className="text-[#666]">Apri <strong>Conto Corrente Arancio</strong> dal sito ING con il codice amico <strong>25B4BB</strong>, apri <strong>Conto Arancio</strong> e richiedi la <strong>Carta di Debito Mastercard</strong>.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-orange-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Attiva con bonifico + spesa entro il 31/03/2026</h4>
                      <p className="text-[#666]">Attiva i conti con un <strong>bonifico in entrata</strong> e spendi almeno <strong>50 euro</strong> con la carta di debito.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-orange-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Mantieni saldo minimo</h4>
                      <p className="text-[#666]">Mantieni un saldo di almeno <strong>100 euro</strong> su Conto Corrente Arancio per almeno un giorno tra il <strong>12/10/2025</strong> e il <strong>30/04/2026</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAFF00] p-4">
                <p className="text-[#111] text-sm font-medium">
                  <strong>Importante:</strong> Tutti e 3 i passaggi sono obbligatori per attivare la promozione. Rispetta le scadenze indicate!
                </p>
              </div>
            </div>

            {/* CTA Middle */}
            <div className="bg-[#111] p-8 text-center mb-12">
              <h3 className="text-xl font-bold text-white mb-2">Pronto ad aprire il conto?</h3>
              <p className="text-[#999] mb-4">Usa il codice <strong className="text-[#FAFF00]">25B4BB</strong> per attivare tutti i vantaggi</p>
              <a
                href="https://www.ing.it/per-i-miei-amici.html?code=25B4BB"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                APRI CONTO ARANCIO ING <span>→</span>
              </a>
            </div>

            {/* Pro e Contro */}
            <div id="pro-contro" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">PRO E CONTRO</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 border-2 border-green-500">
                  <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                    <span className="text-xl">+</span> VANTAGGI
                  </h3>
                  <ul className="space-y-2 text-[#666]">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">+</span>
                      <span>Tasso competitivo (4% tra i migliori del mercato)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">+</span>
                      <span>Zero costi sul conto deposito</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">+</span>
                      <span>Doppio vantaggio (interessi + cashback)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">+</span>
                      <span>Banca solida con rating AAA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">+</span>
                      <span>App e home banking efficienti</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 border-2 border-orange-500">
                  <h3 className="font-bold text-orange-700 mb-4 flex items-center gap-2">
                    <span className="text-xl">-</span> DA CONSIDERARE
                  </h3>
                  <ul className="space-y-2 text-[#666]">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">-</span>
                      <span>Il 4% dura solo 6 mesi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">-</span>
                      <span>Canone conto corrente di 5 euro/mese (se non azzerato)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">-</span>
                      <span>Cashback limitato a 120 euro totali</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">-</span>
                      <span>Serve essere nuovi clienti</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Confronto */}
            <div id="confronto" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">CONFRONTO CON LA CONCORRENZA</h2>

              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-[#e5e5e5]">
                  <thead className="bg-[#111] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Banca</th>
                      <th className="px-6 py-4 text-left font-bold">Tasso Lordo</th>
                      <th className="px-6 py-4 text-left font-bold">Durata</th>
                      <th className="px-6 py-4 text-left font-bold">Vincoli</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e5e5]">
                    <tr className="bg-[#FAFF00]/20">
                      <td className="px-6 py-4 font-bold text-orange-600">ING</td>
                      <td className="px-6 py-4 text-[#666]">4%</td>
                      <td className="px-6 py-4 text-[#666]">6 mesi</td>
                      <td className="px-6 py-4 text-[#666]">Fino a 50.000 euro</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-[#111]">Illimity</td>
                      <td className="px-6 py-4 text-[#666]">3-4%</td>
                      <td className="px-6 py-4 text-[#666]">Variabile</td>
                      <td className="px-6 py-4 text-[#666]">Conti vincolati</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-[#111]">Fineco</td>
                      <td className="px-6 py-4 text-[#666]">2-3%</td>
                      <td className="px-6 py-4 text-[#666]">Variabile</td>
                      <td className="px-6 py-4 text-[#666]">Depositi vincolati</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-[#111]">BBVA</td>
                      <td className="px-6 py-4 text-[#666]">3,5%</td>
                      <td className="px-6 py-4 text-[#666]">12 mesi</td>
                      <td className="px-6 py-4 text-[#666]">Nuovi clienti</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Verdetto */}
            <div id="verdetto" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">IL VERDETTO</h2>
              <p className="text-[#666] mb-4">
                L'offerta ING {currentYear} e <strong className="text-[#111]">interessante</strong> soprattutto per chi:
              </p>
              <ul className="space-y-1 text-[#666] mb-4">
                <li>• Ha liquidita da parcheggiare (idealmente vicino ai 50.000 euro)</li>
                <li>• Usa regolarmente la carta per acquisti</li>
                <li>• Puo azzerare il canone del conto corrente</li>
              </ul>
              <p className="text-[#666] mb-4">
                Il 4% per 6 mesi e competitivo nel panorama attuale. Il cashback e un bonus carino
                ma non decisivo (max 120 euro). La vera domanda e: cosa succede dopo i 6 mesi? Se il
                tasso base non sara competitivo, dovrai valutare alternative.
              </p>
              <p className="text-[#666]">
                <strong className="text-[#111]">Consiglio:</strong> se decidi di aprire, fallo entro gennaio 2026 per
                massimizzare il periodo promozionale.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="bg-[#f5f5f5] p-4 text-sm text-[#999] mb-8">
              <strong>Nota:</strong> Le condizioni possono variare. Verifica sempre i fogli informativi
              ufficiali sul sito ING prima di procedere. Questo articolo contiene link di affiliazione.
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 md:px-12 py-16">
          <div className="max-w-4xl">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">APRI IL CONTO ORA</h2>
              <p className="text-orange-100 mb-6">
                Usa il codice <strong className="text-white text-xl">25B4BB</strong> per attivare la promozione 4% + cashback
              </p>
              <a
                href="https://www.ing.it/per-i-miei-amici.html?code=25B4BB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-orange-600 font-bold px-10 py-4 hover:bg-orange-50 transition-colors text-lg"
              >
                APRI CONTO ARANCIO ING →
              </a>
              <p className="text-orange-200 text-sm mt-4">
                Aprendo con questo link accedi direttamente all'offerta promozionale con tutti i vantaggi descritti.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-12 py-16 border-t border-white/10">
          <div className="max-w-4xl">
            <div className="section-title">Domande Frequenti</div>
            <h2 className="text-3xl font-black mb-8">FAQ SUL CONTO ARANCIO ING</h2>
            <div className="space-y-4">
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Quanto rende il Conto Arancio ING nel {currentYear}?</h3>
                <p className="text-[#999]">
                  Il Conto Arancio ING offre un tasso promozionale del 4% annuo lordo per i primi 6 mesi
                  su depositi fino a 50.000 euro. Dopo il periodo promozionale si applica il tasso base.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Come funziona il cashback ING?</h3>
                <p className="text-[#999]">
                  ING offre il 4% di cashback sugli acquisti con carta di debito per 6 mesi, calcolato
                  su una spesa massima di 500 euro al mese. Il cashback massimo ottenibile e di 120 euro totali.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Il Conto Corrente Arancio ha costi?</h3>
                <p className="text-[#999]">
                  Il Conto Corrente Arancio Plus costa 5 euro al mese, ma il canone viene azzerato se
                  accrediti stipendio/pensione, hai entrate mensili di almeno 1.000 euro, o hai meno di 30 anni.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Il codice amico ING 25B4BB e ancora valido?</h3>
                <p className="text-[#999]">
                  Si, il codice amico 25B4BB e attualmente attivo e permette di accedere alla promozione
                  con tasso al 4% e cashback. La promozione e valida fino al 24 gennaio 2026.
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
              <a href="/codice-amico-bbva/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">BBVA</a>
              <a href="/codice-amico-hype/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">HYPE</a>
              <a href="/codice-amico-satispay/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">Satispay</a>
              <a href="/categoria/banche/" className="px-4 py-2 bg-[#FAFF00] text-[#111] font-bold">VEDI TUTTI →</a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
