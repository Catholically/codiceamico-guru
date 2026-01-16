import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wise Invita Amici 2026: Trasferimento Gratis Fino a 500€ | Codice robertap429',
  description: 'Wise Invita Amici: primo trasferimento gratis fino a 500€! Chi invita guadagna fino a 90€ ogni 3 amici. Usa il codice robertap429.',
  keywords: [
    'wise invita amici',
    'wise codice amico',
    'wise bonus',
    'wise referral',
    'wise promozione 2026',
    'transferwise codice',
    'wise trasferimento gratis',
  ],
  alternates: {
    canonical: 'https://codiceamico.guru/wise-invita-amici/',
  },
  openGraph: {
    title: 'Wise Invita Amici 2026: Trasferimento Gratis',
    description: 'Invia denaro all\'estero gratis! Usa il codice robertap429 per il primo trasferimento gratuito.',
    url: 'https://codiceamico.guru/wise-invita-amici/',
    type: 'article',
  },
};

export default function WiseInvitaAmiciPage() {
  const currentYear = new Date().getFullYear();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Wise Invita Amici ${currentYear}: Trasferimento Gratis Fino a 500€`,
    description: 'Guida completa al programma referral Wise. Come invitare amici e trasferire denaro gratis.',
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
          <a href="/categoria/finanza/">Finanza</a>
          <span>/</span>
          <span className="text-white">Wise Invita Amici</span>
        </nav>
      </div>

      {/* Article Header */}
      <article>
        <section className="px-6 md:px-12 py-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge-yellow">AGGIORNATO GENNAIO {currentYear}</div>
            <div className="bg-green-500 text-white px-3 py-1 text-xs font-bold tracking-wide">EX TRANSFERWISE</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            WISE INVITA AMICI:<br />
            <span className="text-[#FAFF00]">TRASFERIMENTO GRATIS FINO A 500€</span>
          </h1>
          <p className="text-xl text-[#999] max-w-2xl">
            Wise (ex TransferWise) e il modo piu economico per inviare denaro all'estero con il
            tasso di cambio reale. Invita amici e guadagna fino a 90€ ogni 3 referral!
          </p>
        </section>

        {/* CTA Box Top */}
        <section className="px-6 md:px-12 pb-12 max-w-4xl">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Registrati e Trasferisci Gratis</h2>
              <p className="text-green-100">Primo trasferimento fino a 500€ <strong className="text-white">senza commissioni</strong></p>
            </div>
            <a
              href="https://wise.com/invite/ihpc/robertap429"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 font-bold px-6 py-3 hover:bg-green-50 transition-colors text-center whitespace-nowrap"
            >
              APRI CONTO WISE →
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
                Il programma <strong className="text-[#111]">"Invita Amici"</strong> di Wise premia sia
                chi invita che chi viene invitato con vantaggi concreti sui trasferimenti internazionali.
              </p>

              {/* Bonus Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-6 border-2 border-green-500 text-center">
                  <span className="block text-sm text-[#999] mb-2">TU GUADAGNI</span>
                  <span className="block text-4xl font-black text-green-600">90€</span>
                  <span className="block text-sm text-[#666] mt-2">ogni 3 amici invitati</span>
                </div>
                <div className="bg-white p-6 border-2 border-green-500 text-center">
                  <span className="block text-sm text-[#999] mb-2">IL TUO AMICO RICEVE</span>
                  <span className="block text-4xl font-black text-green-600">Gratis</span>
                  <span className="block text-sm text-[#666] mt-2">trasferimento fino a 500€</span>
                </div>
              </div>
            </div>

            {/* Requisiti */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">REQUISITI PER IL BONUS</h2>
              <p className="text-[#666] mb-4">Per ottenere la ricompensa, il tuo amico deve:</p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <strong className="text-[#111]">Registrarsi con il tuo link</strong>
                    <p className="text-[#666] text-sm">Deve essere un nuovo utente Wise</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <strong className="text-[#111]">Effettuare un trasferimento internazionale</strong>
                    <p className="text-[#666] text-sm">Di almeno 200€ (o equivalente in altra valuta)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <strong className="text-[#111]">Conversione valuta richiesta</strong>
                    <p className="text-[#666] text-sm">Il trasferimento deve includere un cambio di valuta</p>
                  </div>
                </li>
              </ul>

              <div className="bg-[#FAFF00] p-4">
                <p className="text-[#111] text-sm font-medium">
                  <strong>Nota:</strong> Ricevi 30€ per ogni amico qualificato. Dopo 3 amici = 90€!
                  La ricompensa e richiedibile entro 1 anno.
                </p>
              </div>
            </div>

            {/* Step by Step */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">COME OTTENERE IL TRASFERIMENTO GRATIS</h2>

              <div className="space-y-4">
                <div className="bg-white p-6 border-2 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Registrati con il link di invito</h4>
                      <p className="text-[#666]">Vai su wise.com/invite/ihpc/robertap429</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Completa la verifica</h4>
                      <p className="text-[#666]">Verifica la tua identita per iniziare a usare Wise.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Effettua il primo trasferimento</h4>
                      <p className="text-[#666]">Il primo trasferimento fino a 500€ e senza commissioni!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Middle */}
            <div className="bg-[#111] p-8 text-center mb-12">
              <h3 className="text-xl font-bold text-white mb-2">Pronto a trasferire gratis?</h3>
              <p className="text-[#999] mb-4">Usa il link con codice <strong className="text-[#FAFF00]">robertap429</strong></p>
              <a
                href="https://wise.com/invite/ihpc/robertap429"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                APRI CONTO WISE GRATIS <span>→</span>
              </a>
            </div>

            {/* Perche Wise */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">PERCHE SCEGLIERE WISE</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Tasso di Cambio Reale</h4>
                  <p className="text-[#666] text-sm">Il mid-market rate, senza maggiorazioni nascoste.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Commissioni Trasparenti</h4>
                  <p className="text-[#666] text-sm">Sai sempre quanto paghi prima di confermare.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Conto Multi-Valuta</h4>
                  <p className="text-[#666] text-sm">Detieni e gestisci oltre 50 valute diverse.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Carta di Debito</h4>
                  <p className="text-[#666] text-sm">Spendi all'estero con il tasso reale.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Veloce</h4>
                  <p className="text-[#666] text-sm">La maggior parte dei trasferimenti arriva in 1-2 giorni.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Sicuro e Regolamentato</h4>
                  <p className="text-[#666] text-sm">Autorizzato dalla FCA e altre autorita.</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-[#f5f5f5] p-4 text-sm text-[#999]">
              <strong>Nota:</strong> Le condizioni del programma referral possono variare in base alla
              regione. Verifica sempre i termini aggiornati sul sito Wise. Link di affiliazione.
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-12 py-16 border-t border-white/10">
          <div className="max-w-4xl">
            <div className="section-title">Domande Frequenti</div>
            <h2 className="text-3xl font-black mb-8">FAQ SU WISE INVITA AMICI</h2>
            <div className="space-y-4">
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Wise e TransferWise sono la stessa cosa?</h3>
                <p className="text-[#999]">
                  Si! TransferWise ha cambiato nome in Wise nel 2021. Stesso servizio, stessa azienda,
                  nuovo nome piu semplice.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Quanto risparmio usando Wise?</h3>
                <p className="text-[#999]">
                  Wise usa il tasso di cambio reale (mid-market rate) senza maggiorazioni.
                  Puoi risparmiare fino all'8x rispetto alle banche tradizionali.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">In quanto tempo arriva il trasferimento?</h3>
                <p className="text-[#999]">
                  La maggior parte dei trasferimenti arriva in 1-2 giorni lavorativi. Alcuni
                  possono essere istantanei, dipende dalla valuta e dal paese.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="px-6 md:px-12 pb-16">
          <div className="max-w-4xl pt-8 border-t border-white/10">
            <h3 className="font-bold text-white mb-4">ALTRI CODICI FINANZA</h3>
            <div className="flex flex-wrap gap-3">
              <a href="/codice-amico-revolut/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">Revolut</a>
              <a href="/codice-amico-n26/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">N26</a>
              <a href="/codice-amico-trade-republic/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">Trade Republic</a>
              <a href="/categoria/finanza/" className="px-4 py-2 bg-[#FAFF00] text-[#111] font-bold">VEDI TUTTI →</a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
