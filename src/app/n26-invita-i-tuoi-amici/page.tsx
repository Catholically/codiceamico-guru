import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'N26 Invita i Tuoi Amici 2026: Bonus 5€ | Codice robertap0893',
  description: 'N26 Invita i tuoi amici: ottieni 5€ di bonus in contanti! Usa il codice amico robertap0893. Guida completa alla promozione N26 Italia 2026.',
  keywords: [
    'n26 invita i tuoi amici',
    'n26 codice amico',
    'n26 bonus',
    'n26 referral',
    'n26 promozione 2026',
    'codice invito n26',
    'n26 5 euro gratis',
  ],
  alternates: {
    canonical: 'https://codiceamico.guru/n26-invita-i-tuoi-amici/',
  },
  openGraph: {
    title: 'N26 Invita i Tuoi Amici 2026: Bonus 5€ Gratis',
    description: 'Guida completa al programma N26 Invita un Amico. Ottieni 5€ con il codice robertap0893.',
    url: 'https://codiceamico.guru/n26-invita-i-tuoi-amici/',
    type: 'article',
  },
};

export default function N26InvitaAmiciPage() {
  const currentYear = new Date().getFullYear();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `N26 Invita i Tuoi Amici ${currentYear}: Come Ottenere 5€ di Bonus`,
    description: 'Guida completa al programma referral N26 Italia. Come invitare amici e ottenere bonus in contanti.',
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
        name: 'Quanto bonus ricevo con N26 Invita un Amico?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Con il programma N26 Invita i tuoi amici ricevi 5€ in contanti per ogni amico che si registra e completa una transazione di almeno 5€.',
        },
      },
      {
        '@type': 'Question',
        name: 'Come funziona il codice amico N26?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Il tuo amico deve registrarsi usando il tuo link o codice, completare la verifica e effettuare un acquisto di almeno 5€ con la carta N26.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quanto tempo ci vuole per ricevere il bonus N26?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Il bonus viene accreditato entro 2-3 giorni lavorativi dalla transazione qualificante. In alcuni casi possono volerci fino a 60 giorni.',
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
          <span className="text-white">N26 Invita i Tuoi Amici</span>
        </nav>
      </div>

      {/* Article Header */}
      <article>
        <section className="px-6 md:px-12 py-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="badge-yellow">AGGIORNATO GENNAIO {currentYear}</div>
            <div className="bg-teal-500 text-white px-3 py-1 text-xs font-bold tracking-wide">60M+ UTENTI</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            N26 INVITA I TUOI AMICI:<br />
            <span className="text-[#FAFF00]">BONUS 5€ IN CONTANTI</span>
          </h1>
          <p className="text-xl text-[#999] max-w-2xl">
            N26 ti premia quando inviti i tuoi amici! Per ogni persona che si registra con il tuo
            codice e completa una transazione, entrambi ricevete 5€ di bonus in contanti.
          </p>
        </section>

        {/* CTA Box Top */}
        <section className="px-6 md:px-12 pb-12 max-w-4xl">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Registrati con il Codice Amico</h2>
              <p className="text-teal-100">Usa il codice <strong className="text-white">robertap0893</strong> e ricevi 5€</p>
            </div>
            <a
              href="https://n26.com/r/robertap0893"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-600 font-bold px-6 py-3 hover:bg-teal-50 transition-colors text-center whitespace-nowrap"
            >
              APRI CONTO N26 →
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="px-6 md:px-12 pb-12 max-w-4xl">
          <div className="border border-white/10 p-6">
            <h2 className="font-bold text-white mb-4">CONTENUTI</h2>
            <ul className="space-y-2 text-[#999]">
              <li><a href="#come-funziona" className="hover:text-[#FAFF00] transition-colors">Come Funziona il Programma</a></li>
              <li><a href="#requisiti" className="hover:text-[#FAFF00] transition-colors">Requisiti per il Bonus</a></li>
              <li><a href="#step-by-step" className="hover:text-[#FAFF00] transition-colors">Guida Passo Passo</a></li>
              <li><a href="#perche-n26" className="hover:text-[#FAFF00] transition-colors">Perche Scegliere N26</a></li>
              <li><a href="#faq" className="hover:text-[#FAFF00] transition-colors">Domande Frequenti</a></li>
            </ul>
          </div>
        </section>

        {/* Content - Light Section */}
        <section className="light-section px-6 md:px-12 py-16">
          <div className="max-w-4xl">

            {/* Come Funziona */}
            <div id="come-funziona" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">COME FUNZIONA IL PROGRAMMA</h2>
              <p className="text-[#666] mb-6">
                Il programma <strong className="text-[#111]">"Invita i tuoi amici"</strong> di N26 e semplice:
                condividi il tuo codice o link personale con amici e familiari. Quando si registrano
                e completano i requisiti, entrambi ricevete un bonus in contanti.
              </p>

              {/* Bonus Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-6 border-2 border-teal-500 text-center">
                  <span className="block text-sm text-[#999] mb-2">TU RICEVI</span>
                  <span className="block text-4xl font-black text-teal-600">5€</span>
                  <span className="block text-sm text-[#666] mt-2">per ogni amico invitato</span>
                </div>
                <div className="bg-white p-6 border-2 border-teal-500 text-center">
                  <span className="block text-sm text-[#999] mb-2">IL TUO AMICO RICEVE</span>
                  <span className="block text-4xl font-black text-teal-600">5€</span>
                  <span className="block text-sm text-[#666] mt-2">dopo la prima transazione</span>
                </div>
              </div>
            </div>

            {/* Requisiti */}
            <div id="requisiti" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-4">REQUISITI PER OTTENERE IL BONUS</h2>
              <p className="text-[#666] mb-4">Per ricevere il bonus di 5€, il tuo amico deve:</p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <strong className="text-[#111]">Essere un nuovo cliente N26</strong>
                    <p className="text-[#666] text-sm">Mai avuto un conto N26 in precedenza</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <strong className="text-[#111]">Registrarsi con il tuo link o codice</strong>
                    <p className="text-[#666] text-sm">Il codice deve essere inserito durante la registrazione</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <strong className="text-[#111]">Completare la verifica dell'identita</strong>
                    <p className="text-[#666] text-sm">Processo rapido tramite video-identificazione</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white flex items-center justify-center font-bold text-sm">4</span>
                  <div>
                    <strong className="text-[#111]">Effettuare una transazione di almeno 5€</strong>
                    <p className="text-[#666] text-sm">Un acquisto in negozio, online o su Amazon</p>
                  </div>
                </li>
              </ul>

              <div className="bg-[#FAFF00] p-4">
                <p className="text-[#111] text-sm font-medium">
                  <strong>Importante:</strong> Prelievi al bancomat e ricariche ad altri conti NON contano
                  come transazione valida. Deve essere un acquisto reale!
                </p>
              </div>
            </div>

            {/* Step by Step */}
            <div id="step-by-step" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">GUIDA PASSO PASSO</h2>

              <div className="space-y-4">
                <div className="bg-white p-6 border-2 border-teal-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-500 flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Clicca sul link di invito</h4>
                      <p className="text-[#666]">Vai su <strong>n26.com/r/robertap0893</strong> o inserisci il codice <strong>robertap0893</strong> nell'app.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-teal-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-500 flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Scarica l'app e registrati</h4>
                      <p className="text-[#666]">Inserisci i tuoi dati e completa la verifica dell'identita (servono pochi minuti).</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-teal-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-500 flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Fai un acquisto di almeno 5€</h4>
                      <p className="text-[#666]">Usa la carta virtuale (subito disponibile) o quella fisica per fare un acquisto.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 border-2 border-teal-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-500 flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-[#111] mb-1">Ricevi 5€ sul conto!</h4>
                      <p className="text-[#666]">Il bonus viene accreditato in 2-3 giorni lavorativi direttamente sul tuo conto N26.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Middle */}
            <div className="bg-[#111] p-8 text-center mb-12">
              <h3 className="text-xl font-bold text-white mb-2">Pronto a ricevere 5€ gratis?</h3>
              <p className="text-[#999] mb-4">Registrati con il codice <strong className="text-[#FAFF00]">robertap0893</strong></p>
              <a
                href="https://n26.com/r/robertap0893"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                APRI CONTO N26 GRATIS <span>→</span>
              </a>
            </div>

            {/* Perche N26 */}
            <div id="perche-n26" className="mb-12">
              <h2 className="text-2xl font-black text-[#111] mb-6">PERCHE SCEGLIERE N26</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Conto 100% Gratuito</h4>
                  <p className="text-[#666] text-sm">Nessun costo di apertura, gestione o chiusura. Zero canone mensile.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Carta Mastercard Inclusa</h4>
                  <p className="text-[#666] text-sm">Carta virtuale immediata + carta fisica gratuita.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Prelievi Gratis in Europa</h4>
                  <p className="text-[#666] text-sm">3 prelievi gratuiti al mese in zona Euro.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">IBAN Tedesco</h4>
                  <p className="text-[#666] text-sm">Licenza bancaria europea, depositi protetti fino a 100.000€.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">App Intuitiva</h4>
                  <p className="text-[#666] text-sm">Gestisci tutto dallo smartphone, notifiche in tempo reale.</p>
                </div>
                <div className="bg-white p-4 border border-[#e5e5e5]">
                  <h4 className="font-bold text-[#111] mb-2">Bonifici Istantanei</h4>
                  <p className="text-[#666] text-sm">Invia e ricevi denaro in pochi secondi.</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-[#f5f5f5] p-4 text-sm text-[#999]">
              <strong>Nota:</strong> Le condizioni del programma referral possono variare. Verifica sempre
              i termini aggiornati sul sito ufficiale N26. Questo articolo contiene link di affiliazione.
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="px-6 md:px-12 py-16 border-t border-white/10">
          <div className="max-w-4xl">
            <div className="section-title">Domande Frequenti</div>
            <h2 className="text-3xl font-black mb-8">FAQ SU N26 INVITA UN AMICO</h2>
            <div className="space-y-4">
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Quanto bonus ricevo con N26 Invita un Amico?</h3>
                <p className="text-[#999]">
                  Ricevi 5€ in contanti per ogni amico che si registra con il tuo codice e completa
                  una transazione di almeno 5€.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Quanto tempo ci vuole per ricevere il bonus?</h3>
                <p className="text-[#999]">
                  Il bonus viene solitamente accreditato in 2-3 giorni lavorativi dopo la transazione
                  qualificante. In alcuni casi possono volerci fino a 60 giorni.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Quali transazioni sono valide per il bonus?</h3>
                <p className="text-[#999]">
                  Sono validi gli acquisti in negozio, online (es. Amazon) o pagamenti con Apple/Google Pay.
                  NON sono validi: prelievi ATM, ricariche a conti/carte, trasferimenti.
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <h3 className="font-bold text-white mb-2">Il codice robertap0893 e ancora valido?</h3>
                <p className="text-[#999]">
                  Si, il codice robertap0893 e attualmente attivo. Usalo durante la registrazione
                  per ottenere il bonus di 5€.
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
              <a href="/codice-amico-ing/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">ING</a>
              <a href="/codice-amico-revolut/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">Revolut</a>
              <a href="/codice-amico-bbva/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">BBVA</a>
              <a href="/codice-amico-satispay/" className="px-4 py-2 border border-white/20 text-[#999] hover:border-[#FAFF00] hover:text-[#FAFF00] transition-all">Satispay</a>
              <a href="/categoria/banche/" className="px-4 py-2 bg-[#FAFF00] text-[#111] font-bold">VEDI TUTTI →</a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
